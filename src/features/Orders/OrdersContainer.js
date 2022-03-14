
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./OrdersContainer.css"

const columns = [
  { field: 'id', headerName: 'ID',  headerAlign: 'center'},
  { field: 'customerID', headerName: 'Customer ID', width: 120,headerAlign: 'center' },
  { field: 'time', headerName: 'Time', width: 120, headerAlign: 'center' },
  { field: 'deliveryAddress', headerName: 'Delivery Address', width: 250 , headerAlign: 'center'},
  { field: 'amount', headerName: 'Amount', width: 120, headerAlign: 'center'},
  { field: 'paymentMethod', headerName: 'Payment Method', width: 200, headerAlign: 'center' },
  { field: 'contact', headerName: 'Contact', width: 220, headerAlign: 'center'},
 <DeleteOutlineIcon/>
]

const OrdersContainer = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{maxHeight: 450, width: '1235px' }}>
          <h1 className="names">Orders
          <button className="addButton">+    ADD ORDERS</button>
          
          </h1>
        
      <DataGrid className="data"
        rows={tableData}
        columns={columns}
        options={{
          headerStyle:{size:'80px'}
         }}
        pageSize={12}
        
      />

    </div>
  )
}

export default OrdersContainer