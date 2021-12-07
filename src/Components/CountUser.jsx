import React from 'react';

const CountUser = ({ countProp }) => {
    return (
        <>
            <h2>
                The value of the state count is
            </h2>
            <p>The value id {countProp}</p>
        </>
    );
};

export default CountUser;