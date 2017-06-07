import React from 'react';
import ReactDOM from 'react-dom';
import Header,{Wall} from './App';


ReactDOM.render(
  <Header />,
  document.getElementById('root')
)

ReactDOM.render(
	<Wall />,
	document.getElementById('second')
)
