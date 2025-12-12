let jogos = [
       //1. AÇÃO E AVENTURA

    {
        id: 1,
        nome: "God of War Ragnarök",
        generoId: 1,
        plataformasId: [2, 3, 1],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/library_600x900.jpg"
    },
    {
        id: 2,
        nome: "The Last of Us Part I",
        generoId: 1,
        plataformasId: [3, 1],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/library_600x900.jpg"
    },
    {
        id: 3,
        nome: "Red Dead Redemption 2",
        generoId: 1,
        plataformasId: [2, 3, 4, 1],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg"
    },
    {
        id: 4,
        nome: "GTA V",
        generoId: 1,
        plataformasId: [2, 3, 4, 1],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900.jpg"
    },
    {
        id: 5,
        nome: "Uncharted: Legacy of Thieves",
        generoId: 1,
        plataformasId: [2, 3, 1],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/library_600x900.jpg"
    },

    // 2. RPG

    {
        id: 6,
        nome: "The Witcher 3",
        generoId: 2,
        plataformasId: [2, 3, 4, 1, 5],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/library_600x900.jpg"
    },
    {
        id: 7,
        nome: "Elden Ring",
        generoId: 2,
        plataformasId: [2, 3, 4, 1],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/library_600x900.jpg"
    },
    {
        id: 8,
        nome: "Baldur's Gate 3",
        generoId: 2,
        plataformasId: [3, 4, 1],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/library_600x900.jpg"
    },
    {
        id: 9,
        nome: "Cyberpunk 2077",
        generoId: 2,
        plataformasId: [2, 3, 4, 1],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900.jpg"
    },
    {
        id: 10,
        nome: "Skyrim Special Edition",
        generoId: 2,
        plataformasId: [2, 3, 4, 1, 5],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/library_600x900.jpg"
    },

    // 3. FPS (TIRO)

    {
        id: 11,
        nome: "Doom Eternal",
        generoId: 3,
        plataformasId: [2, 3, 4, 1, 5],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/library_600x900.jpg"
    },
    {
        id: 12,
        nome: "Valorant",
        generoId: 3,
        plataformasId: [1],
        tempo: "curto",
        imagem: "imagens/valorant.jpg"
    },
    {
        id: 13,
        nome: "Call of Duty: MW3",
        generoId: 3,
        plataformasId: [2, 3, 4, 1],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2519060/library_600x900.jpg"
    },
    {
        id: 14,
        nome: "Overwatch 2",
        generoId: 3,
        plataformasId: [2, 3, 4, 1, 5],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2357570/library_600x900.jpg"
    },
    {
        id: 15,
        nome: "Counter-Strike 2",
        generoId: 3,
        plataformasId: [1],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/library_600x900.jpg"
    },

    // 4. HORROR

    {
        id: 16,
        nome: "Resident Evil 4 Remake",
        generoId: 4,
        plataformasId: [2, 3, 4, 1],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/library_600x900.jpg"
    },
    {
        id: 17,
        nome: "Silent Hill 2 Remake",
        generoId: 4,
        plataformasId: [3, 1],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2124490/library_600x900.jpg"
    },
    {
        id: 18,
        nome: "Phasmophobia",
        generoId: 4,
        plataformasId: [1, 3, 4],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/library_600x900.jpg"
    },
    {
        id: 19,
        nome: "Dead Space Remake",
        generoId: 4,
        plataformasId: [3, 4, 1],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1693980/library_600x900.jpg"
    },
    {
        id: 20,
        nome: "Alien: Isolation",
        generoId: 4,
        plataformasId: [2, 3, 4, 1, 5],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/library_600x900.jpg"
    },

    // 5. ESTRATÉGIA

    {
        id: 21,
        nome: "Civilization VI",
        generoId: 5,
        plataformasId: [1, 2, 4, 5, 6],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/library_600x900.jpg"
    },
    {
        id: 22,
        nome: "League of Legends",
        generoId: 5,
        plataformasId: [1],
        tempo: "curto",
        imagem: "imagens/league_of_legends.jpg"
    },
    {
        id: 23,
        nome: "Age of Empires IV",
        generoId: 5,
        plataformasId: [1, 4],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1466860/library_600x900.jpg"
    },
    {
        id: 24,
        nome: "XCOM 2",
        generoId: 5,
        plataformasId: [1, 2, 4, 5],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268500/library_600x900.jpg"
    },
    {
        id: 25,
        nome: "Teamfight Tactics",
        generoId: 5,
        plataformasId: [1, 6],
        tempo: "curto",
        imagem:"imagens/teamfight_tactics.jpg"
    },

    // 6. SIMULAÇÃO

    {
        id: 26,
        nome: "The Sims 4",
        generoId: 6,
        plataformasId: [1, 2, 3, 4],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/library_600x900.jpg"
    },
    {
        id: 27,
        nome: "Stardew Valley",
        generoId: 6,
        plataformasId: [1, 2, 4, 5, 6],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/library_600x900.jpg"
    },
    {
        id: 28,
        nome: "Cities: Skylines",
        generoId: 6,
        plataformasId: [1, 2, 3, 4, 5],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/library_600x900.jpg"
    },
    {
        id: 29,
        nome: "Euro Truck Simulator 2",
        generoId: 6,
        plataformasId: [1],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/library_600x900.jpg"
    },
    {
        id: 30,
        nome: "Animal Crossing: New Horizons",
        generoId: 6,
        plataformasId: [5],
        tempo: "longo",
        imagem: "imagens/animal_crossing_new_horizons.jpg"
    },

    // 7. ESPORTE / CORRIDA

    {
        id: 31,
        nome: "EA Sports FC 24",
        generoId: 7,
        plataformasId: [1, 2, 3, 4, 5],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/library_600x900.jpg"
    },
    {
        id: 32,
        nome: "Forza Horizon 5",
        generoId: 7,
        plataformasId: [1, 4],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900.jpg"
    },
    {
        id: 33,
        nome: "Mario Kart 8 Deluxe",
        generoId: 7,
        plataformasId: [5],
        tempo: "curto",
        imagem: "imagens/mario_kart_8_deluxe.jpg"
    },
    {
        id: 34,
        nome: "Rocket League",
        generoId: 7,
        plataformasId: [1, 2, 3, 4, 5],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/library_600x900.jpg"
    },
    {
        id: 35,
        nome: "Gran Turismo 7",
        generoId: 7,
        plataformasId: [2, 3],
        tempo: "longo",
        imagem: "imagens/gran_turismo_7.jpg"
    },

    // 8. LUTA

    {
        id: 36,
        nome: "Street Fighter 6",
        generoId: 8,
        plataformasId: [1, 2, 3, 4],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/library_600x900.jpg"
    },
    {
        id: 37,
        nome: "Mortal Kombat 1",
        generoId: 8,
        plataformasId: [1, 3, 4, 5],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/library_600x900.jpg"
    },
    {
        id: 38,
        nome: "Tekken 8",
        generoId: 8,
        plataformasId: [1, 3, 4],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/library_600x900.jpg"
    },
    {
        id: 39,
        nome: "Super Smash Bros. Ultimate",
        generoId: 8,
        plataformasId: [5],
        tempo: "curto",
        imagem: "imagens/super_smash_bros_ultimate.jpg"
    },
    {
        id: 40,
        nome: "Dragon Ball FighterZ",
        generoId: 8,
        plataformasId: [1, 2, 4, 5],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/678950/library_600x900.jpg"
    },

    // 9. PUZZLE

    {
        id: 41,
        nome: "Portal 2",
        generoId: 9,
        plataformasId: [1, 4, 5],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/library_600x900.jpg"
    },
    {
        id: 42,
        nome: "Tetris Effect: Connected",
        generoId: 9,
        plataformasId: [1, 2, 4, 5],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1003590/library_600x900.jpg"
    },
    {
        id: 43,
        nome: "It Takes Two",
        generoId: 9,
        plataformasId: [1, 2, 3, 4, 5],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/library_600x900.jpg"
    },
    {
        id: 44,
        nome: "The Witness",
        generoId: 9,
        plataformasId: [1, 2, 4, 6],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/210970/library_600x900.jpg"
    },
    {
        id: 45,
        nome: "Baba Is You",
        generoId: 9,
        plataformasId: [1, 5, 6],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/736260/library_600x900.jpg"
    },

    // 10. METROIDVANIA / PLATAFORMA

    {
        id: 46,
        nome: "Hollow Knight",
        generoId: 10,
        plataformasId: [1, 2, 4, 5],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/library_600x900.jpg"
    },
    {
        id: 47,
        nome: "Ori and the Will of the Wisps",
        generoId: 10,
        plataformasId: [1, 4, 5],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/library_600x900.jpg"
    },
    {
        id: 48,
        nome: "Celeste",
        generoId: 10,
        plataformasId: [1, 2, 4, 5],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/library_600x900.jpg"
    },
    {
        id: 49,
        nome: "Super Mario Odyssey",
        generoId: 10,
        plataformasId: [5],
        tempo: "medio",
        imagem: "/imagens/super_mario_odyssey.jpg"
    },
    {
        id: 50,
        nome: "Dead Cells",
        generoId: 10,
        plataformasId: [1, 2, 4, 5, 6],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/library_600x900.jpg"
    }
];

