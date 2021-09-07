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
import { upDateItem,deleteItem } from '../../Redux/reducer';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        size:"small"
    },
}));

const Users = (props) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    function getEndPoint() {
                setUsers(props.data);
                setLoading(false);
            }


    useEffect(() => {
        setLoading(true);
        getEndPoint();
    }, [setUsers]);

    function getColumns(user,index) {
        console.log('user',user)
        return (
            <TableBody key={index} data-testid="tableBody">
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="left">{user.occupation}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.bio}</TableCell>
                <TableCell align="left">{user.created_at}</TableCell>
                <TableCell align="left">{user.updated_at}</TableCell>
                <TableCell align="left">
                    <Button onClick={()=>{alert('Edit')}} variant="contained" size="small" color="primary" className={classes.margin}>
                        Edit
                    </Button>
                </TableCell>
                    <TableCell align="left">
                        <DeleteIcon onClick={()=>{alert('DELETE_ITEM')}} className={classes.button} color="secondary" />
                </TableCell>

            </TableBody>
        );
    }

    return (
        <>
            {loading && <p className="loading">Loading...</p>}
            {!loading && (
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Occupation</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Bio</TableCell>
                            <TableCell align="left">Created_at</TableCell>
                            <TableCell align="left">Updated_at</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>

                    {users.map((user, index) => getColumns(user, index))}}
                </Table>
                </TableContainer>
            )}
        </>
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
            deleteItem
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Users);
