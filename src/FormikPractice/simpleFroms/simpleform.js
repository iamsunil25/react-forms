import React from "react";
 import * as Yup from 'yup'
import { Formik,Form,ErrorMessage,Field } from "formik";
import { Button } from "reactstrap";
import CommonComponent from "./commonComponent";
import styledComponents from "styled-components";



const SimpleForms=()=>{
	const initialValues = {
		email:"",
		password:"",
		// isAdult:false,
		gender:""
	}
	const Title = styledComponents.h1`
font-size:1.5rem;
color:blue
`


	const validation = Yup.object().shape({
 email:Yup.string().email("email must be valid").required("email is required"),
 password:Yup.string().required("password is required"),
//  isAdult:Yup.boolean().oneOf([true],"you are not adult"),
 gender:Yup.string().required("please select gender")
	})


const handleSubmit = (values)=>{
	alert("form values",values)
}

	return(
<>

<div className="container mt-4 text-center " >
<Title>
	Forms made using formik and yup validation library
</Title>

<Formik 
initialValues={initialValues}
validationSchema={validation}
onSubmit={handleSubmit}>
	{ (formik)=>(
		<>
			{/* {JSON.stringify(formik)} */}
			<Form>
		<CommonComponent {...formik} />
		<div className="col-md-12 mt-5 ">

</div>
<div  >
<button type="submit" className="btn col-md-10 btn-primary p-2" > Sign in</button>
</div>

</Form>
		</>

)}
</Formik>
</div>
</>
    )

} 
export default SimpleForms