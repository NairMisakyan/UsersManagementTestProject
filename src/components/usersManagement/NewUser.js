import React, {useContext, useState} from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {UserContext} from "../context/UserContext";

const NewUser = () =>{
    const [users,setUsers] = useContext(UserContext);
    const [newUser, setNewUser] = useState( {
        clientID:Math.floor(Math.random() * 10000000000),
        username:'',
        currency:'',
        partner:''
    })
    const changeHandler  = (e) => {
        setNewUser({...newUser, [e.target.name] : e.target.value})
    }


    const submitHandler = (e) =>{
        e.preventDefault();
        if (newUser.username === '' || newUser.currency === '' || newUser.partner === ''){
            alert('You have unfilled filed(s)')
        }else{
            setUsers({user: [...users.user, newUser]});
            setNewUser({
                clientID: Math.floor(Math.random() * 10000000000),
                username: '',
                currency: '',
                partner: ''
            });
        }

    }



    return(
        <form onSubmit={(e)=> submitHandler(e)}>
            <Input  color='primary'
                    margin='dense'
                    placeholder='User Name'
                    type='text'
                    required={true}
                    style={{margin:'20px', width:'300px'}}
                    name='username'
                    value={newUser.username}
                    onChange={(e) => changeHandler(e)}/>
            <Input  color='primary'
                    margin='dense'
                    placeholder='Currency'
                    type='text'
                    required={true}
                    style={{margin:'20px', width:'300px'}}
                    name='currency'
                    value={newUser.currency}
                    onChange={(e) => changeHandler(e)}/>
            <Input  color='primary'
                    margin='dense'
                    placeholder='Partner'
                    type='text'
                    style={{margin:'20px', width:'300px'}}
                    name='partner'
                    required={true}
                    value={newUser.partner}
                    onChange={(e) => changeHandler(e)}/>
            <Button variant='outlined' color='primary' type='submit'
                    onClick = {(e)=> submitHandler(e)}>Add User</Button>
        </form>
    )
}

export default NewUser;