# Jest Unicode Unit Tests Project

## Projekti kirjeldus

See projekt on harjutus üksustestimise praktiseerimiseks JavaScriptis, kasutades **Jesti**.  
Eesmärk on saavutada kõrge testikattuvus (≥90%) ning järgida häid testimispõhimõtteid (AAA — Arrange, Act, Assert).  
Projekt katab **matemaatilised funktsioonid**, **stringide ja Unicode töötluse** ning **asünkroonsed funktsioonid**.


## Projekti struktuur


project/
  package.json          # Projekti konfiguratsioon ja npm skriptid
  jest.config.js        # (Valikuline) Jest konfiguratsioon ja coverage läved
  src/
    math.js             # Matemaatilised funktsioonid: sum, max, isEven
    text.js             # Tekstifunktsioonid: normalizeLettersAndDigits, isPalindromeUnicode, wordCount
    async.js            # Asünkroonsed funktsioonid: safeDivide, delay, retry, fetchUser
  __tests__/
    math.test.js        # Üksustestid math.js jaoks
    text.test.js        # Üksustestid text.js jaoks (Unicode testid, tabellitud testid)
    async.test.js       # Üksustestid async.js jaoks (vead, retry, fake timers, jest.fn mockid)
  README.md             # Dokumentatsioon
