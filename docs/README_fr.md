![blueskyscraper_banner](https://github.com/fmoncomble/blueskyscraper/assets/59739627/ae109759-a3c0-428f-acd3-bdc501176a4d)

[(English version)](https://fmoncomble.github.io/blueskyscraper)

Une extension pour extraire et télécharger des posts Bluesky à des fins de fouille textuelle.

### Citer ce programme

Si vous utilisez cette extension pour votre recherche, veuillez la référencer comme suit :

Moncomble, F. (2024). _BlueskyScraper_ (Version 0.3) [JavaScript]. Arras, France : Université d'Artois. Disponible à l'adresse : https://fmoncomble.github.io/blueskyscraper/

## Installation

### Firefox

[ ![Firefox add-on](https://github.com/fmoncomble/Figaro_extractor/assets/59739627/e4df008e-1aac-46be-a216-e6304a65ba97)](https://github.com/fmoncomble/blueskyscraper/releases/latest/download/blueskyscraper.xpi)

### Chrome/Edge

[![available-chrome-web-store4321](https://github.com/fmoncomble/blueskyscraper/assets/59739627/2076ad33-f8be-44b5-b61f-660ace7aa3f4)](https://chromewebstore.google.com/detail/blueskyscraper/jmkhelpgncojgldgiegfnnkgnhojdnjh)

N'oubliez pas d'épingler l'extension à la barre d'outils.

## Mode d'emploi

-   Cliquez sur l'icône de l'extension dans la barre d'outils puis sur le module de votre choix : `Filtered search` ou `Live stream`.
-   Filtered search :
    -   Entrez vos identifiant Bluesky pour autoriser l'application (il est préférable de créer un <a href="https://bsky.app/settings/app-passwords" target="_blank">mot de passe d'application</a>). _Tous les identifiants sont stockés en local sur votre ordinateur, **pas** sur un serveur distant._
    -   Construisez votre requête avec au moins un mot clef, puis cliquez sur `Search`.
    -   Choisissez le format de sortie désiré :
        -   `XML/XTZ` pour un fichier XML à importer dans [TXM](https://txm.gitpages.huma-num.fr/textometrie/en/index.html) en utilisant le module `XML/TEI-Zero`.
            -   Lors de l'import, ouvrez la section "Plans textuels" et entrez `ref` dans le champ « Hors texte à éditer »
        -   `TXT` pour du texte brut
        -   `CSV`
        -   `XLSX` (tableau Excel)
        -   `JSON`
    -   (Facultatif) Entrez un nombre maximum de posts à récupérer.
    -   Vous pouvez arrêter l'extraction à tout moment en cliquant sur `Abort`.
    -   Cliquez sur `Download` pour collecter le résultat, ou `Reset` pour reprendre au début.
-   Live stream :
    -   (Facultatif) Entrez un nombre maximum de posts à récupérer.
    -   (Facultatif) Cliquez sur `Open filters` pour paramétrer les filtres :
        -   Filtrer par langue : entrez un code ISO (N.B. Ceci correspond à la langue dans laquelle le post est configuré ; elle ne correspond pas nécessairement à la langue dans laquelle le post est effectivement rédigé.)
        -   Filtrer par comptes : entrez les identifiants complets (y compris le nom de domaine, par exemple .bsky.social) des comptes dont vous souhaitez récupérer les posts.
        -   Filtrer par mots-clefs
    -   Cliquez sur `Start streaming` pour commencer la collecte. Les 20 premiers résultats sont affichés.
    -   Vous pouvez interrompre la collecte à tout moment en cliquant sur `Stop streaming`, et reprendre la collecte en cliquant sur `Resume streaming`.
    -   Cliquez sur `Download data` pour télécharger les posts ; une fois les posts téléchargés, une fenêtre de dialogue s'affiche :
        -   Cochez sur les métadonnées que vous souhaitez inclure dans le fichier (l'identifiant, la date et heure du post et le texte sont cochés par défaut).
        -   Sélectionnez le format de fichier désiré :
            -   `XML/XTZ` pour un fichier XML à importer dans [TXM](https://txm.gitpages.huma-num.fr/textometrie/en/index.html) en utilisant le module `XML/TEI-Zero`.
                -   Lors de l'import, ouvrez la section "Plans textuels" et entrez `ref` dans le champ « Hors texte à éditer »
            -   `TXT` pour du texte brut
            -   `CSV`
            -   `XLSX` (tableau Excel)
            -   `JSON`
        -   Cliquez sur `Download` pour récupérer le fichier.
