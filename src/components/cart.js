"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {showCartFalse} from '../actions/showCartActions'
import {deleteFromCart, updateItemUnits} from '../actions/cartActions';
import {Col, Row, Panel, Badge, Button} from 'react-bootstrap';
import CartItem from "./cartItem";

class Cart extends React.Component {
    renderCart() {
        return (
            <Panel className='cartList' header='Shopping Cart'  bsStyle='primary'>
                {this.cartList()}
            </Panel>
        );
    }
    handleDeleteFromCart(id) {
        this.props.deleteFromCart({id})
    }
    handleDeductUnit(id) {
        let units = -1;
        this.props.updateItemUnits({id, units})
    }
    handleAddUnit(id) {
        let units = 1;
        this.props.updateItemUnits({id, units})
    }

    cartList() {
        return (
            this.props.cart.map(cartItem => {
              return (
                  <CartItem key={cartItem.id}
                            cartItem={cartItem}
                            onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
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
                    <Col xs={12} sm={6}>
                        <h4><Badge pullRight>TOTAL Price: USD {this.totalAmount(this.props.cart)}</Badge></h4>
                    </Col>
                </Row>
            </Panel>
        );
    }
    totalAmount(cartArray) {
        return cartArray.reduce((acum, item) => {
            acum += item.price * item.units;
            return acum;
        }, 0);
    }

    handleCartClick(event) {
        this.props.showCartFalse(false);
    }
    render() {
        if (this.props.cart.length !== 0) {
            return (
                <aside className='cart' style={{width:'100%'}}  >
                    {this.renderCart()}
                    {this.cartTotal()}
                    <Button onClick={this.handleCartClick.bind(this)} bsStyle='primary'>Continue Shopping</Button>
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
        cart: state.cart,
        showcart:state.showcart
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        deleteFromCart,
        updateItemUnits,
        showCartFalse
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Cart);