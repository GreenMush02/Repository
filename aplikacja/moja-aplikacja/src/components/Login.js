
import React,{ useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';



const Login = () => {

const [login,setLogin] = useState ("");
const [password,setPassword] = useState ("");



let history = useHistory () ;

const onLogin = () => {

if (login =="Dominik" && password=="123") {

alert("zalogowano")
history.push("/players")

}else {

    alert("nieprawidłowy login lub hasło");
}
}

const onSetLogin = (e) => {

setLogin(e.target.value);

}

const onSetPassword = (e) => {

setPassword(e.target.value);

}





return (

<Card title="Logowanie do Serwisu">
<br/>
<h3>Login</h3>
<InputText value={login} onChange={onSetLogin} />
<h3>Hasło</h3>
<Password value={password} onChange={onSetPassword} />
<br/>
<br/>
<br/>
<Button label="zaloguj się" onClick={onLogin}></Button>

</Card>















);






























}

export default Login;