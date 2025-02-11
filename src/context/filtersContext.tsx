import { createContext, ReactNode } from "react";
import { useState } from "react";
import { FiltersType } from "../types/types.d";

interface FiltersContextType {
    filters: FiltersType;
    setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}

export const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export function FiltersProvider ({ children } : { children: ReactNode}) {

    const [filters, setFilters] = useState<FiltersType>({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}