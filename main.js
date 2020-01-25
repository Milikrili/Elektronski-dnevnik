ucenik = {};//kreiranje ucenika kao globalni objekat
predmetiOcene = []; //prazan niz ocena

//novi niz gde cemo cuvati objekte,pakujemo sve ucenike u niz

odeljenje = [];
//treba izbegavati globalni kontekst jer neko moze isto da nazove kao i mi
function kreirajUcenika() {
    ucenik = new Object();
    ucenik.ime = forma.nIme.value;
    ucenik.prezime = forma.iPrezime.value;
    ucenik.odeljenje = forma.iOdeljenje.value;
    console.log(ucenik);

}

function kreirajListupredmeta() {
    //kreiramo novi niz da nam ne bi se ponavljale ocene od proslog unetog ucenika
   
    let predmet = {};
    predmet.naziv = forma.nPredmeti.value;
    predmet.ocena = forma.nOcene.value;
    predmetiOcene.push(predmet);
    let select= document.getElementById('iPredmeti');
    sel=select.options[select.selectedIndex].setAttribute('disabled','disabled');
  
    console.log(predmetiOcene);
}
//funkcija za ponistavanje podataka
function resetForm(){
forma.nIme.value= '';
forma.nPrezime.value='' ;
forma.nOdeljenje.value='';
forma.nPredmeti.value='';
forma.nOcene.value='';

}
function unosPodatakaUcenika() {
    ucenik.uspeh = predmetiOcene;
    //da unosimo novog ucenika
    odeljenje.push(ucenik);
    izracunajProsek();
    resetForm();
    resetSelect();
    predmetiOcene = new Array();
    console.log(ucenik);
    //nov ucenik
    console.log(odeljenje);
}

function resetSelect(){
    select=document.getElementById('iPredmeti');//napravili smo kolekciju
    for(let i=0; i<select.length; i++){
        select[i].removeAttribute('disabled');
    }
}

function izracunajProsek(){
    prosek=0;
    for(let pred of ucenik.uspeh){
        prosek+=Number(pred.ocena);
    }
    ucenik.prosek=(prosek/ucenik.uspeh.length).toFixed(2);
  //  console.log(ucenik.uspeh[0].ocena);

    
}

//tkreiraj ucenika da se ne poklapa sa nazivom funkcije pa kao t za raster
let tKreirajUcenika = document.getElementById('itUcenik');
tKreirajUcenika.addEventListener('click', kreirajUcenika);

let tKreirajListuPredmeta = document.getElementById('itOcena');
tKreirajListuPredmeta.addEventListener('click', kreirajListupredmeta);

let tUnosUspeha = document.getElementById('itUpisi');
tUnosUspeha.addEventListener('click', unosPodatakaUcenika);