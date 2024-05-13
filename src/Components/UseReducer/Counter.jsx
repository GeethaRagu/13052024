import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';
import { Button } from 'react-bootstrap';

const Counter = () => {

    const[state,dispatch] = useReducer(ReducerAction,0);
    
    return (
        <div className="counter">
            <h1>Counter</h1>
             
            <p>Value : <strong>{state}</strong>  <Button onClick={()=>{dispatch({type:'RESET',payload:0})}}>RESET</Button></p>
            
          <p> <Button variant="success" onClick={()=>{dispatch({type:'INC',payload:10})}}>+</Button> 
           {state>0 ? (<Button variant="danger" onClick={()=>{dispatch({type:'DEC',payload:5})}}>-</Button>) 
           : 
           (<Button variant="danger">-</Button>)}</p>
           

          
           <br/>
           <p><small>Note: This counter increments value by 10 and decrements value by 5</small></p>
        </div>
    );
};

export default Counter;