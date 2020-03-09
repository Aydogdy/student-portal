export const ADD_STUDENT = '[STUDENT] add new student';
export const DELETE_STUDENT = '[STUDENT] delete student by id';
export const UPDATE_STUDENT = '[STUDENT] update student by id';

export function addStudent(student) {
    return {
        type: ADD_STUDENT,
        payload: student
    }
}
export function deleteStudent(id) {
    return {
        type: DELETE_STUDENT,
        payload: id
    }
}
export function updateStudent(student) {
    return {
        type: UPDATE_STUDENT,
        payload: student
    }
}
