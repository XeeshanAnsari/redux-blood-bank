import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ViewDonors} from './../../components'
import {getDonorsList ,searchDonorsList} from './../../store/actions'
function mapStateToProps(state) {
    return {
        
        userAuth: state.authReducer.userAuth,
        donors: state.donorReducer.donorList,
        isAuthenticated: state.authReducer.isAuthenticated
       
    };
}

function mapDispatchToProps(dispatch) {
    return {
       getDonors: (data) => dispatch(getDonorsList(data)),
       searchDonors: (data) => dispatch(searchDonorsList(data))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ViewDonors);
