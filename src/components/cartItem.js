"use strict";
import React from 'react';
import {Col, Row, Panel, Button, Label, Badge} from 'react-bootstrap';

class CartItem extends React.Component {

    render() {
        return (
            <Panel className='cartItem'>
                <Row>
                    <Col xs={6} sm={6} md={6} >
                        <h5>{this.props.cartItem.title} <Badge pullRight>Price: USD {this.props.cartItem.price}</Badge></h5>
                    </Col>
                    <Col  xs={4} sm={4} md={4} >
                        <p>units :&nbsp;
                            <Label bsStyle='success'> {this.props.cartItem.units} </Label>
                            &nbsp;
                            <Button bsSize='small' onClick={() => this.props.onAddUnit()}>+</Button>
                            <Button bsSize='small' onClick={() => this.props.onDeductUnit()}>-</Button>
                        </p>
                    </Col>
                    <Col  xs={2} sm={2} md={2} >
                        <Button onClick={() => this.props.handleDeleteFromCart()}
                                bsSize='small' bsStyle='danger'>DEL</Button>
                    </Col>
                </Row>
            </Panel>
        );
    }
}

export default CartItem;