import React,{useState} from 'react'
import './App.css';
import { TextField } from './TextField';
import { SelectField } from './SelectField';

const App:React.FC=()=> {
  const [value,setValue] = useState<string>('')

  function onInput(event:any){
    setValue(event.target.value)
  }


  return (
    <div className="App">
      <TextField text='Hello' person={{fisrtName: "Piyush Jain",lastName:"Jain"}} handleChange={onInput}/>
      <SelectField textInput={value}/>
    </div>
  );
}

export default App;
