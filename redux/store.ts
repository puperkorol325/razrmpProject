import { configureStore, PayloadAction, Slice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

interface initialState {
    history: string[];
}

const historyReducer = createSlice({
    name: 'history',
    initialState: {
        history: [],
    } as initialState,
    reducers: {
        addHistory(state: initialState, action: PayloadAction<string>) {
            state.history.unshift(action.payload);
        },
        clearHistory(state: initialState) {
            state.history = [];
        }
    }
});

export const store = configureStore({
    reducer: {
        history: historyReducer.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const { addHistory, clearHistory} = historyReducer.actions;