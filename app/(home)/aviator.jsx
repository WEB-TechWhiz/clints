// pages/aviator.js
import { useState, useEffect } from 'react';
import styles from '../styles/Aviator.module.css';

const Aviator = () => {
  const [multiplier, setMultiplier] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);
  const [isCrashed, setIsCrashed] = useState(false);
  const [userCashOut, setUserCashOut] = useState(false);
  const [cashOutMultiplier, setCashOutMultiplier] = useState(null);

  useEffect(() => {
    let interval;
    if (gameStarted && !isCrashed && !userCashOut) {
      interval = setInterval(() => {
        setMultiplier((prev) => (Math.random() > 0.01 ? prev + 0.1 : prev));
        if (Math.random() < 0.01) {
          setIsCrashed(true);
        }
      }, 100);
    }
    if (isCrashed) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameStarted, isCrashed, userCashOut]);

  const startGame = () => {
    setMultiplier(1);
    setIsCrashed(false);
    setUserCashOut(false);
    setCashOutMultiplier(null);
    setGameStarted(true);
  };

  const cashOut = () => {
    if (!isCrashed && !userCashOut) {
      setUserCashOut(true);
      setCashOutMultiplier(multiplier.toFixed(2));
    }
  };

  return (
    <div className={styles.container}>
      <h1>Aviator Game</h1>
      <div className={styles.gameBoard}>
        <p className={styles.multiplier}>Multiplier: {multiplier.toFixed(2)}x</p>
        {isCrashed && <p className={styles.crashed}>Crashed!</p>}
        {userCashOut && <p className={styles.cashOut}>You cashed out at: {cashOutMultiplier}x</p>}
      </div>
      <div className={styles.controls}>
        {!gameStarted ? (
          <button onClick={startGame}>Start Game</button>
        ) : (
          <>
            <button onClick={cashOut} disabled={userCashOut || isCrashed}>
              Cash Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Aviator;
