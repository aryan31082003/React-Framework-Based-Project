import React, { useState } from 'react'

export default function (props) {
    const [text, setText] = useState('Enter text here');
    function handleupclick() {
        //console.log('upper case was clicked'+text);
        if(text!==''){
            props.showalert("Converted to uppercase successfully" ,"success")
        }
        let newtext = text.toUpperCase();
        setText(newtext)
        
    }
    function handleonChange(event) {
        //console.log("Handle On change")
        setText(event.target.value)
    }
    function handleloclick() {
        if(text!==''){
            props.showalert("Converted to lowercase successfully" ,"success")
        }
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    function clear() {
        if(text!==''){
            props.showalert("Cleared text successfully" ,"success")
        }
        let newtext = '';
        setText(newtext)
         
    }
    function tokyo() {
        if (text.trim() === '') {
        return 0;
    }

    // Split by one or more whitespace characters (space, tab, newline, etc.)
    let words = text.trim().split(/\s+/);
    
    return words.length;
    }
    function tokyo1(){
        let a=text.trim().split(/\s+/)
        let count=0
        for(let i=0 ;i<a.length;i++){
            count=count+a[i].length
        }
        return count
    }
    return (
        <>
            <div className="container1 mx-3 my-5">
                <h2 style={{display:'flex', justifyContent:'center',alignItems:"center"}}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea style={{backgroundColor: props.mode==='light'?'white':'grey' , color:props.mode==='light'?'black':'white'}} className="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button onClick={handleupclick} className="btn btn-primary">Uppercase</button>
                <button className="btn btn-primary mx-5" onClick={handleloclick}>Lowercase</button>
                <button className="btn btn-primary" onClick={clear}>Clear Text</button>
            </div>
            <div className="container my-3 ">
                <h3>Here is your text summary</h3>
                <p>{tokyo()} words , {tokyo1()} characters</p>
                <p>{0.008 * tokyo()} minutes to read</p>
            </div>
        </>
    )
}
