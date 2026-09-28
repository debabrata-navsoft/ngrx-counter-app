import {createFeatureSelector, createSelector} from '@ngrx/store';
import { CounterState } from './counter.reducer';

export const selectCounter = createFeatureSelector<CounterState>('counter')

export const selectCount = createSelector(
    selectCounter,
    state => state.count
);