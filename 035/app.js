

class Kibiras1 {
    constructor() {
      this.akmenuKiekis = 0;
    }
  
    prideti1Akmeni() {
      this.akmenuKiekis ++;
    }
  
    pridetiDaugAkmenu(kiekis) {
      this.akmenuKiekis += kiekis;
    }
  
    kiekPririnktaAkmenu() {
      console.log(kibiras, "Akmenų kiekis kibire:", this.akmenuKiekis);
    }
  }
  
  // Sukuriamas kibiras objektas
  const kibiras = new Kibiras1();
  
  // Demonstruojamas akmenų pridėjimas
  kibiras.prideti1Akmeni();
  kibiras.prideti1Akmeni();
  kibiras.pridetiDaugAkmenu(10);

  
  // Išvedami rezultatai
  kibiras.kiekPririnktaAkmenu(); // Rezultatas: Akmenų kiekis kibire: 7
  

  class Pinigine {
    constructor() {
      this.popieriniaiPinigai = 0;
      this.metaliniaiPinigai = 0;
    }
  
    ideti(kiekis) {
      if (kiekis <= 2) {
        this.metaliniaiPinigai += kiekis;
      } else {
        this.popieriniaiPinigai += kiekis;
      }
    }
  
    skaiciuoti() {
      console.log(pinigine);
    }
  }
  
  // Sukuriamas Pinigine objektas
  const pinigine = new Pinigine();
  
  // Demonstruojamas pinigų įdėjimas
  pinigine.ideti(1);
  pinigine.ideti(3);
  
  // Išvedami rezultatai
  pinigine.skaiciuoti();
  