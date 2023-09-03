// 引入combineReducers，用于汇总多个reducer
import { combineReducers } from "redux";
import count from "./count";
import persons from "./person";

// 汇总所有的reducer变为一个总的reducer
export default combineReducers({
  count,
  persons
});