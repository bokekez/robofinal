import React from 'react';
import Card from './Card';

const CardList = ({ robots, theme, newCard, setRobots,newRobots, setNewRobots }) =>{
	const cardComponent = robots.map((robot, i) => {
		 return <Card theme={theme} key={i} id={robots[i].id} newName={robots[i].newName} newEmail={robots[i].newEmail} newWebsite={robots[i].newWebsite} username={robots[i].username }/> 
	})
	console.log(robots);

	return(
	<div >
		{cardComponent}
    </div>

	);


	// const cardComponent = robots.map((user, i) => {
	// 	return <Card theme={theme} key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} website={robots[i].website}/>
	// })
	// return(
	// <div >
	// 	{cardComponent}
    // </div>

	// );
}

export default CardList;