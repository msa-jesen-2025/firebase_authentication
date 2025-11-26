[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/lukapavlic/faas/blob/main/primer/frontend/README.en.md)

# 🏠 Platforma za delo od doma - Frontend

To je frontend sistema za upravljanje dela od doma, zgrajen z Reactom. Aplikacija komunicira s Firebase za avtentikacijo uporabnikov in Cloud Functions za samodejna e-poštna obvestila ter obdelavo zahtev.

## 🚀 Funkcije in strani

1. **Stran za prijavo** `/login`
   - 🔑 **Namen**: Omogoča uporabnikom prijavo v platformo.
   - **Funkcije**: Integracija Firebase Authentication za varno prijavo.

2. **Nadzorna plošča** `/`
   - 🏠 **Namen**: Glavno središče za navigacijo po platformi.
   - **Navigacija**: Povezave do drugih delov, kot so zahtevki za delo od doma, koledar in zgodovina zahtev.

3. **Stran za zahtevke za delo od doma** `/work-from-home`
   - 📅 **Namen**: Omogoča uporabnikom pošiljanje zahtevka za delo od doma.
   - **Funkcije**: Obrazec za izbiro začetnega in končnega datuma, z validacijo in pošiljanjem v Firestore.

4. **Koledarski pogled** `/request-history`
   - 📆 **Namen**: Prikazuje koledar z zahtevami uporabnika.
   - **Funkcije**: Prikazuje zahtevke z barvno označenim statusom (odobreno, zavrnjeno, v obdelavi). Prehod z miško nad datumi pokaže podrobnosti zahtevka.

5. **Seznam zgodovine zahtev** `/request-history-list`
   - 📜 **Namen**: Prikazuje vse pretekle zahteve uporabnika v paginiranem formatu.
   - **Funkcije**: Vsak zahtevek prikazuje datume in status, z možnostjo navigacije med stranmi.
