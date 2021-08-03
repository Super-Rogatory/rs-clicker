import React, { Component } from 'react';
import { connect } from "react-redux";
import { increaseLevel } from '../effects/thunk';

class WeaponsList extends Component{
    render(){
        const weapons = [{
            name: 'Bronze Scimitar',
            dps: 6,
            attackLevelRequired: 1,
            attackSpeed: 4,
        },
        {
            name: 'Iron Scimitar',
            dps: 9,
            attackLevelRequired: 1,
            attackSpeed: 4,
        },
        {
            name: 'Steel Scimitar',
            dps: 14,
            attackLevelRequired: 5,
            attackSpeed: 4,
        }];
        const { level } = this.props;
        return(
            <div className="ui middle aligned divided list">
                {weapons.map((weapon, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="content">{weapon.name}</div>
                            <div className="content">{`DPS: ${weapon.dps}`}</div>
                            <div className="content">{`Attack Level: ${weapon.attackLevelRequired}`}</div>
                            <div className="right floated content">
                               <button className={`ui basic ${ level >= weapon.attackLevelRequired ? 'green' : 'disabled red'} button`}>Buy</button>
                            </div>      
                        </div>
                    )
                    
                })}
            </div>
        ) 
    }
}

const mapStateToProps = (state) => ({
    level: state.level,
});

const mapDispatchToProps = (dispatch) => ({
    levelUp: () => dispatch(increaseLevel())
})
export default connect(mapStateToProps, mapDispatchToProps)(WeaponsList);
