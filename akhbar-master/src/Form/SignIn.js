import React from 'react'
import {Formik} from 'formik'
import Header from "../component/Header";
import * as Yup from 'yup'
const ValidationSchema=Yup.object().shape({
email: Yup.string()
    .email().
    min(1,'must have a character').
    max(255,'full character').required(),
    password: Yup.string()
        . min(1,'must have a character').
        max(255,'full character').required()

})
export default function SignIn() {
    return(
        <>
        <Header></Header>
        <Formik validationSchema={ValidationSchema} initialValues={{email:"",password:""}}>
            {
                ({values,errors,touched,handleChange,
                 handleBlur
                 })=>(
                    <form>
                        <div>
                        <label    htmlFor="email">Email</label>
                        <input style={{
                            marginTop:"2em",
                            marginLeft:"2em",

                        }} type="text"
                               onBlur={handleBlur}
                               value={values.email}
                               onChange={handleChange}
                               placeholder='enter your email'
                               name='email' id='email'/>
                        </div>
                        <div>
                        <label   htmlFor="name">Password</label>
                        <input style={{
                            marginTop:"2em",
                            marginLeft:".5em",

                        }} type="password"
                               onBlur={handleBlur}
                               value={values.password}
                               placeholder='enter your password'
                               name='password' id='password'/>
                        </div>
                        <div style={{
                            marginTop:"2em",
                            marginLeft:"1em"
                        }}>
                            <button
                            style={{
                                padding:"1em",
                                backgroundColor:"green",
                                color:"white"
                            }}
                            >submit</button>
                        </div>
                    </form>

                )
            }

        </Formik>
</>
    )

}






