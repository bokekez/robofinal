import React, { useState, useEffect } from 'react';

const Card = (props, theme, newCard,) =>{
	const { newName, newEmail, newWebsite, id, username } = props
	console.log(newName);
	console.log(id);
	if (props.theme === 'light')
	{
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 black'>
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2 className='f5'>{newName}</h2>
				<p className='f6'>{newEmail}</p>
				<p2 className='f6'>{newWebsite}</p2>
				<p className='f6'>{username}</p>
				{console.log(newName)}	
			</div>
			
		</div>
	)
	}
	else if (props.theme === 'dark') {
		return (
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 black'>
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2 className='f5'>{newName}</h2>
				<p className='f6'>{newEmail}</p>
				<p2 className='f6'>{newWebsite}</p2>
				<p className='f6'>{username}</p>
			</div>
		</div>
	)
	}
	else if (props.theme === 'gray') {
		return (
		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 black'>
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2 className='f5'>{newName}</h2>
				<p className='f6'>{newEmail}</p>
				<p2 className='f6'>{newWebsite}</p2>
				<p className='f6'>{username}</p>
			</div>
		</div>
	)
	}
	else {
		return (
		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2 className='f5'>{newName}</h2>
				<p className='f6'>{newEmail}</p>
				<p2 className='f6'>{newWebsite}</p2>
				<p className='f6'>{username}</p>
			</div>
		</div>
	)
	}
}

export default Card;
