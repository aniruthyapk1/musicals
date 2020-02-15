import React from 'react';
import './Navigation.css';


class Navigation extends React.Component{
    render() {
      const {onRouteChange}= this.props;
        return (
            <div>
              <ul className="nav">
              <li><p onClick={()=>onRouteChange('home', 'fadeIn')}> home </p></li> 
              <li><p onClick={()=>onRouteChange('gallery', 'fadeIn')}> gallery </p> </li> 
              <li><p onClick={()=>onRouteChange('shoppingcart', 'fadeIn')}>shop </p></li> 
              </ul>
            </div>
        );
    }
}

export default Navigation;