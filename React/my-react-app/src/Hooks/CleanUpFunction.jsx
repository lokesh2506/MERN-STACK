import React, { useEffect, useLayoutEffect, useState } from 'react';

export function CleanUpHook() {
    const [book, setBook] = useState(1);
    useLayoutEffect(()=>{
        console.log("This will print first before the UseEffect");
    },[])  
    useEffect(() => {
        console.log("Screen Rendered");
        return ()=>{
            console.log('Re-render')
        }
    }, [book]);

    const incrementBook = () => {
        setBook(book + 1); // Update book state by incrementing
    };

    return (
        <h1 onClick={incrementBook}>Clean up Hook {book}</h1>
    );
}
