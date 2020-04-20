import React , {Component} from 'react';
import { Navbar, NavbarBrand,Jumbotron } from 'reactstrap';

class Header extends Component{
render(){
    //We make it as class not function becuase we need to maintain some state 
    return(
        <>
                <Navbar dark>
                    <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Reistoranter con Fusion</h1>
                            <p>
                                We take inspiration from the wrold's best cusines, and create a unique fusion experince
                            </p>
                        </div>
                    </div>
                </div>

                </Jumbotron>
        </>
    );
}

}

export default Header;