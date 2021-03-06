import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '85%',
            margin: '2% auto',
            fontFamily: 'Vazir',
        },
        switchContainer: {
            width: '100%',
        },
        nav: {
            display: 'block',
            backgroundColor: theme.palette.grey[200],
            padding: theme.spacing(2),
        },
        menu: {
            width: '100%',
            display: 'block',
            position: 'relative',
            padding: 0,
            marginTop: 0,

            '& > li': {
                marginLeft: 20,
                float: 'left',
                listStyle: 'none',
            },

        },
        link:{
            color:'black',
            textDecoration:'none',
            fontWeight:'bold',
            fontSize:18,
        }
    })
);

export default useStyles;
