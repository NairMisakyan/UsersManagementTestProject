import React, {useState} from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router-dom";

const md5 = require('md5');

const LoginPage = () =>{
    const [state, setState] = useState( {login:'', password: ''});
    const [logged, setLogged] = useState(false)
    const changeHandler  = (e) => {
        setState({...state, [e.target.name] : e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        if (state.login === '' || state.password === ''){
            alert('You have unfilled field(s)')
        }else{
            setLogged(true)
            const token = md5(md5(e.target.name) + md5(e.target.name));
            localStorage.setItem('token', token );
        }

    }

    return(
        <div className='login-wrapper'>
            <form onSubmit={(e) => submitHandler(e)}>
                <Input color='primary'
                       margin='dense'
                       placeholder='login'
                       type='text'
                       style={{margin:'20px', width:'300px'}}
                       name='login'
                       value={state.login}
                       onChange={(e) => changeHandler(e)}/>
                <br/>
                <Input color='primary'
                       margin='dense'
                       placeholder='password'
                       type='password'
                       style={{margin:'20px', width:'300px'}}
                       name='password'
                       value={state.password}
                       onChange={(e) => changeHandler(e)}/>
                <br/>
                <Button variant='outlined' color='primary' type='submit' >
                    {logged ? <Redirect to={'/user'}/> : <Redirect to={'/login'}/>}
                    Login
                </Button>
            </form>
        </div>
    )
}
export default LoginPage;