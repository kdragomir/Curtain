'use strict';

const status = document.getElementById('status');

chrome.storage.local.get({
  exceptions: []
}, ({exceptions}) => {
  document.getElementById('exceptions').value = exceptions.join(', ');
});

document.getElementById('save').addEventListener('click', () => {
  const exceptions = document.getElementById('exceptions').value.split(/\s*,\s*/)
    .map((input = '') => {
      if (input.startsWith('http')) {
        input = input.replace(/https*:\/\//, '').split('/')[0];
      }
      return input.trim();
    }).filter((h, i, l) => h && l.indexOf(h) === i);
  document.getElementById('exceptions').value = exceptions.join(', ');
  chrome.storage.local.set({exceptions}).then(() => {
    status.textContent = 'Options saved';
    setTimeout(() => status.textContent = '', 750);
  });
});

// reset
document.getElementById('reset').addEventListener('click', e => {
  if (e.detail === 1) {
    status.textContent = 'Double-click to reset!';
    setTimeout(() => status.textContent = '', 750);
  }
  else {
    localStorage.clear();
    chrome.storage.local.clear(() => {
      chrome.runtime.reload();
      close();
    });
  }
});