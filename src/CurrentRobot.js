import React from 'react';
import Card from './Card';

const CurrentRobot = ({robots, newName}) => {
    const [currentName, setCurrentName] = React.useState()
    console.log(robots.newName, 'here');
    React.useEffect(() => {
        //grabbing robot data
        const index = robots.length - 1
        const robotData = robots[index]
        if (robotData != null){
            setCurrentName(robotData.newName)
        }}, [robots])
    if (currentName != null) {
        return (
        <div>
            <h1 className='f5'>Robot {currentName} has been created!</h1>
        </div>
        )
    } else {
        return (
        <div>
            <h1 className='f5'>Create your new robot!</h1>
        </div>
        )
    }
        
    
}

export default CurrentRobot;