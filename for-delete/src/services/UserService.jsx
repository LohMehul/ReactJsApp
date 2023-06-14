import httpanything from "./../http-common.jsx";

const getAll = () =>{
    return httpanything.get("allusers")
}

const UserService = {
    getAll
}
export default UserService;