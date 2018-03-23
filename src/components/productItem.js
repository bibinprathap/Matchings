"use strict";
import React from 'react';
import {Well, Col, Row, Button} from 'react-bootstrap';

class ProductItem extends React.Component {

    render() {
        const imgstyle = {'marginLeft':"auto",'marginRight':'auto',display:"block",width:"50%"}
        return (
            <Well>
                <Row>
                    <Col xs={12}   sm={12} md={12} className='productItem'>
                        <img className="group list-group-image" style={imgstyle} src={this.props.product.image} alt="" />
                        <h4>{this.props.product.title}</h4>
                        <p>{this.props.product.description}</p>
                        <p>Price: USD {this.props.product.price}</p>
                        <Button onClick={() => this.props.handleOnAdd(this.props.product)} bsStyle='primary'>Add to Cart</Button>
                    </Col>
                </Row>
            </Well>
        );
    }
}

export default ProductItem;