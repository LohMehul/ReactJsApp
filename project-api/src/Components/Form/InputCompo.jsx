import React from 'react';

const InputCompo = (props) => {
    return ( <> <input type="text" name={props.name} id={props.id} className={props.class} /> </> );
};

export default InputCompo;