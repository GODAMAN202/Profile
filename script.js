// script.js

// Dark/Light mode toggle
const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  // Button text change
  if (body.classList.contains('dark')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌓';
  }
});

// यहाँ आप अपनी जानकारी डायनामिकली भी सेट कर सकते हैं
// उदाहरण:
document.getElementById('myName').textContent = 'AMAN RAJ';
document.getElementById('myTagline').textContent = '';
document.getElementById('myDetail').textContent = 'My goal is to keep growing as both a developer and a gamer, building exciting digital experiences.';
document.getElementById('email').textContent = 'amankmr62017@gmail.com';


// पैशन लिस्ट अपडेट करें
const passions = ['👨🏻‍💻CODER', '✈️ TRAVELER','🎮GAMER'];
const passionList = document.getElementById('passionList');
passionList.innerHTML = '';
passions.forEach(p => {
  const li = document.createElement('li');
  li.textContent = p;
  passionList.appendChild(li);
});

// अगर प्रोफाइल फोटो बदलनी है तो:
// document.getElementById('profilePic').src = 'your-image.jpg';
