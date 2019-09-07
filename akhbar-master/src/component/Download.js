import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Header from "./Header";
export default class Download extends Component{
    render(){
        return(
            <div>
                <div>
                <Header/>
                </div>

                    <div style={{
                        position:"relative",
                        bottom:-100,
                        right:-500
                    }}
                    className='APK'

                    >
                        <h1 style={{
                            fontSize:30
                        }}

                        >
                            دانلود اپلیکیشن اخبار صادراتی
                        </h1>
                    </div>
                <div
                    className='APPP'
                style={{
                    color:"black",
                    position:"absolute",

                     borderWidth:3,


                    borderColor:"black",
                    borderStyle:"solid",
                    fontSize:20,
                    right:600,
                    top:500
                }}
                >
                    <Link to={require('./../app/app-release.apk')}

                    style={{
                        color:"black",






                        lineStyle:"none",
                        textDecoration:"none",
                        cursor:"pointer",


                    }}
                    >
                        <p
                        style={{

                        }}
                        >دانلود اپلیکیشن</p>
                    </Link>
                </div>
                </div>

        )
    }
}