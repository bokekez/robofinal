import React from 'react';

const Register = ({user, setUser, porps, username, usermail, password, setRoute, currentUser, userStore, setUserStore, setLogedin, setLogedUser}) => {
    const [userError, setUserError] = React.useState("")
    const [mailError, setMailError] = React.useState("")
    const [pwError, setPwError] = React.useState("")
    const [userTemp, setUserTemp] = React.useState("")
    const [mailTemp, setMailTemp] = React.useState("")
    const [pwTemp, setPwTemp] = React.useState("")
    // let userTemp = '';
    // let mailTemp = '';
    // let pwTemp = '';
    // let userError = '';
    // let mailError = '';
    // let pwError = '';
    const nameChange = (event) => {
        setUserTemp(event.target.value)
        console.log(userTemp)
    }
    const mailChange = (event) => {
        setMailTemp(event.target.value)
    }
    const passwordChange = (event) =>{
        setPwTemp(event.target.value)  
    }
    const submitValue = (e) => {
        e.preventDefault();
        const isValidName = validateName();
        const isValidEmail = validateEmail();
        const isValidPassword = validatePassword();
        if (isValidName === true && isValidEmail === true && isValidPassword === true)
        {
            const currentUser = {username : userTemp, usermail : mailTemp, password : pwTemp}  
            setUser(currentUser);
            setUserStore([...userStore, currentUser]);
            //setLogedUser(Object.assign({}, currentUser.username));
            console.log(currentUser);
            console.log(userStore);
            setUserError("");
            setMailError("");
            setPwError("");
            setUserTemp('');
            setMailTemp('');
            setPwTemp(''); 
            setRoute('home');
            setLogedin(true);
        }
    }
    function validateName (userError) {
        if (userTemp === '') {
            setUserError('Field can not be empty');
            return false;
        }
        if (userTemp.includes(' ')){
            setUserError('Users can only have one name');
            return false;
        }

        if (userError) {
            
            return false;
        }
        return true;
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
        <article className="pa4 black-80">
        <form action="sign-up_submit" method="get" acceptCharset="utf-8">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
            <div className="mt3">
                <label className="db fw4 lh-copy f6">Username</label>
                <input className="hover-white hover-bg-black b pa2 input-reset ba bg-transparent grow" value={userTemp} type="text" id="user-name" onChange={nameChange}/>
            </div>
                {
                userError ? (<div style={{fontSize: "6", color: "red"}}>
                    {userError}
                </div>): null
                }
            <div className="mt3">
                <label className="db fw4 lh-copy f6" >Email address</label>
                <input className="hover-white hover-bg-black b pa2 input-reset ba bg-transparent grow"  value={mailTemp} type="text" id="email-address" onChange={mailChange}/>
            </div>
                 {
                mailError ? (<div style={{fontSize: "6", color: "red"}}>
                    {mailError}
                </div>): null
                }
            <div className="mt3">
                <label className="db fw4 lh-copy f6" >Password</label>
                <input className="hover-white hover-bg-black b pa2 input-reset ba bg-transparent grow" value={pwTemp} type="password" id="password" onChange={passwordChange}/>
            </div>
                {
                pwError ? (<div style={{fontSize: "6", color: "red"}}>
                    {pwError}
                </div>): null
                }
            </fieldset>
            <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" onClick={(e) => submitValue(e)}/></div>
        </form>
        </article>
    )
}

export default Register;