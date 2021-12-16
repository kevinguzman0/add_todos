const initialState = []

const COMPLETE = 'COMPLETED'
const SUBMIT = 'SUBMIT'
const START_SUBMIT = 'START_SUBMIT'
const ERROR_SUBMIT = 'ERROR_SUBMIT'

export const complete = id => ({
    type: COMPLETE,
    payload: id
})

export const submit = todo => ({
    type: SUBMIT,
    payload: todo,
})

const startSubmit = () => ({
    type: START_SUBMIT,
})

const errorSubmit = error => ({
    type: ERROR_SUBMIT,
    error,
})

export default (state = initialState, action) => {
    switch (action.type) {
        case COMPLETE:
            return state.map(x => x.id === action.payload ? ({ ...x, completed: !x.completed }) : x)

        case SUBMIT:
            return [action.payload].concat(state)

        default:
            break;
    }
    return state
}

export const saveTodo = text => async (dispatch, getState) => {
    dispatch(startSubmit())
    try {
        const todo = {
            id: Math.random().toString(36),
            desc: text,
            completed: false
        }
        dispatch(submit({ ...todo }))
    } catch (e) {
        dispatch(errorSubmit(e))
    }
}