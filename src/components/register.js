import React from 'react';


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
 
  
class register extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        firstName: null,
       
        
        email: null,
        password: null,
        formErrors: {
          firstName: "",
        
          
          email: "",
          password: ""
        }
      };
    }

    handleSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--
            First Name: ${this.state.firstName}

            Email: ${this.state.email}
            Password: ${this.state.password}
          `);
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
      };
    
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "firstName":
            formErrors.firstName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
         
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "password":
            formErrors.password =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
    
      render() {
        const { formErrors } = this.state;



    return (
      <div class="container">
<div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">Register</div>
                            <div class="card-body">

                                <form  class="form-horizontal" onSubmit={this.handleSubmit} noValidate>

                                    <div class="form-group">
                                    <div className="firstName">

                                        <label for="name" class="cols-sm-2 control-label">Your Name</label>
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                                <input  className={formErrors.firstName.length > 0 ? "error" : null}
                                                type="text" class="form-control" name="firstName" id="name" placeholder="Enter your Name"  
                                                noValidate
                                                    onChange={this.handleChange}
                                                    />
                                                 {formErrors.firstName.length > 0 && (
                                                <span className="errorMessage">{formErrors.firstName}</span>
                                                 )}
                                                
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                    <div className="email">
                                        <label for="email" class="cols-sm-2 control-label">Your Email</label>
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                                <input 
                                                className={formErrors.email.length > 0 ? "error" : null}
                                                
                                                type="email" class="form-control" name="email" id="email" placeholder="Enter your Email" noValidate
                                                onChange={this.handleChange} />
                                                {formErrors.email.length > 0 && (
                                                         <span className="errorMessage">{formErrors.email}</span>
                                                    )}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="username" class="cols-sm-2 control-label">Username</label>
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                                <input type="text" class="form-control" name="username" id="username" placeholder="Enter your Username" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="cols-sm-2 control-label">Password</label>
                                        <div class="cols-sm-10">
                                            <div class="input-group">


                                            
                                            

                                                <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                <input
                                                className={formErrors.password.length > 0 ? "error" : null}
                                                type="password" class="form-control" name="password" id="password" placeholder="Enter your Password" 
                                                noValidate onChange={this.handleChange} />
                                                {formErrors.password.length > 0 && (
                                                  <span className="errorMessage">{formErrors.password}</span>
              )}
                                           
                                           
                                        </div>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                            
                                                <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                <input  type="password" class="form-control" name="confirm" id="confirm" placeholder="Confirm your Password" />
                                            </div>
                                            </div>
                                        
                                    </div>
                                    <div class="form-group ">
                                    <div className="createAccount">
                                        <button type="button" class="btn btn-primary btn-lg btn-block login-button">Register</button>
                                    </div>
                                    </div>
                                    <div class="login-register">
                                        <a href="">Login</a>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
</div>

  );
  }
}
export default register;


