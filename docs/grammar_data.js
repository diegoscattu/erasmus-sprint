window.GRAMMAR_LESSONS = [
  {
    id: "question-forms", level: "A2", group: "Fondamenta", title: "Question forms",
    rule: "Nel present simple usa do/does prima del soggetto. Con be e i modali non serve do. L’ordine base è: parola interrogativa + ausiliare + soggetto + verbo.",
    formula: "Verbo normale: (Wh-) + do/does + soggetto + verbo base?\nBe/modale: (Wh-) + be/modale + soggetto?", example: "Alla festa: “Where do you study?”",
    exercises: [
      {kind:"order", prompt:"Chiedi al nuovo coinquilino da dove viene.", words:["from","Where","you","are","?"], answer:["Where","are","you","from","?"], explanation:"Con be inverti verbo e soggetto: Where are you...?"},
      {kind:"choice", prompt:"___ you know where the student office is?", options:["Do","Are","Does"], answer:"Do", explanation:"Con you e un verbo normale al present simple usi do."},
      {kind:"input", prompt:"Scrivi in inglese: “A che ora inizia la lezione?”", answer:["what time does the lecture start","what time does class start"], placeholder:"What time...", explanation:"La struttura è What time + does + soggetto + verbo base."}
    ]
  },
  {
    id: "present-simple-continuous", level: "A2", group: "Tempi presenti", title: "Present simple vs continuous",
    rule: "Present simple per abitudini e fatti; present continuous per ciò che accade ora o è temporaneo. Usually segnala l’abitudine; now e this week la situazione in corso.",
    formula: "Present simple: soggetto + verbo base (+ -s con he/she/it)\nContinuous: soggetto + am/is/are + verbo-ing", example: "In cucina: “I’m making pasta right now.”",
    exercises: [
      {kind:"choice", prompt:"This week I ___ at the library because my room is noisy.", options:["study","am studying","studied"], answer:"am studying", explanation:"This week descrive una situazione temporanea: present continuous."},
      {kind:"choice", prompt:"My flatmate usually ___ dinner at 8.", options:["is having","has","have"], answer:"has", explanation:"Usually indica un’abitudine; con he/she aggiungi -s."},
      {kind:"input", prompt:"Completa: “Please be quiet. I ___ (talk) to my professor.”", answer:["am talking","i am talking","i'm talking"], placeholder:"am...", explanation:"L’azione sta accadendo ora: am talking."}
    ]
  },
  {
    id: "like-would-like", level: "A2", group: "Conversazione", title: "Like, would like e look like",
    rule: "Like + nome/-ing esprime preferenza. Would like + to esprime un desiderio o una richiesta educata. What is ... like? chiede una descrizione; look like riguarda l’aspetto.",
    formula: "Preferenza: soggetto + like(s) + nome/verbo-ing\nDesiderio: soggetto + would like + to + verbo base", example: "Al pub: “I’d like to try the local beer.”",
    exercises: [
      {kind:"choice", prompt:"I ___ order a lemonade, please.", options:["like","would like to","am liking to"], answer:"would like to", explanation:"Per una richiesta educata usa would like to + verbo."},
      {kind:"choice", prompt:"What is your new professor ___?", options:["like","look like","liking"], answer:"like", explanation:"What is someone like? chiede com’è una persona in generale."},
      {kind:"input", prompt:"Scrivi: “Mi piace conoscere nuove persone.”", answer:["i like meeting new people","i like to meet new people"], placeholder:"I like...", explanation:"Dopo like puoi usare -ing per parlare di un’attività che apprezzi."}
    ]
  },
  {
    id: "adverbs-frequency", level: "A2", group: "Ordine delle parole", title: "Adverbs of frequency",
    rule: "Usually, often, sometimes e never vanno prima del verbo principale, ma dopo be. Espressioni come every week e once a month vanno normalmente a fine frase.",
    formula: "Verbo normale: soggetto + avverbio + verbo\nCon be: soggetto + be + avverbio", example: "“We sometimes eat together in the kitchen.”",
    exercises: [
      {kind:"order", prompt:"Metti in ordine la frase.", words:["late","is","My","never","flatmate"], answer:["My","flatmate","is","never","late"], explanation:"Con be l’avverbio di frequenza viene dopo il verbo."},
      {kind:"choice", prompt:"I ___ go to the international students’ meeting.", options:["go often","often go","am often go"], answer:"often go", explanation:"Con un verbo normale, often va prima del verbo."},
      {kind:"input", prompt:"Completa: “We cook together ___.” (una volta alla settimana)", answer:["once a week"], placeholder:"once...", explanation:"Le espressioni di frequenza estese vanno normalmente a fine frase."}
    ]
  },
  {
    id: "must-have-to", level: "A2", group: "Verbi modali", title: "Must e have to",
    rule: "Must esprime un obbligo sentito da chi parla; have to una regola o necessità esterna. Mustn’t significa divieto. Don’t have to significa che non è necessario.",
    formula: "Soggetto + must/have to + verbo base\nNegativa: mustn’t + verbo / don’t have to + verbo", example: "“I have to show my student card at the library.”",
    exercises: [
      {kind:"choice", prompt:"University rule: You ___ show your ID at the entrance.", options:["have to","mustn’t","don’t have to"], answer:"have to", explanation:"È una regola esterna, quindi have to è la scelta più naturale."},
      {kind:"choice", prompt:"You ___ smoke inside the student residence.", options:["don’t have to","mustn’t","haven’t to"], answer:"mustn’t", explanation:"Mustn’t indica un divieto."},
      {kind:"input", prompt:"Scrivi: “Non devi portare nulla.” nel senso di “non è necessario”.", answer:["you don't have to bring anything","you do not have to bring anything"], placeholder:"You don't...", explanation:"Don’t have to indica assenza di necessità, non divieto."}
    ]
  },
  {
    id: "past-simple-continuous", level: "A2", group: "Tempi passati", title: "Past simple e past continuous",
    rule: "Past simple racconta un evento concluso. Past continuous descrive un’azione in corso in quel momento. Spesso when introduce l’evento breve e while l’azione lunga.",
    formula: "Past simple: soggetto + forma passata\nPast continuous: soggetto + was/were + verbo-ing", example: "“I met Marta while I was waiting for the bus.”",
    exercises: [
      {kind:"choice", prompt:"I ___ my Erasmus coordinator yesterday.", options:["meet","met","was meet"], answer:"met", explanation:"Yesterday indica un tempo concluso: past simple."},
      {kind:"choice", prompt:"We ___ dinner when the fire alarm rang.", options:["were cooking","cooked","are cooking"], answer:"were cooking", explanation:"La preparazione era in corso quando è avvenuto l’evento breve."},
      {kind:"input", prompt:"Completa: “While I ___ (walk) home, I saw Alex.”", answer:["was walking","i was walking"], placeholder:"was...", explanation:"Dopo while descrivi l’azione di sfondo con past continuous."}
    ]
  },
  {
    id: "articles", level: "A2", group: "Nomi e articoli", title: "A, an, the e zero article",
    rule: "A/an introduce una cosa singolare non specifica. The indica qualcosa di noto o unico. Nessun articolo con plurali e non numerabili quando parli in generale.",
    formula: "a/an + nome singolare non specifico\nthe + nome specifico/noto\nØ + plurale o non numerabile in generale", example: "“I’m looking for a room near the university.”",
    exercises: [
      {kind:"choice", prompt:"I need ___ umbrella because it’s raining.", options:["a","an","the"], answer:"an", explanation:"Umbrella inizia con un suono vocalico: an umbrella."},
      {kind:"choice", prompt:"Can you close ___ kitchen window?", options:["a","the","—"], answer:"the", explanation:"Parli della finestra specifica della cucina condivisa."},
      {kind:"input", prompt:"Completa con una sola parola: “She is ___ Erasmus student.”", answer:["an"], placeholder:"a / an / the", explanation:"Erasmus inizia con un suono vocalico, quindi an."}
    ]
  },
  {
    id: "future-plans", level: "A2", group: "Futuro", title: "Going to e present continuous",
    rule: "Going to esprime intenzioni o previsioni basate su prove. Il present continuous indica un appuntamento già organizzato, spesso con luogo o orario precisi.",
    formula: "Intenzione: soggetto + be + going to + verbo base\nProgramma fissato: soggetto + be + verbo-ing", example: "“We’re having dinner with our flatmates tonight.”",
    exercises: [
      {kind:"choice", prompt:"I bought the ingredients. I ___ cook risotto tonight.", options:["am going to","will to","am go to"], answer:"am going to", explanation:"Gli ingredienti mostrano un’intenzione già decisa."},
      {kind:"choice", prompt:"I ___ the tutor at 10 tomorrow; it’s in my calendar.", options:["am meeting","meet","will meeting"], answer:"am meeting", explanation:"È un appuntamento fissato: present continuous."},
      {kind:"input", prompt:"Scrivi: “Sabato andiamo a Madrid.” come programma organizzato.", answer:["we are going to madrid on saturday","we're going to madrid on saturday"], placeholder:"We're...", explanation:"Per un viaggio già organizzato usa present continuous: we’re going."}
    ]
  },
  {
    id: "verb-patterns", level: "B1", group: "Forme verbali", title: "Gerunds e infinitives",
    rule: "Alcuni verbi vogliono -ing (enjoy, avoid, finish), altri to + infinito (want, need, decide). Dopo una preposizione usa sempre la forma in -ing.",
    formula: "Verbo + -ing: enjoy/avoid/finish + verbo-ing\nVerbo + infinito: want/decide/need + to + verbo", example: "“I’m looking forward to meeting everyone.”",
    exercises: [
      {kind:"choice", prompt:"I really enjoy ___ with international students.", options:["talking","to talk","talk"], answer:"talking", explanation:"Enjoy è seguito dalla forma in -ing."},
      {kind:"choice", prompt:"We decided ___ the cheaper flat.", options:["taking","to take","take"], answer:"to take", explanation:"Decide è seguito da to + infinito."},
      {kind:"input", prompt:"Completa: “I’m interested in ___ (join) the club.”", answer:["joining"], placeholder:"join...", explanation:"Dopo la preposizione in usa la forma in -ing."}
    ]
  },
  {
    id: "present-perfect", level: "B1", group: "Tempi presenti", title: "Present perfect",
    rule: "Usa have/has + participio per esperienze senza tempo preciso, risultati presenti o periodi non finiti. Non usarlo con yesterday, last year o date concluse.",
    formula: "+ soggetto + have/has + participio passato\n− soggetto + haven’t/hasn’t + participio\n? Have/Has + soggetto + participio?", example: "“I’ve met students from ten countries.”",
    exercises: [
      {kind:"choice", prompt:"___ you ever ___ alone abroad?", options:["Have / travelled","Did / travelled","Have / travel"], answer:"Have / travelled", explanation:"Ever chiede un’esperienza: have + participio."},
      {kind:"choice", prompt:"I can’t enter my room. I ___ my key.", options:["have lost","lost yesterday","am losing"], answer:"have lost", explanation:"La perdita ha un risultato presente: ora non puoi entrare."},
      {kind:"input", prompt:"Completa: “She ___ never ___ (try) paella.”", answer:["has never tried","she has never tried","she's never tried"], placeholder:"has never...", explanation:"Con she usa has + participio tried."}
    ]
  },
  {
    id: "for-since-yet", level: "B1", group: "Present perfect", title: "For, since, just, already e yet",
    rule: "For indica una durata; since il punto iniziale. Just = poco fa, already = prima del previsto, yet = ancora/già nelle negative e domande, normalmente a fine frase.",
    formula: "soggetto + have/has + participio + for + durata\nsoggetto + have/has + participio + since + inizio\njust/already tra have e participio; yet a fine frase", example: "“I’ve just arrived, but I’ve already made friends.”",
    exercises: [
      {kind:"choice", prompt:"I’ve lived here ___ September.", options:["for","since","during"], answer:"since", explanation:"September è il punto iniziale, quindi since."},
      {kind:"choice", prompt:"Have you received your student card ___?", options:["already","yet","just"], answer:"yet", explanation:"Yet è naturale a fine domanda per chiedere se qualcosa è già successo."},
      {kind:"input", prompt:"Completa: “We have been here ___ three weeks.”", answer:["for"], placeholder:"for / since", explanation:"Three weeks è una durata, quindi for."}
    ]
  },
  {
    id: "present-perfect-past", level: "B1", group: "Tempi passati", title: "Present perfect vs past simple",
    rule: "Present perfect collega il passato al presente e non specifica un tempo concluso. Past simple richiede un momento passato finito o risponde a when.",
    formula: "PRESENT PERFECT\n+ soggetto + have/has + participio\n− soggetto + haven’t/hasn’t + participio\n? Have/Has + soggetto + participio?\n\nPAST SIMPLE\n+ soggetto + forma passata\n− soggetto + didn’t + verbo base\n? Did + soggetto + verbo base?", example: "“Have you tried this café?” — “Yes, I went last week.”",
    exercises: [
      {kind:"choice", prompt:"I ___ to Berlin in 2024.", options:["have been","went","have gone"], answer:"went", explanation:"Il 2024 è un tempo concluso: past simple."},
      {kind:"choice", prompt:"___ you ever ___ an oral exam in English?", options:["Did / take","Have / taken","Have / took"], answer:"Have / taken", explanation:"Ever indica un’esperienza senza data precisa."},
      {kind:"input", prompt:"Completa: “I ___ (not finish) the assignment yet.”", answer:["haven't finished","have not finished","i haven't finished","i have not finished"], placeholder:"haven't...", explanation:"Yet con una situazione ancora aperta richiede present perfect."}
    ]
  },
  {
    id: "comparatives", level: "B1", group: "Aggettivi", title: "Comparatives e superlatives",
    rule: "Aggettivi brevi: -er/-est; lunghi: more/most. Usa than nel confronto e the nel superlativo. Irregolari: good–better–best, bad–worse–worst.",
    formula: "Comparativo: aggettivo-er / more + aggettivo + than\nSuperlativo: the + aggettivo-est / the most + aggettivo", example: "“This supermarket is cheaper than the one near campus.”",
    exercises: [
      {kind:"choice", prompt:"My new room is ___ than the old one.", options:["more big","bigger","biggest"], answer:"bigger", explanation:"Big raddoppia la consonante e aggiunge -er: bigger."},
      {kind:"choice", prompt:"This is ___ library in the city.", options:["the most quiet","the quietest","quieter"], answer:"the quietest", explanation:"Quiet è breve: usa the + quietest."},
      {kind:"input", prompt:"Completa: “The bus is ___ (good) than walking in the rain.”", answer:["better"], placeholder:"good → ?", explanation:"Il comparativo irregolare di good è better."}
    ]
  },
  {
    id: "relative-clauses", level: "B1", group: "Frasi complesse", title: "Relative clauses",
    rule: "Who per persone, which per cose, where per luoghi, whose per possesso. That può sostituire who/which nelle relative definenti.",
    formula: "nome + who (persona) / which (cosa) / where (luogo) + frase\nwhose + nome per indicare possesso", example: "“That’s the café where we first met.”",
    exercises: [
      {kind:"choice", prompt:"The tutor ___ helped me is from Ireland.", options:["which","who","where"], answer:"who", explanation:"Per una persona usa who."},
      {kind:"choice", prompt:"This is the office ___ you collect your student card.", options:["who","whose","where"], answer:"where", explanation:"Per un luogo nel quale avviene qualcosa usa where."},
      {kind:"input", prompt:"Unisci: “I met a girl. Her brother studies here.”", answer:["i met a girl whose brother studies here"], placeholder:"I met a girl whose...", explanation:"Whose collega la persona al possesso: whose brother."}
    ]
  },
  {
    id: "modals", level: "B1", group: "Verbi modali", title: "May, might, could e ability",
    rule: "May, might e could esprimono possibilità; non aggiungere to. Can indica capacità presente, could capacità generale passata, be able to funziona negli altri tempi.",
    formula: "soggetto + may/might/could/can + verbo base\nNegativa: soggetto + modal + not + verbo base", example: "“The professor might move tomorrow’s class online.”",
    exercises: [
      {kind:"choice", prompt:"We ___ go to the language exchange tonight, but we’re not sure.", options:["might","must to","are might"], answer:"might", explanation:"Might esprime una possibilità incerta e non vuole to."},
      {kind:"choice", prompt:"When I arrived, I couldn’t understand much, but now I ___ follow lectures.", options:["can","could","may to"], answer:"can", explanation:"Can descrive una capacità presente."},
      {kind:"input", prompt:"Completa: “I hope I’ll ___ pass the oral exam.”", answer:["be able to"], placeholder:"be...", explanation:"Dopo will non puoi usare can; usa be able to."}
    ]
  },
  {
    id: "used-to", level: "B1", group: "Abitudini", title: "Used to e be/get used to",
    rule: "Used to + verbo = abitudine passata non più vera. Be used to + nome/-ing = essere abituato. Get used to = abituarsi gradualmente.",
    formula: "Abitudine passata: used to + verbo base\nEssere abituato: be used to + nome/-ing\nAbituarsi: get used to + nome/-ing", example: "“I’m getting used to speaking English every day.”",
    exercises: [
      {kind:"choice", prompt:"I ___ live with my parents, but now I share a flat.", options:["used to","am used to","use to"], answer:"used to", explanation:"È una situazione passata non più vera: used to + verbo."},
      {kind:"choice", prompt:"I’m not ___ eating dinner at 10 p.m. yet.", options:["used to","use to","used for"], answer:"used to", explanation:"Dopo be used to usa un nome o la forma in -ing."},
      {kind:"input", prompt:"Completa: “You’ll soon ___ sharing a kitchen.”", answer:["get used to"], placeholder:"get...", explanation:"Get used to descrive il processo di abituarsi."}
    ]
  },
  {
    id: "quantifiers", level: "B1", group: "Quantità", title: "Quantifiers",
    rule: "Many/few con plurali numerabili; much/little con non numerabili. A few/a little = una quantità utile; few/little senza a comunica insufficienza.",
    formula: "Numerabili: many / a few / few + nome plurale\nNon numerabili: much / a little / little + nome", example: "“There aren’t enough chairs for everyone.”",
    exercises: [
      {kind:"choice", prompt:"How ___ luggage did you bring?", options:["many","much","few"], answer:"much", explanation:"Luggage è non numerabile, quindi much."},
      {kind:"choice", prompt:"I’ve made ___ good friends here, so I don’t feel alone.", options:["a few","few","a little"], answer:"a few", explanation:"Friends è numerabile e a few indica una quantità positiva."},
      {kind:"input", prompt:"Completa: “We don’t have ___ time before class.”", answer:["much","enough"], placeholder:"much / enough", explanation:"Time è non numerabile; much è corretto nelle negative. Anche enough è possibile per quantità sufficiente."}
    ]
  },
  {
    id: "indirect-questions", level: "B1", group: "Domande", title: "Indirect questions e question tags",
    rule: "Dopo Could you tell me... usa l’ordine affermativo, senza do/does. Le question tags riprendono ausiliare e soggetto e normalmente cambiano polarità.",
    formula: "Domanda indiretta: introduzione + parola Wh + soggetto + verbo\nTag: frase positiva + ausiliare negativo + pronome?", example: "“Could you tell me when the office closes?”",
    exercises: [
      {kind:"choice", prompt:"Could you tell me where ___?", options:["is the library","the library is","does the library be"], answer:"the library is", explanation:"Nella domanda indiretta usi ordine affermativo: soggetto + verbo."},
      {kind:"order", prompt:"Costruisci una domanda educata.", words:["starts","Do","know","you","when","class","?"], answer:["Do","you","know","when","class","starts","?"], explanation:"Dopo Do you know, la seconda parte mantiene l’ordine affermativo."},
      {kind:"input", prompt:"Completa la tag: “You’re an Erasmus student, ___?”", answer:["aren't you","are you not"], placeholder:"aren't...", explanation:"Frase positiva con are → tag negativa aren’t you?"}
    ]
  },
  {
    id: "present-perfect-continuous", level: "B2", group: "Tempi presenti", title: "Present perfect continuous",
    rule: "Have/has been + -ing descrive un’attività iniziata nel passato e ancora in corso o con effetto visibile. Il simple enfatizza risultato/quantità; il continuous durata/processo.",
    formula: "+ soggetto + have/has been + verbo-ing\n− soggetto + haven’t/hasn’t been + verbo-ing\n? Have/Has + soggetto + been + verbo-ing?", example: "“I’ve been waiting for the bus since eight.”",
    exercises: [
      {kind:"choice", prompt:"I’m tired because I ___ all morning.", options:["have been studying","have studied yesterday","am study"], answer:"have been studying", explanation:"L’attività recente e prolungata spiega la stanchezza presente."},
      {kind:"choice", prompt:"She ___ three assignments today.", options:["has written","has been writing","is written"], answer:"has written", explanation:"Three assignments enfatizza il risultato completato: present perfect simple."},
      {kind:"input", prompt:"Completa: “How long ___ you ___ (learn) English?”", answer:["have you been learning"], placeholder:"have you...", explanation:"How long + attività in corso richiede spesso present perfect continuous."}
    ]
  },
  {
    id: "narrative-tenses", level: "B2", group: "Tempi passati", title: "Past perfect e narrative tenses",
    rule: "Past simple porta avanti la storia; past continuous crea lo sfondo; past perfect indica ciò che era avvenuto prima di un altro momento passato.",
    formula: "Past simple: soggetto + forma passata\nPast continuous: soggetto + was/were + verbo-ing\nPast perfect: soggetto + had + participio", example: "“When I reached the station, the train had already left.”",
    exercises: [
      {kind:"choice", prompt:"When I got to class, the lecture ___.", options:["had already started","already starts","was already start"], answer:"had already started", explanation:"La lezione era iniziata prima del tuo arrivo: past perfect."},
      {kind:"choice", prompt:"While we ___ home, we saw the northern lights.", options:["were walking","had walked","walk"], answer:"were walking", explanation:"L’azione in corso fa da sfondo: past continuous."},
      {kind:"input", prompt:"Completa: “I was nervous because I ___ never ___ (speak) in public before.”", answer:["had never spoken","i had never spoken","i'd never spoken"], placeholder:"had never...", explanation:"L’esperienza mancante precede quel momento passato: past perfect."}
    ]
  },
  {
    id: "passive-voice", level: "B2", group: "Forma passiva", title: "Active e passive voice",
    rule: "Passivo = be nel tempo corretto + participio passato. Usalo quando l’azione o il risultato conta più di chi la compie; aggiungi by solo se l’agente è utile.",
    formula: "soggetto che riceve l’azione + be nel tempo corretto + participio\nAgente opzionale: + by + persona/cosa", example: "“Your student card will be sent by email.”",
    exercises: [
      {kind:"choice", prompt:"The exam results ___ next Monday.", options:["will publish","will be published","are publish"], answer:"will be published", explanation:"Future passive: will be + participio published."},
      {kind:"choice", prompt:"My bike ___ outside the residence last night.", options:["was stolen","stole","has stealing"], answer:"was stolen", explanation:"Past simple passive: was + participio stolen."},
      {kind:"input", prompt:"Trasforma: “They clean the kitchen every day.”", answer:["the kitchen is cleaned every day"], placeholder:"The kitchen...", explanation:"Present simple passive: is cleaned."}
    ]
  },
  {
    id: "zero-first-conditionals", level: "B2", group: "Periodi ipotetici", title: "Zero e first conditional",
    rule: "Zero conditional per fatti sempre veri: present + present. First conditional per una possibilità futura reale: if + present, will + verbo. Non usare will dopo if.",
    formula: "Zero: If + present, present\nFirst: If + present, will + verbo base", example: "“If I finish early, I’ll meet you at the pub.”",
    exercises: [
      {kind:"choice", prompt:"If you ___ your student card, you can enter the library.", options:["show","will show","showed"], answer:"show", explanation:"Nella if-clause usi il present simple."},
      {kind:"choice", prompt:"If the weather is good, we ___ to the beach tomorrow.", options:["go","will go","would go"], answer:"will go", explanation:"È una possibilità futura reale: first conditional."},
      {kind:"input", prompt:"Completa il fatto generale: “If people don’t sleep, they ___ tired.”", answer:["get","become","feel"], placeholder:"get...", explanation:"Nel zero conditional entrambe le parti usano il presente."}
    ]
  },
  {
    id: "second-conditional", level: "B2", group: "Periodi ipotetici", title: "Second conditional",
    rule: "If + past simple, would + verbo descrive una situazione presente/futura improbabile o immaginaria. Con be, were è la forma più formale per tutte le persone.",
    formula: "If + soggetto + past simple, soggetto + would + verbo base\nDomanda: What would + soggetto + verbo + if...?", example: "“If I spoke better English, I’d join the debate club.”",
    exercises: [
      {kind:"choice", prompt:"If I ___ more confident, I would speak more in class.", options:["am","were","will be"], answer:"were", explanation:"Nel second conditional la if-clause usa il past simple; were è la forma standard."},
      {kind:"choice", prompt:"What ___ you do if you missed the last bus?", options:["will","would","did"], answer:"would", explanation:"La conseguenza immaginaria usa would + verbo."},
      {kind:"input", prompt:"Completa: “If we had a bigger kitchen, we ___ (invite) everyone.”", answer:["would invite","we would invite","we'd invite"], placeholder:"would...", explanation:"Conseguenza del second conditional: would invite."}
    ]
  },
  {
    id: "reported-speech", level: "B2", group: "Discorso indiretto", title: "Reported speech",
    rule: "Dopo un verbo al passato, spesso arretri il tempo: present→past, will→would, can→could. Cambia anche riferimenti come today→that day e tomorrow→the next day.",
    formula: "said (that) + soggetto + tempo arretrato\ntold + persona + (that) + frase\npresent→past; will→would; can→could", example: "“The professor said the exam would be online.”",
    exercises: [
      {kind:"choice", prompt:"“I can help you.” → Marta said she ___ help me.", options:["can","could","will"], answer:"could", explanation:"Nel reported speech can normalmente arretra a could."},
      {kind:"choice", prompt:"“The class is tomorrow.” → He said the class was ___.", options:["tomorrow","the next day","yesterday"], answer:"the next day", explanation:"Tomorrow cambia in the next day rispetto al momento del racconto."},
      {kind:"input", prompt:"Riporta: Tom said, “I am studying.”", answer:["tom said he was studying","tom said that he was studying"], placeholder:"Tom said...", explanation:"Am studying arretra a was studying; that è facoltativo."}
    ]
  },
  {
    id: "future-forms", level: "B2", group: "Futuro", title: "Will, going to e future continuous",
    rule: "Will per decisioni immediate e previsioni/opinioni; going to per intenzioni o prove presenti; future continuous per un’azione in corso a un’ora futura.",
    formula: "will + verbo base\nbe + going to + verbo base\nfuture continuous: will be + verbo-ing", example: "“At 9 tomorrow, I’ll be taking my exam.”",
    exercises: [
      {kind:"choice", prompt:"The phone is ringing. I ___ answer it.", options:["will","am going to","am answering yesterday"], answer:"will", explanation:"È una decisione presa nel momento in cui parli: will."},
      {kind:"choice", prompt:"Look at those clouds! It ___.", options:["will rain maybe","is going to rain","rains yesterday"], answer:"is going to rain", explanation:"La previsione si basa su una prova presente: le nuvole."},
      {kind:"input", prompt:"Completa: “This time tomorrow, we ___ (fly) to Lisbon.”", answer:["will be flying","we will be flying","we'll be flying"], placeholder:"will be...", explanation:"A un momento futuro l’azione sarà in corso: future continuous."}
    ]
  },
  {
    id: "linking-devices", level: "B2", group: "Coesione", title: "Cause, effect e contrast",
    rule: "Because + frase, because of + nome/-ing. Therefore e as a result introducono conseguenze. Although + frase; despite/in spite of + nome/-ing.",
    formula: "because/although + soggetto + verbo\nbecause of/despite + nome o verbo-ing\ntherefore/as a result + conseguenza", example: "“Although I was nervous, I introduced myself.”",
    exercises: [
      {kind:"choice", prompt:"The lecture was cancelled ___ the strike.", options:["because","because of","although"], answer:"because of", explanation:"Dopo because of usi un nome: the strike."},
      {kind:"choice", prompt:"___ feeling tired, I went to the language exchange.", options:["Although","Despite","Because"], answer:"Despite", explanation:"Despite può essere seguito da -ing: despite feeling."},
      {kind:"input", prompt:"Completa con un connettivo: “The bus was late. ___, I missed the first ten minutes.”", answer:["therefore","as a result","consequently"], placeholder:"Therefore...", explanation:"Serve un connettivo di conseguenza: therefore/as a result/consequently."}
    ]
  },
  {
    id: "phrasal-verbs", level: "B2", group: "Lessico e grammatica", title: "Phrasal verbs",
    rule: "Un phrasal verb combina verbo e particella. Con oggetti pronominali, i verbi separabili richiedono il pronome al centro: pick it up. Gli inseparabili restano uniti: look after it.",
    formula: "Separabile: verbo + nome + particella / verbo + pronome + particella\nInseparabile: verbo + particella + oggetto", example: "“Can you turn the music down? I’m studying.”",
    exercises: [
      {kind:"choice", prompt:"The music is too loud. Please ___.", options:["turn down it","turn it down","turn it"], answer:"turn it down", explanation:"Con un pronome, il phrasal verb separabile mette it al centro."},
      {kind:"choice", prompt:"Can you ___ my bag while I order?", options:["look after","look it after","look for after"], answer:"look after", explanation:"Look after è inseparabile e significa prendersi cura/sorvegliare."},
      {kind:"input", prompt:"Completa: “I need to ___ this form before registration.”", answer:["fill in","fill out"], placeholder:"fill...", explanation:"Fill in/fill out a form significa compilare un modulo."}
    ]
  },
  {
    id: "third-mixed-conditionals", level: "C1", group: "Periodi ipotetici", title: "Third e mixed conditionals",
    rule: "Third: if + past perfect, would have + participio per un passato irreale. Mixed: una condizione passata può avere un risultato presente, o viceversa.",
    formula: "Third: If + past perfect, would have + participio\nMixed: If + past perfect, would + verbo base (risultato presente)", example: "“If I had practised more, I would feel confident now.”",
    exercises: [
      {kind:"choice", prompt:"If I ___ about the deadline, I would have applied.", options:["had known","knew","would know"], answer:"had known", explanation:"La condizione passata irreale usa past perfect."},
      {kind:"choice", prompt:"If we had booked earlier, we ___ less.", options:["would pay","would have paid","paid"], answer:"would have paid", explanation:"Nel third conditional la conseguenza usa would have + participio."},
      {kind:"input", prompt:"Mixed conditional: “If I had slept more, I ___ (not be) so tired now.”", answer:["wouldn't be","would not be","i wouldn't be","i would not be"], placeholder:"wouldn't...", explanation:"Condizione passata, risultato presente: past perfect + would + verbo."}
    ]
  },
  {
    id: "future-perfect", level: "C1", group: "Futuro avanzato", title: "Future perfect e future perfect continuous",
    rule: "Will have + participio guarda un risultato completato entro un momento futuro. Will have been + -ing enfatizza la durata fino a quel momento.",
    formula: "Future perfect: will have + participio passato\nFuture perfect continuous: will have been + verbo-ing", example: "“By June, I’ll have completed my Erasmus semester.”",
    exercises: [
      {kind:"choice", prompt:"By Friday, I ___ the assignment.", options:["will have finished","will finish yesterday","have finishing"], answer:"will have finished", explanation:"By Friday fissa un limite futuro entro cui il risultato sarà completato."},
      {kind:"choice", prompt:"In December, I ___ here for four months.", options:["will have been living","will be lived","have lived yesterday"], answer:"will have been living", explanation:"La frase enfatizza la durata fino a un punto futuro."},
      {kind:"input", prompt:"Completa: “By the time you arrive, the lecture ___ (start).”", answer:["will have started","the lecture will have started"], placeholder:"will have...", explanation:"L’inizio sarà già completato prima del tuo arrivo."}
    ]
  },
  {
    id: "advanced-conditionals", level: "C1", group: "Strutture avanzate", title: "Wish, unless e inversion",
    rule: "Wish + past esprime un desiderio presente; wish + past perfect un rimpianto. Unless significa if not. Nell’inglese formale puoi omettere if con Had/Should/Were + soggetto.",
    formula: "Desiderio presente: wish + past simple\nRimpianto: wish + past perfect\nUnless + present · Inversione: Had/Should/Were + soggetto", example: "“I wish I had joined the society earlier.”",
    exercises: [
      {kind:"choice", prompt:"I wish I ___ more confident when speaking English.", options:["am","were","will be"], answer:"were", explanation:"Wish per un desiderio presente usa il past simple; were è la forma formale."},
      {kind:"choice", prompt:"You won’t improve ___ you practise.", options:["unless","if not","despite"], answer:"unless", explanation:"Unless equivale a if you do not practise."},
      {kind:"input", prompt:"Riscrivi formalmente: “If I had known, I would have come.”", answer:["had i known i would have come"], placeholder:"Had I...", explanation:"Nell’inversione del third conditional ometti if e inizi con Had + soggetto."}
    ]
  },
  {
    id: "advanced-passive-clauses", level: "C1", group: "Strutture avanzate", title: "Causative, reporting e participle clauses",
    rule: "Have something done = far fare un servizio. Reporting passive: It is said that / He is believed to. Le participle clauses accorciano frasi con soggetto condiviso.",
    formula: "Causative: have + oggetto + participio\nReporting: soggetto + be + participio + to-infinitive\nParticiple clause: verbo-ing/participio + frase principale", example: "“I had my bike repaired near campus.”",
    exercises: [
      {kind:"choice", prompt:"I ___ my laptop repaired yesterday.", options:["had","made to","was having by"], answer:"had", explanation:"Have + oggetto + participio indica un servizio fatto da qualcun altro."},
      {kind:"choice", prompt:"The course ___ to be very demanding.", options:["is said","says","is saying"], answer:"is said", explanation:"Reporting passive: soggetto + be + participio + to-infinitive."},
      {kind:"input", prompt:"Riduci: “Because I was feeling nervous, I spoke too quickly.”", answer:["feeling nervous i spoke too quickly"], placeholder:"Feeling...", explanation:"Con lo stesso soggetto puoi ridurre la subordinata a Feeling nervous, ..."}
    ]
  }
];
