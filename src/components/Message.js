import React from "react";
import * as PropTypes from "prop-types";

export function Message(props) {
    const {
        displayText,
        clearMessageHandler,
    } = props;

    return (
        <div>
            <p>{displayText}</p>
            <button
                onClick={clearMessageHandler}    
                type="button">
                Clear message
            </button>
        </div>
        
    );
}

Message.propTypes = {
    displayText: PropTypes.string,
    clearMessageHandler: PropTypes.func,
};
