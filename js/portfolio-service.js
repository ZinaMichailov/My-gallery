'use strict';

var gPortfolios = [
    {
        id: 'minesweeper', 
        name: 'Minesweeper', 
        title: 'Minesweeper with features', 
        desc: `The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without
             detonating any of them, with help from clues about the number of neighboring mines in each field.`, 
        url: 'https://zinamichailov.github.io/Minesweeper/',
        publishedAt: '20/01/2021', 
        labels: ['Game', 'keyboard events'],
    },    
    {
        id: 'pacman', 
        name: 'Pacman', 
        title: 'Pacman game js', 
        desc: `Pac-Man is a maze chase game. The objective of the game is to eat all of the dots placed in the
             maze while avoiding four colored ghosts that pursue him`, 
        url: '#',
        publishedAt: '19/01/2021', 
        labels: ['Game', 'keyboard events'],
    }    
];

function getPortfolioById(id) {
    return gPortfolios.find(function (portfolio) {
        return id === portfolio.id;
    });
}

function getPortfolios() {
    return gPortfolios;
}

