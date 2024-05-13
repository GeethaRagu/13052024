import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';
import { Button } from 'react-bootstrap';

const Counter = () => {

    const[state,dispatch] = useReducer(ReducerAction,0);
    
    return (
        <div>
             <p>This counter increments value by 10 and decrements value by 5 </p>
           Value : {state}<br/>
            <input type="text" value={state} id="result"/>
           <Button variant="success" onClick={()=>{dispatch({type:'INC',payload:10})}}>+</Button> 
           <Button variant="danger" onClick={()=>{dispatch({type:'DEC',payload:5})}}>-</Button>
           <Button onClick={()=>{dispatch({type:'RESET',payload:0})}}>RESET</Button>
        </div>
    );
};

export default Counter;