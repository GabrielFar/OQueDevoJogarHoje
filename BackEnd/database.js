let jogos = [
	   //1. AÇÃO E AVENTURA

    {
        id: 1,
        nome: "God of War Ragnarök",
        genero: "acao",
        plataformas: ["ps4", "ps5", "pc"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/library_600x900.jpg"
    },
    {
        id: 2,
        nome: "The Last of Us Part I",
        genero: "acao",
        plataformas: ["ps5", "pc"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/library_600x900.jpg"
    },
    {
        id: 3,
        nome: "Red Dead Redemption 2",
        genero: "acao",
        plataformas: ["ps4", "ps5", "xbox", "pc"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg"
    },
    {
        id: 4,
        nome: "GTA V",
        genero: "acao",
        plataformas: ["ps4", "ps5", "xbox", "pc"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900.jpg"
    },
    {
        id: 5,
        nome: "Uncharted: Legacy of Thieves",
        genero: "acao",
        plataformas: ["ps4", "ps5", "pc"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/library_600x900.jpg"
    },

    // 2. RPG

    {
        id: 6,
        nome: "The Witcher 3",
        genero: "rpg",
        plataformas: ["ps4", "ps5", "xbox", "pc", "switch"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/library_600x900.jpg"
    },
    {
        id: 7,
        nome: "Elden Ring",
        genero: "rpg",
        plataformas: ["ps4", "ps5", "xbox", "pc"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/library_600x900.jpg"
    },
    {
        id: 8,
        nome: "Baldur's Gate 3",
        genero: "rpg",
        plataformas: ["ps5", "xbox", "pc"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/library_600x900.jpg"
    },
    {
        id: 9,
        nome: "Cyberpunk 2077",
        genero: "rpg",
        plataformas: ["ps4", "ps5", "xbox", "pc"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900.jpg"
    },
    {
        id: 10,
        nome: "Skyrim Special Edition",
        genero: "rpg",
        plataformas: ["ps4", "ps5", "xbox", "pc", "switch"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/library_600x900.jpg"
    },

    // 3. FPS (TIRO)

    {
        id: 11,
        nome: "Doom Eternal",
        genero: "fps",
        plataformas: ["ps4", "ps5", "xbox", "pc", "switch"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/library_600x900.jpg"
    },
    {
        id: 12,
        nome: "Valorant",
        genero: "fps",
        plataformas: ["pc"],
        tempo: "curto",
        imagem: "imagens/valorant.jpg"
    },
    {
        id: 13,
        nome: "Call of Duty: MW3",
        genero: "fps",
        plataformas: ["ps4", "ps5", "xbox", "pc"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2519060/library_600x900.jpg"
    },
    {
        id: 14,
        nome: "Overwatch 2",
        genero: "fps",
        plataformas: ["ps4", "ps5", "xbox", "pc", "switch"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2357570/library_600x900.jpg"
    },
    {
        id: 15,
        nome: "Counter-Strike 2",
        genero: "fps",
        plataformas: ["pc"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/library_600x900.jpg"
    },

    // 4. HORROR

    {
        id: 16,
        nome: "Resident Evil 4 Remake",
        genero: "horror",
        plataformas: ["ps4", "ps5", "xbox", "pc"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/library_600x900.jpg"
    },
    {
        id: 17,
        nome: "Silent Hill 2 Remake",
        genero: "horror",
        plataformas: ["ps5", "pc"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2124490/library_600x900.jpg"
    },
    {
        id: 18,
        nome: "Phasmophobia",
        genero: "horror",
        plataformas: ["pc", "ps5", "xbox"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/library_600x900.jpg"
    },
    {
        id: 19,
        nome: "Dead Space Remake",
        genero: "horror",
        plataformas: ["ps5", "xbox", "pc"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1693980/library_600x900.jpg"
    },
    {
        id: 20,
        nome: "Alien: Isolation",
        genero: "horror",
        plataformas: ["ps4", "ps5", "xbox", "pc", "switch"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/library_600x900.jpg"
    },

    // 5. ESTRATÉGIA

    {
        id: 21,
        nome: "Civilization VI",
        genero: "estrategia",
        plataformas: ["pc", "ps4", "xbox", "switch", "mobile"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/library_600x900.jpg"
    },
    {
        id: 22,
        nome: "League of Legends",
        genero: "estrategia",
        plataformas: ["pc"],
        tempo: "curto",
        imagem: "imagens/league_of_legends.jpg"
    },
    {
        id: 23,
        nome: "Age of Empires IV",
        genero: "estrategia",
        plataformas: ["pc", "xbox"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1466860/library_600x900.jpg"
    },
    {
        id: 24,
        nome: "XCOM 2",
        genero: "estrategia",
        plataformas: ["pc", "ps4", "xbox", "switch"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268500/library_600x900.jpg"
    },
    {
        id: 25,
        nome: "Teamfight Tactics",
        genero: "estrategia",
        plataformas: ["pc", "mobile"],
        tempo: "curto",
        imagem:"imagens/teamfight_tactics.jpg"
    },

    // 6. SIMULAÇÃO

    {
        id: 26,
        nome: "The Sims 4",
        genero: "simulacao",
        plataformas: ["pc", "ps4", "ps5", "xbox"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/library_600x900.jpg"
    },
    {
        id: 27,
        nome: "Stardew Valley",
        genero: "simulacao",
        plataformas: ["pc", "ps4", "xbox", "switch", "mobile"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/library_600x900.jpg"
    },
    {
        id: 28,
        nome: "Cities: Skylines",
        genero: "simulacao",
        plataformas: ["pc", "ps4", "ps5", "xbox", "switch"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/library_600x900.jpg"
    },
    {
        id: 29,
        nome: "Euro Truck Simulator 2",
        genero: "simulacao",
        plataformas: ["pc"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/library_600x900.jpg"
    },
    {
        id: 30,
        nome: "Animal Crossing: New Horizons",
        genero: "simulacao",
        plataformas: ["switch"],
        tempo: "longo",
        imagem: "imagens/animal_crossing_new_horizons.jpg"
    },

    // 7. ESPORTE / CORRIDA

    {
        id: 31,
        nome: "EA Sports FC 24",
        genero: "esporte",
        plataformas: ["pc", "ps4", "ps5", "xbox", "switch"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/library_600x900.jpg"
    },
    {
        id: 32,
        nome: "Forza Horizon 5",
        genero: "esporte",
        plataformas: ["pc", "xbox"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900.jpg"
    },
    {
        id: 33,
        nome: "Mario Kart 8 Deluxe",
        genero: "esporte",
        plataformas: ["switch"],
        tempo: "curto",
        imagem: "imagens/mario_kart_8_deluxe.jpg"
    },
    {
        id: 34,
        nome: "Rocket League",
        genero: "esporte",
        plataformas: ["pc", "ps4", "ps5", "xbox", "switch"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/library_600x900.jpg"
    },
    {
        id: 35,
        nome: "Gran Turismo 7",
        genero: "esporte",
        plataformas: ["ps4", "ps5"],
        tempo: "longo",
        imagem: "imagens/gran_turismo_7.jpg"
    },

    // 8. LUTA

    {
        id: 36,
        nome: "Street Fighter 6",
        genero: "luta",
        plataformas: ["pc", "ps4", "ps5", "xbox"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/library_600x900.jpg"
    },
    {
        id: 37,
        nome: "Mortal Kombat 1",
        genero: "luta",
        plataformas: ["pc", "ps5", "xbox", "switch"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/library_600x900.jpg"
    },
    {
        id: 38,
        nome: "Tekken 8",
        genero: "luta",
        plataformas: ["pc", "ps5", "xbox"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/library_600x900.jpg"
    },
    {
        id: 39,
        nome: "Super Smash Bros. Ultimate",
        genero: "luta",
        plataformas: ["switch"],
        tempo: "curto",
        imagem: "imagens/super_smash_bros_ultimate.jpg"
    },
    {
        id: 40,
        nome: "Dragon Ball FighterZ",
        genero: "luta",
        plataformas: ["pc", "ps4", "xbox", "switch"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/678950/library_600x900.jpg"
    },

    // 9. PUZZLE

    {
        id: 41,
        nome: "Portal 2",
        genero: "puzzle",
        plataformas: ["pc", "xbox", "switch"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/library_600x900.jpg"
    },
    {
        id: 42,
        nome: "Tetris Effect: Connected",
        genero: "puzzle",
        plataformas: ["pc", "ps4", "xbox", "switch"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1003590/library_600x900.jpg"
    },
    {
        id: 43,
        nome: "It Takes Two",
        genero: "puzzle",
        plataformas: ["pc", "ps4", "ps5", "xbox", "switch"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/library_600x900.jpg"
    },
    {
        id: 44,
        nome: "The Witness",
        genero: "puzzle",
        plataformas: ["pc", "ps4", "xbox", "mobile"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/210970/library_600x900.jpg"
    },
    {
        id: 45,
        nome: "Baba Is You",
        genero: "puzzle",
        plataformas: ["pc", "switch", "mobile"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/736260/library_600x900.jpg"
    },

    // 10. METROIDVANIA / PLATAFORMA

    {
        id: 46,
        nome: "Hollow Knight",
        genero: "plataforma",
        plataformas: ["pc", "ps4", "xbox", "switch"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/library_600x900.jpg"
    },
    {
        id: 47,
        nome: "Ori and the Will of the Wisps",
        genero: "plataforma",
        plataformas: ["pc", "xbox", "switch"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/library_600x900.jpg"
    },
    {
        id: 48,
        nome: "Celeste",
        genero: "plataforma",
        plataformas: ["pc", "ps4", "xbox", "switch"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/library_600x900.jpg"
    },
    {
        id: 49,
        nome: "Super Mario Odyssey",
        genero: "plataforma",
        plataformas: ["switch"],
        tempo: "medio",
        imagem: "/imagens/super_mario_odyssey.jpg"
    },
    {
        id: 50,
        nome: "Dead Cells",
        genero: "plataforma",
        plataformas: ["pc", "ps4", "xbox", "switch", "mobile"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/library_600x900.jpg"
    }
];

module.exports = { jogos };
