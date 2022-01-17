import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

// css
import './preview-collection.styles.scss';

const PreviewCollection = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{items.filter((i, index) => index < 4).map(({id, ...other}) => (
					<CollectionItem key={id} {...other}/>
				))
				}	
			</div>
		</div>
	);
}

export default PreviewCollection;