import React from 'react'
import './preview-collection.style.scss';
import CollectionItem from '../Collection-item/Collection-item.component'

const PreviewCollection = ({title, items } ) =>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()} </h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)//idx is index.
                .map(({id, ...collectionItemProps}) =>(
                    <CollectionItem key={id} {...collectionItemProps} />
                ))
            } 
        </div>
    </div>  
);

export default PreviewCollection;