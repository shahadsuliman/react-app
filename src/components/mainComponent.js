import React , {Component} from 'react';
import Home from './HomeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './menuComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leader';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import Header from "./HeaderComponent";
import Footer from './FooterComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect } from 'react-router-dom'; 
  

class Main extends Component{


  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders:LEADERS
    };
  }


 render()
 { 

/*This is one of the ways to define component for route or I can simple writ Home in route tag */
  const HomePage = () => {
    return (   <Home 
      dish={this.state.dishes.filter((dish) => dish.featured)[0]}
      promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
      leader={this.state.leaders.filter((leader) => leader.featured)[0]}
  />);
  }

  const DishWithId = ({match}) => {
    return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comms={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
  };

  const Aboutus = ()=> {
return (
<About leaders = {this.state.leaders}/>

);

  }
  
   return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage} />
        {/* In component, I can pass the name of the component if there is no poprs I need to pass */}
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route exact path='/contactus' component={Contact} />} />
        <Route exact path='/aboutus' component={Aboutus} />} />
        {/* Default path */}
        <Redirect to="/home" />

      </Switch>
    <Footer/>
    </div>
  );
}

}

export default Main;
