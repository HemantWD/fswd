import React from 'react';
import { dummyOrders } from "../components/dummyData";


const PreviousOrders = () => {


    return (
        <div className="orders-section">
            <h2>Orders</h2>
            <ul id="order-list">
                {dummyOrders.map((orders) => {
                    return(
                    <li className="order-item">
                        <span className="order-number">{orders.order}</span>
                        <span className="order-detail">
                            {orders.item}
                        </span>
                        <span className="order-total">{`Total : $${orders.price}`}</span>
                        <span className="order-time">{orders.day}</span>
                    </li>
                )
                })}

            </ul>
            <h3 className="earnings">Total Earnings: <span>$198</span></h3>
        </div>
    );
};

export default PreviousOrders;
