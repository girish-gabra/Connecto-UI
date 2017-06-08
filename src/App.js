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

	constructor()
	{
		super();
		this.state = {
			filenames : {}
		};
	}
	
	componentDidMount(){
		var $ = require('jquery');
		var that=this;
		$.ajax({
			url:'http://localhost:7777/getFileNames',
			type:'GET',
			success(data){
				that.setState({filenames:data});
			},
			error(err){
				console.log(err);	
			}
		});

	}
	render(){
		
		var posts=[];
		
		var fileArr = [];

		if(this.state.filenames.length > 0){
			var filenamestmp = this.state.filenames;
			filenamestmp = filenamestmp.substring(1,filenamestmp.length-1);	//remove quotes from string
			fileArr = filenamestmp.split(",");
		} 
		
		for(var i=fileArr.length-1;i>1;i--)
		{
			var filesource = "http://localhost:7777/getPost/"+fileArr[i];
			posts.push(<h3 key={i}>james</h3>);
			posts.push(<a key={i*10} href="#"><img src={filesource}  alt="" width={400} height={400}/></a>);
			posts.push(<h3 key={i*100}><b>james</b> life is beautiful...enjoy it.<br/><br/></h3>)
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
    return { showModal: false ,imageFile: false};
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },
  changeFile : function(e){
  	this.setState({imageFile: e.target.files[0]})
  },
  postdata: function(fileUpload){
  	var $ = require('jquery');
  	var data = new FormData();
  	
  	
  	data.append('fileUpload',this.state.imageFile);

  	$.ajax({
  		url:'http://localhost:7777/uploadPost',
  		type:'POST',
  		data:data,
  		contentType: false,
        processData: false,
  		success: function(data){
  			console.log('success calling test');
  		},
  		error:function(xhr,status,err){
  			console.log('error calling test'+err);
  		}
  	})
  },
  render() {
    return (
	      <div className="AddButton">
	      	<CenterView>
	        	<Button bsStyle="primary" bsSize="large" onClick={this.open}>Share Your Story</Button>
	        </CenterView>
	        <Modal show={this.state.showModal} onHide={this.close}>
	          <Modal.Header closeButton>
	            <Modal.Title>Choose a Picture</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	            <input id="fileId" type="file" onChange={this.changeFile}></input>
	          </Modal.Body>
	          <Modal.Footer>
	          	<Button bsStyle="primary" bsSize="large" onClick={this.postdata}>Upload</Button>
	            <Button bsSize="large" onClick={this.close}>Close</Button>
	          
	          </Modal.Footer>
	          
	        </Modal>
	        
	      </div>
    );
  }
}); 

 
export default Header
