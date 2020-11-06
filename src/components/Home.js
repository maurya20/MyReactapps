import React from 'react'
import { Link } from "react-router-dom";
import '../index.css'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Modal";
import {useState} from "react"

const Home = () => {

    const [modal, setModel] = useState(false)
    const [name, setName] = useState("")
    const [modalInputName, setmodalInputName] = useState("")
    
  
    const handleChange = (e)=> {
      const target = e.target;
      const name = target.name;
      const value = target.value;
    }

    const handleSubmit = (e) =>{
        setName({ name: modalInputName });
      
    }
  
    const modalOpen = ()=>{
      setModel({ modal: true });
    }
  
    const modalClose = ()=> {
      setModel({
        modal: false
      })
    }
  
    return (
        <div className="container">
            <h3 style={{textAlign:"center",color:"red"}}>Home</h3>
            <br></br>

            <a href="javascript:;" onClick={e => modalOpen(e)}>
          Open Modal
        </a>
        <Modal show={modal} handleClose={e => modalClose(e)}>
       
          <h2>Hello Modal</h2>
          <div className="form-group">
            <label>Enter Name:</label>
            <input
              type="text"
              value={modalInputName}
              name="modalInputName"
              onChange={e => handleChange(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button onClick={e =>handleSubmit(e)} type="button">
              Save
            </button>
          </div>
        </Modal>

            <h3>A table to show the above data with a choice of edit and delete</h3>
            <br></br>
            <br></br>




            {/* <div>
          <table className="table table-sm" style={{ border: "1px solid" }}>
            <thead>
              <tr>
                <th>Compaign</th>
                <th>Status</th>
                <th style={{ paddingLeft: "40px" }}>Opens</th>
                <th>Clicks</th>
                <th style={{ width: "20%", paddingLeft: "70px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              
                <tr>
                  <td style={{ width: "50%" }}>
                    <Link>{item.campaignName}</Link>
                  </td>
                  <td>
                    <span className="badge badge-pill badge-success btn-block">
                     
                    </span>
                  </td>
                  <td style={{ width: "20%", paddingLeft: "40px" }}>
                   
                  </td>
                  <td></td>
                  <td style={{ width: "20%", paddingLeft: "70px" }}>
                    <li class="list-inline-item">
                      <button
                        class="btn btn-warning"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit"
                      >
                        <i class="fa fa-edit"></i>
                      </button>
                    </li>
                    <button className="btn btn-danger">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        </div>
    )
}

export default Home
