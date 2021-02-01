import React from 'react';

const SearchBox = ({ searchfield, searchChange, theme }) => {
	let colorVar;
	switch(theme)
	{
		case 'light':
			colorVar='bg-lightest-blue';
			break;
		case 'dark':
			colorVar='bg-light-blue';
			break;
		case 'gray':
			colorVar='bg-lightest-gray';
			break;
		default:
			colorVar='bg-lightest-blue';
	}
		return (
		<div className='tc pa2'>
		<input className ={`pa3 ba b--white ${colorVar}`}
		type='search' placeholder='search robots' 
		onChange={searchChange} value={searchfield}
		
		/>
		<p class='tc pa1 f7 near-white'> search robots by name, email or website </p>
		</div>
	);
	
	// else {
	// 	return (
	// 	<div className='tc pa2'>
	// 	<input
	// 	className ='pa3 ba b--green bg-lightest-blue'
	// 	type='search' placeholder='search robots' 
	// 	onChange={searchChange} value={searchfield}
	// 	/>
	// 	<p class='tc pa1 f7 near-white'> search robots by name, email or website </p>
	// 	</div>
	// 	);
	// }
	// }
	// if (theme === 'light') {
	// return (
	// 	<div className='tc pa2'>
	// 	<input
	// 	className = 'pa3 ba b--green bg-lightest-blue'
	// 	type='search' placeholder='search robots' 
	// 	onChange={searchChange} value={searchfield}
	// 	/>
	// 	<p class='tc pa1 f7 near-white'> search robots by name, email or website </p>
	// 	</div>
	// );
	// }
	// else if (theme === 'dark') {
	// 	return (
	// 	<div className='tc pa2'>
	// 	<input
	// 	className = 'pa3 ba b--green bg-light-blue'
	// 	type='search' placeholder='search robots' 
	// 	onChange={searchChange} value={searchfield}
	// 	/>
	// 	<p class='tc pa1 f7 near-white'> search robots by name, email or website </p>
	// 	</div>
	// );
	// }
	// else if (theme === 'gray') {
	// 	return (
	// 	<div className='tc pa2'>
	// 	<input
	// 	className = 'pa3 ba b--green bg-light-gray'
	// 	type='search' placeholder='search robots' 
	// 	onChange={searchChange} value={searchfield}
	// 	/>
	// 	<p class='tc pa1 f7 near-white'> search robots by name, email or website </p>
	// 	</div>
	// );
	// }

}

export default SearchBox;