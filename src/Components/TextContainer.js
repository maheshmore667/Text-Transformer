import React, { useState } from 'react';

export default function TextContainer(props) {
    const[text, setText] = useState("Enter your text here");
    const[style, setMyStyle] = useState({
        color : "black",
        backgroundColor : "white"
    });
    const[buttonText, setButtonText] = useState("EnableDarkMode");

    const handleOnChange = (event) =>{
        setText(event?.target?.value);
       
    }

    const handleUppercase = () =>{
        setText(text?.toUpperCase());
        if(text?.length > 0) {
            props.showAlert("Text changed to Uppercase",  " Success!!");
        }
       
    }

    const handleLowercase = () =>{
        setText(text?.toLowerCase());
        if(text?.length > 0) {
            props.showAlert("Text changed to Lowercase",  " Success!!");
        }
      
    }

    const cleartext = () =>{
        setText("");
        if(text?.length > 0) {
            props.showAlert("Text cleared",  " Success!!");
        }
        
    }

    const enableDarkMode = () =>{
       if(style.color === "black") {
        setMyStyle({
            color : "white",
            backgroundColor : "#042743"
        });
        setButtonText("DisableDarkMode");
        
       } else {
        setMyStyle({
            color : "black",
            backgroundColor : "white"
        });
        setButtonText("EnableDarkMode");
       }
    }

    const copyText = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard",  " Success!!");
    }

    const messageByMahesh = () =>{
       props.showAlert("I strongly feel You are the one I wanted to find, would you like to be mine?",  " Feeling Curious");
    }



  return (
    <>  
    <div style={style}>
    <div className="my-3" >
        <div className="mb-3">
                <div className="mb-3  text-center">
                <h1>Hi, I am your Transformer... </h1>
                <textarea className="form-control" value = {text} id="textToTransform" rows="8" onChange={handleOnChange}></textarea>
                </div>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUppercase}>Transform to Uppercase</button>
    <button className="btn btn-primary mx-2 my-1" onClick={handleLowercase}>Transform to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={cleartext}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={enableDarkMode}>{buttonText}</button>
        <button className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={messageByMahesh}>Message by Mahesh</button>
    </div>
    <div className="my-3">
        <h2>Analyzer</h2>
        <p><span><b>{text.length === 0 ? 0 : text?.split(/\s+/).filter(word => word !== '').length}</b> words and <b>{text.length}</b> characters</span></p>
        <p><span><b>{0.008 * text?.split(" ").filter(word => word !== '').length}</b> minutes read</span></p>
        <h2>Summary</h2>
        <span className="my-1">{text}</span>
    </div>
    </div>
     
    </>
   
  )
}
