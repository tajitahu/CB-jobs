import {createContext, useContext, useState} from "react";
import { setToken as setTokenInRedux,setUser as setUserInRedux } from '../redux/userSlice';
import { useDispatch } from "react-redux";
const StateContext = createContext({
  currentUser: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {}
})

export const ContextProvider = ({children}) => {
  const [user, _setUser] = useState(localStorage.getItem('USER') ? JSON.parse(localStorage.getItem('USER')) : null);
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
  const [notification, _setNotification] = useState('');
  const dispatch = useDispatch();

  const setToken = (token) => {
    _setToken(token);
    dispatch(setTokenInRedux(token)); // Dispatch the setToken action
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }

  const setUser=(user)=>{
    _setUser(user);
    dispatch(setUserInRedux(user)); 
    if(user)
    {
      localStorage.setItem('USER', JSON.stringify(user));
    }
    else
    {
      localStorage.removeItem('USER');
    }
  }

  const setNotification = message => {
    _setNotification(message);

    setTimeout(() => {
      _setNotification('')
    }, 5000)
  }
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <StateContext.Provider value={{
      modalOpen, openModal, closeModal,
      user,
      setUser,
      token,
      setToken,
      notification,
      setNotification
    }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
