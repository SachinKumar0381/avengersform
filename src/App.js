import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import Tables from './components/Tables';

function App() {
  const [form,setForm] = useState(true);

  const handleswitch=()=>{
    if(form==true)
    {
      setForm(false)
    }
    else
    {
      setForm(true)
    }
  }

  return (
    <div className="App">
      <h1>Avengers</h1>
      <button onClick={handleswitch}>{form?"Go To Form" : "Go To Table"}</button><br/><br/>
      {!form && <Form/>}
      {form && <Tables/>}
    </div>
  );
}

export default App;
