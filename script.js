// Video aula: https://www.youtube.com/watch?v=29vJqTa53gs&ab_channel=Sujeitoprogramador
// bilbioteca para revelar os icones:
// https://scrollrevealjs.org/guide/customization.html 

window.sr = ScrollReveal({ reset: true });



// Aplicando efeitos da biblioteca SrollReveal.
// Lembrando que colcamos uma tag em nosso html que está abaixo  da stag metas

// na classes .hiden ihid2 e .hid3 e hid4 criamos em nosso css e aplicamos nos elementos do html para aparecer de acordo com que está configurado abaixo.

sr.reveal(' .hiden  ', { duration: 2500 });

sr.reveal('.hid2', {
    delay: 500,
    rotate: { x: 100, Y: 80, z: 0 },
    duration: 1000,
});

sr.reveal('.hid3', {
    delay: 1800,
    rotate: { x: 0, Y: 100, z: 0 },
    duration: 1500,
})
sr.reveal('.hid4', {
    delay: 2200,
    rotate: { x: 0, Y: 100, z: 0 },
    duration: 1500,
})

