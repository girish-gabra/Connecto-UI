import React, { Component } from 'react';
import {Button,Grid,Col,Row,Modal} from 'react-bootstrap'


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

export const AddButton = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
   
    return (
	      <div class="AddButton">
	      	<CenterView>
	        	<Button bsStyle="primary" bsSize="large" onClick={this.open}>Share Your Story</Button>
	        </CenterView>
	        <Modal show={this.state.showModal} onHide={this.close}>
	          <Modal.Header closeButton>
	            <Modal.Title>Choose a Picture</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	            <input type="file"></input>
	          </Modal.Body>
	          <Modal.Footer>
	          	<Button bsStyle="primary" bsSize="large">Upload</Button>
	            <Button bsSize="large" onClick={this.close}>Close</Button>
	          </Modal.Footer>
	        </Modal>
	        
	      </div>
    );
  }
}); 

 
export default Header
