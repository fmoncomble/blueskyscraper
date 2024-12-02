document.addEventListener('DOMContentLoaded', function () {
    // Set version
    const versionDiv = document.getElementById('version-div');
    const version = chrome.runtime.getManifest().version;
    versionDiv.textContent = `v${version}`;

    const searchBtn = document.getElementById('search-btn');
    const streamBtn = document.getElementById('stream-btn');

    searchBtn.addEventListener('click', function () {
        const bskySearchUrl = encodeURIComponent('blueskyscraper.html');
        const url = chrome.runtime.getURL(bskySearchUrl);
        chrome.tabs.create({ url: url });
        window.close();
    });

    streamBtn.addEventListener('click', function () {
        const bskyStreamUrl = encodeURIComponent('blueskystreamer.html');
        const url = chrome.runtime.getURL(bskyStreamUrl);
        chrome.tabs.create({ url: url });
        window.close();
    });
});
