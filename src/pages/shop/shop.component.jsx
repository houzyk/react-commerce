import React, {Component} from "react";

// data
import SHOP_DATA from "./shop.data";

// component
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

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
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{ collections.map( ({id, ...other}) => (
					<PreviewCollection key={id} {...other}/>
				))
				}
			</div>
		);
	}
}

export default ShopPage;