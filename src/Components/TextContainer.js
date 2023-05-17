import React, { useState } from 'react';

export default function TextContainer() {
    const[text, setText] = useState("Enter your text here");
    const[style, setMyStyle] = useState({
        color : "black",
        backgroundColor : "white"
    })

    const handleOnChange = (event) =>{
        setText(event?.target?.value);
    }

    const handleUppercase = () =>{
        setText(text?.toUpperCase());
    }

    const handleLowercase = () =>{
        setText(text?.toLowerCase());
    }

    const cleartext = () =>{
        setText("");
    }

    const enableDarkMode = () =>{
       if(style.color ==="black") {
        setMyStyle({
            color : "white",
            backgroundColor : "black"
        });
       } else {
        setMyStyle({
            color : "black",
            backgroundColor : "white"
        });
       }

    }



  return (
    <>  
    <div style={style}>
    <div className="my-3" >
        <div className="mb-3">
                <div className="mb-3  text-center">
                <h1>Hi, I am your Transformer... </h1>
                <textarea className="form-control" value = {text} id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange}></textarea>
                </div>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUppercase}>Transform to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowercase}>Transform to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={cleartext}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={enableDarkMode}>Enable dark Mode</button>
    </div>
    <div className="my-3">
        <h2>Analyzer</h2>
        <p><span><b>{text.length === 0 ? 0 : text?.split(" ").length}</b> words and <b>{text.length}</b> characters</span></p>
        <p><span><b>{0.008 * text?.split(" ").length}</b> minutes read</span></p>
        <h2>Summary</h2>
        <span className="my-1">{text}</span>
    </div>
    </div>
     
    </>
   
  )
}
