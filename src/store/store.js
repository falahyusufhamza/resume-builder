import { createSlice,  configureStore } from '@reduxjs/toolkit'

const userInitialState = {
    personal : {
        firstName : '',
        lastName : '',
        email : '',
        phoneNo : '',
        country : '',
        state :''
    },
    education : [
        {
            id : Math.random(),
            institute : '',
            degree : '',
            toDate : '',
            fromDate : ''
        }
    ],
    work : [
        {
            id : Math.random(),
            company : '',
            designation : '',
            toDate : '',
            fromDate : ''
        }
    ],
    summary : '',
    skills : []
    
}

const userSlice = createSlice({
    name : 'user',
    initialState : userInitialState,
    reducers : { 
        clearState(state){
            state = {...userInitialState}
        },
        updatePersonalData(state,{payload}){
            state.personal = {...payload.personal}
        },
        updateEducationData(state,{payload}){
            state.education = payload.education
        },
        updateWorkData(state,{payload}){
            state.work = payload.work
        },
        updateSkillsData(state,{payload}){
            state.skills = payload.skills
        },
        updateSummaryData(state,{payload}){
            state.summary = payload.summary
        }
    }
})

export const userActions = userSlice.actions;

const store = configureStore({reducer : {
    userReducer : userSlice.reducer
}
})

export default store;