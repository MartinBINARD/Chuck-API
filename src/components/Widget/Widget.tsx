import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '../Button/Button';
import './Widget.scss';

function Widget() {
  const [joke, setJoke] = useState('One super hilarious joke');

  async function fetchJoke() {
    try {
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/random`
      );
      setJoke(response.data.value);
    } catch (error) {
      setJoke(`Error : ${error}`);
    }
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <article className="widget">
      <p className="widget-content">{joke}</p>
      <Button fetchJoke={() => fetchJoke()} />
    </article>
  );
}

export default Widget;
