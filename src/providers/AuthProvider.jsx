import React, { createContext, useState } from 'react';

/**
 *  Context (state)
 */
export const AuthContext = createContext({
  user: null,
});

/**
 *  Provider
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: ({ email, password, callback }) => {
          // Llamada al API con el Email y Password
          // ...

          // Con el usuario retornado, lo setteamos
          setUser({
            username: 'SGarcia',
            email,
            avatarUrl:
              'https://images.pexels.com/photos/3519656/pexels-photo-3519656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          });
          callback();
        },
        logout: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
