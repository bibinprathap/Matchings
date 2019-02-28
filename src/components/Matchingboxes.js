"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { nextbuttonclick, previousbuttonClick, defContainerClick, termsContainerClick } from '../actions/matchActions';
import { Col, Row, Panel, Badge, Button } from 'react-bootstrap';


class Matchingboxes extends React.Component {

    termsdefsList(matchdata) {
        return (
            matchdata.map(match => {
                return (
                    <li data-index={match.index}>
                        <span>{match.text}</span>
                    </li>
                );
            })
        );
    }


    render() {
        let currentslideData = this.props.maches.slides[this.props.maches.currentslideindex];
        return (
            <section>
                <button className="previousbutton" onClick={() => this.props.previousbuttonClick()} name="previous">previous</button>
                <ul id="terms" onClick={(e) => this.props.termsContainerClick(e)} >
                    {this.termsdefsList(currentslideData.terms)}
                </ul>
                <ul id="defs" onClick={(e) => this.props.defContainerClick(e)} >
                    {this.termsdefsList(currentslideData.definitions)}
                </ul>
                <button className="nextbutton" onClick={() => this.props.nextbuttonclick()} name="reset">Next</button>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        maches: state.maches
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        nextbuttonclick,
        previousbuttonClick,
        termsContainerClick,
        defContainerClick
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Matchingboxes);