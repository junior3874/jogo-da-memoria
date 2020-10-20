const main = document.querySelector("main");
const card = document.querySelector(".card");

class figureCard {
  animal;
  key;
}

const passaro = new figureCard();
const cavalo = new figureCard();
const papagaio = new figureCard();
const cachorro = new figureCard();

passaro.animal = "zebra";
passaro.key = 1;

cavalo.animal = "cavalo";
cavalo.key = 2;

papagaio.animal = "papagaio";
papagaio.key = 3;

cachorro.animal = "cachorro";
cachorro.key = 4;
