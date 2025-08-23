# 🎮 Konami Code Integration - Portfolio-Style Theme Switching

## Overview

The Terminal UI Design System now includes full Konami code integration that mirrors your portfolio's functionality. Enter the classic cheat code sequence to seamlessly switch between Matrix and TRON themes with visual feedback and animations.

## Features

### ✅ **Automatic Theme Switching**
- **Matrix → TRON**: Enter Konami code to activate cyberpunk TRON mode
- **TRON → Matrix**: Enter code again to return to terminal Matrix mode
- **Persistent**: Theme preference saved to localStorage
- **Global**: Works across all pages and components

### ✅ **Visual Feedback System**
- **Real-time Progress**: Live progress bar showing sequence completion
- **Step Indicators**: Visual badges showing each key in the sequence
- **Success Notifications**: Animated alerts when code is activated
- **Theme Indicators**: Clear visual cues showing current theme state

### ✅ **Enhanced User Experience**
- **Progress Tracking**: Shows exactly which keys have been entered
- **Smart Input Handling**: Ignores input fields to prevent interference
- **Auto-reset**: Sequence resets after timeout or incorrect input
- **Sound Integration**: Works with component sound effect callbacks

## Usage

### Basic Implementation
```tsx
import { ThemeProvider, useKonami, useTheme } from '@jonmatum/terminal-ui';

function App() {
  return (
    <ThemeProvider defaultTheme="matrix" enableKonami>
      <YourApp />
    </ThemeProvider>
  );
}

function YourComponent() {
  const { mode } = useTheme();
  const { isActive, progress } = useKonami();
  
  return (
    <div>
      <p>Current theme: {mode}</p>
      <p>Konami progress: {Math.round(progress * 100)}%</p>
      {isActive && <p>🎮 Konami mode active!</p>}
    </div>
  );
}
```

### Advanced Integration
```tsx
const { isActive, sequence, progress, reset } = useKonami({
  onActivate: () => {
    console.log('🎮 TRON mode activated!');
    // Custom activation logic
  },
  onDeactivate: () => {
    console.log('🔄 Back to Matrix mode');
    // Custom deactivation logic
  },
  resetTimeout: 3000, // Custom timeout
});
```

## Konami Code Sequence

The classic sequence that activates the theme switch:

```
↑ ↑ ↓ ↓ ← → ← → B A
```

**Keyboard Keys:**
- `ArrowUp` `ArrowUp` `ArrowDown` `ArrowDown`
- `ArrowLeft` `ArrowRight` `ArrowLeft` `ArrowRight`
- `KeyB` `KeyA`

## Demo Features

### 🎯 **Portfolio Demo Tab**
- **Live Progress Indicator**: Shows real-time sequence progress
- **Theme Change Notifications**: Animated alerts when themes switch
- **Enhanced Visual Effects**: TRON mode features glowing text and special effects
- **Interactive Components**: All components respond to theme changes instantly

### 🎮 **Konami Code Tab**
- **Detailed Progress Tracking**: Step-by-step sequence visualization
- **Statistics Dashboard**: Activation count, current theme, last activation time
- **Instructions Guide**: Complete how-to with visual examples
- **Manual Controls**: Reset and manual toggle options for testing
- **Technical Details**: Implementation explanation and architecture

### ✨ **Visual Enhancements**
- **Progress Bars**: Animated progress indicators with theme-aware colors
- **Badge System**: Color-coded sequence steps (completed vs pending)
- **Success Animations**: Pulse effects and notifications on activation
- **Theme Transitions**: Smooth color and effect transitions between modes

## Integration with Portfolio

This implementation provides the same seamless experience as your portfolio:

1. **Identical Sequence**: Same classic Konami code pattern
2. **Theme Switching**: Matrix ↔ TRON mode switching
3. **Visual Feedback**: Progress tracking and success notifications
4. **Global Functionality**: Works throughout the entire application
5. **Persistent State**: Theme preference remembered across sessions

## Technical Architecture

### **useKonami Hook**
- Listens for global keyboard events
- Tracks sequence progress and validation
- Provides activation callbacks and state management
- Handles timeout and reset functionality

### **ThemeProvider Integration**
- Automatic theme switching on Konami activation
- localStorage persistence for theme preferences
- Global theme state management across components
- CSS custom property updates for instant visual changes

### **Component Integration**
- All components automatically respond to theme changes
- Enhanced visual effects in TRON mode (glows, gradients)
- Sound effect integration with interactive components
- Consistent styling across the entire component library

## Try It Now!

1. **Start the Demo**: `pnpm dev` in the demo directory
2. **Navigate to Portfolio Demo**: Click the "Portfolio Demo" tab
3. **Enter the Sequence**: Type `↑ ↑ ↓ ↓ ← → ← → B A`
4. **Watch the Magic**: See the instant theme switch to TRON mode!
5. **Explore Features**: Try the Konami Code tab for detailed tracking

The demo at `http://localhost:3002/terminal-ui/` now provides the complete portfolio-style Konami code experience! 🚀
