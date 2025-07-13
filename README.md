# 🎯 Gradient Circle Guessing Game

A visually stunning number guessing game featuring a dynamic gradient circle that provides intuitive "hot and cold" visual feedback. Built with modern web technologies and designed for an immersive gaming experience.

## 🌟 Features

### Visual Design
- **Rotating Gradient Circle**: Beautiful conic gradient centerpiece with smooth rotation animation
- **Dynamic Color Feedback**: Circle changes color and glow intensity based on guess proximity
- **Glassmorphism UI**: Modern frosted glass effects with backdrop blur
- **Smooth Animations**: Pulse, shake, fade-in, and rotation effects throughout
- **Confetti Celebration**: Animated confetti burst when you win
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Gameplay
- **Multiple Difficulty Levels**:
  - Easy: 1-100 (Perfect for beginners)
  - Medium: 1-500 (Moderate challenge)
  - Hard: 1-1000 (Expert level)
- **Smart Feedback System**:
  - 🔥 Very Hot (within 5% of target)
  - ♨️ Hot (within 15% of target)
  - 🌡️ Warm (within 30% of target)
  - ❄️ Cool (within 50% of target)
  - 🧊 Cold (beyond 50% of target)
- **Comprehensive Statistics**: Track current attempts, best score, and games played
- **Persistent Storage**: Stats saved using localStorage

### User Experience
- **Input Validation**: Prevents invalid guesses with visual feedback
- **Keyboard Support**: Enter key to submit guesses
- **Visual Proximity Indicators**: Circle intensity increases as you get closer
- **Instant Feedback**: Real-time color changes and text hints
- **Game State Management**: Proper disabled states and game flow

## 🎮 How to Play

1. **Choose Difficulty**: Select Easy (1-100), Medium (1-500), or Hard (1-1000)
2. **Enter Your Guess**: Type a number in the input field
3. **Watch the Circle**: The gradient circle will change colors and glow based on how close you are
4. **Follow the Hints**: Use the "hot/cold" feedback to refine your next guess
5. **Win the Game**: Find the target number and celebrate with confetti!
6. **Track Progress**: Monitor your stats and try to beat your best score

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation
1. Download the HTML file
2. Open it in your preferred web browser
3. Start playing immediately!

### Alternative Setup
```bash
# If you want to serve it locally
python -m http.server 8000
# or
npx serve .
```

## 🎨 Visual Feedback System

The game uses a sophisticated visual feedback system based on proximity:

| Proximity | Color Theme | Shadow Intensity | Feedback Text |
|-----------|-------------|------------------|---------------|
| 90-100% | Red (#ff1744) | Maximum | 🔥 Very Hot! |
| 70-89% | Orange (#ff9800) | High | ♨️ Hot! |
| 50-69% | Yellow (#ffeb3b) | Medium | 🌡️ Warm |
| 30-49% | Blue (#2196f3) | Low | ❄️ Cool |
| 0-29% | Purple (#9c27b0) | Minimum | 🧊 Cold! |

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Advanced styling with gradients, animations, and glassmorphism
- **Vanilla JavaScript**: Game logic and DOM manipulation
- **localStorage**: Persistent statistics storage

### Key Features Implementation
- **Conic Gradients**: Creates the beautiful rotating circle effect
- **Backdrop Filter**: Glassmorphism blur effects
- **CSS Animations**: Smooth transitions and keyframe animations
- **Event Delegation**: Efficient event handling
- **Local Storage**: Persistent game statistics

### Browser Compatibility
- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

## 📱 Responsive Design

The game adapts to different screen sizes:
- **Desktop**: Full-featured experience with optimal spacing
- **Tablet**: Adjusted layout for touch interactions
- **Mobile**: Compact design with touch-friendly controls

## 🎯 Game Statistics

The game tracks three key metrics:
- **Current Attempts**: Number of guesses in the current game
- **Best Score**: Fewest attempts to win a game (persistent)
- **Games Played**: Total number of completed games (persistent)

## 🛠️ Customization

### Difficulty Levels
Easily modify difficulty by changing the `maxRange` values:
```javascript
// In the difficulty selector event listener
this.maxRange = parseInt(e.target.dataset.range);
```

### Visual Themes
Customize colors by modifying the CSS variables:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --circle-gradient: conic-gradient(from 0deg, #ff6b6b, #ffd93d, #6bcf7f...);
}
```

### Feedback Sensitivity
Adjust the proximity thresholds in the `handleIncorrectGuess` method:
```javascript
if (percentage < 5) hint = '🔥 Very Hot!';
else if (percentage < 15) hint = '♨️ Hot!';
// Modify these values to change sensitivity
```

## 🐛 Known Issues

- None currently reported

## 🤝 Contributing

This is a standalone HTML file project. To contribute:
1. Fork the project
2. Make your changes
3. Test thoroughly across browsers
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by classic "hot and cold" guessing games
- Design influenced by modern glassmorphism trends
- Built with accessibility and user experience in mind

## 📞 Support

For issues or suggestions, please create an issue in the project repository.

---

**Enjoy the game and happy guessing!** 🎉
