import React, { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        
        return item ? JSON.parse(item) : initialValue
    });

    return [storedValue];
}