import React, {useState, createContext} from 'react';

export const UserContext = createContext('');
export const UserProvider = (props) =>{
    const [users, setUsers] = useState({
        user: [
            {clientID: 1167408056, username: 'Timur10', currency: 'TRY', partner: 'musclebet'},
            {clientID: 1167408149, username: 'Arthur11', currency: 'USD', partner: 'betmomo'},
            {clientID: 1167408086, username: 'Timur12', currency: 'IDR', partner: 'vbetUK'},
            {clientID: 1167408087, username: 'Hasan13', currency: 'CNY', partner: 'loveBet'},
            {clientID: 1167408088, username: 'Timur14', currency: 'USD', partner: 'musclebet'}
        ],
        sort: 'asc',
        sortField:'id'
    });


    return(
        <UserContext.Provider value={[users, setUsers]}>
    {props.children}
</UserContext.Provider>

)
}