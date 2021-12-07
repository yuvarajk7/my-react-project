﻿import React from 'react';

const ComponentConditionalRender = (props) => {

    //const renderMe = false;
    //const dontRenderMe = true;

    const { renderMe, dontRenderMe } = props;

    if (renderMe) {
        return (
            <p>I will be displayed if renderMe is true</p>
        );
    } else if (!dontRenderMe) {
        return (
            <p>
                I will be displayed if dontRenderMe is false (and renderMe is false)
            </p>
        );
    } else {
        return (
            <p>
                I will be displayed if renderMe is false and dontRenderMe is true
            </p>
        );
    }

};

export default ComponentConditionalRender;
