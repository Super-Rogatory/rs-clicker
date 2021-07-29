import React, { Component } from 'react';
import WeaponsList from './WeaponsList';

class Weapons extends Component{
    render(){
        return(
            <div className="ui center aligned container">
                <div className="ui segment">
                    <div className="ui header">Weapons</div>
                    <WeaponsList />
                </div>


            </div>

        ) 
    }
}
export default Weapons;