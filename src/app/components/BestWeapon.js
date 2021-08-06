import React, { Component } from 'react';
class BestWeapon extends Component {
    render() {
        return (
            <div className='ui compact segments'>
                <div className='ui segment'>
                    <img class="ui medium rounded image" src="https://oldschool.runescape.wiki/images/thumb/e/e6/Bronze_scimitar_detail.png/800px-Bronze_scimitar_detail.png?55bcd" alt="current best weapon you have" />
                </div>
                <div className='ui center aligned segment'>
                    <h1>Bronze Scimitar</h1>
                </div>

            </div>
        )
    }
}
export default BestWeapon;