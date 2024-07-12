function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};
let sorular = [
  new Soru(
    "1-1990 yılında Barcelona'yı yenen ilk türk takımı hangisidir ?",
    { a: "Fenerbahçe", b: "Galatasaray", c: "Beşiktaş", d: "Trabzonspor" },
    "d"
  ),
  new Soru(
    "2-Türkiye Birinci Futbol Ligi'nde evinde en uzun süre yenilmeyen takım hangisidir ?",
    { a: "Altayspor", b: "Beşiktaş", c: "Trabzonspor", d: "Galatasaray" },
    "c"
  ),
  new Soru(
    "3-Lig tarihinde en çok küme düşen takım unvanı hangi takıma aittir ?",
    { a: "Eskişehirspor", b: "Kayserispor", c: "Göztepe", d: "Samsunspor" },
    "d"
  ),
  new Soru(
    "4-Lig tarihinde en çok maça çıkan teknik direktör kimdir?",
    {
      a: "Samet Aybaba",
      b: "Fatih Terim",
      c: "Şenol Güneş",
      d: "Aykut Kocaman",
    },
    "a"
  ),
  new Soru(
    "5-Süper Lig tarihinde en fazla maça çıkan futbolcu rekoru kime aittir?",
    {
      a: "Oğuz Çetin",
      b: "Rıza Çalımbay",
      c: "Umut Bulut",
      d: "Tuncay Şanlı",
    },
    "c"
  ),
  new Soru(
    "6-Türkiye Birinci Futbol Ligi'nde en fazla asist yapan futbolcu kimdir?",
    {
      a: "Alex de Souza",
      b: "Hakan Şükür",
      c: "Selçuk İnan",
      d: "Sergen Yalçın",
      e: "Edin Visca",
    },
    "e"
  ),
];
