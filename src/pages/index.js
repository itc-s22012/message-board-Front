import React, { useState, useEffect } from 'react';
import Style from '@/styles/Home.module.css'
function MyComponent() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:3030/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setMessage(data.message);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };
    return (
        <div className={Style.h1}>
            <h1>{message}</h1>
        </div>
    );
}

export default MyComponent;
