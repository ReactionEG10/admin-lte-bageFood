import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

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
} from "react-bootstrap";
import DataTable from "react-data-table-component";


function TableWallet() {
  const [walletList, setWalletList] = useState([]);
  const [walletStore, setWalletStore] = useState([]);
  const [title, setTitle] = useState("Report");
  const [page, setPage] = useState(10);
  const [perPage, setPerPage] = useState([
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  ]);
  const [column, setColumn] = useState([
    {
      name: "id",
      cell: (row)=>row.wallet_hitory_id ,
      sortable: true,
    },
    {
      name: "Name",
      cell: (row)=> row.first_name +"  "+ row.last_name,
      sortable: true,
    },
    {
      name: "Amount",
      selector: "wallet_amount",
      sortable: true,
    },
    {
      name: "banking",
      selector: "banking",
      sortable: true,
    },
    {
      name: "Status",
      selector: "wallet_status_name",
      sortable: true,
    },
    {
      name: "Date",
      selector: "wallet_date",
      sortable: true,
    },
    {
      name: "Time",
      selector: "wallet_time",
      sortable: true,
    },
    
  ]);

  const [column2, setColumn2] = useState([
    {
      name: "id",
      cell: (row)=>row.wallet_store_history_id ,
      sortable: true,
    },
    {
      name: "Name",
      selector: "store_name",
      sortable: true,
    },
    {
      name: "Amount",
      selector: "wallet_store_amount",
      sortable: true,
    },
    {
      name: "banking",
      selector: "banking",
      sortable: true,
    },
    {
      name: "Status",
      selector: "wallet_status_name",
      sortable: true,
    },
    {
      name: "Date",
      selector: "wallet_store_date",
      sortable: true,
    },
    {
      name: "Time",
      selector: "wallet_store_time",
      sortable: true,
    },
    
  ]);

  const getWalletAll = async () => {
    let res = await axios.get("http://localhost:3000/get_wallet_history_all");
    if (res != "") {
      setWalletList(res.data);
      console.log(res.data);
    }
  };

  const getWalletStoreAll = async () => {
    let res = await axios.get("http://localhost:3000/get_wallet_store_history_all");
    if (res != "") {
        setWalletStore(res.data);
      console.log(res.data);
    }
  };

  useEffect(() => {
    getWalletAll();
    getWalletStoreAll();
  }, []);

  return (
    <div>
      <div>
          <DataTable
            title={"Wallet User & Rider"}
            columns={column}
            data={walletList}
            pagination
            className="table table-hover"
            fixedHeader={true}
            paginationTotalRows={page}
            paginationRowsPerPageOptions={perPage}
            defaultSortAsc={false}
            paginationPerPage={15}
          />
        </div>
        <div>
          <DataTable
            title={"wallet Store"}
            columns={column2}
            data={walletStore}
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
  );
}

export default TableWallet;
