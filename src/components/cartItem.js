"use strict";
import React from 'react';
import { Col, Row, Panel, Button, Label, Badge } from 'react-bootstrap';

class CartItem extends React.Component {
    totalItemCost(cartItem) {
        return (this.props.cartItem.price * this.props.cartItem.units).toFixed(2);
    }
    render() {
        return (
            <Panel className='cartItem'>
                <Row>
                    <Col xs={4} sm={4} md={4} >
                        <h5>{this.props.cartItem.title}</h5>
                    </Col>
                    <Col xs={2} sm={2} md={2} >
                        € {this.props.cartItem.price}
                    </Col>
                    <Col xs={2} sm={2} md={2} >
                        <p style={{ float: "left", width: "32%" }} >
                            <input
                                id="units"
                                placeholder="units"
                                className="form-control"
                                value={this.props.cartItem.units}
                                onChange={e => this.props.onTextUnitChange(this.props.cartItem.id, e.target.value)}
                            />
                        </p>
                        <p style={{ float: "left" }}> <Button bsSize='small' onClick={() => this.props.onAddUnit()}>+</Button></p >
                        <p style={{ float: "left" }}> <Button bsSize='small' onClick={() => this.props.onDeductUnit()}>-</Button></p >
                    </Col>
                    <Col xs={2} sm={2} md={2} >
                        € {this.totalItemCost()}
                    </Col>
                    <Col xs={2} sm={2} md={2} >
                        <Button onClick={() => this.props.handleDeleteFromCart()}
                            bsSize='small'  ><span style={{ height: "20px" }} className="fa fa-trash"></span></Button>
                    </Col>
                </Row>
            </Panel >
        );
    }
}

export default CartItem;