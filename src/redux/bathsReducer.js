const defaultState = {

  currentPage: 1,
  currentSort: 'default',

}

const NEXT_PAGE = 'BATHS_NEXT_PAGE';
const PREV_PAGE = 'BATHS_PREV_PAGE';
const CHANGE_PAGE = 'BATHS_CHANGE_PAGE';
const CHANGE_SORT = 'BATHS_CHANGE_SORT';

export const bathsReducer = (state = defaultState, action) => {

  switch (action.type){

    case NEXT_PAGE: 
      return { ...state, currentPage: state.currentPage + action.page }
    case PREV_PAGE:
      return { ...state, currentPage: state.currentPage - action.page }
    case CHANGE_PAGE:
      return { ...state, currentPage: action.page }

    case CHANGE_SORT:
      return { ...state, currentSort: action.sort }

    default:
      return state
  }
} 