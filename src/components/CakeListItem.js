import React from "react";
import * as PropTypes from "prop-types";

export function CakeListItem(props) {
    const {
        name,
        imageUrl,
        comment,
        yumFactor,
    } = props.element;
    
    return <li>
        <h3>{name}</h3>
        <img alt="" src={imageUrl}/>
        <p>{comment}</p>
        <p>Yum factor: {yumFactor}</p>
    </li>;
}

CakeListItem.propTypes = {element: PropTypes.any};
