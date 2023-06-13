import UserService from "./../services/UserService.jsx"

export const retierveUsers = ()=> async(dispatch)=> {
    const ResData = await UserService.getAll();
        return dispatch({type:"RETRIVE_ALL_USERS",payload:ResData})
    // try {
        
    // } catch (error) {
        
    // }
}