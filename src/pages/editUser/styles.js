import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        Back:{
            backgroundColor:'blue',
            height:40,
            width:30,
        },
        topHeaders:{
            fontWeight:'bold',
            color:'black',
            fontSize:18,
        },
    })
);

export default useStyles;
