import { createSelector } from '@ngrx/store';

export const update = (state: any) => state;

export const selectUpdate = createSelector(update, (state: any) => state);
