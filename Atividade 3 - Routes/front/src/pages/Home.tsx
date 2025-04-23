import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bem-vindo!</h1>
      <button onClick={() => navigate('/palpite')}>Clique para começar</button>
      <br />
    </div>
  );
};

export default Home;