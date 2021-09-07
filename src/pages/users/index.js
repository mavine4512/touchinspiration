import React, { useEffect, useState } from 'react';
import {
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import fetchRandomData from '../../network/index';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        size:"small"
    },
}));

const Users = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    function getEndPoint() {
        fetchRandomData()
            .then((data) => {
                console.log('Success:', data);
                setUsers(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        setLoading(true);
        getEndPoint();
    }, [setUsers]);

    function getColumns(user,index) {
        return (
            <TableBody key={index} data-testid="tableBody">
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="left">{user.occupation}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.bio}</TableCell>
                <TableCell align="left">{user.created_at}</TableCell>
                <TableCell align="left">{user.updated_at}</TableCell>
                <TableCell align="left">
                    <Button variant="contained" size="small" color="primary" className={classes.margin}>
                        Edit
                    </Button>
                </TableCell>
                    <TableCell align="left">
                        <DeleteIcon className={classes.button} color="secondary" />
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

export default Users;
