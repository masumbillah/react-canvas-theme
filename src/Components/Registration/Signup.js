/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react';
import AppHelpers from '../../tools/App-helpers';


///Start Navbar component 
const Signup = ({modalId}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const submitForm = () => {
        console.log({ name, email, phone });
       alert("Welcome, Enjoy our service!");
        //Reset form after modal closed    
        AppHelpers.closeModal(modalId);
    };

    AppHelpers.closeModalTrigger(modalId, (success)=>{
        if(success) {
            setName('');
            setEmail('');
            setPhone('');
            setPassword('');
            setConfirmPassword('');
        }
    });

    const handleInputChange = (event, fieldName)=> {
        const target = event.target;
        const value = target.value;
        
        if(fieldName === 'name') setName(value);
        if(fieldName === 'email') setEmail(value);
        if(fieldName === 'phone') setPhone(value);
        if(fieldName === 'password') setPassword(value);
        if(fieldName === 'cpassword') setConfirmPassword(value);
      }

      const disabledForm = () => {
        return !(password && confirmPassword && password === confirmPassword
             && email && isEmailValid(email) && name && isPhoneValid(phone));
      };

      const isEmailValid = (email) => {
        if(email) return AppHelpers.isValidateEmail(email);
        else return true;
      };

      const isPhoneValid = (phone) => {
        if(phone) return AppHelpers.isValidatePhone(phone);
        else return true;
      };
      
    return (
        <form className="signup-form">
            <div className="form-group">
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" required onChange={(e)=>handleInputChange(e, 'name')} value={name} placeholder="Enter name" name="name"
                className="form-control" id="name" />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" placeholder="Enter email" required
                 onChange={(e)=>handleInputChange(e, 'email')} value={email} 
                className="form-control" id="email" />
                 {
                    !isEmailValid(email)? (<small className="color-danger">Please enter valid email!</small>):''
                }
            </div>

            <div className="form-group">
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input type="phone" placeholder="Enter phone number"
                 onChange={(e)=>handleInputChange(e, 'phone')} value={phone} 
                 className="form-control" id="phone" />

                {
                    !isPhoneValid(phone)? (<small className="color-danger">Please enter valid phone!</small>):''
                }               
            </div>

            <div className="form-group">
                <label htmlFor="password" className="sr-only">Password</label>
                <input type="password" placeholder="Enter password" 
                 onChange={(e)=>handleInputChange(e, 'password')} value={password} 
                className="form-control" id="password" />
            </div>

            <div className="form-group">
                <label htmlFor="c_password" className="sr-only">Confirm Password</label>
                <input type="password" placeholder="Enter confirm password"
                 onChange={(e)=>handleInputChange(e, 'cpassword')} value={confirmPassword} 
                className="form-control" id="c_password" />
                {
                    password !== confirmPassword? (<small className="color-danger">Password and confirm password does not match!</small>):''
                }
                
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary btn-outline" data-dismiss="modal">Close</button>
                <button disabled={disabledForm()} type="button" onClick={()=>submitForm()} className="btn btn-primary btn-outline">Signup</button>
            </div>
        </form>
    );
};

export default Signup;