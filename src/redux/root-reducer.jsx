import { combineReducers } from "redux";

import contador from "./contador/contador-reducer";
import informacion from './informacion/informacion-reducer';

export default combineReducers({ contador, informacion });
