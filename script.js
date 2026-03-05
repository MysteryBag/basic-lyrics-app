const lyrics = [
    "Tonight, I'm gonna have myself a real good time",
    "I feel alive",
    "And the world, I'll turn it inside out, yeah",
    "I'm floating around in ecstasy, so",
    "(Don't stop me now, don't stop me)",
    "'Cause I'm having a good time, having a good time",
    "I'm a shooting star, leaping through the sky",
    "Like a tiger defying the laws of gravity",
    "I'm a racing car, passing by like Lady Godiva",
    "I'm gonna go, go, go",
    "There's no stopping me",
    "I'm burnin' through the sky, yeah",
    "Two hundred degrees, that's why they call me Mister Fahrenheit",
    "I'm traveling at the speed of light",
    "I wanna make a supersonic man out of you",
    "I'm having such a good time, I'm having a ball",
    "(Don't stop me now)",
    "If you wanna have a good time, just give me a call",
    "(Don't stop me now) 'Cause I'm having a good time",
    "(Don't stop me now) Yes, I'm having a good time",
    "I don't want to stop at all, yeah",
    "I'm a rocket ship on my way to Mars",
    "On a collision course",
    "I am a satellite, I'm out of control",
    "I'm a sex machine, ready to reload",
    "Like an atom bomb",
    "About to oh, oh, oh, oh, oh explode",
    "I'm burnin' through the sky, yeah",
    "Two hundred degrees, that's why they call me Mister Fahrenheit",
    "I'm traveling at the speed of light",
    "I wanna make a supersonic woman of you",
    "Hey, hey, hey",
    "(Don't stop me, don't stop me, ooh, ooh, ooh) I like it",
    "(Don't stop me, don't stop me) Have a good time, good time",
    "(Don't stop me, don't stop me) Ooh, let loose, honey, alright",
    "Oh, I'm burnin' through the sky, yeah",
    "Two hundred degrees, that's why they call me Mister Fahrenheit",
    "I'm traveling at the speed of light",
    "I wanna make a supersonic man out of you",
    "I'm having such a good time, I'm having a ball",
    "(Don't stop me now)",
    "If you wanna have a good time, just give me a call",
    "(Don't stop me now) 'Cause I'm having a good time",
    "(Don't stop me now) Yes, I'm having a good time",
    "I don't want to stop at all",
    "La, da-da-da-da",
    "Da-da-da, ha",
    "Ha, da-da, ha, ha, ha",
    "Ha, da-da, ha, da-da, ah",
    "Ooh-ooh-ooh"
];

let currentIndex = 0;
let isPlaying = false;
let playInterval;

const lyricsDisplay = document.getElementById('lyricsDisplay');
const currentLineEl = document.getElementById('currentLine');
const totalLinesEl = document.getElementById('totalLines');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playBtn = document.getElementById('playBtn');

function updateProgress() {
    const progress = ((currentIndex + 1) / lyrics.length) * 100;
    progressFill.style.width = progress + '%';
}

function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === lyrics.length - 1;
}

function displayLine() {
    lyricsDisplay.classList.add('transitioning');

    setTimeout(() => {
        lyricsDisplay.textContent = lyrics[currentIndex];
        currentLineEl.textContent = currentIndex + 1;
        updateProgress();
        updateButtons();
        lyricsDisplay.classList.remove('transitioning');
    }, 200);
}

function nextLine() {
    if (currentIndex < lyrics.length - 1) {
        currentIndex++;
        displayLine();
    }
}

function prevLine() {
    if (currentIndex > 0) {
        currentIndex--;
        displayLine();
    }
}

function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        playBtn.textContent = 'Pause';
        playBtn.classList.add('playing');
        playInterval = setInterval(() => {
            if (currentIndex < lyrics.length - 1) {
                nextLine();
            } else {
                stopPlay();
            }
        }, 2000);
    } else {
        stopPlay();
    }
}

function stopPlay() {
    isPlaying = false;
    playBtn.textContent = 'Play';
    playBtn.classList.remove('playing');
    clearInterval(playInterval);
}

prevBtn.addEventListener('click', () => {
    stopPlay();
    prevLine();
});

nextBtn.addEventListener('click', () => {
    stopPlay();
    nextLine();
});

playBtn.addEventListener('click', togglePlay);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Don't trigger if user is in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.code) {
        case 'Space':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            stopPlay();
            prevLine();
            break;
        case 'ArrowRight':
            e.preventDefault();
            stopPlay();
            nextLine();
            break;
    }
});

// Initialize
totalLinesEl.textContent = lyrics.length;
displayLine();
