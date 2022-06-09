import React from 'react'
import { Formik,Form,ErrorMessage,Field } from "formik";
const CommonFields = ({type,name,placeholder,onChange,component}) => {
console.log((type,name,placeholder,onChange,component))
  return (
<div className="row m-2 p-2">
		<div className="col-md-12 my-2">
		
	<Field component={component}  className="form-control"  type={type} name={name} placeholder={placeholder} onChange={onChange} >

{	(component==="select") ? (
		<>
		<option value="male" >male</option>
		<option value="female">Female</option>
		</>
	):(
		console.log("hi")	)
}
	</Field>

<ErrorMessage name={name} className="text-danger" component="h5"/>

	</div>
	</div>
  )
}

export default CommonFields