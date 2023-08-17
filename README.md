# FocusNow Chrome Extension

## Overview

FocusNow is a simple Chrome Extension designed to help users stay focused while working on their computers. It allows users to specify patterns (either partial strings or regular expressions) for websites they wish to block. Users can also specify whitelisted patterns for websites they want to allow even when a blocking pattern matches.

The extension also features an enable/disable switch, giving users the ability to quickly turn the blocking functionality on or off directly from the options page.

## Features

- Block websites based on string patterns or regular expressions
- Whitelist specific sites to exclude them from being blocked
- Easily enable or disable the entire blocking functionality
- Manage blocked and whitelisted sites via a dedicated options page

## Installation

To install this extension locally:

1. Clone this repository or download it as a ZIP file and extract it.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (usually a toggle in the upper-right corner).
4. Click **Load unpacked**.
5. Select the `FocusNow` directory where you extracted or cloned this repository to.
6. The extension should now be installed and its icon should appear in the Chrome toolbar.

## Usage

### Managing Blocked and Whitelisted Websites

1. Click the extension icon in the Chrome toolbar to open the popup.
2. Click the **Open Options** button in the popup to open the options page.
3. On the options page:
   - Enter a string or regular expression pattern for a website you wish to block, then click the **Add Blocked Pattern** button.
   - Enter a string or regular expression pattern for a website you wish to allow (whitelist), then click the **Add Whitelisted Pattern** button.
   - Patterns you add will appear in lists below the input fields. You can click the **Remove** button next to a pattern to stop blocking or whitelisting that pattern.

### Enabling/Disabling the Extension

On the options page, there is a checkbox labeled **Enable FocusNow**:
- When this checkbox is checked, the extension will block websites based on your patterns.
- When it is unchecked, the extension will not block any websites, effectively disabling the blocking logic.

## Contributing

If you would like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

