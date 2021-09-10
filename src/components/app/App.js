import React, { Component } from 'react';
import RouteApp from '../route';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upDateItem } from '../../Redux/reducer';
import { fetchUSer } from '../../network/index';
import Loader from "react-loader-spinner";
import styles from "./styles";

class App extends Component {
    constructor() {
        super();
        this.state={
            loading:true,
            color: "#00BFFF"
        }
    }

    componentDidMount() {
        this.getEndPoint();
    }

    getEndPoint= () => {
        fetchUSer()
            .then((data) => {
                this.setState({loading: true});
                let userData = data.data
                {userData.map((user) =>{
                    if(user){
                        this.props.upDateItem(user)
                        this.setState({loading:false});
                        this.setState({data: user});
                    }else{
                        this.setState({data: []});
                    }                } )}

            })
            .catch((error) => {
                this.setState({loading:false})
                console.error('Error:', error);
            });
    }

 render(){
    return (
        <div>
            {this.state.loading?
                <div style={styles.loading}>
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={5000}
                    />
                </div> : <RouteApp/>}
        </div>
    );
}

}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
