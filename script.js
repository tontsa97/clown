const quotes = [
    "Nauru on paras lääke.",
    "Elämä on kuin sirkus, täynnä yllätyksiä.",
    "Hymyile aina, se hämmentää ihmisiä.",
    "Elämä on liian tärkeää otettavaksi vakavasti.",
    "Klovnin sydän on täynnä iloa ja naurua.",
    "Jokainen päivä on uusi mahdollisuus tehdä joku nauramaan.",
    "Älä koskaan aliarvioi hymyn voimaa.",
    "Elämä on hauska matka, nauti joka hetkestä.",
    "Nauru pidentää ikää.",
    "Ole kuin klovni, tuo iloa ja naurua ympärillesi.",
    "Hymyile ja maailma hymyilee kanssasi.",
    "Klovnin tehtävä on tehdä maailmasta iloisempi paikka.",
    "Elämä on peli, johon kuuluu myös nauru.",
    "Nauru on sielun aurinkoa.",
    "Klovnin maskin takana on aina suuri sydän.",
    "Hymy on maailman paras meikki.",
    "Elämä on parempaa, kun siihen kuuluu naurua.",
    "Klovnit eivät koskaan lakkaa unelmoimasta.",
    "Nauru on universaali kieli.",
    "Jokainen nauru on pieni voitto.",
    "Elä hetkessä ja naura usein.",
    "Nauru on ilmaista, mutta sen arvo on mittaamaton.",
    "Klovnin kyyneleetkin ovat täynnä iloa.",
    "Hymy on käyrä, joka suoristaa kaiken.",
    "Nauraminen on tarttuvaa, levitä sitä.",
    "Klovni osaa tehdä jokaisesta päivästä juhlan.",
    "Hymyile, se ei maksa mitään.",
    "Nauru tekee elämästä kevyempää.",
    "Huumori on paras tapa kohdata vaikeudet.",
    "Elämä ilman naurua on kuin sirkus ilman klovnia.",
    "Klovnin elämä on yhtä suurta esitystä.",
    "Nauru yhdistää ihmisiä.",
    "Hymyile läpi kyyneltenkin.",
    "Klovnin motto: Elä, naura ja rakasta.",
    "Nauru on sydämen musiikkia.",
    "Elämä on sirkus, sinä olet tähti.",
    "Klovnit löytävät iloa pienistä asioista.",
    "Huumorintaju tekee elämästä hauskempaa.",
    "Nauraminen on hyväksi sielulle.",
    "Klovnin hymy valaisee synkimmänkin päivän.",
    "Hymyile jokaiselle, se saattaa muuttaa heidän päivänsä.",
    "Nauru on valon pilkahdus pimeydessä.",
    "Elämä on täynnä yllätyksiä, kuten klovnin taskut.",
    "Klovni osaa tehdä tavallisesta päivästä erityisen.",
    "Nauru tuo väriä elämään.",
    "Hymyile, se tekee ihmeitä.",
    "Klovnin hattu on täynnä naurua ja iloa.",
    "Nauru on paras tapa rentoutua.",
    "Elämä on lyhyt, naura niin paljon kuin voit.",
    "Huumori auttaa selviämään vaikeuksista.",
    "Klovnin sydän sykkii iloa ja naurua.",
    "Nauru on klovnin lahja maailmalle.",
    "Hymy on avain sydämeen.",
    "Elämä on sirkus, pidä hauskaa.",
    "Nauru tekee hyvää kaikille.",
    "Klovnit ovat elämän ilon lähettiläitä.",
    "Hymyile, se valaisee kasvosi.",
    "Nauraminen on paras tapa viettää aikaa.",
    "Elämä on sirkus, nauti kyydistä.",
    "Klovnin tehtävä on levittää iloa.",
    "Nauru on paras tapa purkaa stressiä.",
    "Hymyile ja ole onnellinen.",
    "Klovnit näkevät elämän kauneuden.",
    "Nauraminen tekee hyvää terveydelle.",
    "Elämä on täynnä naurua, jos osaat katsoa.",
    "Huumori on elämän mauste.",
    "Klovnin maailma on täynnä väriä ja iloa.",
    "Nauru on paras tapa aloittaa päivä.",
    "Hymyile, se on kaunein asusi.",
    "Elämä on sirkus, nauti joka hetkestä.",
    "Klovni tuo iloa kaikkialle, minne menee.",
    "Nauraminen on elämän parasta terapiaa.",
    "Hymyile läpi vaikeuksien.",
    "Klovnin sydän on täynnä rakkautta.",
    "Nauru tekee kaikesta paremman.",
    "Elämä on naurua, jos osaat nähdä sen.",
    "Huumori on avain onneen.",
    "Klovnit osaavat nauraa itselleen.",
    "Nauru on maailman paras kieli.",
    "Hymyile ja anna auringon paistaa.",
    "Elämä on kuin sirkus, täynnä iloa ja yllätyksiä.",
    "Klovnin ilo on tarttuvaa.",
    "Nauru tekee päivästä paremman.",
    "Hymy on klovnin tavaramerkki.",
    "Elämä on liian lyhyt olemaan totinen.",
    "Klovnin tehtävä on tuoda iloa elämään.",
    "Nauraminen on parasta, mitä voit tehdä.",
    "Hymyile, se tekee ihmeitä.",
    "Elämä on täynnä naurua, jos annat sille mahdollisuuden.",
    "Klovnin maailma on täynnä ihmeitä.",
    "Nauru on paras tapa kohdata elämä.",
    "Huumori tekee kaikesta helpompaa.",
    "Klovnit tekevät maailmasta paremman paikan.",
    "Nauru on sydämen kieli.",
    "Elämä on naurun arvoinen.",
    "Hymyile ja levitä iloa ympärillesi.",
    "Klovnin sydän sykkii naurulle.",
    "Nauraminen on elämän suola.",
    "Elämä on sirkus, nauti jokaisesta hetkestä.",
    "Klovnin tehtävä on tehdä elämästä hauskempaa.",
    "Nauru on paras tapa rentoutua.",
    "Hymyile aina, se valaisee tien."
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

document.getElementById('new-quote').addEventListener('click', newQuote);

// Näytä aloituslainaus ladattaessa sivu
newQuote();
