import React from 'react';
import './Button.scss';

const Button = (props) => {
 
    const text = props.text;
    return(
        <div className='content__button'>
            <button type="button" className='button--sign-up'> {text} 
            </button>
        </div>
    ) 
    
}

export default Button;