import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "./rootReducer";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck:false,
        thunk:false
    }).concat(sagaMiddleware)
})

export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootSaga)

export default store

