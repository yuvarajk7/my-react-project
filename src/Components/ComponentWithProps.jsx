﻿import React from 'react';
import PropTypes from 'prop-types';

const ComponentWithProps = props /*({ headerText, contentText, numericProp, expressionProp, valueProp, objectProp, arrayProp, functionProp, unsuppliedProp })*/ => {
    const { headerText, contentText, numericProp, expressionProp, valueProp, objectProp, arrayProp, functionProp, unsuppliedProp } = props;

    const nextNumberDisplay = arrayProp.map(seqNum =>
        <p key={seqNum}>Number is : {seqNum}; Next next is {seqNum += 1}</p>
    );

    const objectPropsDisplay = [];

    for (let [key, value] of Object.entries(objectProp)) {
        objectPropsDisplay.push(<p key={key}>The value of {key} in the objectProp is {value}</p>);
    }

    return (
        <div>
            <h1>{headerText}</h1>
            <p>{contentText}</p>
            <p>The value of numericProp is: {numericProp}</p>
            <p>valueProp is supplied as: {valueProp}</p>
            <p>The value of expressionProp is: {expressionProp}</p>
            <p>functionProp returns: {functionProp()}</p>

            {nextNumberDisplay}

            {objectPropsDisplay}
            <p>An a prop not supplied: {unsuppliedProp}</p>
        </div>
    )
}

ComponentWithProps.defaultProps = {
    headerText: `Text supplied by the default value of headerText`,
    contentText: `Text supplied by the default value of contentText`,
    unsuppliedProp: `Hello World`
}

ComponentWithProps.propTypes = {
    headerText: PropTypes.string,
    contentText: PropTypes.string,
    numericProp: PropTypes.string,
    expressionProp: PropTypes.number,
    valueProp: PropTypes.number,
    functionProp: PropTypes.func,
    arrayProp: PropTypes.array,
    objectProp: PropTypes.shape({
        key1: PropTypes.string,
        key2: PropTypes.number,
        key3: PropTypes.array
    }),
    // could also have used PropTypes.exact here to ensure that only these keys were present
    unsuppliedProp: PropTypes.any.isRequired
}

export default ComponentWithProps;
