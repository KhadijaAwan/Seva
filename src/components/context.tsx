"use client";
import { ReactNode, createContext, useContext, useState } from 'react';

interface UserContextType {
    userDetails: {
        email: string;
        password: string;
    }
    setUserDetails: React.Dispatch<React.SetStateAction<{
        email: string;
        password: string;
    }>>;
}

const UserContext = createContext<UserContextType>({
    userDetails: {
        email: "",
        password: "",
    },
    setUserDetails: () => { },
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    })

    return (
        <UserContext.Provider value={{
            userDetails, setUserDetails
        }}>
            {children}
        </UserContext.Provider>
    );
};