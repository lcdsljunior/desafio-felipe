let nameHero = "orangeSkull"
let xpHero = "9850"
let nivel = ""
const mens01 = "O Herói de nome "
const mens02 = " está no nível de "

if (xpHero < 1000) {
    nivel = "Ferro"
} else if (xpHero >= 1001 && xpHero <= 2000) {
    nivel = "Bronze"
} else if (xpHero >= 2001 && xpHero <= 5000) {
    nivel = "Prata"
} else if (xpHero >= 6001 && xpHero <= 7000) {
    nivel = "Ouro"
} else if (xpHero >= 7001 && xpHero <= 8000) {
    nivel = "Platina"
} else if (xpHero >= 8001 && xpHero <= 9000) {
    nivel = "Ascendente"
} else if (xpHero >= 9001 && xpHero <= 10000) {
    nivel = "Imortal"
} else if (xpHero >= 10001) {
    nivel = "Radiante"
}

console.log(mens01 + nameHero + mens02 + nivel)