import {rootReduser} from "./redusers";

const {createStore} = require("redux");


export const store = createStore(rootReduser)