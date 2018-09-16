import React from "react";
import * as PropTypes from "prop-types";

export function CakeListItem(props) {
    const {
        name,
        imageUrl,
    } = props;
    
    return (
        <li>
            <p>{name}</p>
            <img alt="" src={imageUrl}/>
        </li>
    );
}

CakeListItem.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
};
