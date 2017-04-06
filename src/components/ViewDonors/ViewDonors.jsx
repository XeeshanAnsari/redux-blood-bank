import React, { Component , PropTypes} from 'react'
import * as MUI from 'material-ui'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
// import {donorRegister} from './../../store/actions'
import * as firebase from 'firebase'
import './ViewDonors.css'
import {
    Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn
} from 'material-ui/Table';

export class ViewDonors extends Component {
  
   static contextTypes = {
      router: PropTypes.object.isRequired
  }
    constructor() {
        super()
        this.state={
            bloodGroup:"",
            bloodGroupValue:""
        }
    }
    componentWillMount() {
       (this.props.isAuthenticated == true)
        ? this.props.getDonors()
        : this.context.router.push('/login')
   }

   //handleBloodgroup for search
   handleBloodgroup(e,index, value){
      e.preventDefault();
      this.setState({ bloodGroupValue: value})
       let bloodGroup = e.target.childNodes[0].nodeValue; 
        //    console.log("bloodGroup :" +bloodGroup);
        //    console.log("value :" +value);
       this.props.searchDonors(bloodGroup)
   }

    render() {
        return (
            <div className='donor-list'>
                <div>
                    <MUI.SelectField 
                             floatingLabelText="Blood Group"
                             value={this.state.bloodGroupValue}
                             onChange={this.handleBloodgroup.bind(this)} >
                                    <MUI.MenuItem  value={1} primaryText="A+" />
                                    <MUI.MenuItem  value={2} primaryText="B+" />
                                    <MUI.MenuItem  value={3} primaryText="AB+" />
                                    <MUI.MenuItem  value={4} primaryText="O+" />
                                    <MUI.MenuItem  value={5} primaryText="A-" />
                                    <MUI.MenuItem  value={6} primaryText="B-" />
                                    <MUI.MenuItem  value={7} primaryText="AB-" />
                                    <MUI.MenuItem  value={8} primaryText="O-" />
                      </MUI.SelectField> 
                 </div>   

                <h1 className="donor-h1">Donor List</h1>
                <Table  adjustForCheckbox={false}>
                <TableHeader>
                    <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>First Name</TableHeaderColumn>
                    <TableHeaderColumn>Last Name</TableHeaderColumn>
                    <TableHeaderColumn>Email</TableHeaderColumn>
                    <TableHeaderColumn>Contact No</TableHeaderColumn>
                    <TableHeaderColumn>Address</TableHeaderColumn>
                    <TableHeaderColumn>Blood Group</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {(this.props.donors == "") ? <h1>NOT AVAILABLE</h1>: null }
                    {this.props.donors.map(function (v, i) {
                    return (
                        <TableRow key={i}>
                        <TableRowColumn>{i + 1}</TableRowColumn>
                        <TableRowColumn> {v.firstName}</TableRowColumn>
                        <TableRowColumn>{v.lastName}</TableRowColumn>
                        <TableRowColumn>{v.email}</TableRowColumn>
                        <TableRowColumn>{v.contactNo}</TableRowColumn>
                        <TableRowColumn>{v.address}</TableRowColumn>
                        <TableRowColumn>{v.bloodGroup}</TableRowColumn>
                        </TableRow>
                    )
                    })}
                </TableBody>
                </Table>
            </div>
        )
    }

}


export default ViewDonors;