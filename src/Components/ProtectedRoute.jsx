import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';

const ProtectedRoute = ({children}) => {
    //children refers to all the components reside within the portected route
    const {user} = useUserAuth();
    if (!user){
        //if the user is not authenticated and still wants to access page then redirect to login opage
        return <Navigate to ="/" />
    }
  return children //else return children
}

export default ProtectedRoute
