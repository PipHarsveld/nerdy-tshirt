# Shirt.
Shirt is een website waarop je je eigen tshirts kan ontwerpen en bestellen. De gebruiker kan kiezen uit verschillende kleuren t-shirts en zelfs een eigen tekst en afbeelding toevoegen. 

Deze website heb ik gemaakt voor het vak Browser Technologies tijdens de minor Webdesign and Development aan de Hogeschool van Amsterdam.


Demolink: [https://pipharsveld.github.io/nerdy-tshirt/](https://pipharsveld.github.io/nerdy-tshirt/)

## :busts_in_silhouette:User story
Ik wil mijn eigen t-shirt-met(-nerdy)-tekst kunnen ontwerpen, opslaan, bestellen, en een volgende keer dat ik de site bezoek kunnen gebruiken.


## :sparkles:Features
- [X] De gebruiker kan een kleur kiezen voor het t-shirt.
- [X] De gebruiker kan een maat kiezen; XS, S, M, L of XL
- [X] De gebruiker kan een model kiezen voor het shirt; Man, vrouw of unisex
- [X] De gebruiker kan een tekst en afbeelding toevoegen aan het t-shirt.
- [X] De gebruiker kan een t-shirt ontwerp opslaan en later weer inzien.
- [X] De gebruiker kan een of meerdere t-shirts bestellen.


## :rocket:Installatie
Mocht je de website lokaal willen draaien, dan kan dat door de volgende stappen te volgen:
1. Clone de repository door de volgende commando in je terminal te typen: `git clone https://github.com/PipHarsveld/nerdy-tshirt`
2. Open de repository in je code editor.
3. Start een live server in je code editor en ga naar de localhost.
4. Geniet van Shirt!



## :bulb:Core functionaliteit
De core functionaliteit van de website is het ontwerpen en bestellen van een t-shirt. Qua ontwerpen valt alleen een kleur, maat en model kiezen onder de core functionaliteit. De gebruiker kan een tekst en afbeelding toevoegen aan het t-shirt, maar dit is niet het belangrijkste aan het t-shirt design. Verder is het bestelformulier ook onderdeel van de core functionaliteit. 


## :crystal_ball:Progressive enhancement
Voor het maken van deze website ben ik begonnen met alleen de HTML (functional/reliable laag) en daarna ben ik meteen gaan testen of de gebruiker zijn belangrijkste doel, het tshirt ontwerpen en bestellen, kan voltooien. Ik heb toen een aantal aanpassingen gemaakt in de HTML om de gebruikerservaring te verbeteren, zo heb ik `<br>` toegevoegd en `<fieldset>` gebruikt.

De volgende stap was de usable laag (het toevoegen van de CSS), zodat de website er overzichterlijker en aantrekkelijker uit ziet. Ook heb ik CSS gebruikt om de gebruikerservaring te verbeteren, bijvoorbeeld door de `<input>` elementen te stylen. 

Voor de pleasurable laag heb ik Javascript toegevoegd, waardoor er een preview van het t-shirt te zien is (met kleur, tekst en afbeelding) tijdens het ontwerpen. Ook worden de ontwerpen door middel van JavaScript opgeslagen in de Local Storage, zodat in het overzicht van je designs ook echt je eigen ontwerp komt te staan. Daarnaast is er ook extra validatie toegevoegd aan het designformulier, zodat de gebruiker niet per ongeluk een ontwerp kan opslaan en bestelle zonder een maat of model van het t-shirt te hebben gekozen. Deze validatie zit ook in het bestelformulier. Zonder JavaScript gebeurd de validatie door HTML5.


## :nut_and_bolt:Serverside
Voor dit project heb ik geen backend geschreven, omdat het hier gaat om een demo app. Om wel de illusie te geven dat de gebruiker zijn ontwerp kan opslaan en later weer kan inzien, worden de ontwerpen opgeslagen in de Local Storage.
Stel dat er een backend geschreven zou worden, dan kan dat gedaan worden met Node.js en Express. Hiermee kan er een server opgezet worden en routes aangemaakt worden. Vervolgens kan er een database gemaakt worden, bijvoorbeeld met MongoDB. 
De volgende dingen zouden moeten worden opgeslagen in de database:

- [X] Het nummer van het ontwerp
- [X] De kleur van het t-shirt
- [X] De maat van het t-shirt
- [X] Het model van het t-shirt
- [X] De tekst op het t-shirt
- [X] De afbeelding op het t-shirt



## :computer:Browser support
Ik heb mijn site in de volgende browsers getest:

**Desktop**
- [X] Chrome
- [X] Firefox
- [X] Safari
- [X] PrinceXML

**Mobile**
- [X] Chrome
- [X] Safari (iOS)
- [X] Samsung Internet (Android)


## :interrobang:Testverslag
Ik heb mijn website getest in meerdere browers, op verschillende devices en met verschillende ondersteunende technieken. Zo heb ik getest met alleen html, html + css en html + css + javascript. Dit zijn de testresultaten:

### Chrome
Zowel op desktop als op mobiel werkt de website volledig zoals ik het in gedachte had. Tijdens het maken van de website heb ik continue in Chrome getest, omdat ik in deze browser het meest werk. Alle problemen die ik dus tegenkwam tijdens het ontwikkelen heb ik direct opgelost. Wel kwam ik erachter dat de website nog niet helemaal mooi werkte op desktop, dit heb ik opgelost door extra CSS toe te voegen in combinatie met een media query.

### Firefox (+ keyboard test)
De test met Firefox verliep ook vrij soepel, en ik zag niet meteen problemen. In deze browser heb ik ook getest door de website alleen te gebruiken met het toetsenbord. Hier kwam ik een aantal interessante dingen tegen, zo werkte de focus op de `<input>` elementen niet helemaal zoals ik het wilde. Dit heb ik opgelost door in de CSS extra styling toe te voegen op de `:focus` van de `<input>` velden. Hierdoor is de toegankelijkheid van mijn website verbeterd.

### Safari
Ik heb mijn website ook getest in Safari, zowel op desktop als op mobiel. In beide gevallen werkte de website volledig naar behoren, dus was het niet nodig om aanpassingen te doen!

### Samsung Internet
Tijdens het testen op Samsung internet liep in eigenlijk niet tegen grote problemen aan. Het enige wat ik nog de styling voor de design pagina, aangezien het mogelijk was om horizontaal te scrollen wat uiteraard niet de bedoeling is. Dit probleem heb ik opgelost door de body width op 100vw te zetten. Hierdoor is de pagina nooit breder dan de breedte van de viewport van je huidige device.

## :incoming_envelope:PrinceXML
Als obscure browser heb ik gekozen om te testen met PrinceXML. PrinceXML is een tool die HTML en CSS kan omzetten naar PDF. Ik heb dit gedaan omdat ik het interessant vond om te zien hoe mijn website eruit zou zien als PDF en met een hele andere kijk op de website te designen. Ik ben begonnen met een PDF te maken van de site toen hij op dat moment was, maar dat was niet al te best. De invoervelden waren erg klein, er was geen styling op de `<input>` elementen en de tekst was niet goed leesbaar. Ook was het mogelijk om een bestand te uploaden voor op het shirt. 

The usecase die ik bedacht heb voor Prince XML is dat de gebruiker het internet niet vertrouwd om zijn of haar gegevens op te versturen, en het daarom liever via de post zou doen. De gebruiker kan nu mijn website door middel van PrinceXML omzetten naar een PDF, deze vervolgens printen en opsturen. Om het toegankelijker te maken als geprinte website, heb ik een extra CSS bestandje aangemaakt met daarin de volgende aanpassingen:

- [X] De invoervelden zijn groter gemaakt
- [X] De buttons zijn weggehaald
- [X] Het uploadveld voor de afbeelding is weggehaald
- [X] De invoervelden voor maar en model zijn aangepast, waardoor de gebruiker het nu als checkbox kan aanvinken
- [X] Tekst toegevoegd met instructies en verzendinformatie

## :technologist:Maker van Shirt.
Dit project is ontworpen en gemaakt door [Pip Harsveld](https://github.com/PipHarsveld) voor het vak Browser Technologies in de minor Webdesign and Development bij de Hogeschool van Amsterdam.


## :page_facing_up:Licentie
Copyright © 2023 Pip Harsveld.

Dit project is [MIT](https://github.com/PipHarsveld/rijksmuseum/blob/main/LICENSE) licensed.
