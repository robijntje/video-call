#Introductie
Dit document is een samenvatting van de eerste versie van de videobel functie van het Social Encounters project. In dit document bespreek ik hoe de applicatie in elkaar zit, en hoe deze gebruikt dient te worden.
Een versie van deze Readme met afbeeldingen is te vinden in de personal course, of later als update aan deze GIT.
##Download
De applicatie is beschikbaar als download op GitHub. Er zijn twee manieren om de applicatie te downloaden:
Download de ZIP file
Om de ZIP file te downloaden ga je naar de GitHub repository (https://github.com/robijntje/video-call) en klik je rechtsboven de repository files op de groene ‘Code’ knop. Kies vervolgens voor ‘Download ZIP’, en accepteer het downloaden van het ZIP bestand.
 
##Clone de repository
De tweede optie om toegang te krijgen tot de bestanden van het project, is door de repository te klonen met een GIT client naar keuze. Voor de uitleg in dit document maak ik als voorbeeld gebruik van GitHub Desktop.
Ga naar GitHub Desktop en klik linksboven op ‘File’ en dan ‘Clone repository…’.
 
Klik vervolgens op de optie ‘URL’ en vul de URL in die bij de introductie en in het voorbeeld vermeld staan. Kies vervolgens eventueel een andere map om de repository in op te slaan, en klik vervolgens op ‘Clone’. Na enkele seconden zijn de bestanden van het project beschikbaar, en kun je de applicatie gebruiken.
 
#Opzet van het programma
In dit onderdeel leg ik uit hoe de algemene structuur van het programma in elkaar zit, om het navigeren door de code makkelijker te maken.
##Package.json
In de package.json is de configuratie en zijn alle packages van de server te vinden. Binnen dit bestand is ook de startknop van de server te vinden, boven de scripts.
##Server.js
Binnen server.js is alles te vinden dat de server laat functioneren. Hier vind je de roomcode randomizer en regeling en de WebRTC code die de peer-to-peerverbinding opzet.
##Public/script.js
Binnen deze file vind je de scripts die de videostream regelen (het aanvragen van een videostream, het laten zien van de videostream op de video grid, het verbinden met een videostream, en het doorsturen van de videostream van de gebruiker), de verbinding van de gebruiker (het joinen en weggaat) beheert, en op welke poort de server actief is.
##Room.ejs
De room.ejs file is de HTML en CSS te vinden. Deze file regelt de video grid view, en zorgt daarmee dat de videostream te zien is op de webpagina die de gebruiker te zien krijgt.
Bekende problemen
De videostream van de externe persoon wordt niet getoond op de video grid. De verbinding wordt wel opgezet, en er is een melding te zien dat een nieuwe gebruiker verbind met de server.
