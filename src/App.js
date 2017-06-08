import React, { Component } from 'react';
import {Button,Grid,Col,Row,Modal} from 'react-bootstrap'


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Connecto
        	<span className="pull-right">Welcome, Sam</span>
        </h1>
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
				if(data==='No Files'){
					alert(data);
					return;
				}
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
		console.log(fileArr.length);
		for(var i=0;i<fileArr.length;i++)
		{
			//var filesource = "https://shrouded-beyond-79731.herokuapp.com//getPost/"+fileArr[i];
			console.log(fileArr[i]);
			var filesource = "https://shrouded-beyond-79731.herokuapp.com/getPost/1.jpg"
			posts.push(<h3 key={i}>james</h3>);
			posts.push(<a key={i+100} href="#"><img src={filesource}  alt="" width={400} height={400}/></a>);
			posts.push(<h3 key={i*1000}><b>james</b> life is beautiful...enjoy it.<br/><br/></h3>)
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
  	let that = this;
  	$.ajax({
  		url:'https://shrouded-beyond-79731.herokuapp.com//uploadPost',
  		type:'POST',
  		data:data,
  		contentType: false,
        processData: false,
  		success: function(data){
  			//console.log('success calling test');
  			alert(data+" Please refresh your browser to see the changes");	
  			that.close();
  		},
  		error:function(xhr,status,err){

  			console.log('error calling test'+err);
  			alert(err);
  			this.close();
  		}
  	})
  },
  render() {
    return (
	      <div className="AddButton">
	      	<CenterView>
	      		<div className="btn-toolbar">
	        		<Button id="share" bsStyle="primary" bsSize="large" onClick={this.open}>Share Your Story</Button>
	        		<Button id="profile" bsStyle="success" bsSize="large">My Profile</Button>
	        	</div>
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
