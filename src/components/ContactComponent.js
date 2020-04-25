import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import {Form, FormGroup, Input,Label, Col, Button, FormFeedback} from 'reactstrap'
import {Control, LocalForm, Errors} from 'react-redux-form';

class Contact extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            firstname:'',
            lastname:'',
            message:'',
            telnum:'',
            email:'',
            agree: false,
            contactType: 'Tel,',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email:false
            }

        }
        this.handelSubmit = this.handelSubmit.bind(this);
        this.handelInputChange = this.handelInputChange.bind(this);
    }

    //
    handelInputChange(event){
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
         [name] : value
        });
    }

    handelSubmit(event){
        event.preventDefault();

    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field] : true}
        })
    }

    //Return error messages

    validate(firstname, lastname, telnum, email) 
    {
        const errors = {
                firstname: '',
                lastname: '',
                telnum: '',
                email: ''

        };

        //Validate first name
        if(this.state.touched.firstname && firstname.length < 3)
        errors.firstname = 'First name should be greater than or equal 3 chars';
        else if (this.state.touched.firstname && firstname.length > 10 )
        errors.firstname = 'First name should be less than or equal 10 chars';

        //Validate last name
        if(this.state.touched.lastname && lastname.length < 3)
        errors.firstname = 'Last name should be greater than or equal 3 chars';
        else if(this.state.touched.lastname && lastname.length > 10 )
        errors.firstname = 'Last name should be less than or equal 10 chars';


        //Validate phone number
        const reg = /^\d+$/;
        if (this.state.touched.telnum &&  !reg.test(telnum))
        errors.telnum = "Tel no is not valid";

        if (this.state.touched.email && email.split('').filter(x=>x === '@').length !== 1)
        errors.message = "Email is not valid";

        return errors;

    }

    render()
    {
        const errors = this.validate(this.state.firstname,this.state.lastname,this.state.telnum, this.state.email);
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4>Send us your feedback</h4>
                </div>
                <div className="col-12 col-md-9">


<LocalForm onSubmit={this.handelSubmit} >
    <Row className="form-group">
        <Label htmlFor="firstname" md={2}>First Name</Label>
        <Col md={10}>
<Input type="text" id="firstname" name="firstname" placeholder="First Name" 
            value = {this.state.firstname}
            valid={errors.firstname === ''}
            invalid={errors.firstname !== ''}
            onBlur={this.handleBlur('firstname')}
            onChange={this.handelInputChange}
/>
    <FormFeedback>{errors.firstname}</FormFeedback>
        </Col>
        <Label htmlFor="lastname" md={2}>Last Name</Label>
        <Col md={10}>
<Input type="text" id="lastname" name="lastname" placeholder="Last Name" 
value = {this.state.lastname} onChange={this.handelInputChange} 
valid={errors.lastname === ''}
invalid={errors.lastname !== ''}
onBlur={this.handleBlur('lastname')}
/>
    <FormFeedback>{errors.lastname}</FormFeedback>



        </Col>
        <Label htmlFor="tel" md={2}>Tel.</Label>
        <Col md={10}>
<Input type="tel" id="telnum" name="telnum" placeholder="Tel." 
value = {this.state.telnum} onChange={this.handelInputChange}
valid={errors.telnum === ''}
invalid={errors.telnum !== ''}
onBlur={this.handleBlur('telnum')}
/>
    <FormFeedback>{errors.telnum}</FormFeedback>

        </Col>
        <Label htmlFor="email" md={2}>Email</Label>
        <Col md={10}>
<Input type="email" id="email" name="email" placeholder="Email" 
value = {this.state.email} onChange={this.handelInputChange}
valid={errors.email === ''}
invalid={errors.email !== ''}
onBlur={this.handleBlur('email')}
/>
    <FormFeedback>{errors.email}</FormFeedback>

        </Col>
        
    </Row>


<Row></Row>
    <FormGroup row>
        {/* No labels but we want to push the content to right */}
        <Col md={{size:6, offset:2}}>
<FormGroup check>
    <Input type="checkbox" name="agree" value={this.state.agree} onChange={this.handelInputChange} /> {''}
    <strong>May we contact you?</strong>
</FormGroup>


        </Col>
        <Col md={{size:3, offset:1}}>
<Input type="select" name="contactType" value={this.state.contactType} onChange={this.handelInputChange} >
<option>Tel.</option>
<option>Email</option>
</Input>

        </Col>

    </FormGroup>

    
<FormGroup row>
<Label htmlFor="message" md={2}>Your Feedback</Label>
        <Col md={10}>
<Input type="textarea" id="message" name="message" 
value = {this.state.message} onChange={this.handelInputChange} />
        </Col>
</FormGroup>
<FormGroup row>
    <Col md={{size:10, offset:2}}>

        <Button type="submit" color="primary">Send feedback</Button>

    </Col>
</FormGroup>


</LocalForm>

                </div>
            </div>
        </div>
    );
}
}//End class 

export default Contact;