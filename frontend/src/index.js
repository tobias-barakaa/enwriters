import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {

    useEffect(
        () => {
            fetch('/article/hello')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setMessage(data.message);
                })
                .catch(err => console.log(err));
        }, []
    );

    const [message, setMessage] = useState('');

    return (
        <div className='app'>
            {message}
        </div>
    );
};
const root = createRoot(document.getElementById('root'));
root.render(<App />);
