import {Navigate, Outlet} from "react-router-dom";
import { useStateContext } from "../../Context/ContextProvider";

export default function GuestLayout({ children }) {
  const { user, token } = useStateContext();

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div id="guestLayout">
      { children }
    </div>
  );
}