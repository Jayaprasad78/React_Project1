
import './App.css';
import { useState } from'react';

function App() {

  const [name, setName] = useState('');
  const [fullname, setfullname] = useState('');

  const inputEvent = (o1) => {
    console.log(o1.target.value);
    setName(o1.target.value)
  }

  const onsubmit = () => {
      setfullname(name);
    }
  return(

    <>
      <div>
        <h1>  Hello {fullname} </h1>
        <input type="text" placeholder='Enter your name'
        onChange={inputEvent}
        value={name}
        />
        <button onClick={onsubmit}>Submit</button>
      </div>
      
    </>
    
  );
}

export default App;
