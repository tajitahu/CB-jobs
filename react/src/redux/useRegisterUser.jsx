import { useDispatch } from 'react-redux';
import { registerUser } from './userSlice';

export default function useRegisterUser() {
  const dispatch = useDispatch();

  const register = async (user) => {
    try {
      await dispatch(registerUser(user));
    } catch (err) {
      console.error(err);
    }
  };

  return register;
}