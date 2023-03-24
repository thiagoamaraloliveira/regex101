const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto1.match(/\bdia\w+/gi)) // palavras que começam com dia
console.log(texto1.match(/\w+dia\b/gi)) // palavras que terminam com dia
console.log(texto1.match(/\w+dia\w+/gi)) // palavras que começam com dia

//borda é não \w, que é [^A-Za-z0-9_]... temos problemas com acentos!