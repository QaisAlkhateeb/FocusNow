document.addEventListener('DOMContentLoaded', () => {
    initialize('blockedWebsites', 'blockedPattern', 'addBlocked', 'blockList');
    initialize('whitelistedWebsites', 'whitelistedPattern', 'addWhitelisted', 'whitelist');

    let toggleExtension = document.getElementById('toggleExtension');
    
    // Load the current status from storage and set the checkbox accordingly
    chrome.storage.local.get('extensionEnabled', (result) => {
        toggleExtension.checked = result.extensionEnabled || false;
    });
    
    // Save the new status to storage whenever the user changes the checkbox
    toggleExtension.addEventListener('change', () => {
        chrome.storage.local.set({ 'extensionEnabled': toggleExtension.checked });
    });
    
});

function initialize(storageKey, inputId, buttonId, listId) {
    let listElement = document.getElementById(listId);
    let inputElement = document.getElementById(inputId);
    let buttonElement = document.getElementById(buttonId);

    chrome.storage.local.get([storageKey], (result) => {
        let websites = result[storageKey] || [];
        websites.forEach((website) => {
            appendWebsite(website, listElement, storageKey);
        });
    });

    buttonElement.addEventListener('click', () => {
        let pattern = inputElement.value.trim();
        if (pattern) {
            chrome.storage.local.get([storageKey], (result) => {
                let websites = result[storageKey] || [];
                websites.push(pattern);
                chrome.storage.local.set({ [storageKey]: websites }, () => {
                    appendWebsite(pattern, listElement, storageKey);
                });
            });
        }
        inputElement.value = '';
    });
}

function appendWebsite(pattern, listElement, storageKey) {
    let listItem = document.createElement('li');
    listItem.textContent = pattern;
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        removeWebsite(pattern, listItem, storageKey);
    });
    listItem.appendChild(removeButton);
    listElement.appendChild(listItem);
}

function removeWebsite(pattern, listItem, storageKey) {
    chrome.storage.local.get([storageKey], (result) => {
        let websites = result[storageKey] || [];
        websites = websites.filter((w) => w !== pattern);
        chrome.storage.local.set({ [storageKey]: websites }, () => {
            listItem.remove();
        });
    });
}
