import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Connecto</h1>
      </div>
    );
  }
}

export class Wall extends Component {
	render(){
		return (
			<div className="Wall">
			<p>This is the wall</p>
			
			<img src={'1.JPG'}  width={400} height={400}/><br/>
			<img src={'1.JPG'}  width={400} height={400}/><br/>
			<img src={'1.JPG'}  width={400} height={400}/><br/>
			<img src={'1.JPG'}  width={400} height={400}/><br/>
			</div>
		);
	}
}


export default Header