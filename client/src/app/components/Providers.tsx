"use client"
import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

interface ProvidersProps {
    children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    // Custom logic to parse children and display toast messages

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            {children}
        </>
    );
};

export default Providers;