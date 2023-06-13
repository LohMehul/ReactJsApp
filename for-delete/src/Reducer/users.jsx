import {RETRIVE_ALL_USERS} from "../Action/types.jsx"

const intialState  = {}

const usersReducer=(users=intialState,action)=>{
    const {type, payload} = action
    switch (type) {
        case RETRIVE_ALL_USERS:
            return {...payload}
        default:
        return users
    }
}
export const selectUser = (state)=>state.users
export default usersReducer
// username
// Username
// UserName
// userName
// user name