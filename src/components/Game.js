import { useState, useRef } from "react";
import styles from "./Game.module.scss";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };

  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className={styles.tip}>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas(s).</p>
      <div className={styles.wordContainer}>
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <span key={index} className={styles.letter}>
              {letter}
            </span>
          ) : (
            <span key={index} className={styles.blankSquare}></span>
          )
        )}
      </div>
      <div className={styles.letterContainer}>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(event) => setLetter(event.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, index) => (
          <span key={index}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
