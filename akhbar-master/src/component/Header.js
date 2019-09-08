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

style={{
marginRight:"500em"
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
                    style={{
                      marginTop:"100em",
                        marginRight:"200em"
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
                                marginRight:"400em",
                                cursor:"pointer"
                            }}
                        >
                        دانلود اپلیکیشن
                        </p>
                    </Link>
                </div>

                <div
                style={{
                    marginRight:'200em',
                    marginTop:"300em",
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
                    style={{
                      marginRight:'200em',
                        marginTop:"300em",
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

                style={{
                 marginRight:'100em',
                    marginTop:'400em'
                }}
                >
                    <p
                    style={{
                        color:"gray",
                        fontSize:'1.1em'
                    }}
                    >
                        نویسنده سایت:پوریا اشکوروکیلی
                    </p>
                </div>
                <div

                    style={{
                    marginRight:'100em',
                        marginTop:'500em'
                    }}
                >
                    <p
                        style={{
                            color:"gray",
                            fontSize:'1.1em'
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