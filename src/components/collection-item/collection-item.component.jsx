// redux
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import React from "react";

// css
import './collection-item.styles.scss';

// components
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ addItem, item }) => {
    const { imageUrl, name, price } = item
    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>
                ADD TO CART
            </CustomButton>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            addItem: item => dispatch(addItem(item))
        }
    );
}

export default connect(null, mapDispatchToProps)(CollectionItem);