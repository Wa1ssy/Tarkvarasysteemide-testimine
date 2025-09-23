# Jest Project

## Käivitamine

1. Node.js LTS peab olema paigaldatud. Kontroll: `node -v`
2. Installi sõltuvused:  
   ```bash
   npm install
   ```
3. Käivita testid:  
   ```bash
   npm test
   ```
4. Käivita kattuvus:  
   ```bash
   npm run coverage
   ```

## Testimisstrateegia

- AAA distsipliin (Arrange, Act, Assert).
- Iga test kontrollib ainult ühte käitumist.
- Testid isoleeritud: ei võrku, faile ega andmebaase.
- Katvuslävend: Statements 90%, Branches 80%, Functions 90%, Lines 90%.

## Edasised plaanid

- Lisa rohkem matemaatilisi funktsioone.
- Lisa keerulisem Unicode tugi (nt emoji).
- Lisa rohkem asünkroonseid utiliite.
