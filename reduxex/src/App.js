import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement } from "./actions/CounterAction"

function App() {
  const counter=  useSelector(state => state.CounterReducer);
  const loggin = useSelector(state => state.LoggedReducer);

    const changeLogin = !loggin;
   
  const dispatch = useDispatch();
  return (
    <div className="App">
     <div>{counter}</div>
     <button onClick={ ()=> dispatch(  increment(100)     )}>add</button>
     <button onClick= { ()=> dispatch( decrement(50)   )}>remove</button>
      
      {changeLogin? <div> Du är inloggad </div>: <div>Logga in först </div> }

    </div>
  );
}

export default App;
