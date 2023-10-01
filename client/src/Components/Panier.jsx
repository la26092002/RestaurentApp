import React, { useState, useEffect } from 'react'; // Import useEffect
import { Link } from 'react-router-dom';
import data from './../Menu.json';
import axios from 'axios';

const Panier = () => {
    const [allPrice, setAllPrice] = useState(0);
    const [cartUpdated, setCartUpdated] = useState(false); // State to track cart updates

    const newArray = [];

    const cart = localStorage.getItem('cart');

    console.log(cart);
    const commands = cart.split("?");


    for (let i = 0; i < commands.length - 1; i++) {
        newArray.push(commands[i]);
    }


    useEffect(() => {
        let totalPrice = 0;
        newArray.forEach(command => {
            const val = command.split("/");
            const filteredData = data.find(item => item.id === val[1]);

            if (filteredData) {
                totalPrice += filteredData.price * parseInt(val[0]);
            }
        });

        setAllPrice(totalPrice);
        setCartUpdated(false);
    }, [cartUpdated]); // Run this effect whenever newArray changes


    const handleDelete = (index) => {
        console.log(index);
        const commands = cart.split("?");
        let NewCommand = ""; // Use 'let' instead of 'const'
        for (let i = 0; i < commands.length - 1; i++) {
            if (i !== index) {
                NewCommand = NewCommand + `${commands[i]}?`;
            }
        }

        localStorage.setItem('cart', NewCommand);
        setCartUpdated(true);
    }

    console.log(allPrice);

    const user = localStorage.getItem('user');
    const infoUser = user.split("/");

    const validerAchat = () =>{
        const data = cart;
        axios.post('http://localhost:5000/api/resto/commande', { user,  data})
    .then(res => {
        console.log(res.data);
        localStorage.setItem('cart', '');
        setCartUpdated(true);
        window.location.href = '/Commander'
    })
    .catch(err => {
        console.log("Error:", err);
        console.log("Error Response:", err.response);
        console.log("Error Message:", err.message);
    });

    }

    




    return (
        <div>
            <div className="container text-center">
                <Link className="nav-link active mt-4 text-center" aria-current="page" to="/panier">
                    <h1>Panier <i className="fa-solid fa-cart-shopping" style={{ color: '#f40b0b' }}></i></h1>
                </Link>

                {
                    
                    (cart ? <>
                        <div className="row">
                            <div className="col-4">
                                <h6 >Prix Total : {allPrice} DA</h6>
                                <p >Nom : {infoUser[0]}</p>
                                <p >Telephone : {infoUser[1]}</p>
                                <p >Localisation : {infoUser[2]}, {infoUser[3]}, {infoUser[4]}</p>
                                <button type="button" class="btn btn-secondary">changer mes information</button>
                            </div>
                            <div className="col-8">



                                <button type="button" className="btn btn-danger my-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Valider Mes Achats
                                </button>


                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Valider Tes Achats</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                            si voulez vous valider ses achats cliquez sur le bouton Valider
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary " data-bs-dismiss="modal">Annuler</button>
                                                <button type="button"
                                                onClick={() => validerAchat()}   className="btn btn-success">Valider</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </>
                        : <div className='mt-5 ' style={{ marginBottom: '500px' }}>
                            <h1>Votre Pannier Est Vide</h1>
                        </div>)
                }

                <div className="row">
                    {newArray.map((command, index) => {
                        const val = command.split("/");
                        const filteredData = data.find(item => item.id === val[1]);

                        if (!filteredData) {
                            return null;
                        }

                        return (
                            <div className="col-12 col-sm-6 col-md-4 p-2 " key={index}>
                                <div className="card mx-auto" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={filteredData.image} alt="Card cap" />
                                    <div className="card-body">
                                        <p className="card-text">{filteredData.title}  {`${filteredData.price} DA  X ${val[0]}`}</p>
                                        <p className="card-text">
                                            <button
                                                onClick={() => handleDelete(index)}
                                                type="button"
                                                className="btn btn-secondary">Supprimer</button></p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Panier;
