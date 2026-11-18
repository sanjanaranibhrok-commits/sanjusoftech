import { useState } from "react";
import "./calculator.css";
function Calculator()
{
    const[number1,setnumber1]=useState("");
        const[number2,setnumber2]=useState("");
        const[result,setresult]=useState("");
        
        function add()
        {
            setresult(Number(number1)+Number(number2));
        }

        function sub()
        {
            setresult(Number(number1)-Number(number2));
        }

        function mul()
        {
            setresult(Number(number1)*Number(number2));
        }

        function div()
        {
            setresult(Number(number1)/Number(number2));
        }

        function mode()
        {
            setresult(Number(number1)%Number(number2));
        }

        
        
    return( 
        <div className="calculator">
            <h1>CALCULATOR</h1>
            <input type="number" placeholder="Enter First Number" value={number1} onChange={(e)=>setnumber1(e.target.value)}/>
            <input type="number" placeholder="Enter Second Number" value={number2} onChange={(e)=>setnumber2(e.target.value)}/>
            
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={mul}>*</button>
            <button onClick={div}>/</button>
            <button onClick={mode}>%</button>
            <h2>Result:{result}</h2>
            </div>
            
    );
}
export default Calculator;