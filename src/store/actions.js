import { push } from 'connected-react-router';

export const signIn = () => dispatch => {
    dispatch(push('/profile'))
}