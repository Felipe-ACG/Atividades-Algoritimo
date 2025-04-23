import { useEffect, useState } from 'react';
import { generateSuggestion } from '../utils/generateSuggestion';

const Palpite = () => {
  const [suggestion, setSuggestion] = useState<number[] | null>(null);


  const getHistory = (): number[][] => {
    const stored = localStorage.getItem('mega-sena-history');
    return stored ? JSON.parse(stored) : [];
  };

  
  const saveToHistory = (newSuggestion: number[]) => {
    const history = getHistory();
    history.push(newSuggestion);
    localStorage.setItem('mega-sena-history', JSON.stringify(history));
  };

  const newSuggestion = () => {
    const newSugg = generateSuggestion();
    saveToHistory(newSugg);
    setSuggestion(newSugg);
  };


  useEffect(() => {
    if (!suggestion) {
      const initialSuggestion = generateSuggestion();
      saveToHistory(initialSuggestion);
      setSuggestion(initialSuggestion);
    }
  }, []);

  return (
    <div>
      <h2>Palpite para a Mega-sena</h2>
      <p>{suggestion?.join(' - ')}</p>
      <button onClick={newSuggestion}>Nova sugestão</button>
    </div>
  );
};

export default Palpite;