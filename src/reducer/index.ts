import { combineReducers } from "redux";
import users from 'src/reducer/user'
import likes from 'src/reducer/like'

export default combineReducers({ 
    users,
    likes,
});