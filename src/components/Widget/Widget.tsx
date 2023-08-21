import { useState, useEffect } from 'react';
import axios from 'axios';

import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import './Widget.scss';

function Widget() {
  const [joke, setJoke] = useState('One super hilarious joke');
  const [loading, setLoading] = useState(true);

  async function fetchJoke() {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/random`
      );
      if (response) {
        setJoke(response.data.value);
        setLoading(false);
      }
    } catch (error) {
      setJoke(`Error : ${error}`);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <article className="widget">
      {loading ? <Loader /> : <p className="widget-content">{joke}</p>}
      <Button fetchJoke={() => fetchJoke()} />
    </article>
  );
}

export default Widget;
