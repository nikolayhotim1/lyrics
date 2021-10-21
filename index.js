'use strict';
// substitute your favorite drink below
let drink = 'Fanta';
let lyrics = '';
let cans = 99;

while (cans > 0) {
    lyrics = lyrics + cans + ' cans of ' + drink + ' on the wall <br>';
    lyrics = lyrics + cans + ' cans of ' + drink + '<br>';
    lyrics = lyrics + 'Take one down, pass it around, <br>';

    if (cans > 1) {
        lyrics = lyrics + (cans - 1) + ' cans of ' + drink + ' on the wall <br>';
    } else {
        lyrics = lyrics + 'No more cans of ' + drink + ' on the wall <br>';
    }

    cans--;
}

document.write(lyrics);
/*
99 cans of Fanta on the wall
99 cans of Fnta
Take one down, pass it around,
98 cans of Fanta on the wall
98 cans of Fanta on the wall
98 cans of Fnta
Take one down, pass it around,
97 cans of Fanta on the wall
...
1 cans of Fanta on the wall
1 cans of Fnta
Take one down, pass it around,
No more cans of Fanta on the wall
*/
