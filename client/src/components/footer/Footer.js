import React from 'react'
import { useState } from 'react'
import '../../style/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState ('')

    function handleInput (e) {
        setInputValue(e.target.value)
    }
    function handleBlur (){
        if(!inputValue.includes('@')){
            alert("Invalid email address")
        }
    }
    return (
        <footer className='mfl-footer'>
    <div className= 'mfl-footer-element'>
        MindFlow, your wellbeing companion
    </div>
    <div className='mfl-footer-element'>To hear from us, leave us your details here :</div>
        <input
        placeholder='Leave your email here'
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
    />
        </footer>
)
}

export default Footer