import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addEmployer, getEmployer, deleteEmployer } from '../redux/employeSlice'
import { Link } from 'react-router-dom'

const EmployerData = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [typeEmployer, setTypeEmployer] = useState('')

  const employes = useSelector(state => state.employe.employe)
  const dispatch = useDispatch()

  useEffect(() => {//For fetching Data
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/resto/employer', {
          headers: {
            'x-auth-token': token,
          },
        });
        dispatch(getEmployer(response.data));//the action return is will be inside state.users.users
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token');
    axios.post('http://localhost:5000/api/resto/employer', { name, phone, typeEmployer }, {
      headers: {
        'x-auth-token': token,
      },
    })
      .then(res => {
        dispatch(addEmployer(res.data))
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    const token = localStorage.getItem('token');
    axios.delete('http://localhost:5000/api/resto/employer/' + id , {
      headers: {
        'x-auth-token': token,
      },
    })
    .then(res => {
        dispatch(deleteEmployer(id))
        console.log(res.data)
    }).catch(err => console.log(err))
}


  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <h4 className='mt-4'>Ajouter Employer</h4>

            <form className='mt-4' onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
                <input type="text" className="form-control"
                  id="exampleInputEmail1" aria-describedby="emailHelp"
                  onChange={(e) => setName(e.target.value)} />

              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Phone Number</label>
                <input type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="mb-3">
                <select className="form-select" aria-label="Default select example" onChange={(e) => setTypeEmployer(e.target.value)} defaultValue="">
                  <option value="">Type D'employer</option>
                  <option value="livreur">livreur</option>
                  <option value="cuisinier">cuisinier</option>
                  <option value="caissier">caissier</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div >
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h4 className='mb-4'>Les Employes</h4>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Nom</th>
                  <th scope="col">N Telephone</th>
                  <th scope="col">Type Employer</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  employes.map(employe => {
                    return (
                      <tr key={employe.id}>
                        <td>{employe.name}</td>
                        <td>{employe.phone}</td>
                        <td>{employe.typeEmployer}</td>
                        <td>
                          <Link to={`/edit/${employe.id}`} style={{minWidth:'80px'}} className='btn btn-sm btn-success me-2'>Modifier</Link>
                          <button style={{minWidth:'80px'}} 
                          onClick={() => handleDelete(employe.id)} 
                          className='btn btn-sm btn-danger'>Supprimer</button>
                        </td>
                      </tr>
                    );
                  })
                }

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div >
  )
}

export default EmployerData