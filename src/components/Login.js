import React, { useState } from "react"
import { Form, Input, FormGroup, FormFeedback, Button, Label } from "reactstrap"
import Axios from "axios"
import { useFormik } from "formik"

function LoginForm(){
    const url ="https://artwork-gallery-app.herokuapp.com/auth/login"
    const[data,setData] = useState(
        {
        email:"",
        password:""
        }
    )
    function handleSubmit(e){
        e.preventDefault();
        Axios.post(url,{
            email: data.email,
            password: data.password
        })
        .then(res=>setData(res.data))
     }

    function handleChange(e){
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
   
    const validate = values => {
        const errors = {}
    
        if (!values.email) {
          errors.email = 'Required'
        } else if (values.email.length < 4) {
          errors.email = 'Must be 5 characters or more'
        }
    
        if (!values.password) {
          errors.password = 'Required'
        } else if (values.password.length < 8) {
          errors.password = 'Must be 8 characters or more'
        } else if (values.password === '12345678') {
          errors.password = 'Must not be 12345678 !!!'
        }     
        return errors
      }
    
      const formik = useFormik({
        initialValues: {
          email: " ",
          password: " ",
        },
        validate,
        handleChange,
        handleSubmit,
        onSubmit: values => {
          JSON.stringify(values, null, 2)
        }
    
      })
    
    
    return (<div>
        
        <Form onSubmit={formik.handleSubmit} className = "login_container">
        <div className = "title">Login Here</div>
          
          <FormGroup className = "form_content">
          <Label For="email">Email Address</Label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}/>
          {formik.touched.email && formik.errors.email ? <div className='error' className="error">{formik.errors.email}</div> : null}
           </FormGroup>

           <FormGroup className = "form_content">
          <Label For="password">Password</Label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}/>
          {formik.touched.password && formik.errors.password ? <div className='error' className="error">{formik.errors.password}</div> : null}
           </FormGroup>
          <button className="log_btn" type="submit">LogIn</button>
    
        </Form>
      </div>)
    }
  
export default LoginForm
