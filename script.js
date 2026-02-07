const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const content = document.getElementById('content');

let yesScale = 1;
const phrases = [
    "No", "Are you sure?", "Really sure??", "Pleease rethink!", 
    "I'll be so sad...", "I'm crying now :(", "JUST SAY YES"
];
let phraseIndex = 0;

noBtn.addEventListener('click', () => {
    yesScale += 0.5;
    yesBtn.style.transform = `scale(${yesScale})`;
    noBtn.innerText = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
});

yesBtn.addEventListener('click', () => {
    content.innerHTML = `
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Y4M2F6Y2k5bm8xbW96bm8xbW96bm8xbW96bm8xbW96bm8xbW96JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/TdfyKrN7HGTIY/giphy.gif" style="width: 100%; max-width: 300px;">
        <h1 style="font-size: 2.5rem; margin-top: 20px;">I knew you'd say yes! ❤️</h1>
    `;
});