import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [userToken, setUserToken] = useState('');
    const [appliedJobs, setAppliedJobs] = useState([])
    
    return (
        <UserContext.Provider 
          value={
            { 
              username, setUsername,
              userToken, setUserToken,
              appliedJobs, setAppliedJobs
            }
          }>
          {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);