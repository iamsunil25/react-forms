import React from 'react'
import CommonFields from './CommonFields';

const CommonComponent = (props) => {
	console.log(props);
  return (
<>
<CommonFields component="input" name ="email" type="email" placeholder = "email"  onChange = {props.handleChange}/>
<CommonFields component="input" name ="password" type="password" placeholder = "password" onChange = {props.handleChange} />
{/* <CommonFields component="input" name ="isAdult" type="checkbox" placeholder = "isAdult" onChange = {props.handleChange} /> */}
<CommonFields component="select" name ="gender" type="select" placeholder = "select gender" onChange = {props.handleChange} />
</>  )
}

export default CommonComponent