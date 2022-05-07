var urunTipi,
  urunSecimi,
  urunAdedi,
  taksitSayisi,
  araToplam,
  kargoUcreti,
  kargoUcretiYaz,
  netToplam,
  liste,
  select,
  i,
  option;
var value,
  fiyat,
  toplam = 0;

var kadinÜrünleri = [
  "Yüz yıkama jeli",
  100,
  "Cilt temizleme toniği",
  200,
  "Gündüz ve Gece için yüz bakım kremi",
  300,
  "Gözaltı Kremi",
  400,
  "Cilt bakım serumu",
  150,
];
var erkekÜrünleri = [
  "Erkekparfüm",
  100,
  "Erkekkozmetik",
  200,
  "ErkekbakimYagi",
  180,
  "ErkekbakimKremi",
  300,
];
function urunTipiSec() {
  liste = document.getElementsByName("urunTipi");
  liste.forEach((i) => {
    i.addEventListener("change", () => {
      urunTipi = i.value;
      urunSec();
    });
  });
}

function elemanSil() {
  document.querySelectorAll("#urunSecimi option").forEach((option) => {
    option.remove();
  });
}

function urunSec() {
  elemanSil();
  let textNode;
  select = document.getElementById("urunSecimi");

  switch (urunTipi) {
    case "k":
      for (i = 0; i < kadinÜrünleri.length; i += 2) {
        liste = document.createElement("option");
        value = document.createAttribute("value");
        value.value = kadinÜrünleri[i + 1];

        liste.setAttributeNode(value);
        textNode = document.createTextNode(kadinÜrünleri[i]);
        liste.appendChild(textNode);
        select.appendChild(liste);
      }

      break;
    case "e":
      for (i = 0; i < erkekÜrünleri.length; i += 2) {
        liste = document.createElement("option");
        value = document.createAttribute("value");
        value.value = erkekÜrünleri[i + 1];

        liste.setAttributeNode(value);

        textNode = document.createTextNode(erkekÜrünleri[i]);

        liste.appendChild(textNode);
        select.appendChild(liste);
      }
      break;
  }
}

function urunAdedi() {
  select = document.getElementById("urunAdedi");
  for (i = 1; i <= 10; i++) {
    liste = document.createElement("option");
    textNode = document.createTextNode(i);
    liste.appendChild(textNode);
    select.appendChild(liste);
  }
}
function taksitSayisi() {
  select = document.getElementById("taksitSayisi");
  for (i = 0; i <= 12; i += 3) {
    liste = document.createElement("option");
    textNode = document.createTextNode(i);
    liste.appendChild(textNode);
    select.appendChild(liste);
  }
}
function hesapla() {
  liste = document.getElementById("urunSecimi");
  fiyat = liste[liste.selectedIndex].value;

  liste = document.getElementById("urunAdedi");

  urunAdedi = liste[liste.selectedIndex].value;

  toplam += parseFloat(fiyat) * parseFloat(urunAdedi);

  kargoİslem(toplam);

  araToplam = document.getElementById("araToplam");
  araToplam.value = toplam;

  toplamTutar(toplam);
  toplam = 0;
  console.log(urunAdedi);
  console.log(fiyat);
}
function kargoİslem(toplam) {
  kargoUcretiYaz = document.getElementById("kargoUcreti");
  if (toplam >= 300) {
    kargoUcretiYaz.value = 0;
    kargoUcreti = 0;
  } else {
    kargoUcretiYaz.value = 20;
    kargoUcreti = 20;
  }
}
function toplamTutar(toplam) {
  document.getElementById("toplam").value = toplam + kargoUcreti;
  console.log(toplam + kargoUcreti);
}
