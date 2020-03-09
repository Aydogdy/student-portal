import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addStudent, deleteStudent, updateStudent} from './actions/studentActions'

import './App.css';
import Students from './components/students';
import StudentForm from './components/student-form';

class App extends Component {

  initState =  {
    id: null,
    firstName: '',
    lastName:'',
    dofb: '',
    grade: ''
  };

  state = {
    selectedStudent: this.initState
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
    const id = this.props.studentList.students[this.props.studentList.students.length - 1].id + 1;
    
    this.props.addStudent(
      { 
        id,
        firstName,
        lastName,
        dofb,
        grade
      }
    );
  }

  onUpdateStudent = ({id, firstName, lastName, dofb, grade}) => {
    this.setState({selectedStudent: this.initState})
    this.props.updateStudent(
      { 
        id,
        firstName,
        lastName,
        dofb,
        grade
      }
  );
  }

  deleteStudent(id) {
    this.props.deleteStudent(id);
  }

  editStudent(student) {
    this.setState( {
      selectedStudent: student
    });
  }

  render() {
    
    return (
      <div className="container-fluid">

        <div className="title">Студенческий портал</div>

          <Students
            studentList = { this.props.studentList }
            editStudent = { this.editStudent }
            deleteStudent = { this.deleteStudent }
          />
            
          <div className="container-fluid">
            <StudentForm selectedStudent={this.state.selectedStudent}
                        onAddStudent={this.onAddStudent}
                        onUpdateStudent={this.onUpdateStudent}/>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentList : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addStudent: addStudent,
    deleteStudent: deleteStudent,
    updateStudent: updateStudent
  },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
