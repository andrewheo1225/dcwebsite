
import React, {useState, useEffect} from 'react';
import './App.css';



function Main(){

    const [{ email, password }, setState] = useState({ email: "", password: "" }); //creates value + method to update value

    function handleTextFieldChange({ target: { name, value } }) {
        setState(prevState => ({ ...prevState, [name]: value }));//creates the method to update value in Usestate
    }

    const showConsole = (event) =>{
        event.preventDefault();
        console.log(`Email is ${email}`);
        console.log(`Password is ${password}`);
    }

    useEffect(()=>{ //useEffect is after every render
        document.title = `${email}${password} `;
        console.log(`Email + password is ${email}${password}`);
    });

    return(
        <div className="App">

        </div>
    );
}
export default Main;
