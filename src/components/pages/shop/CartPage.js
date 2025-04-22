import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Shop.css';

const CartPage = () =>{
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(localCart);
    }, [])

    const totalPrice = () => {
        let total = 0;
        cart.forEach(
            (item) => {
                total =total + item.price * item.quantity;
            }
        )
        return total;
    }
    return (
        <div className="cart-header">
        <div className="py-5 text-center container">
                <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <div className="row">
                    <h2 className="col-md-8 m-auto">Cart</h2>
                    <p class="lead col-md-8 m-auto">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                </div>
            </div>
            <div className="container py-5">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <ul>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td><img src={item.thumbnail}alt={item.title}width="44" /></td>
                                <td><h4>{item.title}</h4></td>
                                <td><span>{item.price}</span></td>
                                <td><span>{item.quantity}</span></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total price: </td>
                            <td><span>{totalPrice()}</span></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    ;
            {cart.map((item) => (
                <li key={item.id}>
                    <img src={item.thumbnail} alt={item.title} width="44" />
                    <h4>{item.title}</h4>
                    <span>{item.price}</span>
                    <span>{item.quantity}</span>
                </li>
            ))}
        </ul>
        </div>
    );
}
export default CartPage;