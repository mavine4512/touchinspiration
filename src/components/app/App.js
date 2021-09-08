import React, { Component } from 'react';
import RouteApp from '../route';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { upDateItem } from '../../Redux/reducer';
import {fetchUSer} from '../../network/index';

class App extends Component {

    componentDidMount() {
        this.getEndPoint();
    }

    getEndPoint= () => {
        fetchUSer()
            .then((data) => {
                let userData = data.data
                {userData.map((user) =>{
                    if(user){
                        this.props.upDateItem(user)
                        this.setState({data: user});
                    }else{
                        this.setState({data: []});
                    }                } )}

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

 render(){
    return (
        <div data-testid="App">
            <RouteApp/>
        </div>
    );
}

}

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
