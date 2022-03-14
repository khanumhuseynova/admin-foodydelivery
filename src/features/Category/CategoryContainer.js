import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./CatagoryContainer.css"

const columns = [
  { field: 'id', headerName: 'ID',  headerAlign: 'center'},
  { field: 'name', headerName: 'Name',  headerAlign: 'center', width: 300 },
  { field: 'slug', headerName: 'Slug',  headerAlign: 'center', width: 350},
  { field: 'img', headerName: 'Image',  headerAlign: 'center', width: 300},
 
]

const CategoryContainer = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {

       fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ maxHeight: 450, width: '1235px' }}>
        <h1 className="names">Catagory
          <button className="addButton">+    ADD CATAGORY</button>

          </h1>
          <DeleteOutlineIcon/>
      <DataGrid className="data"
      
        rows={tableData}
        columns={columns}
        pageSize={12}
  
      />
    </div>
  )
}

export default CategoryContainer
