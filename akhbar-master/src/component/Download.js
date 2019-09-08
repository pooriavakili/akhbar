import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Header from "./Header";
export default class Download extends Component{
    render(){
        return(
            <div>
                <div>
                <Header/>
               <h1
               style={{
                   marginLeft:"17em",
                   marginTop:"2em"
               }}

               > دانلود اپلیکیشن اخبار صادراتی</h1>

                       <div
                       style={{
                           marginTop:"5em"
                       }}
                       >
                        <Link
                            style={{

                                fontSize:"1.5em",
                                marginLeft:"28em",
                                textDecoration:"none",
                                color:"black"
                            }}
                            to={require('./../app/app-release.apk')}>دانلود</Link>
                       </div>
                </div>
            </div>
        )
    }
}