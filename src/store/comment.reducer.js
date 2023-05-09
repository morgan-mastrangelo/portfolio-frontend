import * as Actions from './comment.action';

const initialState = {
  isLoading: false
}

const comment = (state = initialState, action) => {
  switch (action.type) {
    case Actions.COMMENT_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case Actions.COMMENT_SUCCESS: {
      return {
        ...state,
        isLoading: false
      }
    }
    case Actions.COMMENT_FAILED: {
      return {
        ...state,
        isLoading: false
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default comment;