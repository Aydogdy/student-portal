import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addStudent, deleteStudent, updateStudent } from './../../actions/student-actions'
import './app.scss';

class App extends Component {

  idGen = 5;
  state = {
    selectedStudent: {
      id: null,
      firstName: '',
      lastName:'',
      dofb: '',
      grade: ''
    }
  }

  constructor(props) {
    super(props);
    this.addNewStudent = this.onAddStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.editStudent = this.editStudent.bind(this);
  }

  componentWillMount(){
  }

  onAddStudent = ({ firstName, lastName, dofb, grade}) => {
    this.props.addStudent(
      { id: ++this.idGen, firstName, lastName, dofb, grade }
    );
  }

  onUpdateStudent = ({id, firstName, lastName, dofb, grade}) => {
    this.props.updateStudent(
      { id, firstName, lastName, dofb, grade }
    );
  }

  deleteStudent(id) {
    this.props.deleteStudent(id);
  }

  editStudent(student) {
    this.setState(
        { selectedStudent: student }
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="title">Student Portal</div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { studentList: state }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addStudent: addStudent,
    deleteStudent: deleteStudent,
    updateStudent: updateStudent
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
