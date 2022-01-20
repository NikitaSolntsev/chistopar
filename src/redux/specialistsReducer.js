const defaultState = {
  currentPage: 1,
}

const NEXT_PAGE = 'SPECIALISTS_NEXT_PAGE';
const PREV_PAGE = 'SPECIALISTS_PREV_PAGE';
const CHANGE_PAGE = 'SPECIALISTS_CHANGE_PAGE';

export const specialistsReducer = (state = defaultState, action) => {

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