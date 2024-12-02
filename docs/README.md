![blueskyscraper_banner](https://github.com/fmoncomble/blueskyscraper/assets/59739627/ae109759-a3c0-428f-acd3-bdc501176a4d)

[(Version française)](https://fmoncomble.github.io/blueskyscraper/README_fr.html)

An extension for extracting and downloading Bluesky posts for text mining and analysis.

### Cite this program

If you use this extension for your research, please reference it as follows:

Moncomble, F. (2024). _BlueskyScraper_ (Version 0.2) [JavaScript]. Arras, France: Université d'Artois. Available at: https://fmoncomble.github.io/blueskyscraper/

## Installation

### Firefox

[![Firefox add-on](https://github.com/fmoncomble/Figaro_extractor/assets/59739627/e4df008e-1aac-46be-a216-e6304a65ba97)](https://github.com/fmoncomble/blueskyscraper/releases/latest/download/blueskyscraper.xpi)

### Chrome/Edge

[![available-chrome-web-store4321](https://github.com/fmoncomble/blueskyscraper/assets/59739627/2076ad33-f8be-44b5-b61f-660ace7aa3f4)](https://chromewebstore.google.com/detail/blueskyscraper/jmkhelpgncojgldgiegfnnkgnhojdnjh)

Remember to pin the add-on to the toolbar.

## Instructions for use

-   Click the add-on's icon in the toolbar, then the module of your choice: `Filtered search` or `Live stream`.
-   Filtered search:
    -   Enter your Bluesky credentials to authorize the app (you may want to use an <a href="https://bsky.app/settings/app-passwords" target="_blank">app password</a>). _All credentials are stored locally on your computer, **not** on a remote server._
    -   Build your search query with at least one keyword, and click `Search`.
    -   Choose your preferred output format:
        -   `XML/XTZ` for an XML file to import into [TXM](https://txm.gitpages.huma-num.fr/textometrie/en/index.html) using the `XML/TEI-Zero` module
            -   When initiating the import process, open the "Textual planes" section and type `ref` in the field labelled "Out of text to edit"
        -   `TXT` for plain text
        -   `CSV`
        -   `XSLX` (Excel spreadsheet)
        -   `JSON`
    -   (Optional) Enter the maximum number of posts to collect.
    -   You can stop the process at any time by clicking `Abort`.
    -   Click `Download` to collect the output or `Reset` to start afresh.
- Live stream:
    - (Optional) Enter the maximum number of posts to retrieve.
    - (Optional) Click `Open filters` to refine the results:
        - Filter by language: enter a language ISO code (N.B. This is the language in which the post is configured, and may not match the language in which the post is actually written.)
        - Filter by user: enter the full handles (including domain name, such as .bsky.social) of the accounts whose posts you wish to stream.
        - Filter by keywords.
    - Click `Start streaming` to initiate the process. The first 20 results are displayed.
    - You can interrupt the collection at any time by clicking `Stop streaming`, and resume it (`Resume streaming`).
    - Click `Download data` to download the streamed posts; once they have downloaded, a dialog opens:
        - Check the metadata you want to include in the results file (user handle, post date and text are checked by default).
        - Choose the output format:
            -   `XML/XTZ` for an XML file to import into [TXM](https://txm.gitpages.huma-num.fr/textometrie/en/index.html) using the `XML/TEI-Zero` module
                -   When initiating the import process, open the "Textual planes" section and type `ref` in the field labelled "Out of text to edit"
            -   `TXT` for plain text
            -   `CSV`
            -   `XSLX` (Excel spreadsheet)
            -   `JSON`
        - Click `Download` to save the file.

