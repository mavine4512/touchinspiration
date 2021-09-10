import React, { Component } from 'react';
import {network} from '../../network/'
import styles from './styles.js'
import axios from "axios";

class EditUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            occupation:'',
            email:'',
            bio:''
        }
        this.handleOccupationChange = this.handleOccupationChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleBioChange = this.handleBioChange.bind(this);
    }

    componentDidMount(){
        let data=this.props.location.state;

        this.setState({
            name: data.name,
            occupation: data.occupation,
            email: data.email,
            bio: data.bio
        })
    }


    editUserDetails( ){
        axios.request({
            method:'patch',
            url:`https://ti-react-test.herokuapp.com/users/` + this.props.location.state.id,
            data:  {
                "bio":this.state.bio,
                "email":this.state.email,
                "name":this.state.name,
                "occupation":this.state.occupation
            }

        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log('Error2',err));
    }


    onSubmit(e){
        const newData = {
            name: this.refs.name.value,
            occupation: this.refs.occupation.value,
            email: this.refs.email.value,
            bio: this.refs.bio.value,
        }
        this.editUserDetails(newData);
        e.preventDefault();
    }

    handleNameChange(text) {
        this.setState({name: text.target.value})
    }

    handleEmailChange(text) {
        this.setState({email: text.target.value})
    }

    handleOccupationChange(text){
        this.setState({occupation: text.target.value})
    }

    handleBioChange(text){
        this.setState({bio: text.target.value})
    }

    render(){
        return (
            <div style={styles.container} >
                <h3 style={styles.editHeader}>Edit User Details</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div style={styles.inputField} >
                        <label style={styles.editLabel} htmlFor="name">Name</label>
                        <input style={styles.textInput} type="text" name="name" ref="name" value={this.state.name} onChange={(name)=>this.handleNameChange(name)} />
                    </div>
                    <div style={styles.inputField} >
                        <label style={styles.editLabel} htmlFor="occupation">Occupation</label>
                        <input style={styles.textInput} type="text" name="occupation" ref="occupation" value={this.state.occupation} onChange={(occupation)=>this.handleOccupationChange(occupation)} />
                    </div>
                    <div style={styles.inputField} >
                        <label style={styles.editLabel} htmlFor="email">Email</label>
                        <input style={styles.textInput} type="text" name="email" ref="email" value={this.state.email} onChange={(email) => this.handleEmailChange(email)} />
                    </div>
                    <div style={styles.inputField} >
                        <label  style={styles.editLabel} htmlFor="bio">Bio</label>
                        <input style={styles.textInput} type="text" name="bio" ref="bio" value={this.state.bio} onChange={(bio)=>this.handleBioChange(bio)} />
                    </div>
                    <div >
                        <input style={styles.btn}  type="submit" value="Save"  />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditUser;

