import React from 'react';
import axios from 'axios';
import './Home.css'


class Contact extends React.Component {
  
   constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        
      }
     }
   
     handleSubmit(e){
       e.preventDefault();
       axios({
         method: "POST", 
         url:"http://127.0.0.1:8000/userlogin", 
         data:  this.state
       }).then((response)=>{
         if (response.data.status === 'success'){
           alert("Message Sent."); 
           this.resetForm()
         }else if(response.data.status === 'fail'){
           alert("Message failed to send.")
         }
       })
     }
   
     resetForm(){
       
        this.setState({username: '', password: ''})
     }
     
     render() {
      return(
        <div className="container">
          <form className="login-form">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
      );
     }
   
     onNameChange(event) {
      this.setState({username: event.target.value})
     }
   
     onEmailChange(event) {
      this.setState({password: event.target.value})
     }
   
    
   }
   
 export default Contact;