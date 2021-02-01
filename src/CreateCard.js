import React from 'react';

const CreateCard = ({user, setLastCard, newCard, props, name, website, email, setName, setEmail, setWebsite, colorVar, id1, setId1, robots, setRobots, setNewRobots, newRobots, newName, id, newEmail, newWebsite, setNewCard}) => {
    const [nameError, setNameError] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [websiteError, setWebsiteError] = React.useState("")
    const tempname = user.username;
    console.log(tempname, '++');
    const submitValue = (e) => {
        e.preventDefault()
        const isValidName = validateName();
        const isValidEmail = validateEmail();
        const isValidWebsite = validateWebsite();
        if (isValidName === true && isValidEmail === true && isValidWebsite === true)
        {
            //let id2 = id1 + 1;
            // setId1(id1 +1);
            id1 = Math.floor(Math.random() * (1000 - 0 + 1));
            const currentNewCard = {id: id1, newName: name, newEmail: email, newWebsite: website, username: tempname}
            setNewCard(currentNewCard)
            setRobots([...robots, currentNewCard]);
            console.log(robots);
            setEmailError("");
            setNameError("");
            setWebsiteError("");
            setEmail("");
            setName("");
            setWebsite("");
        }
        if (isValidName === true){
            setNameError("");
        }
        if (isValidEmail === true){
            setEmailError("");
        }
        if (isValidWebsite === true){
            setWebsiteError("");
        }

    };
    function validateName (nameError) {
        if (name === '') {
            setNameError('Field can not be empty');
            return false;
        }
        if (name.includes(' ')){
            setNameError('Robots can only have one name');
            return false;
        }

        if (nameError) {
            
            return false;
        }
        
        return true;
    }    
    function validateEmail (emailError) {
        if (email === '') {
            setEmailError('Field can not be empty');
            return false;
        }
        if (email.includes(' ')){
            setEmailError('Invalid email');
            return false;
        } 
 
        if (!email.includes('@')){
            setEmailError('Invalid email');
            return false;
        }

        if (!email.includes('.')){
            setEmailError('Invalid email');
            return false;
        }

        if (emailError) {
            return false;
        }

        return true;
    }
    function validateWebsite (websiteError) {
        if (website === '') {
            setWebsiteError('Field can not be empty');
            return false;
        }
        if (website.includes(' ')){
            setWebsiteError('Invalid website');
            return false;
        }
        if (!website.includes('.')){
            setWebsiteError('Invalid website');
            return false;
        }

        if (websiteError) {
            return false;
        }

        return true;
    };
    return(
	<div >
        <form className='flex flex-column items-center pa4' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <label className= 'tc' style={{width: '300', marginTop: '0.5rem'}}> 
                Name:</label >
            <input id='inputName' className={`pa4-m grow b--white outline tc ${colorVar}`} style={{width: '300'}} value={name} type="text" placeholder='New name here' onChange={e => setName(e.target.value)}/>        
            {
                nameError ? (<div style={{fontSize: "6", color: "red"}}>
                    {nameError}
                </div>): null
            }
            <label className= '' style={{width: '300', marginTop: '0.5rem'}}>
                Email:</label>
            <input id='inputEmail' className={`pa4-m grow b--white outline tc ${colorVar}`} style={{width: '300'}} value={email} type="text" placeholder='New email here' onChange={e => setEmail(e.target.value)}/>     
            {
                emailError ? (<div style={{fontSize: "6", color: "red"}}>
                    {emailError}
                </div>): null
            }
            <label className= '' style={{width: '300', marginTop: '0.5rem'}}>
                Website:</label>
            <input id='inputWebsite' className={`pa4-m grow b--white outline tc ${colorVar}`} style={{width: '300'}} value={website} type="text" placeholder='New website here'onChange={e => setWebsite(e.target.value)}/> 
            {
                websiteError ? (<div style={{fontSize: "6", color: "red"}}>
                    {websiteError}
                </div>): null
            }
            <button className={`b ph2 pv2 input-reset ba b--white grow pointer f6 dib ${colorVar}`} style={{marginTop: '1.5rem'}} onClick={(e) => submitValue(e) }>Submit</button> 
        </form>
	</div>
    )
}

export default CreateCard;