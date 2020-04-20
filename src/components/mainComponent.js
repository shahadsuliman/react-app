import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menuComponent';
import { DISHES } from './dishes';
import DishDetail from './DishdetailComponent';
import Header from "./HeaderComponent";
import Footer from './FooterComponent';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }
  
 render()
 { 
   return (
    <div className="App">
      <Header/>

        <Menu dishes={this.state.dishes}
        onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish = {this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/>
   <Footer/>
    </div>
  );
}

}

export default Main;
