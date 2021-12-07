﻿import React from 'react';

const ComponentConditionalTernaryRender = (props) => {

    const { renderMe, dontRenderMe } = props;

    return (
        <>
            {
                renderMe ?
                    <p>I will be displayed if renderMe is true</p>
                    :
                    !dontRenderMe ?
                        <p>I will be displayed if dontRenderMe is true (and renderMe is false)</p>
                        :
                        <p>I will be displayed if renderMe is false and dontRenderMe is true</p>
            }
        </>
    );
};

export default ComponentConditionalTernaryRender;
