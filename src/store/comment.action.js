import axios from "axios";

export const COMMENT_REQUEST = '[COMMENT] REQUEST';
export const COMMENT_SUCCESS = '[COMMENT] SUCCESS';
export const COMMENT_FAILED = '[COMMENT] FAILED';

export const sendComment = submit => dispatch => {
  dispatch({ type: COMMENT_REQUEST });

  return axios.post('https://portfolio-gamma-orpin-94.vercel.app/api/comments/', submit)
    .then(() => {
      dispatch({ type: COMMENT_SUCCESS })
    })
    .catch(() => {
      dispatch({ type: COMMENT_FAILED })
    })
}