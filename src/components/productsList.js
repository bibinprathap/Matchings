"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List'
import { TextField } from 'material-ui';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { addToCart } from '../actions/cartActions'
import Cart from './cart'

class ProductsList extends React.Component {
    dispachAddToCart(product) {
        this.props.addToCart(product);
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
            <div>
                <header className="header-site" >

                </header>
                <main>
                    <Grid>
                        <Row><Cart /></Row>
                    </Grid>
                </main>
                <footer className="text-center footer-site">
                    <p>@2019<b>REVONIC Ltd.</b>Registered in Dubai</p>
                </footer>
            </div>
        );
    }
}

export default ProductsList;