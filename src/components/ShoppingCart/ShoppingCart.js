
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {

    render() {
        const { message, addTot, Cart, onProceed,visible } = this.props;
        let headerGroup = <ColumnGroup>
            <Row>
                <Column header="Item Name" />
                <Column header="Quantites" />
                <Column header="Individual Price" />
            </Row>
        </ColumnGroup>;

        return (
            <div className={visible}>{message ? <div>
                <h1>{message}</h1>
            </div> :
                <div>
                    <h1>Order Summary</h1>
                    <DataTable style={{ textAlign: 'center', fontSize: '10px', width: '80%', border: '1px solid black' }} value={Cart} headerColumnGroup={headerGroup} footerColumnGroup={<ColumnGroup>
                        <Row>
                            <Column style={{ fontWeight: '800' }} footer="Totals:" />
                            <Column footer={addTot(Cart, 'qty')} />
                            <Column footer={addTot(Cart, 'totPrice')} />
                        </Row>
                    </ColumnGroup>}>
                        <Column field="item" />
                        <Column field="qty" />
                        <Column field="totPrice" />

                    </DataTable>
                    <button className="button" onClick={onProceed}>Proceed</button>
                </div>


            }
            </div>

        );
    }
}

export default ShoppingCart;