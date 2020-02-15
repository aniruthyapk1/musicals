import React from 'react';
import './Navigation.css';


class Navigation extends React.Component{
    render() {
      const {onRouteChange,shoppingColorChange, totQty}= this.props;
        return (
            <div>
              <ul className="nav">
              <li><p onClick={()=>onRouteChange('home', 'fadeIn')}> home </p></li> 
              <li><p onClick={()=>onRouteChange('gallery', 'fadeIn')}> gallery </p> </li> 
        <li><p className={shoppingColorChange.length>0?'change':'donot'} onClick={()=>onRouteChange('shoppingcart', 'fadeIn')}>{totQty > 0 ?'checkout' : 'shop' }</p></li> 
              </ul>
            </div>
        );
    }
}

export default Navigation;