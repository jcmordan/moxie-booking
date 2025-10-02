import React, { createContext, useContext, ReactNode } from 'react';

export interface Business {
  name: string;
  logo: string;
  address: {
    street: string;
    suite: string;
    city: string;
    state: string;
    zipCode: string;
  };
  email: string;
  phone: string;
}

interface BusinessContextType {
  business: Business;
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

interface BusinessProviderProps {
  children: ReactNode;
  business: Business;
}

export const BusinessProvider = ({ children, business }: BusinessProviderProps) => {
  return (
    <BusinessContext.Provider value={{ business }}>
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (context === undefined) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
};

export default BusinessContext;
