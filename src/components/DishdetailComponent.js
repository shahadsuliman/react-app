import React , {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
        CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {  Button,  Form, FormGroup, Input, Label, ModalHeader, Modal, ModalBody} from 'reactstrap';
import { Col, Row} from 'reactstrap'
import {Control, LocalForm, Errors} from 'react-redux-form';
import 'bootstrap/dist/css/bootstrap.min.css';






   //Validation functions
const minLength = (len) => (val) => val && (val.length >= len);



class CommentForm extends Component{

    constructor(props)
    {
    
    super(props);    
    this.toggleModal = this.toggleModal.bind(this);
    
    this.state = {
        isModalOpen: false
    }
    }
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
      }
    
    
    handleSubmit(values) {
        this.toggleModal();
        console.log("handlesubmit " + values.rating )
        console.log(this.props.addComment)

        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);

    }
    
    
    
    render(){
    
    return (
    
        <div>
    <Button outline onClick={this.toggleModal}><span className="fa  fa-pencil fa-lg"></span> Add comment</Button>
    
    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
    <ModalHeader toggle={this.toggleModal}>Submit comment</ModalHeader>
    <ModalBody>
    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
    
    
    
    <Row className="form-group">
    <Label htmlFor="rating" md={3}>Rating</Label>
    
    <Col md={9}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
    </Row>
    
    <Row className="form-group">
                                <Label htmlFor="name" md={3}>First Name</Label>
                                <Col md={9}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                             minLength: minLength(3)
                                        }}
                                         />
                                           <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters'                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={3}>Comment</Label>
                                <Col md={9}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:9, offset: 3}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
    </LocalForm>
    </ModalBody>
    </Modal>
    
    
        </div>
        
        
    
    
    );
    
    
    
    }
    
    }  //End commentForm component 


 
    function RenderDish({dish}){
        return (
        <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>); //end return
    }// End function 

    function RenderComments({comments, addComment, dishId}) {
        const list = comments.map((comment)=>
            <div className="container">
                   <li>  {comment.comment} </li>
                   <li className="bold"><strong>-- {comment.author}</strong> 
                   <li>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                   </li>          
            </div>
    
);

    return (
        <div>
<ul className="list-unstyled">
        {list}
        </ul>
        <CommentForm addComment={addComment}
        dishId={dishId} />

        </div>
        
        ); 
            } 

    function DishDetail(props) {

        if (props.dish != null){
           const dish =  props.dish;
            return(
                    <div className="container">
                    <div className="row">
                        <Breadcrumb>
    
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}
        addComment={props.addComment}
        dishId={props.dish.id}
      />                           
      
                        </div>
              
                    </div>
                    
                    </div>
                );

              }  
              else
            return(
                <div></div>
            );
    }


export default DishDetail;