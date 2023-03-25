import React, { useRef } from 'react';
import '../styles/main.css'

export function Calculator(){

    //Function to add value to the input

    let result = useRef(null)

    function insert(value){

        if (result.current.value === 'Nothing to calculate'){
            result.current.value = value
        }else {
            result.current.value += value
        }
      
    }

    //Function to reset value from input
    function resetValue(){
        result.current.value = '';
    }

    //Function to remove the last character from input
    function back(){
        result.current.value = result.current.value.slice(0, -1)
    }

    //Function to calculate the result if the input value is not empty
    function calculate(){

        if (result.current.value !== ''){
            result.current.value = eval(result.current.value);

        }else{
            result.current.value = "Nothing to calculate";
        }
    }

    return(

        <div className='container'>

            <h1>Calculator</h1>

            <div className='calculator-container'>                

                <input ref={result} disabled className='result' id="result"/>
                <button onClick={resetValue} className='btn' id="btn1">C</button>
                <button onClick={()=> insert('7')} className='btn' id="btn2">7</button>
                <button onClick={()=> insert('8')} className='btn' id="btn3">8</button>
                <button onClick={()=> insert('9')} className='btn' id="btn4">9</button>
                <button onClick={()=> insert('*')} className='btn' id="btn5">x</button>
                <button onClick={()=> insert('4')} className='btn' id="btn6">4</button>
                <button onClick={()=> insert('5')} className='btn' id="btn7">5</button>
                <button onClick={()=> insert('6')} className='btn' id="btn8">6</button>
                <button onClick={()=> insert('-')} className='btn' id="btn9">-</button>
                <button onClick={()=> insert('1')} className='btn' id="btn10">1</button>
                <button onClick={()=> insert('2')} className='btn' id="btn11">2</button>
                <button onClick={()=> insert('3')} className='btn' id="btn12">3</button>
                <button onClick={()=> insert('+')} className='btn' id="btn13">+</button>
                <button onClick={()=> insert('0')} className='btn' id="btn14">0</button>
                <button onClick={()=> insert('.')} className='btn' id="btn15">.</button>
                <button onClick={back} className='btn' id="btn16">Back</button>
                <button onClick={calculate} className='btn' id="btn17">=</button>
                <button onClick={()=> insert('/')} className='btn' id="btn18">/</button>

            </div>
            
        </div>
    );
}