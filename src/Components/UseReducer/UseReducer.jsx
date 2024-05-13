import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';
import { Button } from 'react-bootstrap';

const UseReducer = () => {
    const[state,dispatch]  = useReducer( ReducerAction,0);
    return (
        <div>
            <p>This counter increments value by 10 and decrements value by 5 </p>
            <h1>Use reducer hook</h1>
            {state}
            <Button onClick={()=>{dispatch({type:'ADD'})}}>Add</Button>
            <Button onClick={()=>{dispatch({type:'SUB'})}}>Sub</Button>
        </div>
    );
};

export default UseReducer;