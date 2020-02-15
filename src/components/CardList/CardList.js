import React from 'react';
import './CardList.css';


class CardList extends React.Component {
     existenceOfItem = (arr, i)=>{
        return arr.findIndex(e => e.index === i)
    }
    render() {
        const { instrDetails,qtyOrdered, visible } = this.props;
        
        return (
            <main className={visible}>
                <div className="cards">
                    {
                        instrDetails.map((e, i) =>
                            <div key={i} className='card'>
                                <div className='image-container'>
                                    <img src={e.image} alt={e.name} />

                                    <div className="text-block">
                                         <div className="qtyDsp">
                                            {/*Logic for displaying the selected qtys on the right top corner over an image */ }
                                             {this.existenceOfItem(qtyOrdered,i) !== -1 ? qtyOrdered[this.existenceOfItem(qtyOrdered,i)].qty : 0} 

                                      </div>

                                        <div className='prodInfo'>
                                            {e.name} | ${e.price}
                                        </div>
                                        <div className='button-controls'>
                                            {
                                                this.existenceOfItem(qtyOrdered,i) !== -1?
                                                qtyOrdered[this.existenceOfItem(qtyOrdered,i)].qty>0 ?
                                                <>
                                                <button className='button-control left' onClick={()=>this.props.onQuantityOrder(e.name, -1, e.price, i)} id='subtract'>-</button>
                                                <button className='button-control right' onClick={()=>this.props.onQuantityOrder(e.name, 1, e.price, i)} id='addition'>+</button>
                                                </>:
                                                                                                <button className='button-control right' onClick={()=>this.props.onQuantityOrder(e.name, 1, e.price, i)} id='addition'>Add</button>:
                                                                                                <button className='button-control right' onClick={()=>this.props.onQuantityOrder(e.name, 1, e.price, i)} id='addition'>Add</button>


                                            }
                                        </div>
                                    </div>


                                </div>
                            </div>)
                    }
                </div>
            </main>
        );
    }
}

export default CardList;