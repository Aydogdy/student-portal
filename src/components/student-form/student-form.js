import React, { Component } from 'react';

export default class StudentForm extends Component {
    
    state = {
        id: null,
        firstName: '',
        lastName: '',
        dofb: '',
        grade: '',
        isEditMode: false 
    }

    updateState({id, firstName, lastName, dofb, grade}) {
        if (this.state.id !== id) {
            this.setState({
                id,
                firstName,
                lastName,
                dofb,
                grade
            })
        }
        return this.state;
    }

    onSubmit = (ev) => {
        ev.preventDefault();

        if (this.state.firstName.trim() === '' ||
            this.state.lastName.trim() === '' ||
            this.state.dofb.trim() === '') {
            return true;
        }

        if (!this.state.isEditMode) {
            this.props.onAddStudent(this.state);
        } else {
            this.props.onUpdateStudent(this.state);
        }
        
        this.setState({
            id: null,
            firstName: '',
            lastName: '',
            dofb: '',
            grade: '',
        })
    }

    formChangeHandler = (ev) => {
        const prop = ev.target.name;
        const val = ev.target.value;
        this.setState({[prop]: val});
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedStudent !== this.props.selectedStudent) {
            this.setState({
                id: this.props.selectedStudent.id,
                firstName: this.props.selectedStudent.firstName,
                lastName: this.props.selectedStudent.lastName,
                dofb: this.props.selectedStudent.dofb,
                grade: this.props.selectedStudent.grade,
                isEditMode: true
            })
        }
    }

    render() {

        const { firstName, lastName, dofb, grade } = this.state;
    
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text"
                            className="form-control"
                            id="fname"
                            name="firstName"
                            onChange={this.formChangeHandler}
                            value={firstName} />
                </div>

                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text"
                            className="form-control"
                            id="lname"
                            name="lastName"
                            value={lastName}
                            onChange={this.formChangeHandler} />
                </div>

                <div className="form-group">
                    <label htmlFor="dofb">Date Of Birth</label>
                    <input type="text"
                            className="form-control"
                            id="dofb"
                            name="dofb"
                            value={dofb}
                            onChange={this.formChangeHandler} />
                </div>

                <div className="form-group">
                    <label htmlFor="grade">Grade</label>
                        <select className="form-control"
                                id="grade"
                                name="grade"
                                value={ grade }
                                onChange={this.formChangeHandler}>
                        <option>Оценка</option>
                        <option value="1">Неудовлетворительно</option>
                        <option value="2">Удовлетворительно</option>
                        <option value="3">Хорошо</option>
                        <option value="4">Отлично</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }

}
