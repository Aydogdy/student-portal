import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } from '../actions/student-actions'; 

export function upDateLocalStorage(stateCopy) {
    localStorage.setItem('initialState', JSON.stringify({students: stateCopy}));
}

const initState = {
    students: []
};

const studentReducer = (state = initState, action) => {
    switch(action.type){
        case ADD_STUDENT:
            let stateCopy = [...state.students, action.payload];
            upDateLocalStorage(stateCopy)
            return { students: stateCopy }

        case DELETE_STUDENT:
            stateCopy = state.students.filter(st => st.id !== action.payload);
            upDateLocalStorage(stateCopy)
            return { students: stateCopy}

        case UPDATE_STUDENT:
            stateCopy = state.students.map((student) => {
                const {id, lastName, firstName, dofb, grade} = action.payload;

                if (student.id === id) {
                    student.firstName = firstName;
                    student.lastName = lastName;
                    student.dofb = dofb;
                    student.grade = grade;
                }
                return student;
            })
            upDateLocalStorage(stateCopy)
            return { students: stateCopy }

        default:
            return state;
    }
}

export default studentReducer;
