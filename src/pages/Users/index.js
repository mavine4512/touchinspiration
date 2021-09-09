import React, { useEffect, useState } from 'react';
import {
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
} from '@material-ui/core';
import { upDateItem } from '../../Redux/reducer';
import Paper from '@material-ui/core/Paper';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

const Users = (props) => {

    const { topHeaders } = useStyles();
    const [users, setUsers] = useState([]);

    const history = useHistory();

    useEffect(() => {
        if (props.data){
            setUsers(props.data);
        }
    }, []);

    function editUser(user){
     history.push('/EditUser',user)
    }

    function getColumns(user,index) {
        return (
            <TableBody key={ index } data-testid="tableBody" >
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="left">{user.occupation}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.bio}</TableCell>
                <TableCell align="left">{user.created_at}</TableCell>
                <TableCell align="left">{user.updated_at}</TableCell>
                <TableCell align="left">
                    <Button onClick={()=>{ editUser(user)}} variant="contained" size="small" color="primary">
                      Edit
                    </Button>
                </TableCell>
            </TableBody>
        );
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell className={topHeaders}>Name</TableCell>
                        <TableCell className={topHeaders} align="left">Occupation</TableCell>
                        <TableCell className={topHeaders} align="left">Email</TableCell>
                        <TableCell className={topHeaders} align="left">Bio</TableCell>
                        <TableCell className={topHeaders} align="left">Created at</TableCell>
                        <TableCell className={topHeaders} align="left">Updated at</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                </TableHead>
                {users.map((user, index) => getColumns(user, index))}
            </Table>
        </TableContainer>
    );
};

const mapStateToProps = state => {
    return {
        data: state.dataState.data,
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            upDateItem,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Users);
