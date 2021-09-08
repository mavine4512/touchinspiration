import React, { Component } from 'react';
import axios from 'axios';
import {updateUser,network} from '../../network/'

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

    // editUserDetails() {
    //     const id = this.props.location.state.id;
    //     const data = {
    //         "bio": this.state.bio,
    //         "email": this.state.email,
    //         "name": this.state.name,
    //         "occupation": this.state.occupation
    //     };
    //
    //     network('users', id, 'patch',data).then(res=>{
    //         console.log(res)
    //         this.props.history.push('/');
    //     }).catch(e)
    // }

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
            <div>

                <h1>Edit User details</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" value={this.state.name} onChange={(name)=>this.handleNameChange(name)} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="occupation" ref="occupation" value={this.state.occupation} onChange={(occupation)=>this.handleOccupationChange(occupation)} />
                        <label htmlFor="occupation">Occupation</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="email" ref="email" value={this.state.email} onChange={(email) => this.handleEmailChange(email)} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="bio" ref="bio" value={this.state.bio} onChange={(bio)=>this.handleBioChange(bio)} />
                        <label htmlFor="bio">Bio</label>
                    </div>
                    <input type="submit" value="Save" className="btn" />
                </form>
            </div>
        )
    }
}

export default EditUser;

