import React from 'react';
import {withRouter} from 'react-router-dom';
import '../Styles/ItemDetails.scss';

function ItemDetails(props) {
    const id = props.match.params.id;
    const characterDetail = props.characters[id - 1];
    console.log(characterDetail);
    return (
        <div>
            {characterDetail ?
                (
                    <div className={'itemDetails'}>
                        <img className={'itemDetails__image'} src={characterDetail.image}/>
                        <div className={'itemDetails__info'}>
                            <span>Name : {characterDetail.name}</span>
                            <span>Status : {characterDetail.status}</span>
                            <span>Gender : {characterDetail.gender}</span>
                            <span>Location : {characterDetail.location.name}</span>
                        </div>
                    </div>
                )
                :
                (
                    <div style={{fontSize:'4rem', display:'flex',justifyContent:'center',marginTop:'5rem'}}>
                        No Found
                    </div>
                )
            }
        </div>
    );
}

export const ItemDetailsWithRouter=withRouter(ItemDetails);