let generos = [
    { id: 1, nome: "Ação e Aventura" },
    { id: 2, nome: "RPG" },
    { id: 3, nome: "FPS" },
    { id: 4, nome: "Horror" },
    { id: 5, nome: "Estratégia" },
    { id: 6, nome: "Simulação" },
    { id: 7, nome: "Esporte e Corrida" },
    { id: 8, nome: "Luta" },
    { id: 9, nome: "Puzzle" },
    { id: 10, nome: "Plataforma" }
];

let plataformas = [
    { id: 1, nome: "PC" },
    { id: 2, nome: "PlayStation 4" },
    { id: 3, nome: "PlayStation 5" },
    { id: 4, nome: "Xbox Series X/S" },
    { id: 5, nome: "Nintendo Switch" },
    { id: 6, nome: "Mobile" }
];

let permissoes = [
    { id: 1, descricao: "ADMIN" },
    { id: 2, descricao: "COMUM" }
];

let usuarios = [
    {
        email: "admin@playtoday.com",
        nome: "Administrador",
        senha: "123456"
    },
    {
        email: "user@playtoday.com",
        nome: "Usuário Comum",
        senha: "123456"
    }
];

let usuario_permissao = [
    { email: "admin@playtoday.com", id_permissao: 1 },
    { email: "user@playtoday.com", id_permissao: 2 }
];
module.exports = {
    jogos,
    generos,
    plataformas,
    usuarios,
    permissoes,
    usuario_permissao
};