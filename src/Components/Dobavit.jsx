import React from "react";

const Dobavit = ({children, ...props}) => {
    return(
        <button {...props}>
            {children}
        </button>
    )
}

export default Dobavit;