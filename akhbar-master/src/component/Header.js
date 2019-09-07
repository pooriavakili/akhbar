import React,{Component} from 'react'

import Drawer from './../ResponsiveDrawer'
import {NavLink,Link} from "react-router-dom";
import './Header.css'
export default class Header extends Component{
    state={
        telegram:"telgram",
        instagram:'instagram'
    }

    render(){
        return(
            <body>
            <header>

                <div className='Logo'>
                    اخبار صادراتی
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink to='/download' className='Link'>دانلود اپلیکیشن</NavLink>
                        </li>


                        <li>
                            <NavLink to='/about' className='Link'>درباره سایت</NavLink>
                        </li>
                        <li>
                            <NavLink to='/app' className='Link'>صفحه اول</NavLink>
                        </li>

                    </ul>

                </nav>
                <div>

                    <Drawer

                    />

                </div>




            </header>
            <footer
                style={{

                    width:1500,
                    height: 190,
                    background: 'black',
                    position:'absolute',
                    top:10500,

                   borderWidth:3,
                    borderStyle:"solid",
                    borderColor:"black"
                }}
            >
<div
className='Aval'
style={{
    position:"absolute",
    right:700
}}
>
    <Link
        to='/'
    style={{
        color:"gray",
        cursor:"pointer",
        textDecoration:"none"
    }}
    >
        <p>صفحه اول</p>

    </Link>
</div>
                <div
                    className='About'
                    style={{
                        top:15,
                        position:"absolute",
                     right:800
                    }}

                >

                    <Link

                    to='/about'
                    style={{
                        cursor:"pointer",
                        color:'gray',
                        textDecoration:"none"
                    }}
                    >
                    درباره سایت
                    </Link>

                    </div>
                <div

                   >
                    <Link
                    to='/download'
                    style={{
                        color:"gray",
                        cursor:"pointer"
                    }}
                    >
                        <p

                            style={{
                                position:"absolute",
                                right:900,
                                cursor:"pointer"
                            }}
                            className='DDDDownload'
                        >
                        دانلود اپلیکیشن
                        </p>
                    </Link>
                </div>

                <div
                    className='TTelgram'
                style={{

                    position:'absolute',

                    right:850,
                    top:70,
                    cursor: 'pointer'
                }}
                >
                    <img src={require('./../img/Telgram.jpg')}

                         style={{
                             width:30,
                             height:30
                         }}
                    onClick={this.Telegram}
                    />
                </div>
                <div
                    className='Iinstagram'
                    style={{

                        position:'absolute',

                        right:800,
                        top:70,
                        cursor: 'pointer'
                    }}
                >
                    <img src={require('./../img/instagram.jpg')}
                         style={{
                             width:30,
                             height:30
                         }}
                         onClick={this.Instagram}
                    />
                </div>
                <div
                    className='Nevisande'
                style={{
                    position:"absolute",
                    right:650,
                    top:100
                }}
                >
                    <p
                    style={{
                        color:"gray",
                        fontSize:20
                    }}
                    >
                        نویسنده سایت:پوریا اشکوروکیلی
                    </p>
                </div>
                <div
                    className='RADmehr'
                    style={{
                        position:"absolute",
                        right:650,
                        top:140
                    }}
                >
                    <p
                        style={{
                            color:"gray",
                            fontSize:20
                        }}
                    >
                        ایده سایت:دکتر رادمهر
                    </p>
                </div>
            </footer>
            </body>
        )
    }
}