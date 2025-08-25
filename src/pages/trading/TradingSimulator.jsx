import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TradingSimulator() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/trading');
  }, [navigate]);

  return null;
}

export default TradingSimulator;
