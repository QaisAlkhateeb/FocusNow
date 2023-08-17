document.addEventListener('DOMContentLoaded', () => {
    let openOptionsButton = document.getElementById('openOptions');
    
    openOptionsButton.addEventListener('click', () => {
        // Open the options page
        chrome.runtime.openOptionsPage();
    });
});
