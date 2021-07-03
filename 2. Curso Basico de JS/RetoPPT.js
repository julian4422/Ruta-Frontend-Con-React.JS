var pi = 'piedra';
var pa = 'papel';
var ti = 'tijera';

function ppt(user, pc) {
    if (user === pi && pc === pa) {
        console.log('pc win');
    } else if (user === pi && pc === ti) {
        console.log('user win');
    } else if (user === pa && pc === pi) {
        console.log('user win');
    } else if (user === pa && pc === ti) {
        console.log('pc win');
    } else if (user === ti && pc === pi) {
        console.log('pc win');
    } else if (user === ti && pc === pa) {
        console.log('user win');
    } else if (user === pc){
        console.log('es un empate');
    }
};

ppt(pi,ti);