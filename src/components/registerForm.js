import React, { useState } from "react"
import { Form, Input, Label, FormGroup, FormFeedback, Button } from "reactstrap"
import Axios from "axios"
import { useFormik } from "formik"


function Register(){
    const url ="https://artwork-gallery-app.herokuapp.com/auth/register"
    const[data,setData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    )
        
    function handleSubmit(e){
        e.preventDefault();
        Axios.post(url,{
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            confirmPassword: data.password
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

        if (!values.firstName) {
            errors.firstName = 'First Name can not be blank.';
        }
        if (!values.lastName) {
            errors.lastName = 'Last Name can not be blank.';
        }
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
         if (values.confirmPassword !== values.password) {
             errors.confirmPassword = 'Passwords must match.'
         }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate,
        handleChange,
        handleSubmit,
        onSubmit: values => {
          JSON.stringify(values, null)
        }
    
      })

         return (
            <Form onSubmit={formik.handleSubmit} className = "register_container">
            <div className = "title">Register Here</div>
                <FormGroup className = "form_content">
                    <Label for="firstName">First Name</Label><br/>
                    <Input id="firstName"
                     value={formik.values.firstName} 
                     name="firstName" 
                     onChange={formik.handleChange} />
                     {formik.touched.firstName && formik.errors.firstName ? <div className='error' className="error">{formik.errors.firstName}</div> : null}
                </FormGroup>

                <FormGroup className = "form_content">
                    <Label for="lastName">Last Name</Label><br/>
                    <Input id="lastName"
                    value={formik.values.lastName}  
                    name="lastName" 
                    onChange={formik.handleChange} />
                    {formik.touched.lastName && formik.errors.lastName ? <div className='error' className="error">{formik.errors.lastName}</div> : null}
                </FormGroup>

                <FormGroup className = "form_content">
                    <Label for="email">Email</Label><br/>
                    <Input id="email" 
                    value={formik.values.email}  
                    name="email" 
                    onChange={formik.handleChange} />
                    {formik.touched.email && formik.errors.email ? <div className='error' className="error">{formik.errors.email}</div> : null}
                </FormGroup>

                <FormGroup className = "form_content">
                    <Label for="password">Password</Label><br/>
                    <Input id="password" 
                    value={formik.values.password} 
                    type="password" name="password"  
                    onChange={formik.handleChange} />
                    {formik.touched.password && formik.errors.password ? <div className='error' className="error">{formik.errors.password}</div> : null}
                </FormGroup>

                <FormGroup className = "form_content">
                    <Label for="confirmPassword">Confirm Password</Label><br/>
                    <Input id="confirmPassword" 
                    value={formik.values.confirmPassword} 
                    type="password" 
                    name="confirmPassword" 
                    onChange={formik.handleChange} />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className='error' className="error">{formik.errors.confirmPassword}</div> : null}
                </FormGroup>

                <Button className="register_btn">Register</Button>
            </Form>
        )
        
 }
export default Register