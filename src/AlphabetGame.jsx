import React, { useState, useRef } from 'react';
import './AlphabetGame.css';

const AlphabetGame = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const audioRef = useRef(null);

  const alphabetData = [
    { letter: 'A', word: 'Apple', gif: 'apple.gif', sound: 'sounds/apple.mp3' },
    { letter: 'B', word: 'Bear', gif: 'bear.gif', sound: 'sounds/bear.mp3' },
    { letter: 'C', word: 'Coin', gif: 'coin.gif', sound: 'sounds/coin.mp3' },
    { letter: 'D', word: 'Duck', gif: 'duck.gif', sound: 'sounds/duck.mp3' },
    { letter: 'E', word: 'Eye', gif: 'eye.gif', sound: 'sounds/eye.mp3' },
    { letter: 'F', word: 'Food-Truck', gif: 'food-truck.gif', sound: 'sounds/food-truck.mp3' },
    { letter: 'G', word: 'Gift', gif: 'gift.gif', sound: 'sounds/gift.mp3' },
    { letter: 'H', word: 'Home', gif: 'home.gif', sound: 'sounds/home.mp3' },
  ];

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    playSound(letter.sound);
  };

  const playSound = (soundFile) => {
    audioRef.current.src = soundFile;
    audioRef.current.load();
    audioRef.current.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  };

  return (
    <div className="alphabet-game-container">
      <div className="animation-container">
        {selectedLetter && (
          <>
            <img src={`/gifs/${selectedLetter.gif}`} alt={selectedLetter.word} />
            <p>{selectedLetter.word}</p>
          </>
        )}
      </div>
      <div className="alphabet-grid">
        {alphabetData.map(({ letter, word, gif, sound }) => (
          <button key={letter} onClick={() => handleLetterClick({ letter, word, gif, sound })}>
            {letter}
          </button>
        ))}
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default AlphabetGame;