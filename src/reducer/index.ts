import { combineReducers } from "redux";
import users from 'src/reducer/user'
import likes from 'src/reducer/like'
import userDetails from 'src/reducer/userDetails'


export default combineReducers({ 
    users,
    likes,
    userDetails
});