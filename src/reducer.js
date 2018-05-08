import { handleActions } from 'redux-actions';
import * as types from './actionTypes';

const defaultState = {
  selectedCard: undefined,
  turned: false,
  title: 'Test title'
};

export default handleActions(
  {
    [types.SELECT_CARD]: (state, { payload: selectedCard }) => ({
      ...state,
      selectedCard: selectedCard
    }),

    [types.DESELECT_CARD]: state => ({
      ...state,
      selectedCard: undefined,
      turned: false
    }),

    [types.TURN_CARD]: state => ({
      ...state,
      turned: true
    })
  },

  defaultState
);