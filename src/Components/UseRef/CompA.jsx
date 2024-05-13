import React, { useState } from 'react';

const CompA = () => {
    const [data,setData] =useState('')
    const handleChange = (e) =>{
        setData(e.target.value);
    }
    return (
        <div>
            <h1>without useref hook</h1>
            <input type="text" value={data} onChange={handleChange}/>
            <p>Entered value:</p>{data}
        </div>
    );
};

export default CompA;