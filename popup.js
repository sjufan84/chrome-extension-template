// Popup script for Chrome extension
document.addEventListener('DOMContentLoaded', function() {
  const actionBtn = document.getElementById('actionBtn');
  const status = document.getElementById('status');

  // Load saved data
  chrome.storage.sync.get(['clickCount'], function(result) {
    const count = result.clickCount || 0;
    updateStatus(`Button clicked ${count} times`);
  });

  // Handle button click
  actionBtn.addEventListener('click', function() {
    // Get current count
    chrome.storage.sync.get(['clickCount'], function(result) {
      const currentCount = result.clickCount || 0;
      const newCount = currentCount + 1;
      
      // Save new count
      chrome.storage.sync.set({ clickCount: newCount }, function() {
        updateStatus(`Button clicked ${newCount} times`);
      });
    });

    // Send message to content script
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'buttonClicked' }, function(response) {
        if (chrome.runtime.lastError) {
          console.log('Content script not available:', chrome.runtime.lastError.message);
        } else {
          console.log('Response from content script:', response);
        }
      });
    });
  });

  function updateStatus(message) {
    status.textContent = message;
    status.className = 'status success';
  }
});