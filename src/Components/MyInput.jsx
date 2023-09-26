import React from "react";

const MyInput = (props) => {
    return (
        <input 
        type={props.type}
        value={props.value} 
        onChange={props.onChange} 
        placeholder={props.placeholder}
        {...props} />
    );
};

export default MyInput;