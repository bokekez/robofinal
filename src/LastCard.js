import React from 'react';
import Card from './Card';

const LastCard = ({logedin, props, robots, theme, newName, user}) => {
    const [componentToRender, setComponentToRender] = React.useState()
    
    React.useEffect(() => {
    //grabbing robot data
    
    // console.log(robotData)
   
    // // debugger;
    let index = robots.length - 1
    let robotData = robots[index]
    
    
    if (robotData != null && logedin === true){
        if (robotData.username === user.username){
        setComponentToRender(<Card robotData={robotData} theme={theme}
        id={robotData.id}
        newName={robotData.newName}
        newEmail={robotData.newEmail}
        newWebsite={robotData.newWebsite} />
        )
    
    }
    }
    }, [robots, theme, logedin, user])

    if (logedin === true) {
        return (
        <div>
            {componentToRender}
            
        </div>
        )
    }
    
}
    
export default LastCard;
