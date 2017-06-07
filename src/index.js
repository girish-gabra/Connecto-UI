import React from 'react';
import ReactDOM from 'react-dom';
import Header,{Wall,AddButton} from './App';


ReactDOM.render(
  <Header />,
  document.getElementById('root')
)

ReactDOM.render(
		<AddButton />,
		document.getElementById('add')
	
	)

ReactDOM.render(
	<Wall />,
	document.getElementById('second')
)
