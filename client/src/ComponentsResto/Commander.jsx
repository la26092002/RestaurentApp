import React from 'react'

const Commander = () => {
    return (
        <div>
            <h1 className='text-center  mt-3'>Commands</h1>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">N Tlphn</th>
                        <th scope="col">Plus D'informations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Benyakhou Elhadj larbi</td>
                        <td>213787789878</td>
                        <td><button type="button" className="btn btn-secondary">Infos</button></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Commander