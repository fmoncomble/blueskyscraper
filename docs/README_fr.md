![blueskyscraper_banner](https://github.com/fmoncomble/blueskyscraper/assets/59739627/ae109759-a3c0-428f-acd3-bdc501176a4d)


[(English version)](https://fmoncomble.github.io/blueskyscraper)

Une extension pour extraire et télécharger des posts Bluesky à des fins de fouille textuelle.  
  
### Citer ce programme
Si vous utilisez cette extension pour votre recherche, veuillez la référencer comme suit :  
  
Moncomble, F. (2024). *BlueskyScraper* (Version 0.4) [JavaScript]. Arras, France : Université d'Artois. Disponible à l'adresse : https://fmoncomble.github.io/blueskyscraper/

## Installation
### Firefox
[ ![Firefox add-on](https://github.com/fmoncomble/Figaro_extractor/assets/59739627/e4df008e-1aac-46be-a216-e6304a65ba97)](https://github.com/fmoncomble/blueskyscraper/releases/latest/download/blueskyscraper.xpi)  
  
N'oubliez pas d'épingler l'extension à la barre d'outils.

### Chrome/Edge
En attendant la disponibilité sur le Chrome WebStore, vous pouvez tester l'extension en l'installant en mode développeur :
- [Téléchargez l'archive .zip](https://github.com/fmoncomble/blueskyscraper/releases/latest/download/blueskyscraper.zip)
- Décompressez l'archive
- Ouvrez le gestionnaire d'extensions : `chrome://extensions` ou `edge://extensions`
  - Activez le « mode développeur »
  - Cliquez sur « charger l'extension non empaquetée »
  - Sélectionnez le dossier décompressé
- Épinglez l'extension à la barre d'outils
 
## Mode d'emploi
- Cliquez sur l'icône de l'extension dans la barre d'outils.
- Entrez vos identifiant Bluesky pour autoriser l'application (il est préférable de créer un <a href="https://bsky.app/settings/app-passwords" target="_blank">mot de passe d'application</a>). *Tous les identifiants sont stockés en local sur votre ordinateur, **pas** sur un serveur distant.*
- Construisez votre requête avec au moins un mot clef, puis cliquez sur `Search`.
- Choisissez le format de sortie désiré :
    - `XML/XTZ` pour un fichier XML à importer dans [TXM](https://txm.gitpages.huma-num.fr/textometrie/en/index.html) en utilisant le module `XML/TEI-Zero`.
        - Lors de l'import, ouvrez la section "Plans textuels" et entrez `ref` dans le champ « Hors texte à éditer »
    - `TXT` pour du texte brut
    - `CSV`
    - `JSON`
- (Facultatif) Entrez un nombre maximum de posts à récupérer.
- Vous pouvez arrêter l'extraction à tout moment en cliquant sur `Abort`.
- Cliquez sur `Download` pour collecter le résultat, ou `Reset` pour reprendre au début.
