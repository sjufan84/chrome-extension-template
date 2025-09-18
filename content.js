// Content script for Chrome extension
console.log('Chrome Extension Content Script loaded');

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'buttonClicked') {
    console.log('Button clicked in popup!');
    
    // Example: Add a visual indicator to the page
    addVisualIndicator();
    
    // Send response back to popup
    sendResponse({ success: true, message: 'Content script received button click' });
  }
});

// Example function to modify the page
function addVisualIndicator() {
  // Create a temporary notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 6px;
    z-index: 10000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  `;
  notification.textContent = 'Chrome Extension Action Performed!';
  
  document.body.appendChild(notification);
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}

// Example: Modify page content on load
function modifyPageContent() {
  // Add a subtle indicator that the extension is active
  const indicator = document.createElement('div');
  indicator.id = 'chrome-extension-indicator';
  indicator.style.cssText = `
    position: fixed;
    bottom: 10px;
    left: 10px;
    background: rgba(0, 123, 255, 0.1);
    border: 1px solid rgba(0, 123, 255, 0.3);
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    color: #007bff;
    z-index: 10000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `;
  indicator.textContent = 'Extension Active';
  
  document.body.appendChild(indicator);
}

// Run when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', modifyPageContent);
} else {
  modifyPageContent();
}