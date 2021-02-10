import {useContext} from 'react'

import UserContext from './UserContext'

export default function useUser() {
  const user = useContext(UserContext);
  if (!user) {
    console.warn("No user found in useUser hook: hook may be called outside a UserProvider, or user may not be logged in.")
  }
  return user;
}
