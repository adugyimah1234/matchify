import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas';
import rootReducer from './Reducer';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Redux Persist configuration
const persistConfig = {
  key: 'root', // Key for storage
  storage,     // Storage engine (localStorage by default)
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store with persisted reducer and saga middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }) // To avoid issues with non-serializable values
      .concat(sagaMiddleware),
});

// Run root saga
sagaMiddleware.run(rootSaga);

// Create persistor to handle persistence
const persistor = persistStore(store);

export { store, persistor };
