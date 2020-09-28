"use strict";
const example = {
    a: 3,
    b: 7,
};
const rsp = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px',
};
function computerChoice(imgCoords) {
    return Object.keys(rsp).find((k) => { rsp[k] === imgCoords; });
}
