import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [colorPalette, setColorPalette] = useState<string[]>([]);
  const [design, setDesign] = useState<string>('');
  const [savedTheme, setSavedTheme] = useState('');

  const getRandomColor = () => {
    let code = '#';
    const colorCode = 'ABCDEF0123456789';
    for (let i = 0; i < 6; i++) {
      code += colorCode[Math.floor(Math.random() * 16)];
    }
    return code;
  };

  const generatePalette = () => {
    let colors = [];
    for (let i = 0; i < 5; i++) {
      let randomColor = getRandomColor();
      colors.push(randomColor);
    }
    setColorPalette(colors);
  };

  const generateTheme = () => {
    const designStyles = ['vintage', 'futuristic', 'minimalistic', 'Cyberpunk', 'Japanese Zen'];
    const n = designStyles.length;
    let randomDesign = designStyles[Math.floor(Math.random() * n)];
    setDesign(randomDesign);
  };

  const saveTheme = () => {
    const theme = 'Theme saved!';
    setSavedTheme(theme);

    setTimeout(() => {
      setSavedTheme('');
    }, 1000);
  };


  return (
    <div>
      <h1 style={{ color: 'white' }}>Random Theme Generation</h1>
      <div className="colorPalette">
        {colorPalette.map((color, index) => {
          return (
            <div className="palette" style={{ backgroundColor: color }} key={index}></div>
          );
        })}
      </div>
      <button className="button" onClick={generatePalette} style={{ backgroundColor: '#40403f', color: 'white', fontSize: '16px' }}>
        Generate Palette
      </button>
      <div style={{ color: 'white' }}>{design}</div>
      <button className="button" onClick={generateTheme} style={{ backgroundColor: '#40403f', color: 'white', fontSize: '16px' }}>
        Generate Theme
      </button>
      <button className="button" onClick={saveTheme} style={{ backgroundColor: '#2a4fc9', color: 'white', fontSize: '16px', marginLeft: '0%' }} >
        Save Theme
      </button>
      <div id="saved">{savedTheme}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
