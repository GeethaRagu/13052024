import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
    const myref = useRef();
    const mineref = useRef();
    const[data,setData] = useState('');
    useEffect(()=>{
      myref.current.focus();  
    },[])

const handleClick=()=>{
     console.log(myref.current.value);
     mineref.current  =myref.current.value;
     setData(data=>data+1);
}
    return (
        <div>
             <h1>with useref hook</h1>
            <input type="text" placeholder="Enter your name" ref={myref}/>
            <button onClick={handleClick}>Click</button>
        {mineref.current}
          </div>
    );
};

export default UseRef;