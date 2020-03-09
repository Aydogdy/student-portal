import React, { Component } from 'react';
import Student from '../student';

import './students.css';

export default class Students extends Component {
    render() {
      let students = this.props.studentList.students;
      const trItem = students.map((item, index) => {
        return (
          <div className="col-12 col-md-4 col-sm-6" key={item.id}>
            <Student student={item}
                    index={index}
                    editStudent={this.props.editStudent}
                    deleteStudent={this.props.deleteStudent}
                  />
          </div>
        )
      });

      return (
        <div className="container-fluid">
          <div className="row">
              { trItem }
          </div>
        </div>
      );
    }
  }