# 🎪 EFL Learning Game - Letters C & G

A vibrant, Sesame Street-inspired educational game designed to help children learn English letters C and G through interactive gameplay.

![Game Screenshot](https://via.placeholder.com/600x400/FF6B9D/FFFFFF?text=EFL+Learning+Game)

## 🌟 Features

- **🎨 Colorful & Kid-Friendly**: Bright colors and playful animations inspired by Sesame Street
- **🎯 Educational Focus**: Tests key vocabulary and introduces basic sentence structures
- **🔄 Smart Learning**: Tracks mistakes and re-asks questions until mastered
- **🎮 Interactive Gameplay**: Multiple question types keep children engaged
- **📱 Responsive Design**: Works on desktop, tablet, and mobile devices

## 🎓 Learning Objectives

- Letter recognition (C and G)
- Vocabulary building (cookie, car, goat, etc.)
- Basic sentence structures ("Is this a...?")
- Article usage (A vs An)

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/efl-game.git
cd efl-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🎯 How to Play

1. **Answer Questions**: Children answer various types of questions about letters and words
2. **Learn from Mistakes**: Wrong answers are tracked and re-asked for extra practice
3. **Celebrate Success**: Correct answers trigger fun celebrations and encouraging messages
4. **Complete the Game**: Finish all questions to see your final score with stars!

## 🛠️ Technology Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling and animations
- **Lucide React** - Beautiful icons
- **JavaScript/JSX** - Programming language

## 📁 Project Structure

```
efl-game/
├── public/
├── src/
│   ├── components/
│   │   └── EFLGame.jsx     # Main game component
│   ├── App.jsx             # Root component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Adding New Questions

Edit the `allQuestions` array in `src/components/EFLGame.jsx`:

```javascript
{
  id: 13,
  type: 'letter-start',
  question: 'Does cat start with the letter C?',
  options: ['Yes', 'No'],
  correct: 'Yes',
  icon: '🐱',
  word: 'cat',
  encouragement: 'Cats meow and start with C!'
}
```

### Changing Colors

Modify the Tailwind classes in the component or update `tailwind.config.js` for custom colors.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍🏫 For Educators

This game is designed for:
- **Age Group**: 4-8 years old
- **Skill Level**: Beginner English learners
- **Duration**: 5-15 minutes per session
- **Focus**: Letter recognition and basic vocabulary

### Educational Benefits

- Reinforces letter-sound associations
- Builds vocabulary through repetition
- Introduces sentence patterns
- Provides immediate feedback
- Encourages learning through play

## 🎉 Acknowledgments

- Inspired by Sesame Street's educational approach
- Designed for EFL (English as Foreign Language) learners
- Built with love for young learners everywhere

---

Made with ❤️ for children learning English