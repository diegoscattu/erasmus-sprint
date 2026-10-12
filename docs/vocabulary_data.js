(() => {
  const items = [];

  function add(context, rows) {
    rows.trim().split(/\r?\n/).forEach((row) => {
      const [word, it, example] = row.split("|").map((part) => part.trim());
      if (!word || !it || !example) throw new Error(`Voce vocabolario non valida: ${row}`);
      items.push([word, it, example, context]);
    });
  }

  // 001-050 · Conversazione essenziale
  add("Conversazione essenziale", `
hello|ciao|Hello, nice to meet you.
hi|ciao|Hi, are you in my class?
goodbye|arrivederci|Goodbye, see you tomorrow.
please|per favore|A coffee, please.
thanks|grazie|Thanks for your help.
sorry|mi dispiace / scusa|Sorry, I am late.
yes|sì|Yes, that works for me.
no|no|No, I do not understand.
okay|va bene|Okay, let us meet at eight.
maybe|forse|Maybe we can go together.
really|davvero|Is the library really closed?
actually|in realtà|Actually, I am from Italy.
probably|probabilmente|I will probably stay home.
definitely|decisamente|I will definitely come tonight.
exactly|esattamente|That is exactly what I mean.
although|sebbene / anche se|Although I am tired, I will come.
sure|certo|Sure, you can sit here.
welcome|benvenuto|Welcome to our student flat.
excuse|scusare|Excuse me, is this seat free?
instead|invece|Can we meet tomorrow instead?
right|giusto / destra|You are right about the deadline.
wrong|sbagliato|I think this answer is wrong.
well|bene|I do not speak English very well.
just|appena / soltanto|I have just arrived.
already|già|I have already sent the email.
still|ancora|I am still learning English.
yet|ancora / già|I have not finished yet.
again|di nuovo|Could you say that again?
together|insieme|We can study together.
alone|da solo|I do not want to walk home alone.
almost|quasi|The lesson is almost over.
enough|abbastanza|Do we have enough food?
quite|piuttosto|The exam was quite difficult.
very|molto|The tutor is very helpful.
too|troppo / anche|This suitcase is too heavy.
also|anche|I also study economics.
only|soltanto|I only have five euros.
even|perfino|Even the teacher was confused.
especially|soprattutto|I like this city, especially at night.
anyway|comunque|Anyway, shall we order?
however|tuttavia|The room is small; however, it is cheap.
because|perché|I left because I was tired.
so|quindi / così|The bus was late, so I walked.
but|ma|I want to come, but I have class.
if|se|Call me if you need help.
when|quando|When does the lecture start?
where|dove|Where is the nearest pharmacy?
why|perché|Why is the train delayed?
how|come|How do I get to campus?
what|che cosa|What does this word mean?
  `);

  // 051-100 · Parole che costruiscono le frasi
  add("Costruire le frasi", `
I|io|I live near the university.
you|tu / voi|Are you an Erasmus student?
he|lui|He is my new flatmate.
she|lei|She studies engineering.
it|esso / ciò|It is cold outside.
we|noi|We have class at nine.
they|loro|They are waiting downstairs.
me|me / mi|Can you help me?
him|lui / lo|I met him at orientation.
her|lei / la|I sent her the notes.
us|noi / ci|The professor gave us homework.
them|loro / li|I will meet them after class.
my|mio|My room is on the second floor.
your|tuo / vostro|Is this your backpack?
his|suo, di lui|His name is Daniel.
our|nostro|Our lecture starts soon.
their|loro|Their flat is near the station.
this|questo|Is this the right bus?
that|quello|That café is very cheap.
these|questi|These notes are useful.
those|quelli|Those students are in my course.
some|alcuni / un po'|Could I have some water?
any|alcuni / del|Do you have any questions?
much|molto|I do not have much time.
many|molti|How many credits do you need?
more|più|Could I have more information?
most|la maggior parte|Most students live nearby.
few|pochi|I know a few people here.
all|tutto / tutti|All the shops are closed.
every|ogni|I have class every Monday.
each|ciascuno|Each student needs a card.
another|un altro|Could we have another chair?
other|altro|The other entrance is closed.
same|stesso|We are in the same class.
a|un / una|I need a pen.
an|un / una|She is an exchange student.
the|il / lo / la|The library is upstairs.
of|di|I need a copy of the form.
in|in / dentro|My keys are in my bag.
on|su|The book is on the desk.
at|a / presso|Meet me at the station.
to|a / verso|I am going to class.
from|da|I am from Italy.
for|per|This table is for four people.
with|con|I live with two flatmates.
without|senza|I cannot study without coffee.
about|riguardo a|I have a question about the exam.
between|tra due|The bank is between the cafés.
through|attraverso|Walk through the main gate.
around|intorno / circa|I will arrive around eight.
  `);

  // 101-150 · Verbi ausiliari, tempo e frequenza
  add("Tempo e verbi essenziali", `
be|essere|I want to be more confident.
am|sono|I am ready for class.
is|è|The cafeteria is downstairs.
are|sei / siete / sono|Are you free tonight?
was|ero / era|The lecture was interesting.
were|eri / erano|We were at the library.
have|avere|I have a student card.
has|ha|She has a spare key.
had|avevo / ebbi|We had an exam yesterday.
do|fare|What do you study?
does|fa|When does the shop open?
did|fece / hai fatto|Did you understand the lesson?
can|potere|Can I sit here?
could|potrebbe|Could you help me, please?
will|futuro / volontà|I will call you later.
would|condizionale|Would you like a coffee?
shall|dovere / proposta|Shall we go together?
should|dovrebbe|You should email the tutor.
may|potrebbe|The train may be late.
might|potrebbe|I might join you tonight.
must|dovere|I must submit this today.
need|avere bisogno|I need some help.
not|non|I am not sure.
here|qui|You can sit here.
there|lì / là|The bus stop is over there.
now|adesso|I have to leave now.
then|poi / allora|We can eat and then study.
today|oggi|I have two lectures today.
tomorrow|domani|The exam is tomorrow.
yesterday|ieri|I arrived yesterday.
always|sempre|I always carry my student card.
usually|di solito|I usually walk to campus.
often|spesso|We often eat together.
sometimes|a volte|I sometimes miss home.
rarely|raramente|I rarely take a taxi.
never|mai|I have never tried this dish.
soon|presto|The class will start soon.
later|più tardi|I will text you later.
early|presto / in anticipo|I arrived early for the exam.
late|tardi / in ritardo|The bus is ten minutes late.
before|prima|Please arrive before nine.
after|dopo|Let us meet after class.
during|durante|Do not talk during the exam.
until|fino a|The library is open until midnight.
since|da / poiché|I have lived here since September.
while|mentre|I listen to music while I study.
first|primo / prima|First, complete this form.
last|ultimo / scorso|I missed the last bus.
next|prossimo|See you next week.
ever|mai|Have you ever been to London?
  `);

  // 151-200 · Azioni quotidiane I
  add("Azioni quotidiane", `
accept|accettare|They accepted my student application.
add|aggiungere|Please add me to the group chat.
agree|essere d'accordo|I agree with your idea.
answer|rispondere|Could you answer this question?
arrive|arrivare|I usually arrive before class.
ask|chiedere|I need to ask the professor.
become|diventare|We quickly became friends.
begin|iniziare|The lecture begins at ten.
believe|credere|I believe this is the right room.
borrow|prendere in prestito|Can I borrow your charger?
break|rompere / pausa|Be careful not to break the glass.
bring|portare|Please bring your student card.
build|costruire|We need to build a presentation.
buy|comprare|I need to buy a bus ticket.
call|chiamare|Call me when you arrive.
carry|portare|Can you help me carry this bag?
change|cambiare|I need to change my timetable.
check|controllare|Please check the room number.
choose|scegliere|You can choose one course.
clean|pulire|We clean the kitchen together.
close|chiudere|Please close the window.
come|venire|Do you want to come with us?
compare|confrontare|Let us compare our answers.
complete|completare|Complete the form online.
cook|cucinare|We often cook dinner together.
copy|copiare|Can I copy your notes?
cost|costare|How much does the ticket cost?
create|creare|We created a study group.
decide|decidere|We need to decide today.
describe|descrivere|Can you describe the problem?
discuss|discutere|We will discuss it after class.
drink|bere|Would you like to drink something?
drive|guidare|I do not drive in this city.
eat|mangiare|Where can we eat cheaply?
enter|entrare|Use your card to enter.
explain|spiegare|Could you explain that again?
feel|sentirsi|I feel nervous before exams.
fill|riempire / compilare|Please fill in this form.
find|trovare|I cannot find my classroom.
finish|finire|I finish class at four.
follow|seguire|Follow me to the library.
forget|dimenticare|Do not forget your passport.
get|ottenere / prendere|Where can I get a student card?
give|dare|Could you give me directions?
go|andare|I have to go to class.
happen|succedere|What happened at the station?
hear|sentire|I cannot hear the professor.
help|aiutare|Could you help me, please?
hope|sperare|I hope you pass the exam.
join|unirsi|Can I join your group?
  `);

  // 201-250 · Azioni quotidiane II
  add("Azioni quotidiane", `
keep|tenere|Keep your receipt.
know|sapere / conoscere|Do you know where Anna is?
learn|imparare|I want to learn English quickly.
leave|partire / lasciare|I have to leave at six.
lend|prestare|Could you lend me a pen?
like|piacere|I like living here.
listen|ascoltare|Listen to the announcement.
live|vivere|I live in a shared flat.
look|guardare / sembrare|Look at the timetable.
lose|perdere|I do not want to lose my keys.
love|amare|I love this city.
make|fare / creare|Let us make dinner together.
mean|significare|What does this word mean?
meet|incontrare|Let us meet outside the library.
move|muovere / trasferirsi|I will move into the flat tomorrow.
open|aprire|Could you open the door?
order|ordinare|I would like to order now.
pay|pagare|Can I pay by card?
plan|pianificare|We need to plan our project.
play|giocare / suonare|Do you want to play football?
prefer|preferire|I prefer the earlier class.
prepare|preparare|I need to prepare for the exam.
put|mettere|Put your name on the form.
read|leggere|Please read the instructions.
remember|ricordare|Remember to lock the door.
repeat|ripetere|Could you repeat the question?
return|ritornare / restituire|I need to return this book.
say|dire|How do you say this in English?
see|vedere|I will see you tomorrow.
sell|vendere|Do they sell bus tickets here?
send|inviare|Please send me the notes.
share|condividere|We share the kitchen.
show|mostrare|Could you show me the way?
sit|sedersi|Can I sit next to you?
sleep|dormire|I could not sleep last night.
speak|parlare|Could you speak more slowly?
spend|spendere / trascorrere|I spend a lot on transport.
start|iniziare|What time does the class start?
stay|restare / soggiornare|I am staying for one semester.
stop|fermare / smettere|Does this bus stop near campus?
study|studiare|I study computer science.
take|prendere|I take the bus every morning.
talk|parlare|Can we talk after class?
tell|dire / raccontare|Could you tell me your name?
think|pensare|I think the answer is correct.
try|provare|I want to try the local food.
turn|girare|Turn left at the traffic lights.
understand|capire|I do not understand this word.
use|usare|Can I use your phone?
wait|aspettare|Please wait for me outside.
  `);

  // 251-300 · Azioni quotidiane III
  add("Azioni quotidiane", `
walk|camminare|I walk to campus every morning.
want|volere|I want to improve my English.
wash|lavare|Please wash your dishes.
watch|guardare|We can watch a film tonight.
wear|indossare|Do I need to wear formal clothes?
win|vincere|Our university team won the match.
work|lavorare / funzionare|The Wi-Fi does not work.
write|scrivere|Please write your name here.
book|prenotare|I need to book a hostel.
cancel|annullare|Can I cancel my reservation?
catch|prendere|I have to catch the last bus.
charge|caricare / addebitare|Where can I charge my phone?
collect|ritirare / raccogliere|You can collect your card tomorrow.
confirm|confermare|Please confirm your attendance.
contact|contattare|Contact the international office.
cross|attraversare|Cross the road at the lights.
dance|ballare|Would you like to dance?
download|scaricare|Download the slides before class.
enjoy|godersi / apprezzare|I really enjoy this course.
exchange|scambiare|Can we exchange phone numbers?
fix|riparare|The landlord will fix the shower.
fly|volare|I fly home next Friday.
invite|invitare|I want to invite my classmates.
miss|perdere / sentire la mancanza|I missed the morning lecture.
pack|fare la valigia|I need to pack tonight.
pass|superare / passare|I hope I pass the exam.
practice|esercitarsi|I practice English every day.
print|stampare|Where can I print this document?
queue|fare la fila|We need to queue over there.
reach|raggiungere|How can I reach the city centre?
rent|affittare|I want to rent a bicycle.
reserve|riservare|Could we reserve a table?
scan|scansionare|Scan your card at the entrance.
sign|firmare|Please sign at the bottom.
smoke|fumare|You cannot smoke inside.
solve|risolvere|We need to solve this problem.
spell|fare lo spelling|How do you spell your surname?
swim|nuotare|We sometimes swim after class.
teach|insegnare|They teach the course in English.
travel|viaggiare|I want to travel around Europe.
upload|caricare online|Upload the assignment by Friday.
visit|visitare|I would like to visit the museum.
wake|svegliarsi|I wake up at seven.
worry|preoccuparsi|Do not worry about the mistake.
lock|chiudere a chiave|Remember to lock the front door.
unlock|sbloccare / aprire|This code will unlock the door.
improve|migliorare|I want to improve my pronunciation.
translate|tradurre|Could you translate this sentence?
pronounce|pronunciare|How do you pronounce this word?
register|registrarsi|I need to register for the course.
  `);

  // 301-350 · Descrivere persone, cose e situazioni I
  add("Descrivere", `
good|buono|The food here is good.
bad|cattivo / brutto|The weather is really bad today.
big|grande|We need a bigger table.
small|piccolo|My room is small but comfortable.
long|lungo|It is a long walk to campus.
short|corto / breve|We have a short break now.
new|nuovo|I am the new Erasmus student.
old|vecchio|This building is very old.
young|giovane|It is a city full of young people.
important|importante|This deadline is important.
different|diverso|My timetable is different this week.
similar|simile|Our courses are quite similar.
easy|facile|The first exercise is easy.
difficult|difficile|I find this topic difficult.
hard|difficile / duro|The exam was hard.
simple|semplice|Could you give me a simple example?
possible|possibile|Is an extension possible?
impossible|impossibile|It is impossible to arrive by nine.
ready|pronto|I am ready to order.
busy|occupato|The library is busy this afternoon.
free|libero / gratuito|Is this seat free?
available|disponibile|Is the room still available?
closed|chiuso|The student office is closed.
full|pieno|This bus is full.
empty|vuoto|That table is empty.
cheap|economico|The student menu is cheap.
expensive|costoso|Taxis are expensive here.
fast|veloce|The train is fast and comfortable.
slow|lento|Could you speak more slowly?
quiet|silenzioso|I need a quiet place to study.
loud|forte / rumoroso|The music is too loud.
dirty|sporco|The shared kitchen is dirty.
safe|sicuro|Is it safe to walk home here?
dangerous|pericoloso|That road is dangerous at night.
strong|forte|This coffee is very strong.
weak|debole|The Wi-Fi signal is weak.
hot|caldo|The soup is too hot.
cold|freddo|It is cold in my room.
warm|caldo / tiepido|Bring a warm jacket.
cool|fresco / fantastico|That student event sounds cool.
happy|felice|I am happy to be here.
sad|triste|I felt sad after saying goodbye.
tired|stanco|I am tired after the journey.
hungry|affamato|I am hungry after class.
thirsty|assetato|I am thirsty; can we get water?
sick|malato|I feel sick this morning.
healthy|sano|I am looking for a healthy meal.
friendly|amichevole|My flatmates are very friendly.
kind|gentile|That was very kind of you.
rude|maleducato|The customer was rude to the waiter.
  `);

  // 351-400 · Descrivere persone, cose e situazioni II
  add("Descrivere", `
beautiful|bellissimo|The old town is beautiful.
ugly|brutto|That building is quite ugly.
nice|carino / piacevole|It was nice to meet you.
great|fantastico|The welcome party was great.
amazing|incredibile|The view from here is amazing.
interesting|interessante|The lecture was very interesting.
boring|noioso|The first chapter is boring.
funny|divertente|My new flatmate is really funny.
serious|serio|This is a serious problem.
clear|chiaro|The professor's explanation was clear.
confusing|confuso|The online timetable is confusing.
correct|corretto|Is this sentence correct?
incorrect|errato|That room number is incorrect.
local|locale|I want to try the local food.
foreign|straniero|It is my first time in a foreign country.
public|pubblico|Public transport is reliable here.
private|privato|I am looking for a private room.
common|comune|This is a common English expression.
special|speciale|Is there a special student price?
popular|popolare|This pub is popular with students.
normal|normale|It is normal to feel nervous.
strange|strano|This milk tastes strange.
comfortable|comodo|These chairs are comfortable.
uncomfortable|scomodo|The hostel bed was uncomfortable.
noisy|rumoroso|Our street is noisy at night.
near|vicino|The supermarket is near my flat.
far|lontano|Is the airport far from here?
central|centrale|We found a central apartment.
international|internazionale|I called the international office.
online|online|The application is available online.
offline|offline|The map also works offline.
modern|moderno|The campus has a modern library.
traditional|tradizionale|We tried a traditional dish.
fresh|fresco|Is this bread fresh?
sweet|dolce|This dessert is very sweet.
salty|salato|The soup is too salty.
spicy|piccante|Is this dish spicy?
vegetarian|vegetariano|Do you have a vegetarian option?
vegan|vegano|My flatmate is vegan.
allergic|allergico|I am allergic to peanuts.
married|sposato|Our teacher is married.
single|single / singolo|I need a single ticket.
afraid|spaventato|I am afraid of missing the flight.
careful|attento|Be careful with your passport.
helpful|disponibile / utile|The receptionist was very helpful.
polite|educato|It is polite to say please.
formal|formale|The email should sound formal.
casual|informale|The party is very casual.
exact|esatto|I do not know the exact address.
likely|probabile|The train is likely to be crowded.
  `);

  // 401-450 · Persone e vita sociale
  add("Persone e vita sociale", `
person|persona|There is one person ahead of me.
people|persone|I met many people at orientation.
man|uomo|The man at reception helped me.
woman|donna|That woman is our course coordinator.
boy|ragazzo|The boy showed us the bus stop.
girl|ragazza|The girl in my class is Spanish.
friend|amico|I am meeting a friend tonight.
flatmate|coinquilino|My flatmate cooks very well.
roommate|compagno di stanza|My roommate studies at night.
neighbor|vicino di casa|Our neighbor is very friendly.
classmate|compagno di corso|I borrowed notes from a classmate.
student|studente|I am an exchange student.
teacher|insegnante|The teacher speaks clearly.
professor|professore|I emailed the professor yesterday.
tutor|tutor|Ask your tutor for feedback.
lecturer|docente universitario|The lecturer uploaded the slides.
manager|responsabile|I need to speak to the manager.
staff|personale|The university staff were helpful.
customer|cliente|The customer is waiting to pay.
waiter|cameriere|Could we ask the waiter?
waitress|cameriera|The waitress brought the menu.
cashier|cassiere|You can pay the cashier there.
doctor|medico|I need to see a doctor.
nurse|infermiere|The nurse checked my temperature.
police|polizia|Call the police in an emergency.
driver|autista|Ask the driver for the next stop.
passenger|passeggero|Every passenger needs a ticket.
tourist|turista|The tourist asked me for directions.
guest|ospite|You can bring one guest.
host|ospite / padrone di casa|Our host gave us the keys.
family|famiglia|My family will visit next month.
mother|madre|My mother calls me every Sunday.
father|padre|My father is visiting this weekend.
parent|genitore|A parent signed the document.
brother|fratello|My brother studies abroad too.
sister|sorella|My sister sent me a package.
partner|compagno / partner|My partner lives in another city.
couple|coppia|A couple shares the flat upstairs.
group|gruppo|Can I join your study group?
team|squadra|Our team has four students.
member|membro|Each member has a different task.
colleague|collega|I had lunch with a colleague.
boss|capo|I need to call my boss.
worker|lavoratore|A worker came to repair the window.
owner|proprietario|The owner showed us the apartment.
landlord|proprietario di casa|I reported the problem to my landlord.
receptionist|addetto alla reception|The receptionist gave me a map.
assistant|assistente|The teaching assistant answered my question.
stranger|sconosciuto|Do not give your key to a stranger.
everyone|tutti|Everyone is welcome at the event.
  `);

  // 451-500 · Università e studio
  add("Università", `
university|università|The university opens at eight.
campus|campus|I live close to campus.
class|lezione / classe|Our class starts at nine.
course|corso|I want to change one course.
lesson|lezione|Today's English lesson was useful.
lecture|lezione universitaria|The lecture is in room 204.
seminar|seminario|We have a seminar on Tuesday.
workshop|laboratorio pratico|I registered for the writing workshop.
subject|materia|What is your favorite subject?
degree|laurea|I am completing my degree in economics.
master|laurea magistrale|She is doing a master's degree.
bachelor|laurea triennale|He is a bachelor's student.
faculty|facoltà|The faculty office is upstairs.
department|dipartimento|Contact the language department.
office|ufficio|The international office is closed.
library|biblioteca|I study in the library.
laboratory|laboratorio|Wear safety glasses in the laboratory.
computer|computer|I need a computer for the assignment.
project|progetto|Our group project is due Friday.
presentation|presentazione|I am nervous about my presentation.
assignment|compito|I submitted the assignment online.
homework|compiti|We have a lot of homework.
essay|tema / saggio|The essay must be 2,000 words.
report|relazione|I am writing a lab report.
research|ricerca|My research is about renewable energy.
exam|esame|The exam starts at ten.
test|test|We have a short test tomorrow.
question|domanda|Could I ask a question?
response|risposta|I am waiting for the professor's response.
mark|voto / segno|I received a good mark.
grade|voto|Where can I see my grade?
result|risultato|The exam results are online.
deadline|scadenza|The deadline is next Monday.
timetable|orario|My timetable changed this morning.
schedule|programma / orario|Check the new exam schedule.
recess|pausa|We have a short recess at eleven.
term|trimestre / periodo accademico|The autumn term begins in September.
semester|semestre|I am staying for one semester.
credit|credito formativo|This course is worth six credits.
certificate|certificato|I need a language certificate.
application|domanda / candidatura|My application was accepted.
form|modulo|Please complete this form.
document|documento|Upload the document as a PDF.
notes|appunti|Can you send me your notes?
page|pagina|Turn to page thirty.
chapter|capitolo|Read the first chapter tonight.
textbook|libro di testo|The textbook is available online.
dictionary|dizionario|Use a dictionary for new words.
language|lingua|English is the course language.
English|inglese|I want to speak English confidently.
  `);

  // 501-550 · Casa e alloggio
  add("Casa e alloggio", `
home|casa|I am going home after class.
house|casa|The house has three bedrooms.
apartment|appartamento|The apartment is near campus.
flat|appartamento|I share a flat with two students.
room|stanza|Is the room still available?
bedroom|camera da letto|My bedroom faces the street.
bathroom|bagno|The bathroom is next to the kitchen.
kitchen|cucina|We share the kitchen.
living room|soggiorno|We usually eat in the living room.
floor|piano / pavimento|I live on the third floor.
door|porta|Someone is knocking at the door.
window|finestra|Could you close the window?
wall|parete|There is a mark on the wall.
ceiling|soffitto|The ceiling is leaking.
stairs|scale|Take the stairs to the second floor.
lift|ascensore|The lift is not working.
entrance|ingresso|Meet me at the main entrance.
exit|uscita|The emergency exit is downstairs.
key|chiave|I cannot find my room key.
balcony|balcone|The flat has a small balcony.
bell|campanello|Ring the bell when you arrive.
bed|letto|The bed is quite comfortable.
pillow|cuscino|Could I have another pillow?
blanket|coperta|I need a warmer blanket.
sheet|lenzuolo|The host gave me clean sheets.
towel|asciugamano|Are towels included?
shower|doccia|The shower has no hot water.
bath|vasca / bagno|There is a bath in the upstairs bathroom.
toilet|gabinetto|Where is the nearest toilet?
sink|lavandino|Please leave the sink clean.
tap|rubinetto|The kitchen tap is leaking.
mirror|specchio|There is a mirror by the door.
chair|sedia|We need one more chair.
table|tavolo|Your keys are on the table.
desk|scrivania|I study at the desk in my room.
sofa|divano|You can sleep on the sofa.
shelf|scaffale|The plates are on the top shelf.
wardrobe|armadio|There is not enough space in the wardrobe.
drawer|cassetto|The cutlery is in this drawer.
lamp|lampada|The desk lamp is broken.
light|luce|Please turn off the light.
heating|riscaldamento|The heating is not working.
electricity|elettricità|Electricity is included in the rent.
water|acqua|There is no hot water today.
gas|gas|The gas bill arrived yesterday.
internet|internet|Is internet included in the contract?
Wi-Fi|Wi-Fi|What is the Wi-Fi password?
deposit|deposito / cauzione|The deposit is one month's rent.
contract|contratto|Read the contract before signing.
address|indirizzo|Could you send me the full address?
  `);

  // 551-600 · Cibo e bevande
  add("Cibo e bevande", `
food|cibo|The food at the canteen is cheap.
meal|pasto|This is my first meal today.
breakfast|colazione|Breakfast is included at the hostel.
lunch|pranzo|Shall we have lunch together?
dinner|cena|We are cooking dinner tonight.
snack|spuntino|I brought a snack for the journey.
bread|pane|Could we have some more bread?
rice|riso|I would like rice with the curry.
pasta|pasta|We often cook pasta at home.
pizza|pizza|Let us share a pizza.
sandwich|panino|I bought a sandwich for lunch.
soup|zuppa|The soup of the day is tomato.
salad|insalata|Could I have a salad, please?
meat|carne|I do not eat much meat.
chicken|pollo|I will have the chicken, please.
beef|manzo|Is this dish made with beef?
pork|maiale|This sausage contains pork.
fish|pesce|The fish comes with vegetables.
egg|uovo|I usually have an egg for breakfast.
cheese|formaggio|Could you add some cheese?
milk|latte|Do you have oat milk?
butter|burro|Could I have some butter for the bread?
oil|olio|We need olive oil for the salad.
salt|sale|This dish needs a little salt.
sugar|zucchero|I do not take sugar in my coffee.
fruit|frutta|I buy fresh fruit at the market.
apple|mela|I packed an apple for class.
banana|banana|A banana is an easy snack.
orange|arancia|Would you like an orange?
vegetable|verdura|The meal comes with vegetables.
potato|patata|Could I have baked potatoes?
tomato|pomodoro|This sandwich has tomato in it.
onion|cipolla|Could you leave out the onion?
garlic|aglio|The sauce contains garlic.
bean|fagiolo|This soup is made with beans.
pea|pisello|The rice comes with peas.
mushroom|fungo|I would like the mushroom pizza.
cake|torta|We bought a cake for her birthday.
biscuit|biscotto|Would you like a biscuit with your tea?
chocolate|cioccolato|This cake contains dark chocolate.
coffee|caffè|Could I have a coffee, please?
tea|tè|Do you take milk in your tea?
juice|succo|I would like an orange juice.
beer|birra|Could we have two beers, please?
wine|vino|Would you like red or white wine?
bottle|bottiglia|Can we have a bottle of water?
cup|tazza|I need a clean cup.
glass|bicchiere|Could I have another glass?
plate|piatto|This plate is still dirty.
bowl|ciotola|The soup comes in a large bowl.
  `);

  // 601-650 · Ristorante e cucina
  add("Ristorante", `
restaurant|ristorante|Do we need to book the restaurant?
café|bar / caffetteria|I am studying in the café.
pub|pub|Let us meet at the pub tonight.
bar|bar / bancone|We ordered our drinks at the bar.
menu|menù|Could we see the menu, please?
starter|antipasto|I will have the soup as a starter.
main|piatto principale|What would you like for your main?
dessert|dolce|Can we share a dessert?
dish|piatto / pietanza|What is the most popular dish?
portion|porzione|The portions are quite large.
ingredient|ingrediente|Could you check the ingredients?
allergy|allergia|I have a serious nut allergy.
option|opzione|Is there a vegan option?
bill|conto|Could we have the bill, please?
receipt|scontrino|Can I have the receipt?
tip|mancia|Is service included, or should we leave a tip?
cash|contanti|I only have cash.
card|carta|Can I pay by card?
reservation|prenotazione|I have a reservation for eight o'clock.
service|servizio|The service was quick and friendly.
counter|bancone|Please order at the counter.
tray|vassoio|Leave your tray over there.
fork|forchetta|Could I have another fork?
knife|coltello|This knife is not very sharp.
spoon|cucchiaio|I need a spoon for the soup.
napkin|tovagliolo|Could we have some napkins?
straw|cannuccia|I do not need a straw.
kettle|bollitore|The kettle is in the shared kitchen.
oven|forno|The pizza is in the oven.
microwave|microonde|Can I heat this in the microwave?
fridge|frigorifero|There is some milk in the fridge.
freezer|congelatore|Put the frozen food in the freezer.
cooker|fornello / cucina|The cooker is electric.
pan|padella|Use the large pan for the pasta sauce.
pot|pentola|The soup is in the pot.
recipe|ricetta|Can you send me the recipe?
taste|sapore / gusto|I like the taste of this cheese.
flavour|sapore|Which flavour would you like?
smell|odore|The bread has a wonderful smell.
chef|cuoco|The chef can prepare a vegan dish.
bakery|panetteria|The bakery opens early.
market|mercato|We buy vegetables at the market.
takeaway|cibo da asporto|Shall we get a takeaway tonight?
delivery|consegna|The food delivery will arrive soon.
buffet|buffet|Breakfast is served as a buffet.
canteen|mensa|The university canteen closes at three.
cafeteria|caffetteria / mensa|Meet me in the campus cafeteria.
speciality|specialità|What is the local speciality?
barbecue|grigliata|We are having a barbecue on Saturday.
picnic|picnic|Let us take lunch to the park for a picnic.
  `);

  // 651-700 · Città e trasporti
  add("Città e trasporti", `
city|città|I am still learning my way around the city.
town|cittadina|The old town is beautiful at night.
village|villaggio|The bus also stops in the next village.
centre|centro|How do I get to the city centre?
street|strada|My flat is on this street.
road|strada|Cross the road carefully.
avenue|viale|The university is on Park Avenue.
square|piazza|Let us meet in the main square.
corner|angolo|The pharmacy is on the corner.
traffic|traffico|There is a lot of traffic this morning.
crossing|attraversamento pedonale|Use the pedestrian crossing.
bridge|ponte|Walk across the bridge.
park|parco|We are meeting in the park.
station|stazione|Which way is the train station?
bus stop|fermata dell'autobus|The bus stop is outside the library.
airport|aeroporto|How long does it take to reach the airport?
terminal|terminal|My flight leaves from Terminal Two.
platform|binario / piattaforma|Which platform does the train leave from?
gate|gate / cancello|Boarding starts at gate fifteen.
bus|autobus|I take the bus to campus.
train|treno|The next train is at six.
tram|tram|Does this tram go to the centre?
metro|metropolitana|The metro is faster than the bus.
subway|metropolitana|Take the subway for three stops.
taxi|taxi|Could you call me a taxi?
bicycle|bicicletta|I rented a bicycle for the semester.
scooter|monopattino / scooter|You can rent an electric scooter.
car|automobile|We are travelling by car.
vehicle|veicolo|Do not leave valuables in the vehicle.
ticket|biglietto|Where can I buy a ticket?
route|percorso|This is the quickest bus route.
line|linea|Take the green metro line.
direction|direzione|Am I walking in the right direction?
map|mappa|I downloaded an offline map.
journey|viaggio / tragitto|The train journey takes two hours.
trip|viaggio|We are planning a weekend trip.
luggage|bagaglio|Where can I leave my luggage?
suitcase|valigia|My suitcase is very heavy.
backpack|zaino|My passport is in my backpack.
bag|borsa|Can you watch my bag for a moment?
seat|posto a sedere|Is this seat taken?
delay|ritardo|The flight has a two-hour delay.
departure|partenza|Check the departure time online.
arrival|arrivo|The arrival hall is downstairs.
destination|destinazione|What is your final destination?
distance|distanza|Is the university within walking distance?
transport|trasporto|Public transport is cheaper with a student pass.
fare|tariffa|What is the bus fare to the airport?
connection|coincidenza / collegamento|We have a short connection in Paris.
track|binario|The train is waiting on track four.
  `);

  // 701-750 · Viaggi e turismo
  add("Viaggi e turismo", `
country|paese|Which country are you from?
nation|nazione|Students from every nation are welcome.
Europe|Europa|I want to travel around Europe.
abroad|all'estero|This is my first semester abroad.
holiday|vacanza|The university closes for the winter holiday.
vacation|vacanza|We are planning a summer vacation.
weekend|fine settimana|What are you doing this weekend?
tour|visita guidata|We joined a free walking tour.
tourism|turismo|Tourism is important to this city.
flight|volo|My flight leaves tomorrow morning.
airline|compagnia aerea|The airline changed my seat.
passport|passaporto|Keep your passport somewhere safe.
visa|visto|Do I need a student visa?
border|confine|They checked our passports at the border.
customs|dogana|Do we have to go through customs?
security|sicurezza / controlli|The queue at airport security is long.
check-in|check-in|Online check-in opens tomorrow.
boarding|imbarco|Boarding begins at six thirty.
hotel|albergo|Our hotel is near the station.
hostel|ostello|The hostel has a shared kitchen.
reception|reception|Ask for a map at reception.
lobby|atrio|I will wait for you in the lobby.
booking|prenotazione|I cannot find my booking email.
boarding pass|carta d'imbarco|Show your boarding pass at the gate.
identity|identità|They asked for proof of identity.
ID|documento d'identità|Bring your ID to registration.
insurance|assicurazione|Travel insurance is strongly recommended.
accommodation|alloggio|Have you found accommodation yet?
night|notte|We are staying for three nights.
view|vista|Our room has a view of the sea.
beach|spiaggia|We took the bus to the beach.
mountain|montagna|The train goes through the mountains.
sea|mare|The city is close to the sea.
lake|lago|We had a picnic by the lake.
river|fiume|The museum is across the river.
island|isola|We visited the island by ferry.
museum|museo|Is the museum free for students?
castle|castello|The castle closes at five.
church|chiesa|The old church is in the main square.
monument|monumento|This monument is a popular meeting point.
guide|guida|Our guide spoke three languages.
information|informazione|Where is the tourist information office?
brochure|opuscolo|I picked up a city brochure.
photo|foto|Could you take a photo of us?
camera|macchina fotografica|I left my camera at the hostel.
charger|caricatore|I need an adapter for my charger.
adapter|adattatore|Can I buy a travel adapter here?
currency|valuta|What is the local currency?
embassy|ambasciata|Contact your embassy if you lose your passport.
consulate|consolato|The nearest consulate is in the capital.
  `);

  // 751-800 · Acquisti, denaro e vestiti
  add("Acquisti e denaro", `
shop|negozio|What time does the shop close?
store|negozio|The department store is in the centre.
supermarket|supermercato|The supermarket is open until ten.
mall|centro commerciale|We can meet at the shopping mall.
price|prezzo|Is that the final price?
money|denaro|I need to withdraw some money.
euro|euro|This coffee costs two euros.
pound|sterlina|The ticket costs twelve pounds.
cent|centesimo|I am fifty cents short.
discount|sconto|Is there a student discount?
sale|saldi / vendita|This jacket is on sale.
offer|offerta|The lunch offer ends at three.
deal|affare / accordo|That phone plan is a good deal.
wallet|portafoglio|I cannot find my wallet.
purse|borsetta / portamonete|She keeps her card in her purse.
bank|banca|The bank is closed today.
account|conto|I opened a local bank account.
ATM|bancomat|Is there an ATM nearby?
payment|pagamento|My card payment was declined.
contactless|senza contatto|Do you accept contactless payment?
refund|rimborso|Can I get a refund for this ticket?
size|taglia / dimensione|Do you have this in a larger size?
colour|colore|Which colour would you prefer?
black|nero|I am looking for a black jacket.
white|bianco|The white shirt is cheaper.
red|rosso|I left my red umbrella here.
blue|blu|Do you have these trousers in blue?
green|verde|Take the green metro line.
yellow|giallo|The bus has a yellow sign.
shirt|camicia|I need a clean shirt for the presentation.
T-shirt|maglietta|This T-shirt is too small.
trousers|pantaloni|These trousers fit well.
jeans|jeans|Can I try these jeans on?
shorts|pantaloncini|I packed two pairs of shorts.
dress|vestito|She wore a blue dress to the party.
skirt|gonna|This skirt is on sale.
jacket|giacca|Bring a jacket for the evening.
coat|cappotto|You will need a warm coat.
shoe|scarpa|Where can I buy a pair of shoes?
trainers|scarpe da ginnastica|Wear comfortable trainers for the tour.
sock|calzino|I lost a sock in the laundry.
underwear|biancheria intima|I need to pack clean underwear.
hat|cappello|Take a hat for the sun.
glove|guanto|I found one glove on the bus.
umbrella|ombrello|You should take an umbrella.
brand|marca|I do not care about the brand.
quality|qualità|The quality is better than I expected.
checkout|cassa|You can pay at the self-service checkout.
basket|cestino|Do we need a shopping basket?
trolley|carrello|The shopping trolley is full.
  `);

  // 801-850 · Salute ed emergenze
  add("Salute ed emergenze", `
health|salute|Your health insurance card is important.
body|corpo|My whole body aches today.
head|testa|I hit my head on the shelf.
face|viso|Wash your face with cold water.
eye|occhio|My left eye is sore.
ear|orecchio|I have pain in my ear.
nose|naso|My nose is blocked.
mouth|bocca|Open your mouth, please.
tooth|dente|I have a painful tooth.
teeth|denti|I brush my teeth twice a day.
throat|gola|I have a sore throat.
neck|collo|My neck hurts after the journey.
shoulder|spalla|My backpack hurts my shoulder.
arm|braccio|I injured my arm at the gym.
hand|mano|I cut my hand while cooking.
finger|dito|I burned my finger on the pan.
chest|petto|I have a pain in my chest.
back|schiena|My back hurts after sitting all day.
stomach|stomaco|I have a bad stomach ache.
leg|gamba|I hurt my leg playing football.
knee|ginocchio|My knee is swollen.
foot|piede|I have pain in my right foot.
feet|piedi|My feet are tired after the tour.
heart|cuore|My heart is beating very fast.
blood|sangue|The doctor ordered a blood test.
pain|dolore|Where exactly is the pain?
headache|mal di testa|I have had a headache all morning.
fever|febbre|I think I have a fever.
cough|tosse|This cough is getting worse.
flu|influenza|I missed class because I had the flu.
medicine|medicina|How often should I take this medicine?
tablet|compressa|Take one tablet after food.
pill|pillola|I need to take this pill with water.
pharmacy|farmacia|Is there a pharmacy open tonight?
hospital|ospedale|Which bus goes to the hospital?
clinic|clinica|The student clinic opens at eight.
appointment|appuntamento|I need to make a doctor's appointment.
ambulance|ambulanza|Call an ambulance immediately.
accident|incidente|There has been an accident near the station.
danger|pericolo|Do not put yourself in danger.
emergency|emergenza|Call this number in an emergency.
fire|incendio / fuoco|Leave the building if you see a fire.
injury|infortunio|Report any injury to the university.
wound|ferita|The nurse cleaned the wound.
symptom|sintomo|When did this symptom begin?
illness|malattia|Tell the doctor about any previous illness.
treatment|trattamento|The treatment should help quickly.
prescription|ricetta medica|You need a prescription for this medicine.
bandage|benda|Put a clean bandage on the cut.
breathing|respirazione|I am having difficulty breathing.
  `);

  // 851-900 · Calendario, tempo e meteo
  add("Tempo e meteo", `
time|tempo / ora|What time does the class begin?
minute|minuto|Wait here for one minute.
hour|ora|The lecture lasts one hour.
day|giorno|I have classes every day.
week|settimana|We have an exam next week.
month|mese|I moved here last month.
year|anno|I will study here for one year.
morning|mattina|I have English class this morning.
afternoon|pomeriggio|Are you free tomorrow afternoon?
evening|sera|Let us cook together this evening.
midnight|mezzanotte|The library closes at midnight.
noon|mezzogiorno|Let us meet at noon.
Monday|lunedì|The course starts on Monday.
Tuesday|martedì|Our seminar is every Tuesday.
Wednesday|mercoledì|I am free on Wednesday afternoon.
Thursday|giovedì|The assignment is due on Thursday.
Friday|venerdì|We are going out on Friday.
Saturday|sabato|The market is busiest on Saturday.
Sunday|domenica|Most shops are closed on Sunday.
January|gennaio|The winter term begins in January.
February|febbraio|My exams finish in February.
March|marzo|The weather improves in March.
April|aprile|We have a break in April.
weekday|giorno feriale|The buses run often on weekdays.
June|giugno|The semester ends in June.
July|luglio|I am travelling home in July.
August|agosto|The city is quiet in August.
September|settembre|I arrived here in September.
October|ottobre|The course began in October.
November|novembre|It gets cold in November.
December|dicembre|I am going home in December.
spring|primavera|The park is beautiful in spring.
summer|estate|I want to travel during the summer.
autumn|autunno|The autumn term is very busy.
winter|inverno|You need a warm coat in winter.
weather|tempo atmosferico|The weather changes quickly here.
rain|pioggia|The rain should stop this afternoon.
snow|neve|The trains are delayed because of snow.
wind|vento|The wind is very strong today.
cloud|nuvola|There is not a cloud in the sky.
sun|sole|Let us sit outside in the sun.
sky|cielo|The sky is clear tonight.
temperature|temperatura|The temperature will fall tonight.
storm|temporale|A storm is expected this evening.
season|stagione|Autumn is my favorite season.
date|data|What is the exam date?
calendar|calendario|Add the deadline to your calendar.
moment|momento|Could you wait a moment?
future|futuro|I am thinking about my future.
past|passato|I studied French in the past.
  `);

  // 901-950 · Tecnologia e lavoro
  add("Tecnologia e lavoro", `
phone|telefono / cellulare|Please put your phone on silent.
number|numero|Can I have your phone number?
message|messaggio|I sent you a message this morning.
text|messaggio / testo|Send me a text when you arrive.
email|email|I received an email from the university.
chat|chat|I added you to the group chat.
video|video|The lecture video is online.
audio|audio|The audio is difficult to hear.
microphone|microfono|Please turn on your microphone.
screen|schermo|I cannot see the shared screen.
keyboard|tastiera|The library keyboard is broken.
mouse|mouse|Can I borrow your computer mouse?
printer|stampante|The printer is out of paper.
website|sito web|Check the university website.
link|collegamento|Could you send me the meeting link?
password|password|I forgot my Wi-Fi password.
username|nome utente|Enter your student username.
app|applicazione|Download the transport app.
file|file|Attach the file to your email.
folder|cartella|Save the document in this folder.
PDF|PDF|Please submit the essay as a PDF.
slide|diapositiva|The final slide has the references.
login|accesso|My university login is not working.
code|codice|Enter the six-digit code.
signal|segnale|There is no phone signal underground.
battery|batteria|My laptop battery is low.
cable|cavo|Do you have a charging cable?
plug|spina|This charger has the wrong plug.
socket|presa|Is there a socket near the desk?
network|rete|Connect to the student network.
data|dati|Mobile data is expensive abroad.
software|software|We need to install new software.
program|programma|Open the program on your computer.
system|sistema|The booking system is temporarily unavailable.
problem|problema|I have a problem with my account.
solution|soluzione|We found a simple solution.
meeting|riunione|Our online meeting starts at two.
job|lavoro|I am looking for a part-time job.
company|azienda|She works for an international company.
business|attività / affari|He studies business at university.
task|compito|Each person has one task.
shift|turno|My work shift ends at ten.
salary|stipendio|The salary is paid monthly.
interview|colloquio|I have a job interview tomorrow.
CV|curriculum|Send your CV with the application.
technology|tecnologia|Technology makes studying abroad easier.
support|assistenza|Contact technical support for help.
update|aggiornamento|The app needs an update.
device|dispositivo|You can use your own device.
access|accesso|Students have free access to the library.
  `);

  // 951-1000 · Oggetti e vita quotidiana
  add("Vita quotidiana", `
thing|cosa|The most important thing is your passport.
place|posto / luogo|This is a good place to study.
way|modo / strada|Is this the quickest way to campus?
idea|idea|That sounds like a good idea.
reason|motivo|What is the reason for the delay?
example|esempio|Could you give me an example?
name|nome|How do you spell your name?
age|età|You need to confirm your age.
birthday|compleanno|We are planning a birthday party.
life|vita|Student life here is very social.
world|mondo|I have classmates from around the world.
mistake|errore|Do not worry about making a mistake.
news|notizie|Did you hear the university news?
story|storia / racconto|Tell me the story in English.
word|parola|I do not understand this word.
sentence|frase|Complete the sentence with the correct verb.
meaning|significato|What is the meaning of this expression?
conversation|conversazione|We had a long conversation after class.
voice|voce|I recognized the professor's voice.
sound|suono|The vowel sound is difficult to pronounce.
music|musica|They are playing music in the square.
film|film|Would you like to watch a film?
movie|film|The movie starts at eight.
game|gioco / partita|We played a card game at the pub.
sport|sport|Do you play any sport?
football|calcio|We play football every Wednesday.
gym|palestra|The university gym is free for students.
party|festa|Are you coming to the party?
event|evento|I registered for the welcome event.
club|club / associazione|I joined the university photography club.
hobby|passatempo|What is your favorite hobby?
picture|immagine|Can you send me that picture?
gift|regalo|We bought a small gift for our host.
package|pacco|A package arrived for you.
box|scatola|Put the glasses in this box.
paper|carta|I need a piece of paper.
pen|penna|Could I borrow a pen?
pencil|matita|Write your answers in pencil.
notebook|quaderno|I keep new words in a notebook.
list|elenco|Make a shopping list before you go.
rubbish|spazzatura|Please take the rubbish outside.
bin|cestino|Put the empty bottle in the recycling bin.
laundry|bucato|I need to do my laundry tonight.
washing machine|lavatrice|The washing machine is in the basement.
soap|sapone|We need more hand soap.
toothbrush|spazzolino|I forgot to pack my toothbrush.
toothpaste|dentifricio|Can I borrow some toothpaste?
clock|orologio|The clock in the kitchen is slow.
alarm|sveglia / allarme|I set my alarm for seven.
scissors|forbici|Do you have a pair of scissors?
  `);

  // MORE_GROUPS

  // Mantiene gli indici del precedente nucleo da 12 parole: i progressi locali
  // già salvati continuano quindi a riferirsi alle stesse parole.
  const legacyOrder = ["actually", "still", "enough", "maybe", "need", "mean", "join", "available", "borrow", "instead", "although", "deal"];
  const ordered = [];
  legacyOrder.forEach((legacyWord) => {
    const index = items.findIndex(([word]) => word.toLocaleLowerCase("en") === legacyWord);
    if (index < 0) throw new Error(`Vocabolario: parola storica mancante: ${legacyWord}`);
    ordered.push(items.splice(index, 1)[0]);
  });
  ordered.push(...items);

  const uniqueWords = new Set(ordered.map(([word]) => word.toLocaleLowerCase("en")));
  if (ordered.length !== 1000) {
    throw new Error(`Vocabolario: attese 1000 parole, trovate ${ordered.length}`);
  }
  if (uniqueWords.size !== ordered.length) {
    throw new Error(`Vocabolario: trovate ${ordered.length - uniqueWords.size} parole duplicate`);
  }
  window.VOCABULARY_WORDS = ordered;
})();
