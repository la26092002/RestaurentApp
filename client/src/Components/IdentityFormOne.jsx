import React, { useState } from 'react'

const IdentityFormOne = () => {
    const [nom, setNom] = useState('')
	const [numero, setNumero] = useState('')
    const [willaya, setWillaya] = useState('')
    const [ville, setVille] = useState('')
    const [adresse, setAdresse] = useState('')



    async function identityUser(event) {
		event.preventDefault()
        const data = nom +"/"+ numero +"/"+ willaya +"/"+ ville +"/"+ adresse
		if (nom && numero && willaya && ville && adresse) {
			localStorage.setItem('user', data)
			alert('successful')
			//window.location.href = '/dashboard'
		} else {
			alert('Please check your information')
		}
	}
    
    
    
    return (
        <div className="container ">
            <div className="row">
                <div className='col-12 mx-auto my-auto' style={{ maxWidth: '600px' ,minHeight:'800px'}}>
                    <h1 className='text-center'>Entrer Votre Informations</h1>
                    <form onSubmit={identityUser}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Nom</label>
                            <input
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                             type="text" class="form-control"
                              id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Numero De Telephone</label>
                            <input 
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            type="number" class="form-control" 
                            id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <select
                            value={willaya}
                            onChange={(e) => setWillaya(e.target.value)} 
                             class="form-select" aria-label="Default select example">
                                <option selected>Selectionner Votre Willaya</option>
                                <option value="1">Alger</option>
                                <option value="2">Oran</option>
                                <option value="3">Mascara</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select
                            value={ville}
                            onChange={(e) => setVille(e.target.value)}  
                             class="form-select" aria-label="Default select example">
                                <option selected>Selectionner Votre Ville</option>
                                <option value="1">Mascara</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <div class="mb-3">
                                <label for="Adresse" class="form-label">Adresse</label>
                                <input
                                value={adresse}
                                onChange={(e) => setAdresse(e.target.value)} 
                                 type="text" class="form-control" id="Adresse" />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-secondary mx-auto">Ajouter</button>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default IdentityFormOne