const passport = require("passport");
const LocalStrategy = require("passport-local");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const usuarioRepository = require("../repositories/usuario-repository");
const permissaoRepository = require("../repositories/permissao-repository");
const usuarioPermissaoRepository = require("../repositories/usuario_permissao-repository");

const configureLocalStrategy = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      async (username, password, done) => {
        try {
          const user = await usuarioRepository.obterUsuarioPorEmail(username);

          if (!user) {
            return done(null, false, { message: "Usuário incorreto." });
          }

          const passwordMatch = await bcrypt.compare(password, user.senha);

          if (passwordMatch) {
            console.log("Usuário autenticado!");
            return done(null, user);
          } else {
            return done(null, false, { message: "Senha incorreta." });
          }
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};

const configureJwtStrategy = () => {
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: "OQueDevoJogarHoje2025",
      },
      async (payload, done) => {
        try {
          const user = await usuarioRepository.obterUsuarioPorEmail(payload.username);

          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        } catch (error) {
          done(error, false);
        }
      }
    )
  );
};

const configureSerialization = () => {
  passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, {
        email: user.email,
        username: user.email,
      });
    });
  });

  passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, user);
    });
  });
};

const criarNovoUsuario = async (userData) => {
  const saltRounds = 10;
  const { username, passwd, nome } = userData;
  const userEmail = username;
  const userName = nome || userEmail;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPasswd = bcrypt.hashSync(passwd, salt);

  await usuarioRepository.criarUsuario({
    email: userEmail,
    nome: userName,
    senha: hashedPasswd,
  });

  return { email: userEmail, nome: userName };
};

const gerarToken = (username) => {
  return jwt.sign({ username: username }, "OQueDevoJogarHoje2025", {
    expiresIn: "1h",
  });
};

const requireJWTAuth = passport.authenticate("jwt", { session: false });

const verificarPermissaoPorDescricao = async (email, descricaoPermissao) => {
  try {
    const permissao = await permissaoRepository.obterPermissaoPorDescricao(descricaoPermissao);

    if (!permissao) {
      return false;
    }

    const temPermissao = await usuarioPermissaoRepository.verificarPermissaoUsuario(
      email,
      permissao.id
    );

    return temPermissao;
  } catch (error) {
    console.error("Erro ao verificar permissão:", error);
    return false;
  }
};

const obterPermissoesUsuario = async (email) => {
  try {
    const permissoes = await usuarioPermissaoRepository.obterPermissoesPorUsuario(email);
    return permissoes;
  } catch (error) {
    console.error("Erro ao obter permissões do usuário:", error);
    return [];
  }
};

const verificarPermissaoMiddleware = (descricaoPermissao) => {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Usuário não autenticado." });
      }

      const email = req.user.email;
      const temPermissao = await verificarPermissaoPorDescricao(
        email,
        descricaoPermissao
      );

      if (!temPermissao) {
        return res.status(403).json({
          message: `Acesso negado. Permissão necessária: ${descricaoPermissao}`,
        });
      }

      next();
    } catch (error) {
      console.error("Erro ao verificar permissão:", error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  };
};

const requirePermissao = (descricaoPermissao) => {
  return [
    requireJWTAuth,
    async (req, res, next) => {
      try {
        if (!req.user) {
          return res.status(401).json({ message: "Usuário não autenticado." });
        }

        const email = req.user.email;
        const temPermissao = await verificarPermissaoPorDescricao(
          email,
          descricaoPermissao
        );

        if (!temPermissao) {
          return res.status(403).json({
            message: `Acesso negado. Permissão necessária: ${descricaoPermissao}`,
          });
        }

        next();
      } catch (error) {
        console.error("Erro ao verificar permissão:", error);
        return res.status(500).json({ message: "Erro interno do servidor." });
      }
    },
  ];
};

const login = (req, res) => {
  const token = gerarToken(req.body.username);
  res.json({ message: "Login successful", token: token });
};

const logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

const cadastraUsuario = async (req, res) => {
  try {
    await criarNovoUsuario({
      username: req.body.username,
      passwd: req.body.passwd,
      nome: req.body.nome,
    });
    console.log("Usuário inserido");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = {
  configureLocalStrategy,
  configureJwtStrategy,
  configureSerialization,
  criarNovoUsuario,
  gerarToken,
  requireJWTAuth,
  verificarPermissaoPorDescricao,
  obterPermissoesUsuario,
  verificarPermissaoMiddleware,
  requirePermissao,
  login,
  logout,
  cadastraUsuario,
};