import { useEffect, useState } from 'react';

const Historico = () => {
  const [history, setHistory] = useState<number[][]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('mega-sena-history');
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      <h2>Histórico de sugestões</h2>
      <ul>
        {history.map((s, index) => (
          <li key={index}>{s.join(' - ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default Historico;