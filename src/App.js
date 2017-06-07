import React, { Component } from 'react';
import {Button,Grid,Col,Row} from 'react-bootstrap'


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Connecto</h1>
      </div>
    );
  }
}

export  class CenterView extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={1} md={4}></Col>
                    <Col xs={4} md={4}>{this.props.children}</Col>
                    <Col xs={1} md={4}></Col>
                </Row>
                <Row>
                	<Col xs={1} md={4}></Col>
                    <Col xs={4} md={4}></Col>
                    <Col xs={1} md={4}></Col>
                </Row>
            </Grid>
        )
    }
}


export class Wall extends Component {

	render(){
		var posts=[];
		for(var i=0;i<4;i++)
		{
			posts.push(<h3>james</h3>);
			posts.push(<a href="#"><img src={'1.JPG'}  alt="" width={400} height={400}/></a>);
			posts.push(<h3><b>james</b> life is beautiful...enjoy it.<br/><br/></h3>)
		}
		return (
			<div className="Wall">
			<CenterView>
				{posts}
			</CenterView>
			</div>
		);
	}
}


export default Header