import React, { createContext, useState } from 'react';

export const CaptainDataContext = createContext();

export const CaptianContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const value={
        captain,
        setCaptain,
        loading,
        setLoading,
        error,
        setError
    }
    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};
export default CaptianContext;