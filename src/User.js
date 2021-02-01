import React from 'react';

const User = ({setLogedUser, logedUser, user, setLogedin, logedin, setUser}) => {
    console.log(user.username);
    debugger;
    const logout = () => {
        setLogedin(false);
        setUser({username: '', usermail: '', password: ''});
        console.log(logedin)
    }
    if (user.username !== "" && logedin === true){
    return (
        <div className='tc' style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
            {/* <h3 className='f5' style={{width: '3rem'}} >{user.username}</h3> */}
            <h3 className='f5 hover-white' style={{marginBottom: '0rem', marginRight: '0.7rem'}} >{user.username}</h3>
            <input className='dim bg-transparent hover-white ' style={{marginRight: '0.3rem', display: 'inline-block', marginBottom: '0px', outline: 'none', marginLeft: '0rem', padding: '0', height: '0.8rem', width: '3rem', cursor: 'pointer', borderColor: 'transparent', fontSize: '0.5rem'}} 
			onClick={logout} text="Log out" type="submit" value="Log out"/>
        </div>
        )
    }
    else if (logedin === false) {
        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}><h3 className='f7' style={{ height: '0.8rem'}}>Not logged in</h3></div>
            )
        
    }

    
}

export default User;