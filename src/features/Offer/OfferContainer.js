
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./OfferContainer.css"

const columns = [
  { field: 'id', headerName: 'ID',  headerAlign: 'center'},
  { field: 'title', headerName: 'Title',  headerAlign: 'center', width: 300 },
  { field: 'description', headerName: 'Description',  headerAlign: 'center', width: 350},
  { field: 'img', headerName: 'Image',  headerAlign: 'center', width: 300},
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
    <div style={{ maxHeight: 450, width: '1235px' }}>
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