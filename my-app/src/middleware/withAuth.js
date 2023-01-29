import {useSelector} from "react-redux"
export const ProtectRoute = ({ children }) => {

  const user = useSelector((state) => state.user);
  console.log(user)
  if (isLoading || (!isAuthenticated && window.location.pathname !== '/login')){
    return <LoadingScreen />; 
  }
  return children;
};