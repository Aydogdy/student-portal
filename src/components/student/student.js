import React, { Component } from 'react';

import './student.scss';

export default class Student extends Component {

  grades = ['Неудовлетворительно', 'Удовлетворительно', 'Хорошо', 'Отлично'];

  constructor(props) {
    super(props);
    this.state ={isEdit:false}
    this.editStudent = this.editStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent = () => {
    const { id } = this.props.student;
    this.props.deleteStudent(id);
  }

  editStudent() {
    const { student } = this.props;
    this.props.editStudent(student);
  }


  render() {
    const { id, firstName, lastName, dofb, grade} = this.props.student;
    
    return (
      <div className="card bs-card" >
        <h5 className="card-header">Студент #: {id}</h5>
        <div className="card-body">

          <h5 className="card-title">
            <i className="fa fa-user-circle-o bs-icon" />
            { firstName } { lastName }
          </h5>

          <div className="card-text">
            Дата рождения: <span className="val">{ dofb }</span>
          </div>
          
          {grade && <div className="card-text">
            Успеваемость: <span className="val">{ this.grades[grade - 1] }</span>
          </div> }

          <div className="bs-btn-group">
            <button className="btn btn-danger"
                    onClick={this.deleteStudent}>
              <i className="fa fa-trash-o" /> &nbsp;
              Удалить
            </button>

            <button className="btn btn-primary"
                    onClick={this.editStudent}>
              <i className="fa fa-pencil-square-o" /> &nbsp;
              Редакт.
            </button>
          </div>
          
        </div>
      </div>
      
    );
  }
}