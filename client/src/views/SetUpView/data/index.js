import { colors } from '@material-ui/core';
export const faq = {
  account: {

    subtitle: 'Elsö négy lépés',
    icon: ' fas fa-hourglass-start ',
    color: colors.amber,
    items: [
      {
        title: 'Az új európai uniós szabályok miatt szükséges megadni néhány fontosabb adatot. Az első oldalon az email címedet és a telefonszámodat kell megadni',
        updated: '1.1',
      },
      {
        title: 'Add meg a 6 számjegyű kódot amit a telefondra küldtünk, SMS-ben',
        updated: '1.2',
      },
      {
        title: 'Vállalkozás ismertetése. Itt az ország opciónál meg kell adni, hogy Magyarország és a vállalkozás jellegénél pedig meg kell keresni azt az opciót amelyik rád illik, ez általában az  adószemélyes magánszemély opció lesz ',
        updated: '1.3',
      },
      {
        title: 'A negyedik oldalon a saját személyes adataid kell megadni',
        updated: '1.4',
      },
    ],
  },
  billing: {

    subtitle: 'Második négy lépés',
    icon: 'far fa-check-circle',
    color: colors.indigo,
    items: [
      {
        title: 'A vállalkozás adatainál keresd meg azt amid rád illik, ha nem találsz semmit akkor kezd el beírni, hogy egyéb kereskedelem, és válaszd ki a feldobott opciót. A vállalkozás webhelyére pedig írd be, hogy www.flipit.store',
        updated: '2.1',
      },
      {
        title: 'Add meg annak a bankszámlaszámnak az IBAN számát ahová szeretnéd, hogy utaljuk neked a pénzt miután eladtál valamit. Ha nem tudod az IBAN számodat akkor csupán keress rá google-ben, hogy "xy bank IBAN számom " ',
        updated: '2.2',
      },
      {
        title: 'Hiányzó adatok kitöltése. Ha látsz egy piros négyzetet ezzel a szöveggel: "Hiányoznak egyes kötelezően megadandó adatok" akkor kattins a mellette lévő frissítés gombra. Ezután töltsd fel a szükséges adatokat, hogy a személyazonosságodat valamint a lakcímedet tudjuk igazolni',
        updated: '2.3',
      },
      {
        title: 'Az utolsó dolog az adatok ellenőrzése. Miután ellenőrizted az adataidat nyomj a küldés gombra',
        updated: '2.4',
      },
    ],
  },
};
