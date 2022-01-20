const defaultState = {
  currentPage: 1,
}

const NEXT_PAGE = 'BATHS_NEXT_PAGE';
const PREV_PAGE = 'BATHS_PREV_PAGE';
const CHANGE_PAGE = 'BATHS_CHANGE_PAGE';

export const bathsReducer = (state = defaultState, action) => {

  switch (action.type){
    case NEXT_PAGE: 
      return { ...state, currentPage: state.currentPage + action.page }
    case PREV_PAGE:
      return { ...state, currentPage: state.currentPage - action.page }
    case CHANGE_PAGE:
      return { ...state, currentPage: action.page }
    default:
      return state
  }
} 