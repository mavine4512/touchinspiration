import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        topHeaders:{
            fontWeight:'bold',
            color:'black',
            fontSize:18,
        },
        button: {
            margin: theme.spacing(1),
            size:"small"
        },
    })
);

export default useStyles;
