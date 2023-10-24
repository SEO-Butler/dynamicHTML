// script.js
const params = new URLSearchParams(window.location.search);

const name = params.get('name');
const imageUrl = params.get('image');

document.getElementById('name').textContent = name || 'Unknown';
document.getElementById('image').src = imageUrl || 'default-image.jpg';
