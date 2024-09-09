'use client'
import { SessionProvider } from 'next-auth';

const AuthProvider = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProvider;