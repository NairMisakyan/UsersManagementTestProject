import React, { useContext} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from "@material-ui/core/TableCell";
import DeleteRoundedIcon  from '@material-ui/icons/DeleteForeverSharp';
import Typography from "@material-ui/core/Typography";
import {UserContext} from "../context/UserContext";
import NewUser from "./NewUser";
import SwapVertIcon from '@material-ui/icons/SwapVert';
import _ from 'lodash';


const UsersManagementPage = () =>{

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            width: '120px',
            textAlign:'center',
            fontSize: 18,
        },
        body: {
            fontSize: 18,
            width: '120px',
            textAlign:'center'

        },
    }))(TableCell);
    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);
    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });
    const classes = useStyles();

    const [users, setUsers] = useContext(UserContext);

    const onRemove = (clientID) =>{
        setUsers({ user: users.user.filter(v => v.clientID !== clientID)})

    }

    const onSort = (sortField) =>{
        const usersClone = users.user.concat();
        const sortType = users.sort === 'asc' ? 'desc' : 'asc' ;
        const orderedData = _.orderBy( usersClone, sortField, sortType);
        setUsers({
            user: orderedData,
            sort:sortType,
            sortField
        })
    }

    return(
        <div className='user-wrapper'>
            <Typography variant='h4' align='left'>Users</Typography>
            <NewUser />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell >
                                Client ID
                                <span onClick = {() => onSort('clientID')}><SwapVertIcon fontSize='default'/></span>
                            </StyledTableCell>
                            <StyledTableCell align="right" >
                                User Name
                                <span onClick = {() => onSort('username')}><SwapVertIcon fontSize='default'/></span>
                            </StyledTableCell>
                            <StyledTableCell align="right" >
                                Currency
                                <span onClick = {() => onSort('currency')}><SwapVertIcon fontSize='default'/></span>
                            </StyledTableCell>
                            <StyledTableCell align="right" >
                                Partner
                                <span onClick = {() => onSort('partner')}><SwapVertIcon fontSize='default'/></span>
                            </StyledTableCell>
                            <StyledTableCell align="right">...</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {users.user.map((u) => (
                            <StyledTableRow key={u.clientID }>
                                <StyledTableCell component="th" scope="row">
                                    {u.clientID}
                                </StyledTableCell>
                                <StyledTableCell align="right">{u.username}</StyledTableCell>
                                <StyledTableCell align="right">{u.currency}</StyledTableCell>
                                <StyledTableCell align="right">{u.partner}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <div style={{textAlign:'center'}} onClick={() => onRemove(u.clientID)}>
                                        <DeleteRoundedIcon  color='secondary' />
                                    </div>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default UsersManagementPage;