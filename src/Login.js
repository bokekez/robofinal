import React from 'react';

const Login = ({user, setUser, porps, username, usermail, password, setRoute, setLogedin, logedin, userStore, setLogedUser}) => {
    console.log(userStore);
    const [mailError, setMailError] = React.useState("")
    const [pwError, setPwError] = React.useState("")
    const [userCheck, setUsercheck] = React.useState([])
    const [warning, setWarning] = React.useState("")
    const [mailTemp, setMailTemp] = React.useState("")
    const [pwTemp, setPwTemp] = React.useState("")
    
    const mailChange = (event) => {
        setMailTemp(event.target.value)    
    }
    const passwordChange = (event) =>{
        setPwTemp(event.target.value)   
    }
    const submitValue = (e) => {
        e.preventDefault();
        const isValidEmail = validateEmail();
        const isValidPassword = validatePassword();
        if (isValidEmail === true && isValidPassword === true)
        {
            const currentUser = {usermail : mailTemp, password : pwTemp}  
            // console.log(currentUser, '23');
            // setUsercheck(currentUser);
            userStore.find((arrayMember) => {if(arrayMember.usermail.includes(mailTemp) && arrayMember.password.includes(pwTemp)){
                setLogedin(true);
                //setLogedUser(username);
                setUser(arrayMember);
                setRoute('home');
                setMailError("");
                setPwError("");
                setMailTemp('');
                setPwTemp(''); 
                console.log(logedin);
                
            }})
        }
        else setWarning('Invalid e-mail or password')
    }
    function validateEmail (mailError) {
        if (mailTemp === '') {
            setMailError('Field can not be empty');
            return false;
        }
        if (mailTemp.includes(' ')){
            setMailError('Invalid email');
            return false;
        } 
 
        if (!mailTemp.includes('@')){
            setMailError('Invalid email');
            return false;
        }

        if (!mailTemp.includes('.')){
            setMailError('Invalid email');
            return false;
        }

        if (mailError) {
            return false;
        }
        return true;
    }
    function validatePassword (pwError) {
        if (pwTemp === '') {
            setPwError('Field can not be empty');
            return false;
        }
        if (pwTemp.includes(' ')){
            setPwError('Invalid character');
            return false;
        }

        if (pwError) {
            
            return false;
        }
        return true;
    }  
    return (
        <main className="pa4 black-80">
        <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            {/* <legend className="tc f4 fw6 ph0 mh0">Sign In</legend> */}
            {
                warning ? (<div style={{fontSize: "6", color: "red"}}>
                    {warning}
                </div>): null
            }
            <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                <input className="grow b pa2 input-reset ba bg-transparent hover-bg-black hover-white "  name="email-address"  id="email-address" onChange={mailChange}/>
            </div>
            {
                mailError ? (<div style={{fontSize: "6", color: "red"}}>
                    {mailError}
                </div>): null
            }
            <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">Password</label>
                <input className="grow b pa2 input-reset ba bg-transparent hover-bg-black hover-white " type="password" name="password"  id="password" onChange={passwordChange}/>
            </div>
            {
                pwError ? (<div style={{fontSize: "6", color: "red"}}>
                    {pwError}
                </div>): null
            }
            </fieldset>
            <div className="">
            <input className="grow b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={(e) => submitValue(e)}/>
            </div>
        </form>
        </main>
    )
}

export default Login;