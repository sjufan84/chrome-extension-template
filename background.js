// Background script (service worker) for Chrome extension
console.log('Chrome Extension Background Script loaded');

// Listen for extension installation
chrome.runtime.onInstalled.addListener(function(details) {
  console.log('Extension installed:', details);
  
  if (details.reason === 'install') {
    // Set default values
    chrome.storage.sync.set({
      clickCount: 0,
      extensionEnabled: true
    });
    
    console.log('Default settings initialized');
  }
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('Background received message:', request);
  
  if (request.action === 'getData') {
    // Get data from storage
    chrome.storage.sync.get(['clickCount', 'extensionEnabled'], function(result) {
      sendResponse({
        clickCount: result.clickCount || 0,
        extensionEnabled: result.extensionEnabled !== false
      });
    });
    return true; // Keep message channel open for async response
  }
  
  if (request.action === 'updateData') {
    // Update data in storage
    chrome.storage.sync.set(request.data, function() {
      sendResponse({ success: true });
    });
    return true;
  }
});

// Listen for tab updates
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url) {
    console.log('Tab updated:', tab.url);
    
    // Example: Inject content script on specific domains
    if (tab.url.includes('example.com')) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js']
      });
    }
  }
});

// Example: Periodic task
chrome.alarms.create('periodicTask', { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name === 'periodicTask') {
    console.log('Periodic task running...');
    
    // Example: Check for updates or perform maintenance
    chrome.storage.sync.get(['lastMaintenance'], function(result) {
      const now = Date.now();
      const lastMaintenance = result.lastMaintenance || 0;
      
      // Run maintenance every hour
      if (now - lastMaintenance > 60 * 60 * 1000) {
        console.log('Running maintenance...');
        chrome.storage.sync.set({ lastMaintenance: now });
      }
    });
  }
});