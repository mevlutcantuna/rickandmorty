import React from 'react';
import '../Styles/Items.scss';

import Item from '../Components/Item';

function Items(props) {
    return (
        <div className={'items'}>
            {props.characters.map((info) => (
                <Item handlePageChange={props.handlePageChange} key={info.id} info={info}/>
            ))}
        </div>
    );
}

export default Items;