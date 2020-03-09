import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } from '../actions/studentActions'; 

const initState = {
    students: []
};

export function upDateLocalStorage(stateCopy) {
    localStorage.setItem('initialState', JSON.stringify({students: stateCopy}));
}

const studentReducer = (state = initState, action) => {
    switch(action.type){
        case ADD_STUDENT:
            let stateCopy = [...state.students, action.payload];
            upDateLocalStorage(stateCopy);
            return {
                students: stateCopy
            }

        case DELETE_STUDENT:
            stateCopy = state.students.filter( x => x.id !== action.payload);
            upDateLocalStorage(stateCopy);
            return {
                students: stateCopy
            }

        case UPDATE_STUDENT:
            stateCopy = state.students.map((student) => {
                const {id, lastName, firstName, dofb, grade} = action.payload;
                if(student.id === id) {
                    student.firstName = firstName;
                    student.lastName = lastName;
                    student.dofb = dofb;
                    student.grade = grade;
                }
                return student;
            })
            upDateLocalStorage(stateCopy);
            return {
                students: stateCopy
            }

        default:
            return state;
    }
}

export default studentReducer;
