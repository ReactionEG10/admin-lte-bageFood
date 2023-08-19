import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
// import { DatatableWrapper } from 'react-bs-datatable'
// import DataTable from 'react-data-table-component'

export default function Store() {
   
    const [storeList, setStoreList] = useState([])

    const getStore = async()=>{
      let res = await axios.get("http://localhost:3000/get_all_store")
      if(res != ""){
        console.log(res.data);
        setStoreList(res.data)
      }
    }
  
    useEffect(() => {
    getStore()
    }, [])

    return (
        <div>
            <Table className="table-hover table-striped">
                <thead>

                    <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Detail</th>
                        <th className="border-0">Country</th>
                        <th className="border-0">District</th>
                        <th className="border-0">Province</th>
                        <th className="border-0">Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        storeList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.store_id}</td>
                                <td>{item.store_name}</td>
                                <td>{item.store_house_number} {item.store_detail}</td>
                                <td>{item.store_county}</td>
                                <td>{item.store_district}</td>
                                <td>{item.store_province}</td>
                                <td>{item.store_zipcode}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            {/* <DataTable
                title=""
                columns={column}
                data={data}
                pagination
                className="table table-hover"
                fixedHeader={true}
                // paginationRowsPerPageOptions={perPage}
                // paginationPerPage={page}
            /> */}
        </div>
    )
}
