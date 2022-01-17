import React, {Component} from "react";

// data
import SHOP_DATA from "./shop.data";

// css
import './shop.styles.scss';

class ShopPage extends Component {
	constructor () {
		super();

		this.state = {
			collections: SHOP_DATA
		};
	}

	render () {
		return (
			<div className="shop">
			</div>
		);
	}
}

export default ShopPage;