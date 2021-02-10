import React from 'react';

import UserContext from './UserContext';

const UserProvider = ({children, user}) => {
  console.log('render')
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
