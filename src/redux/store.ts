import { createStore } from 'redux';

import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from './root-reducer'

const persisConfig = {
    key: "root",
    storage,
}

const persisReducer = persistReducer(persisConfig, rootReducer);

export const store = createStore(persisReducer); //Enviar apenas um reducer

export const persistor = persistStore(store);