        import React  from 'react';
        import { Card, CardImg, CardImgOverlay, CardText, CardBody,
            CardTitle, Breadcrumb } from 'reactstrap';
        import {Link} from 'react-router-dom';


    
function RenderMenuItem({dish})
{
    return (

        <Card key={dish.id}>
            <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
           
        </Card>
    )
}
     
    //Another way of implementing functional compoenent like function Menu()
    function Menu(props)
{

    const menu = props.dishes.map((dish)=>
        <div key = {dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem dish= {dish } />
        </div>    
         )
        return  <div className="container">
            <div className="container">
                <div className="row bread">
                <Breadcrumb>
                <Link to="'/home">Home</Link>
                </Breadcrumb>
                <Breadcrumb active>
                Menu
                </Breadcrumb>
                </div>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
                </div>
              
            
            <div className="row">
                {menu}
                </div>
                </div>;



}

        export default Menu;