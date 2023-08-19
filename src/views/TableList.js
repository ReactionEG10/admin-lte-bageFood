import axios from "axios";
import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import ContentHeader from "./ContentHeader";

import ImgView from "./ImgView";

function TableList() {
  const [reportId, setReportId] = useState(0)
  const [dataReport, setDataReport] = useState([]);
  const [title, setTitle] = useState("Report");
  const [page, setPage] = useState(10);
  const [perPage, setPerPage] = useState([
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  ]);
  const [column, setColumn] = useState([
    {
      name: "id",
      cell: (row) => row.solve_id,
      sortable: true,
    },
    {
      name: "detail",
      selector: "solve_detail",
      sortable: true,
    },
    {
      name: "Platform",
      selector: "solve_type",
      sortable: true,
    },
    {
      name: "view",
      cell: (row) => (
        <Link>
          < ButtonOption reprotID={row.solve_id}/>
        </Link>
      ),
      sortable: true,
    },
  ]);

  const getreport = async () => {
    let res = await axios.get("http://localhost:3000/get_report");
    if (res != "") {
      setDataReport(res.data);
    }
  };

  useEffect(() => {
    getreport();
  }, []);

  const ButtonOption = (props) => {
    return(
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>setReportId(props.reprotID)}>
       View
    </button>

    )
    
}
  return (
    <div>
      {/* <Image src="../../img/img_1675844611093.jpg" width={200} height={200}/>
      <img src="../../img/img_1675844611093.jpg" /> */}
      <div>
        <ContentHeader name="Table Report" />
        <div>
          <DataTable
            title={title}
            columns={column}
            data={dataReport}
            pagination
            className="table table-hover"
            fixedHeader={true}
            paginationTotalRows={page}
            paginationRowsPerPageOptions={perPage}
            defaultSortAsc={false}
            paginationPerPage={15}
          />
        </div>
      </div>

      <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Image Report View</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                          <ImgView solve_id={reportId}/>
                         
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default TableList;
