import React from "react";

// css
import './preview-collection.styles.scss';

const PreviewCollection = ({ title, items }) => {
	return (
		<div className="collection">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{items.filter((i, index) => index < 4).map(item => (
					<div key={item.id}>
						{item.name}
					</div>
				))
				}	
			</div>
		</div>
	);
}

export default PreviewCollection;