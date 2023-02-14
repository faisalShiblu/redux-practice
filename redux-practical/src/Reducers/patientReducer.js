export const patientState = {
    patients: []
}

export const patientReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const patientAll = [...state.patients, newPatient];
            return { patients: patientAll }
        case 'REMOVE_PATIENT':
            const remainingPart = state.patients.filter(pt => pt.id !== action.id);
            const remainingPatient = { patients: remainingPart }
            return remainingPatient;
        default:
            return state;
        // throw new Error();
    }
}
