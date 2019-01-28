"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { deleteFromCart, updateItemUnits, changeItemUnits } from '../actions/cartActions';
import { Col, Row, Panel, Badge, Button } from 'react-bootstrap';
import CartItem from "./cartItem";

class Cart extends React.Component {
    renderCart() {
        return (
            <Panel className='cartList' bsStyle='primary'>

                <Row className="table-header">
                    <Col xs={4} sm={4} md={4} >
                        Product
                    </Col>
                    <Col xs={2} sm={2} md={2} >
                        Price
                    </Col>
                    <Col xs={2} sm={2} md={2} >
                        Qty
                    </Col>
                    <Col xs={2} sm={2} md={2} >
                        Cost
                    </Col>
                    <Col xs={2} sm={2} md={2} >

                    </Col>
                </Row>
                {this.cartList()}

            </Panel>
        );
    }
    handleDeleteFromCart(id) {
        this.props.deleteFromCart({ id })
    }
    handleDeductUnit(id) {
        let units = -1;
        this.props.updateItemUnits({ id, units })
    }
    handleAddUnit(id) {
        let units = 1;
        this.props.updateItemUnits({ id, units })
    }

    handleInputUnitChange(id, unit) {
        let units = parseInt(unit || 0);
        this.props.changeItemUnits({ id, units })
    }

    cartList() {
        return (
            this.props.cart.map(cartItem => {
                return (
                    <CartItem key={cartItem.id}
                        cartItem={cartItem}
                        onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
                        onTextUnitChange={this.handleInputUnitChange.bind(this)}
                        onDeductUnit={this.handleDeductUnit.bind(this, cartItem.id)}
                        handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)} />
                );
            })
        );
    }

    cartTotal() {
        return (
            <Panel>
                <Row>

                    <Col xs={10} sm={5}>
                        <h4><Badge pullRight>SubTotal   </Badge></h4>
                    </Col>
                    <Col xs={1} sm={1}>
                        <h4> <Badge>€{this.totalSubAmount(this.props.cart)}</Badge></h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} sm={5}>
                        <h4><Badge pullRight>VAT @20%  </Badge></h4>
                    </Col>
                    <Col xs={1} sm={1}>
                        <h4><Badge pullRight> € {this.totalTax(this.props.cart)}</Badge></h4>
                    </Col>

                </Row>
                <Row>
                    <Col xs={10} sm={5}>
                        <h4><Badge pullRight>Total Cost</Badge></h4>
                    </Col>
                    <Col xs={1} sm={1}>
                        <h4><Badge pullRight>€ {this.totalAmountIncludingTax(this.props.cart)}</Badge></h4>
                    </Col>

                    <Col xs={12} sm={6}>

                    </Col>
                </Row>
            </Panel>
        );
    }
    totalSubAmount(cartArray) {
        return (cartArray.reduce((acum, item) => {
            acum += item.price * item.units;
            return acum;
        }, 0)).toFixed(2);
    }
    totalTax(cartArray) {
        var totalsubtotal = this.totalSubAmount(cartArray);
        return (totalsubtotal * .20).toFixed(2)
    }

    totalAmountIncludingTax(cartArray) {
        return (parseFloat(this.totalSubAmount(cartArray)) + parseFloat(this.totalTax(cartArray))).toFixed(2);
    }
    buyNowClick() {

        var loadrequest = this.props.cart;
        alert('Completed SuccesFully,Check Console');
        console.log(loadrequest);
        return;
        $.ajax({
            url: 'testURl',
            type: 'POST',
            dataType: 'json',
            data: loadrequest,
            success: function (respoce, textStatus, xhr) {
                alert('Completed SuccesFully');
            },
            error: function (xhr, textStatus, errorThrown) {
                alert('Completed SuccesFully')
                console.log('Error in Operation');
            }
        });
    }

    render() {
        if (this.props.cart.length !== 0) {
            return (
                <aside className='cart' style={{ width: '100%' }}  >
                    <Row>
                        <Col xs={12} sm={12} md={12} >
                            <h1> Your Basket</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} >
                            <p>Items you have added to your basket are shown below </p>
                            <p>Adjust the quantities or remove items before continuing your purchase.</p>
                        </Col>
                    </Row>
                    {this.renderCart()}
                    {this.cartTotal()}
                    <Button onClick={this.buyNowClick.bind(this)} bsStyle='primary'>Buy Now >></Button>
                </aside>
            );
        }

        return (
            <aside className='cart'>cart empty</aside>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        deleteFromCart,
        updateItemUnits,
        changeItemUnits
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Cart);