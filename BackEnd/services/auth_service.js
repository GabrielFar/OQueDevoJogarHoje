const passport = require("passport");
const LocalStrategy = require("passport-local");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../database"); 

const configureLocalStrategy = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      async (username, password, done) => {
        try {
          const user = db.usuarios.find((u) => u.email === username);

          if (!user) {
            return done(null, false, { message: "Usuário incorreto." });
          }
          
          let passwordMatch = false;
          if (user.senha.startsWith("$2")) {
            passwordMatch = await bcrypt.compare(password, user.senha);
          } else {
            passwordMatch = (password === user.senha);
          }

          if (passwordMatch) {
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
          const user = db.usuarios.find((u) => u.email === payload.username);

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

const gerarToken = (username) => {
  return jwt.sign({ username: username }, "OQueDevoJogarHoje2025", {
    expiresIn: "1h",
  });
};

const requireJWTAuth = passport.authenticate("jwt", { session: false });

const verificarPermissaoPorDescricao = (email, descricaoPermissao) => {
  const permissao = db.permissoes.find((p) => p.descricao === descricaoPermissao);

  if (!permissao) return false;

  const temPermissao = db.usuario_permissao.find(
    (up) => up.email === email && up.id_permissao === permissao.id
  );

  return !!temPermissao;
};

const verificarPermissaoMiddleware = (descricaoPermissao) => {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Usuário não autenticado." });
      }

      const email = req.user.email;
      const temPermissao = verificarPermissaoPorDescricao(email, descricaoPermissao);

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
        const temPermissao = verificarPermissaoPorDescricao(email, descricaoPermissao);

        if (!temPermissao) {
          return res.status(403).json({
            message: `Acesso negado. Permissão necessária: ${descricaoPermissao}`,
          });
        }

        next();
      } catch (error) {
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

module.exports = {
  configureLocalStrategy,
  configureJwtStrategy,
  configureSerialization,
  gerarToken,
  requireJWTAuth,
  verificarPermissaoMiddleware,
  requirePermissao,
  login,
  logout
};