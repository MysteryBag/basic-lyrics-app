# Lyrics Display

An interactive web application that displays song lyrics one line at a time, with playback controls and keyboard navigation.

## Features

- **Display lyrics** - Shows one line at a time with smooth transitions
- **Playback controls** - Previous, Next, and Play/Pause buttons
- **Auto-play** - Automatically advances through lines every 2 seconds
- **Keyboard shortcuts**:
  - `Space` - Toggle play/pause
  - `Left Arrow` - Previous line
  - `Right Arrow` - Next line
- **Progress tracking** - Visual progress bar and line counter (Line X of Y)
- **Responsive design** - Works on desktop and mobile devices
- **Album artwork** - Background image from the original album

## Usage

1. Open `index.html` in a web browser
2. Click **Play** or press `Space` to auto-advance through lyrics
3. Use **Previous/Next** buttons or arrow keys to navigate manually
4. The progress bar shows your current position in the song

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and visual design
- `script.js` - Application logic and controls
- `lyrics.txt` - Source lyrics file

## Customization

To use different lyrics:
1. Update the `lyrics` array in `script.js` with your song lines
2. Optionally update the title and background in `index.html`

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## License

MIT
