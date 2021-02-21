import React from 'react';
import '../Styles/Item.scss';
import {routes} from '../routes';


function Item(props) {
    const   {info, handlePageChange} = props;

    const detailPath = routes.detail.path.replace(':id',info.id)

    return (
        <div className={'item'}>
            <div className={'item__top'}>
                <img alt={'#'} className={'item__top__image'} src={info.image}/>
            </div>
            <div className={'item__bottom'}>
                <div className={'item__bottom__name'}>{info.name}</div>
                <div>
                    <button
                        className={'item__bottom__button'}
                        onClick={(e) => handlePageChange(detailPath)}
                    >Detail</button>
                </div>
            </div>
        </div>
    );
}

export default Item;