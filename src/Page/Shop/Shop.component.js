import React from 'react'
import SHOP_DATA from './Shop.data';
import PreviewCollection from '../../Component/Preview-collection/Preview-collection.component'
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections : SHOP_DATA
        };
    }
    
    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>  
                {
                    collections.map(({id, ...otherCollectionsProps}) =>(
                        <PreviewCollection key={id} { ...otherCollectionsProps } />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;