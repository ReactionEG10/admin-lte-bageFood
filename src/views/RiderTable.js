import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap'

export default function RiderTable() {
  const [ridetList, setRidetList] = useState([])
  const getUserrider = async () => {
    let res = await axios.get("http://localhost:3000/get_user_status/3");
    if (res != "") {
      setRidetList(res.data);
    }
  };

  useEffect(() => {
  getUserrider()
  }, [])
  return (
    
    <div>
        <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">FristName</th>
                      <th className="border-0">ListName</th>
                      <th className="border-0">Tel</th>
                      <th className="border-0">Country</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                        ridetList.map((item,index)=>(
                            <tr key={index}>
                            <td>{item.user_id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                          
                          </tr>
                        ))
                    }
                  </tbody>
                </Table>
    </div>
  )
}
