import React from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function CakeListItem(props) {
    const {
        id,
        name,
        imageUrl,
    } = props;
    
    return (
        <li>
            <Link to={`/cake/${id}`}>
                <p>{name}</p>
                <img alt="" src={imageUrl}/>
            </Link>
        </li>
    );
}

CakeListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
};
