import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        topHeaders:{
            fontWeight:'bold',
            color:'rgb(63,81,181)',
            fontSize:18,
            fontFamily: 'Anton, sans-serif',
        },
        button: {
            margin: theme.spacing(1),
            size:"small",
            fontFamily: 'Oswald, sans-serif',
        },
        headerRow:{
            backgroundColor:'lightgray'
        },
        items:{
            fontFamily: 'Oswald, sans-serif',
            fontSize:15,
        }
    })
);

export default useStyles;
