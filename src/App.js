
import React, {useReducer} from 'react';
import './App.css';
const initialValue = 0;
const reducer = (state, action) =>{
      switch(action){
        case 'Increment' : return state+1;
        case 'Decrement' : return state-1;
        case 'Reset' : return 0;
        default : throw new Error('Unexpected action');
      }
  }
function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <h1>{count}</h1>



      <button onClick={()=> dispatch('Increment')}>Increment</button>
      <button onClick={()=> dispatch('Decrement')}>Decrement</button>
      <button onClick={()=> dispatch('Reset')}>Reset</button>

    </>
  );
}

export default App;
