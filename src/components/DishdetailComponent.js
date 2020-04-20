import React , {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';



 
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

    function RenderComment(comments){

        const list = comments.map((comment)=>
            <div className="container">
                   <li>  {comment.comment} </li>
                   <li className="bold"><strong>-- {comment.author}</strong> 
                   <li>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                   </li>          
            </div>
    
);

    return (
        <ul className="list-unstyled">
        {list}
        </ul>
        );
            }

    function DishDetail(props) {

        if (props.dish != null){
           const dish =  props.dish;
            return(
                <div className="container">   <div className="row">
                <div  className="col-12 col-md-5 m-1">
              
                    <RenderDish dish={props.dish} />
              
                </div>
                <div className="col-12 col-md-5 m-1">
   
            <h3 className="mb-3" >Comments</h3>
               {
                RenderComment(dish.comments)
               }
        
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