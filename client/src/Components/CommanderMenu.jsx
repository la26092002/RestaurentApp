import React, { useState } from 'react'
import data from './../Menu.json';
import { Link } from 'react-router-dom';

const CommanderMenu = () => {
    const [value, setValue] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);

    function searchByType(Type) {
        return data.filter(item => item.type === Type);
    }

    const handleSubmit = (e, itemId) => {
        e.preventDefault()

        const val = value.split("/");
        if (val[1] == selectedItems) {
            if (localStorage.getItem('cart')) {
                const cart = localStorage.getItem('cart');
                localStorage.setItem('cart', `${cart}${val[0]}/${selectedItems}?`);
                console.log(`cart + ${cart}`)
            } else {
                localStorage.setItem('cart', `${val[0]}/${selectedItems}?`);
            }
        }
    }
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-6">
                    <h1>Menu</h1>
                    </div>
                    <div className="col-6">
                    <Link className="nav-link active" aria-current="page" to="/panier"><h1>Pannier <i className="fa-solid fa-cart-shopping" style={{ color: '#f40b0b' }}></i></h1> </Link>

                    </div>
                </div>
                
                
                <hr />
                {searchByType("1").length > 0 ? <h4>PIZZA</h4> : null}
                <div className="row">
                    {data.map((item) => {
                        if (item.type === "1") {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 my-auto" key={item.id}>
                                    <div className="card mb-3">
                                        <img src={item.image} className="card-img-top" alt="..." style={{ maxHeight: '100%', minHeight: '100%', maxWidth: '100%', minWidth: '100%' }} />
                                        <div className="card-body" style={{ maxHeight: '150px', minHeight: '150px' }}>
                                            <h5 className="card-title">{item.title} : {item.price} DA</h5>
                                            <p className="card-text">{item.discription}</p>
                                            <form onSubmit={(e) => handleSubmit(e, item.id)}>
                                                <input
                                                    type="number"
                                                    min='1'
                                                    onChange={(e) => setValue(e.target.value + `/${item.id}`)}
                                                />
                                                <button 
                                                value={item.id}
                                                    onClick={(e) => setSelectedItems(e.target.value)}
                                                    type="submit">+</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return null; // If the item doesn't match the condition, you can return null or omit it.
                        }
                    })}
                </div>

            </div>
        </div>
    )
}

export default CommanderMenu