
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./OfferContainer.css"

const columns = [
  { field: 'id', headerName: 'ID',  headerAlign: 'center'},
  // { field: 'title', headerName: 'ID',  headerAlign: 'center'},
  // { field: 'body', headerName: 'ID',  headerAlign: 'center'},
  // { field: 'id', headerName: 'ID',  headerAlign: 'center'},
  { field: 'title', headerName: 'Customer ID', width: 120,headerAlign: 'center' },
  { field: 'body', headerName: 'Time', width: 120, headerAlign: 'center' },
  { field: 'deliveryAddress', headerName: 'Delivery Address', width: 250 , headerAlign: 'center'},
  { field: 'amount', headerName: 'Amount', width: 120, headerAlign: 'center'},
  { field: 'paymentMethod', headerName: 'Payment Method', width: 200, headerAlign: 'center' },
  { field: 'contact', headerName: 'Contact', width: 220, headerAlign: 'center'},
 <DeleteOutlineIcon/>
]

const OfferContainer = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 250, width: '1235px' }}>
         <h1 className="names">Offers
          <button className="addButton">+ {' '}
   ADD OFFERS</button>
          
          </h1>
      <DataGrid className="data"
        rows={tableData}
        columns={columns}
        pageSize={12}
      />
    </div>
  )
}

export default OfferContainer