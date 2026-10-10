# Erasmus Sprint

Web app locale pensata per imparare l'inglese utile alla vita Erasmus nel minor tempo possibile.

## Avvio

```powershell
python app.py
```

L'app si apre su `http://127.0.0.1:8765` e non richiede librerie esterne.

## Uso da telefono Android

Collega PC e telefono alla stessa rete Wi-Fi, poi avvia:

```powershell
python app.py --lan --no-browser
```

Il terminale mostra l'indirizzo da aprire in Chrome su Android, ad esempio `http://192.168.1.20:8765`.
Se l'indirizzo rilevato appartiene a una VPN o non si apre, esegui `ipconfig` e usa l'**Indirizzo IPv4** della scheda Wi-Fi.
Se Windows chiede l'autorizzazione firewall, consenti l'accesso solo alle reti private. I profili salvati sul telefono
restano nel browser Android e non vengono sincronizzati automaticamente con quelli del PC.

L'interfaccia è responsive, usa pulsanti touch, area sicura Android, navigazione inferiore e caratteri che non provocano
zoom involontario. Sono inclusi manifest, icona e modalità offline PWA. Chrome permette installazione completa e accesso
al microfono soltanto quando l'app è pubblicata tramite HTTPS; sulla rete locale HTTP restano disponibili lezioni,
Writing, Roleplay, ascolto e tutti i progressi.

## Pubblicazione su GitHub Pages (senza Writing)

La versione locale avviata da `app.py` mantiene il Writing Coach. La versione pubblica viene generata nella cartella
`docs/` e non contiene pagina, navigazione o chiamate API del Writing.

Rigenera l'export dopo ogni modifica:

```powershell
python export_github_pages.py
```

Poi crea su GitHub un repository pubblico chiamato `erasmus-sprint` ed esegui, sostituendo `TUO-USERNAME`:

```powershell
git init
git branch -M main
git add .
git status
git commit -m "Pubblica Erasmus Sprint"
git remote add origin https://github.com/TUO-USERNAME/erasmus-sprint.git
git push -u origin main
```

Il file `.gitignore` impedisce il caricamento del backend locale, dei documenti, dei PDF e dei materiali personali.
Prima del commit, `git status` deve mostrare soltanto `.gitignore`, `README.md` e la cartella `docs/`.

Su GitHub apri **Settings → Pages**, scegli **Deploy from a branch**, branch `main`, cartella `/docs` e salva.
Il sito sarà disponibile su `https://TUO-USERNAME.github.io/erasmus-sprint/`.

## Writing Coach

Senza configurazione usa un correttore locale di emergenza, utile per gli errori più comuni degli italiani.
Per l'analisi contestuale completa, imposta una chiave API OpenAI solo nell'ambiente del processo:

```powershell
$env:OPENAI_API_KEY="la-tua-chiave"
$env:OPENAI_MODEL="gpt-4o-mini" # opzionale
python app.py
```

La chiave resta nel backend Python e non viene mai inviata al browser. Il server usa la Responses API con
Structured Outputs, così l'interfaccia riceve sempre punteggio, testo corretto, spiegazioni italiane e tre
alternative di registro in un formato prevedibile.

## Struttura didattica

- **4 profili locali:** ogni profilo può essere rinominato e conserva separatamente grammatica, vocabolario, Speaking, bozze e risultati del Writing e conversazioni Roleplay. I dati preesistenti vengono assegnati automaticamente al Profilo 1.
- **Oggi:** una missione giornaliera da 15 minuti.
- **Grammatica:** 31 moduli A2–C1 e 93 esercizi con scelta multipla, riordino e risposta libera. Ogni modulo separa chiaramente **quando si usa**, **come si forma** ed **esempio Erasmus**, con ricerca, filtri per livello e progresso per singola attività.
- **Writing:** correzione, motivo dell'errore in italiano e registri formale/naturale/informale.
- **Roleplay:** scenari coinquilino, professore e pub.
- **Speaking:** archivio di 500 frasi reali (100 per luoghi pubblici, 150 per il ristorante e 250 per l'università), con ricerca bilingue, filtri per situazione, traduzione italiana, ascolto normale/lento, speech-to-text, confronto della pronuncia e progresso salvato nel browser.
- **1000 parole:** flashcard ad alta frequenza con ricerca e stato “conosciuta”. Il prototipo include il primo nucleo; il dataset è pronto per essere esteso.

I dati dei quattro profili sono salvati in `localStorage` nel browser utilizzato. Non sono sincronizzati tra dispositivi e non richiedono account o password.
