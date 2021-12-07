import React from 'react';

const Third = () => {

    const today = new Date().toLocaleDateString();

    const title = `My First React app`;
    const el = <h1>Welcome to {title}</h1>
    return (
        <>
            {el}
            Today date is {today}
        </>
    );
}

export default Third;