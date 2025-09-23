/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type PersonaKey = 'residential' | 'smallBusiness' | 'agent' | 'supervisor';

interface PersonaContextValue {
  persona: PersonaKey;
  setPersona: (value: PersonaKey) => void;
}

const PersonaContext = createContext<PersonaContextValue | undefined>(undefined);

interface PersonaProviderProps {
  children: ReactNode;
  initialPersona?: PersonaKey;
}

export const PersonaProvider = ({ children, initialPersona = 'residential' }: PersonaProviderProps) => {
  const [persona, setPersona] = useState<PersonaKey>(initialPersona);

  const value = useMemo(() => ({ persona, setPersona }), [persona]);

  return <PersonaContext.Provider value={value}>{children}</PersonaContext.Provider>;
};

export const usePersona = () => {
  const context = useContext(PersonaContext);

  if (!context) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }

  return context;
};

export const personaOptions: Array<{ value: PersonaKey; label: string; description: string }> = [
  {
    value: 'residential',
    label: 'Residential',
    description: 'Individual customers and households',
  },
  {
    value: 'smallBusiness',
    label: 'Small Business',
    description: 'Accounts managing commercial locations',
  },
  {
    value: 'agent',
    label: 'Agent',
    description: 'Member services representative workspace',
  },
  {
    value: 'supervisor',
    label: 'Supervisor',
    description: 'Team oversight and analytics',
  },
];
