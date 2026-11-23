/* =========================================================
   NAŠI UVOZI – ovdje upisujete vozila koja ste uvezli
   =========================================================

   KAKO DODATI VOZILO
   1. Fotografiju stavite u folder  assets/vozila/
      (npr. assets/vozila/bmw-x5.jpg). Najbolje: položena slika,
      oko 1200 piksela širine, JPG do ~300 KB.
   2. Ispod, u listu VOZILA, dodajte blok za to vozilo.
      Svaki blok je u vitičastim zagradama { }, a između blokova ide ZAREZ.
   3. Tekst ide pod navodnike "...", a brojevi (godište, km) bez navodnika.

   POLJA
   marka      – npr. "BMW"
   model      – npr. "X5 xDrive30d"
   godiste    – npr. 2021
   km         – kilometraža, samo broj, npr. 78000
   porijeklo  – zemlja iz koje je uvezeno, npr. "Njemačka"
   slika      – putanja do fotografije, npr. "assets/vozila/bmw-x5.jpg"
                (ako je prazno "", prikazuje se crtež automobila)
   demo       – true = demonstracioni primjer (ima oznaku "Demo primjer")
                Prava vozila: obrišite ovo polje ili stavite false.

   Kad dodate prava vozila, OBRIŠITE demo blokove ispod.
   Oznaka "Demonstracioni primjeri" i napomena ispod vozila nestaju same
   čim na listi nema nijednog demo vozila.
   Ako je lista prazna [], sekcija "Naši uvozi" se ne prikazuje.

   PRIMJER PRAVOG VOZILA (kopirajte i prilagodite):

   {
     marka: "BMW",
     model: "X5 xDrive30d",
     godiste: 2021,
     km: 78000,
     porijeklo: "Njemačka",
     slika: "assets/vozila/bmw-x5.jpg"
   },
   ========================================================= */

const VOZILA = [
  { marka: "BMW", model: "Serija 5", godiste: 2021, km: 78000, porijeklo: "Njemačka", slika: "", demo: true },
  { marka: "Mercedes-Benz", model: "E-Class", godiste: 2020, km: 92000, porijeklo: "Austrija", slika: "", demo: true },
  { marka: "Audi", model: "Q5", godiste: 2021, km: 64000, porijeklo: "Belgija", slika: "", demo: true },
  { marka: "Volkswagen", model: "Touareg", godiste: 2019, km: 118000, porijeklo: "Holandija", slika: "", demo: true },
  { marka: "Porsche", model: "Cayenne", godiste: 2020, km: 71000, porijeklo: "Njemačka", slika: "", demo: true },
  { marka: "Škoda", model: "Superb", godiste: 2022, km: 49000, porijeklo: "Italija", slika: "", demo: true }
];
