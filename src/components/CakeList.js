import React, {Fragment} from "react";
import * as PropTypes from "prop-types";
import { CakeListItem } from "./CakeListItem";

export function CakeList(props) {
    return (
        <Fragment>
            <h2>Cakes</h2>
            <ul>
                {
                    props.data && props.data.map(element =>{
                        return (
                            <CakeListItem 
                                key={element.id} 
                                imageUrl={element.imageUrl}
                                name={element.name} 
                            />
                        );
                    })
                }
            </ul>
        </Fragment>
    );
}

CakeList.propTypes = {
    data: PropTypes.array,
};

