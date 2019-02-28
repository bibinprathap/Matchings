"use strict";
import React from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Matchingboxes from "./Matchingboxes";


class Matching extends React.Component {

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
                    <Matchingboxes />
                </main>
                <footer className="text-center footer-site">
                </footer>
            </div>

        );
    }
}

export default Matching;