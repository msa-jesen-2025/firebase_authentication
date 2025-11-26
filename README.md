# 🏠 Naloga - Firebase Authentication

To je frontend sistema za upravljanje dela od doma, zgrajen z Reactom. Trenutno so implementirane zgolj strani za prijavo in registracijo ter domača stran. Aplikacija komunicira s Firebase za avtentikacijo uporabnikov in Cloud Functions za samodejna e-poštna obvestila ter obdelavo zahtev.


## Naloga: 
Povežite obstoječi frontend s Firebase zalednim sistemom za prijavo (register, login, sign out, auth state change). V kodi so na več mestih komentarji, kam je potrebno dodati kodo — ne dajajte rešitev, temveč izvedbene korake in navodila.

## Koraki
1. Firebase setup
   - V Firebase konzoli ustvarite projekt in omogočite Email/Password auth.
   - Kopirajte config (apiKey, authDomain, ...) in jih varno shranite v [`src/firebaseConfig.js`](src/firebaseConfig.js) ali v `demo.env.local`.

2. Inicializacija Firebase v projektu
   - V [`src/firebaseConfig.js`](src/firebaseConfig.js) dodajte inicializacijo Firebase (preverite komentarje v datoteki).
   - Izvozi objekte/funcije, ki jih boste nato uporabljali v komponentah.

3. Implementacija registracije
   - V [`Register`](src/components/Register.js) napišite logiko za registracijo uporabnika. Potrjevanje uporabnika preko maila ni potrebno.

4. Implementacija prijave
   - V [`Login`](src/components/Login.js) dodajte kodo za prijavo (email + geslo).

5. Sign out
   - V [`Dashboard`](src/components/Dashboard.js) usposobite odjavo ob kliku na gumb za odjavo.

6. Auth state change / spremljanje avtentikacije
   - V [`App`](src/App.js) dodajte logiko za odzivanje na spremembe stanja avtentikacije (auth state change) in posodobite objekt user.
