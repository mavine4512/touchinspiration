export default {
    container:{
       backgroundColor: '#f2f2f2',
    },
    editHeader:{
        fontSize: '18',
        textAlign: 'center',
        fontWeight:'bold',
        color:'rgb(63,81,181)',
        fontFamily: 'Anton, sans-serif',
        marginTop:'5px',
        paddingTop:'10px'
    },

    inputField:{
        marginBottom:'2%',
    },
    textInput:{
        width: '90%',
        padding: '12px 20px',
        marginLeft: '30px',
        marginRight: '8px',
        display: 'inline-block',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        justifyContent:'center',
    },
    editLabel:{
        display: 'block',
        fontWeight:'bold',
        fontSize: '14px',
        // padding: '12px 20px',
        marginLeft: '30px',
    },
    btn:{
        width: '10%',
        backgroundColor:'#4CAF50',
        color: 'white',
        padding: '14px 20px',
        border: 'none',
        borderRadius: '10px',
       textTransform: 'uppercase',
       marginTop: '5px',
       marginBottom: '15px',
        marginLeft: '30px',
       cursor: 'pointer',
        '& > hover': {
            backgroundColor: '#45a049',
       }
    }
};

