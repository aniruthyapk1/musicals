import React from 'react';
// import {Route, 
//   NavLink, 
//   Switch} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import CardList from './components/CardList/CardList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.css';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


//just used the below jpg links alone from my previous work as it was hard to find jpg links online
const
  instruments = [
    {
      image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electronic-keyboard.png',
      name: 'Electronic Keyboard',
      price: 1999
    },
    {
      image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electric-guitar.png',
      name: 'Electric Guitar',
      price: 599
    },
    {
      image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/bass-guitar.png',
      name: 'Bass Guitar',
      price: 624
    },
    {
      image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/drum-kit.png',
      name: 'Drum Kit',
      price: 649
    },
    {
      image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/violin.png',
      name: 'Violin',
      price: 245
    }

  ];


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      route: 'home',
      instrDetails: [],
      qtyOrdered: [],
      visible: 'fadeOut'
    };
  }


  get initialState() {
    return {
      route: 'home',
      qtyOrdered: []
    };
  }

  resetBuilder() {
    this.setState(this.initialState);

  }
  componentDidMount() {
    const newState = { ...this.state };
    newState.instrDetails.push({ items: instruments });
    this.setState({ instrDetails: newState.instrDetails[0].items })
  }

  onRouteChange = (routeChange,visible) => {
    if (this.state.route !== routeChange) {
      this.setState({ route: routeChange,
      visible: visible })
    }
  }
  //The Core Logic has been written here to handle all the order related Info(like Ordered Quantity, Price for Each Article)
  onQuantityOrder = (prodName, qty, price, index) => {
    const filterProdName = this.state.qtyOrdered.findIndex(e => e.item === prodName);
    const newState = { ...this.state };

    if (filterProdName !== -1) {
      if (newState.qtyOrdered[filterProdName].qty >= 0 && qty > 0) {
        newState.qtyOrdered[filterProdName].qty += qty;
        newState.qtyOrdered[filterProdName].totPrice = newState.qtyOrdered[filterProdName].qty * price;
        store.addNotification({
          message: `Added`,
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 1,
            onScreen: false
          }
        })

      } else if (newState.qtyOrdered[filterProdName].qty > 0) {
        newState.qtyOrdered[filterProdName].qty += qty;
        newState.qtyOrdered[filterProdName].totPrice -= price;
        store.addNotification({
          message: `Removed`,
          type: "warning",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 1,
            onScreen: false
          }
        })

      }
    }
    else {
      if (qty > 0) {
        newState.qtyOrdered.push({ item: prodName, qty: qty, totPrice: price, index: index })
        store.addNotification({
          message: `First Order on this item`,
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: false
          }
        })

      }
    }

    this.setState({ qtyOrdered: newState.qtyOrdered });

  }
  //logic has been written here to calc the total qty ordered and the corresponding total price
  addTot = (val, key) => {
    let returnVal = val.map(e => e[key]).reduce((a, e) => a + e, 0);
    return returnVal;
  }
  //after proceeding with the Cart, the state will be refined to InitialState
  onProceed = () => {
    this.resetBuilder();
    store.addNotification({
      message: "Thank you!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: false
      }
    })
  }
  //when the qty is Zero, we are sending that to the Cart
  excludeTheZeroQtyItem = (val, key)=>{
    return val.filter(e => e[key] > 0)
  }
  render() {
    const { route, instrDetails, qtyOrdered, visible } = this.state;
    return (
      <div>
        <ReactNotification />
        <div className="App">


          <header className="title">Musical</header>
          <hr className="new1"></hr>
          <Navigation onRouteChange={this.onRouteChange} />

          <div className="main-content">
            {route === 'home' ?

              <Main visible={visible}/> : route === 'gallery' ?
                <CardList visible={visible} instrDetails={instrDetails} onQuantityOrder={this.onQuantityOrder} qtyOrdered={qtyOrdered} /> :
                (qtyOrdered.length > 0 && this.addTot(qtyOrdered, 'qty') > 0) ?
                  <ShoppingCart visible={visible} Cart={this.excludeTheZeroQtyItem(qtyOrdered,'qty')} addTot={this.addTot} onProceed={this.onProceed} /> :
                  <ShoppingCart visible={visible} message="No Items added to the cart yet" />

            }
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }

}
export default App;
