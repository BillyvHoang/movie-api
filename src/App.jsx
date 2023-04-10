import React, { useState } from 'react';

function App() {
  const [endPoint, setEndPoints] = useState('');
  const [container, setContainer] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bc14076dbfmsh75a0c9ef14c5cd5p1f98e0jsn58abf0c19ef1',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
    },
  };

  fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .then((data) => {
      setContainer(data);
    })
    .catch((err) => console.error(err));

  const onChangeHandler = (e) => {
    setEndPoints(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={endPoint} onChange={setEndPoints} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
