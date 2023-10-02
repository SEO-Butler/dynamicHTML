// script.js
const params = new URLSearchParams(window.location.search);

const name = params.get('name');
const score = params.get('score');
const imageUrl = params.get('image');

document.getElementById('name').textContent = name || 'Unknown';
document.getElementById('score').textContent = score || '0';
document.getElementById('image').src = imageUrl || 'default-image.jpg';
