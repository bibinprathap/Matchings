"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List'
import { TextField } from 'material-ui';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import {addToCart} from '../actions/cartActions'
import {showCartTrue} from '../actions/showCartActions'
import ProductItem from "./productItem";
import CartSmall from './cartSmall'
import Cart from './cart'

class ProductsList extends React.Component {
    dispachAddToCart(product) {
        this.props.addToCart(product);
    }

    renderProducts() {
        return (
            this.props.products.map((p) => {
                return (
                    <Col className='productsList' xs={12} sm={6} md={4} key={p.id}>
                        <ProductItem handleOnAdd={this.dispachAddToCart.bind(this)} product={p} />
                    </Col>
                );
            })
        );
    }

    
    handleCartClick(event) {
        this.props.showCartTrue(true);
    }

    handleChange(event) {
        //this.searchDebounce(event.target.value);
    }
    render() {

        const flexContainer = {
            display: 'flex',
            flexDirection: 'row',
            padding: 0,
          };
          
        return (
            <Grid>
                   <MuiThemeProvider>
<Row>
             <Toolbar style={{ width : '100%'}}>
                <ToolbarTitle  className="" text="John Doe Enterprise" />
                <TextField onChange={this.handleChange} hintText="Search"   fullWidth={false} />
                <CartSmall OnClick= {this.handleCartClick.bind(this)} />
    </Toolbar>
    </Row>

                 

 <Row>
 
      <List  style={flexContainer}>
        <ListItem primaryText="Home"/>
        <ListItem primaryText="Men" />
        <ListItem primaryText="Women" />
        <ListItem primaryText="Electronics" />
      </List>
   
      
    </Row>  
 </MuiThemeProvider>
    {  this.props.showcart?<Row><Cart /></Row>:<Row style={{margin:'15px'}}>{this.renderProducts()} </Row>} 
                
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        showcart:state.showcart
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        addToCart,
        showCartTrue
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(ProductsList);