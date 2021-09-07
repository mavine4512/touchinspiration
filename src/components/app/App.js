import React, { Component } from 'react';
import RouteApp from '../route';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { upDateItem } from '../../Redux/reducer';
import fetchRandomData from '../../network/index';

class App extends Component {
 constructor(props) {
     super(props);
     this.state = {
         users:[],
         loading:false
     }
 }

    componentDidMount() {
        this.getEndPoint();
    }

    getEndPoint= () => {
        fetchRandomData()
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
