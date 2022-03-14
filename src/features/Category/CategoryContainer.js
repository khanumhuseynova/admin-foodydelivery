import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./CatagoryContainer.css"

const columns = [
  <DeleteOutlineIcon/>,
  { field: 'id', headerName: 'ID',  headerAlign: 'center'},
  { field: 'name', headerName: 'Name',  headerAlign: 'center', width: 300 },
  { field: 'slug', headerName: 'Slug',  headerAlign: 'center', width: 350},
  { field: 'img', headerName: 'Image',  headerAlign: 'center', width: 300},
 <DeleteOutlineIcon/>
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

// // function CategoryContainer(){
// //   return (
// //     <div className="col-sm-6 offset-sm-3">
// //       <br/>
// //       <input type="file" className="form-control" placeholder="photo"/>
// //       <input type="text" className="form-control"placeholder="name"/>
// //       <input type="text" className="form-control"placeholder="slug"/>
      
// //     </div>
// //   )
// // }

// // export default CategoryContainer

// import { useState } from "react";
// // import ReactDOM from "react-dom";

// function CategoryContainer() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const file = event.target.file;
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values,file, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Uploud your image:
//       <input 
//         type="file" 
//         name="photo" 
//         value={inputs.photo || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <br/> <br/>
      
//       <label>Add your description and necessary information
//       <br/>
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       /> 
//        <br/><br/>
       
//         <input 
//           type="text" 
//           name="slug" 
//           value={inputs.slug || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <br/>
//         <br/>
//         <br/>
//         <input type="submit" value="Create"/>
//         <input type="submit" value="Cancel"/>
//     </form>
//   )
// }
// export default CategoryContainer
// // ReactDOM.render(<CategoryContainer />, document.getElementById('root'));