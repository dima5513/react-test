import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
});

class MyClass{
  myTitle = '123'

}

const store = createStore(reducers);
export default store;

// todo: добавить ещё редьюсеров

