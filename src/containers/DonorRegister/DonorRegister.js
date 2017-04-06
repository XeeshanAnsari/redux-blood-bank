import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './Dashboard.css';
import {DonorRegister} from './../../components'
import {donorRegister} from './../../store/actions'
function mapStateToProps(state) {
    return {
        userAuth: state.authReducer.userAuth,
        isAuthenticated: state.authReducer.isAuthenticated
    };
}

function mapDispatchToProps(dispatch) {
    return {
       registerDoner: (data) => dispatch(donorRegister(data))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(DonorRegister);
