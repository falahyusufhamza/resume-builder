import { createSlice,  configureStore } from '@reduxjs/toolkit'

const template = {
    template : 'default'
};
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

const templateSlice = createSlice({
    name : 'template',
    initialState : template,
    reducers : {
        switchTemplate(state,{payload}){
            state.template  = payload.template;
        }
    }
})

const userSlice = createSlice({
    name : 'user',
    initialState : userInitialState,
    reducers : { 
        clearState(state){
            state.personal = {
                    firstName : '',
                    lastName : '',
                    email : '',
                    phoneNo : '',
                    country : '',
                    state :''
                }

                state.education = [
                    {
                        id : Math.random(),
                        institute : '',
                        degree : '',
                        toDate : '',
                        fromDate : ''
                    }
                ]
                state.work =[
                    {
                        id : Math.random(),
                        company : '',
                        designation : '',
                        toDate : '',
                        fromDate : ''
                    }
                ]
                state.summary = ''
                state.skills  =[]

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
export const templateActions= templateSlice.actions;

const store = configureStore({reducer : {
    userReducer : userSlice.reducer,
    templateReducer : templateSlice.reducer
}
})

export default store;