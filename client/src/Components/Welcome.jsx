import React from 'react'
import image from '/img/50033965.jpg'
import { Link } from 'react-router-dom'
const Welcome = () => {
    return (
        <div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6 my-auto">
                    <h1>Bienvenue A Votre Aplication Bena</h1>
                    <Link to='/Commander' type="button" class="btn btn-secondary me-3" style={{width:'150px'}}>Commander</Link>
                    <Link to='/Menu' type="button" class="btn btn-secondary ms-3" style={{width:'150px'}}>Menu</Link>
                    <h4 className='mt-4'>Vous Pouvez Aussi Commander A Traver Ce Numéro De Téléphone</h4>
                    <h5><i class="fa-solid fa-phone"></i> +213798599533</h5>
                    
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <img src={image} class="img-fluid p-5" alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome