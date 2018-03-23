"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {Col, Row, Panel, Badge} from 'react-bootstrap';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {deleteFromCart, updateItemUnits} from '../actions/cartActions';


const style = {
    marginRight: 20,
    width:"200px"
};
class CartSmall extends React.Component {
     cartTotal() {
        return (
            <Panel>
                <Row>
                    <Col xs={12} sm={6}>
                        <h4>TOTAL: <Badge pullRight>Price: INR {this.totalAmount(this.props.cart)}</Badge></h4>
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

    totalUnits(cartArray) {
        return cartArray.reduce((acum, item) => {
            acum +=  item.units;
            return acum;
        }, 0);
    }
    render() {
        if (this.props.cart.length !== 0) {
            return (
                <FloatingActionButton  className="cart-view" onClick = { this.props.OnClick } style={style}>
                <div className="cart-section"  >
                    <div className="head-price">
                        <h6 className="">
                            {this.props.cart.length>0 ? 'USD ' + this.totalAmount(this.props.cart) : '0 in cart'} 
                            <br></br>
                            {this.props.cart.length>0  ?  this.totalUnits(this.props.cart)  + ' item selected' : ''}
                        </h6>
                    </div>
                </div>
            </FloatingActionButton>
            );
        }

        return (
            <div className="add-to-cart">
            <img  style={{height:"80%"}} src='https://www.shareicon.net/data/128x128/2015/10/03/110919_cart_512x512.png' className="img-responsive" />
           </div>
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
        updateItemUnits
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(CartSmall);