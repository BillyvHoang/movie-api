import React, { useState, useEffect } from 'react';

function App() {
  const [endPoint, setEndPoints] = useState('');
  const [container, setContainer] = useState([]);
  const [finalPoint, setFinalPoint] = useState('');

  const fetchMe = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bc14076dbfmsh75a0c9ef14c5cd5p1f98e0jsn58abf0c19ef1',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
      },
    };

    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, options)
      .then((response) => {
        console.log('work');
        return response.json();
      })
      .then((data) => {
        setContainer(data.d);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMe();
  }, [finalPoint]);

  const onChangeHandler = (e) => {
    setEndPoints(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalPoint(endPoint);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler} />
        <button type="submit">submit</button>
      </form>

      {container.map((item, index) => (
        <div key={index}>
          <img src={item.i.imageUrl} alt="" />
          <p>{item.l}</p>
        </div>
      ))}

    </div>
  );
}

export default App;
