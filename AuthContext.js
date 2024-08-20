import { createContext } from 'react';

// Create the AuthContext
export const AuthContext = createContext(null);

// Note: You don't need the additional `AuthContext` component here,
// as it will conflict with the created context.
