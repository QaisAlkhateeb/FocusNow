chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    chrome.storage.local.get(['extensionEnabled', 'blockedWebsites', 'whitelistedWebsites'], (result) => {
        if (result.extensionEnabled) {
            let blockedPatterns = result.blockedWebsites || [];
            let whitelistedPatterns = result.whitelistedWebsites || [];

            if (isBlocked(details.url, blockedPatterns, whitelistedPatterns)) {
                chrome.tabs.update(details.tabId, {url: chrome.runtime.getURL('pages/blocked/blocked.html')});
            }
        }
    });
});

function isBlocked(url, blockedPatterns, whitelistedPatterns) {
    for (let pattern of whitelistedPatterns) {
        if (isMatch(url, pattern)) {
            return false; // URL is whitelisted
        }
    }

    for (let pattern of blockedPatterns) {
        if (isMatch(url, pattern)) {
            return true; // URL is blocked
        }
    }

    return false; // URL is neither blocked nor whitelisted
}

function isMatch(url, pattern) {
    try {
        let regex = new RegExp(pattern);
        return regex.test(url);
    } catch (e) {
        // If pattern is not a valid RegExp, treat it as a simple string
        return url.includes(pattern);
    }
}
