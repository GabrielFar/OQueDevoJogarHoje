let jogos = [
	   //1. AÇÃO E AVENTURA

    {
        id: 1,
        nome: "God of War Ragnarök",
        generoId: "acao",
        plataformasId: ["ps4", "ps5", "pc"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/library_600x900.jpg"
    },
    {
        id: 2,
        nome: "The Last of Us Part I",
        generoId: "acao",
        plataformasId: ["ps5", "pc"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/library_600x900.jpg"
    },
    {
        id: 3,
        nome: "Red Dead Redemption 2",
        generoId: "acao",
        plataformasId: ["ps4", "ps5", "xbox", "pc"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg"
    },
    {
        id: 4,
        nome: "GTA V",
        generoId: "acao",
        plataformasId: ["ps4", "ps5", "xbox", "pc"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900.jpg"
    },
    {
        id: 5,
        nome: "Uncharted: Legacy of Thieves",
        generoId: "acao",
        plataformasId: ["ps4", "ps5", "pc"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/library_600x900.jpg"
    },

    // 2. RPG

    {
        id: 6,
        nome: "The Witcher 3",
        generoId: "rpg",
        plataformasId: ["ps4", "ps5", "xbox", "pc", "switch"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/library_600x900.jpg"
    },
    {
        id: 7,
        nome: "Elden Ring",
        generoId: "rpg",
        plataformasId: ["ps4", "ps5", "xbox", "pc"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/library_600x900.jpg"
    },
    {
        id: 8,
        nome: "Baldur's Gate 3",
        generoId: "rpg",
        plataformasId: ["ps5", "xbox", "pc"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/library_600x900.jpg"
    },
    {
        id: 9,
        nome: "Cyberpunk 2077",
        generoId: "rpg",
        plataformasId: ["ps4", "ps5", "xbox", "pc"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900.jpg"
    },
    {
        id: 10,
        nome: "Skyrim Special Edition",
        generoId: "rpg",
        plataformasId: ["ps4", "ps5", "xbox", "pc", "switch"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/library_600x900.jpg"
    },

    // 3. FPS (TIRO)

    {
        id: 11,
        nome: "Doom Eternal",
        generoId: "fps",
        plataformasId: ["ps4", "ps5", "xbox", "pc", "switch"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/library_600x900.jpg"
    },
    {
        id: 12,
        nome: "Valorant",
        generoId: "fps",
        plataformasId: ["pc"],
        tempo: "curto",
        imagem: "https://upload.wikimedia.org/wikipedia/en/f/f6/Valorant_cover_art.jpg"
    },
    {
        id: 13,
        nome: "Call of Duty: MW3",
        generoId: "fps",
        plataformasId: ["ps4", "ps5", "xbox", "pc"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2519060/library_600x900.jpg"
    },
    {
        id: 14,
        nome: "Overwatch 2",
        generoId: "fps",
        plataformasId: ["ps4", "ps5", "xbox", "pc", "switch"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2357570/library_600x900.jpg"
    },
    {
        id: 15,
        nome: "Counter-Strike 2",
        generoId: "fps",
        plataformasId: ["pc"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/library_600x900.jpg"
    },

    // 4. HORROR

    {
        id: 16,
        nome: "Resident Evil 4 Remake",
        generoId: "horror",
        plataformasId: ["ps4", "ps5", "xbox", "pc"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/library_600x900.jpg"
    },
    {
        id: 17,
        nome: "Silent Hill 2 Remake",
        generoId: "horror",
        plataformasId: ["ps5", "pc"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2124490/library_600x900.jpg"
    },
    {
        id: 18,
        nome: "Phasmophobia",
        generoId: "horror",
        plataformasId: ["pc", "ps5", "xbox"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/library_600x900.jpg"
    },
    {
        id: 19,
        nome: "Dead Space Remake",
        generoId: "horror",
        plataformasId: ["ps5", "xbox", "pc"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1693980/library_600x900.jpg"
    },
    {
        id: 20,
        nome: "Alien: Isolation",
        generoId: "horror",
        plataformasId: ["ps4", "ps5", "xbox", "pc", "switch"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/library_600x900.jpg"
    },

    // 5. ESTRATÉGIA

    {
        id: 21,
        nome: "Civilization VI",
        generoId: "estrategia",
        plataformasId: ["pc", "ps4", "xbox", "switch", "mobile"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/library_600x900.jpg"
    },
    {
        id: 22,
        nome: "League of Legends",
        generoId: "estrategia",
        plataformasId: ["pc"],
        tempo: "curto",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/600px-League_of_Legends_2019_vector.svg.png"
    },
    {
        id: 23,
        nome: "Age of Empires IV",
        generoId: "estrategia",
        plataformasId: ["pc", "xbox"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1466860/library_600x900.jpg"
    },
    {
        id: 24,
        nome: "XCOM 2",
        generoId: "estrategia",
        plataformasId: ["pc", "ps4", "xbox", "switch"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268500/library_600x900.jpg"
    },
    {
        id: 25,
        nome: "Teamfight Tactics",
        generoId: "estrategia",
        plataformasId: ["pc", "mobile"],
        tempo: "curto",
        imagem: "https://upload.wikimedia.org/wikipedia/en/6/6f/Teamfight_Tactics_logo.png"
    },

    // 6. SIMULAÇÃO

    {
        id: 26,
        nome: "The Sims 4",
        generoId: "simulacao",
        plataformasId: ["pc", "ps4", "ps5", "xbox"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/library_600x900.jpg"
    },
    {
        id: 27,
        nome: "Stardew Valley",
        generoId: "simulacao",
        plataformasId: ["pc", "ps4", "xbox", "switch", "mobile"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/library_600x900.jpg"
    },
    {
        id: 28,
        nome: "Cities: Skylines",
        generoId: "simulacao",
        plataformasId: ["pc", "ps4", "ps5", "xbox", "switch"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/library_600x900.jpg"
    },
    {
        id: 29,
        nome: "Euro Truck Simulator 2",
        generoId: "simulacao",
        plataformasId: ["pc"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/library_600x900.jpg"
    },
    {
        id: 30,
        nome: "Animal Crossing: New Horizons",
        generoId: "simulacao",
        plataformasId: ["switch"],
        tempo: "longo",
        imagem: "https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg"
    },

    // 7. ESPORTE / CORRIDA

    {
        id: 31,
        nome: "EA Sports FC 24",
        generoId: "esporte",
        plataformasId: ["pc", "ps4", "ps5", "xbox", "switch"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/library_600x900.jpg"
    },
    {
        id: 32,
        nome: "Forza Horizon 5",
        generoId: "esporte",
        plataformasId: ["pc", "xbox"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900.jpg"
    },
    {
        id: 33,
        nome: "Mario Kart 8 Deluxe",
        generoId: "esporte",
        plataformasId: ["switch"],
        tempo: "curto",
        imagem: "https://upload.wikimedia.org/wikipedia/en/b/b5/Mario_Kart_8_Deluxe.jpg"
    },
    {
        id: 34,
        nome: "Rocket League",
        generoId: "esporte",
        plataformasId: ["pc", "ps4", "ps5", "xbox", "switch"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/library_600x900.jpg"
    },
    {
        id: 35,
        nome: "Gran Turismo 7",
        generoId: "esporte",
        plataformasId: ["ps4", "ps5"],
        tempo: "longo",
        imagem: "https://upload.wikimedia.org/wikipedia/en/1/1a/Gran_Turismo_7_cover_art.jpg"
    },

    // 8. LUTA

    {
        id: 36,
        nome: "Street Fighter 6",
        generoId: "luta",
        plataformasId: ["pc", "ps4", "ps5", "xbox"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/library_600x900.jpg"
    },
    {
        id: 37,
        nome: "Mortal Kombat 1",
        generoId: "luta",
        plataformasId: ["pc", "ps5", "xbox", "switch"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/library_600x900.jpg"
    },
    {
        id: 38,
        nome: "Tekken 8",
        generoId: "luta",
        plataformasId: ["pc", "ps5", "xbox"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/library_600x900.jpg"
    },
    {
        id: 39,
        nome: "Super Smash Bros. Ultimate",
        generoId: "luta",
        plataformasId: ["switch"],
        tempo: "curto",
        imagem: "https://upload.wikimedia.org/wikipedia/en/5/50/Super_Smash_Bros._Ultimate.jpg"
    },
    {
        id: 40,
        nome: "Dragon Ball FighterZ",
        generoId: "luta",
        plataformasId: ["pc", "ps4", "xbox", "switch"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/678950/library_600x900.jpg"
    },

    // 9. PUZZLE

    {
        id: 41,
        nome: "Portal 2",
        generoId: "puzzle",
        plataformasId: ["pc", "xbox", "switch"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/library_600x900.jpg"
    },
    {
        id: 42,
        nome: "Tetris Effect: Connected",
        generoId: "puzzle",
        plataformasId: ["pc", "ps4", "xbox", "switch"],
        tempo: "curto",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1003590/library_600x900.jpg"
    },
    {
        id: 43,
        nome: "It Takes Two",
        generoId: "puzzle",
        plataformasId: ["pc", "ps4", "ps5", "xbox", "switch"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/library_600x900.jpg"
    },
    {
        id: 44,
        nome: "The Witness",
        generoId: "puzzle",
        plataformasId: ["pc", "ps4", "xbox", "mobile"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/210970/library_600x900.jpg"
    },
    {
        id: 45,
        nome: "Baba Is You",
        generoId: "puzzle",
        plataformasId: ["pc", "switch", "mobile"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/736260/library_600x900.jpg"
    },

    // 10. METROIDVANIA / PLATAFORMA

    {
        id: 46,
        nome: "Hollow Knight",
        generoId: "plataforma",
        plataformasId: ["pc", "ps4", "xbox", "switch"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/library_600x900.jpg"
    },
    {
        id: 47,
        nome: "Ori and the Will of the Wisps",
        generoId: "plataforma",
        plataformasId: ["pc", "xbox", "switch"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/library_600x900.jpg"
    },
    {
        id: 48,
        nome: "Celeste",
        generoId: "plataforma",
        plataformasId: ["pc", "ps4", "xbox", "switch"],
        tempo: "medio",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/library_600x900.jpg"
    },
    {
        id: 49,
        nome: "Super Mario Odyssey",
        generoId: "plataforma",
        plataformasId: ["switch"],
        tempo: "medio",
        imagem: "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg"
    },
    {
        id: 50,
        nome: "Dead Cells",
        generoId: "plataforma",
        plataformasId: ["pc", "ps4", "xbox", "switch", "mobile"],
        tempo: "longo",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/library_600x900.jpg"
    }
];

module.exports = { jogos };
