import {NavLink,Link} from "react-router-dom";
import './Header.css'
import React,{Fragment,Component} from 'react'
export default class Header extends Component{
    state={
        telegram:"telgram",
        instagram:'instagram'
    }
    render(){
        const Style={
            float:'right',
            padding:'1em',
            color:"white",
            textDecoration:"none"
        }
        return(
            <Fragment>
                    <ul
                    style={{
                     margin:0,
                     padding:0,
                        listStyle:'none',
                        backgroundColor:"black",
                        overflow:"hidden"
                    }}

                    >
                        <li>
                            <NavLink  to='/download'  style={Style}>دانلود اپلیکیشن</NavLink>
                        </li>
                        <li>
                            <NavLink   to='/about' style={Style}>درباره سایت</NavLink>
                        </li>
                        <li>
                            <NavLink   to='/app'  style={Style}>صفحه اول</NavLink>
                        </li>
                    </ul>
            <footer
                style={{
                    width:1500,
                    height: 190,
                    background: 'black',
                    position:'absolute',
                    marginTop:'480em',
                   overflow:"hidden",
                    borderWidth:3,
                    borderStyle:"solid",
                    borderColor:"black"
                }}
            >
                <div

                    style={{
                marginLeft:'40em'
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
                        marginTop:-35,
             marginLeft:'30em',
              fontSize:"1.1em"
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
                            cursor:"pointer",
                            textDecoration:"none"
                        }}
                    >
                        <p

                            style={{
                                marginTop:-20,
                                marginLeft:"22em",
                                cursor:"pointer",
                               fontSize:"1.1em"
                            }}
                        >
                            دانلود اپلیکیشن
                        </p>
                    </Link>
                </div>
                <div
                    style={{
                        cursor: 'pointer'
                    }}
                >
                    <img src={require('./../img/Telgram.jpg')}

                         style={{
                             width:30,
                             height:30,
                             marginLeft:"40em"
                         }}
                         onClick={this.Telegram}
                    />
                </div>
                <div
                    style={{
                        marginTop:-32,
                        cursor: 'pointer'
                    }}
                >
                    <img src={require('./../img/instagram.jpg')}
                         style={{
                             width:30,
                             height:30,
                             marginLeft:"37em"
                         }}
                         onClick={this.Instagram}
                    />
                </div>
                <div
                >
                    <p
                        style={{
                            color:"gray",
                            fontSize:'1.1em',
                            marginLeft:"25em"
                        }}
                    >
                        نویسنده سایت:پوریا اشکوروکیلی
                    </p>
                </div>
                <div
                >
                    <p
                        style={{
                            color:"gray",
                            fontSize:'1.1em',
                            marginLeft:'25em'
                        }}
                    >
                        ایده سایت:دکتر رادمهر
                    </p>
                </div>
            </footer>
            </Fragment>
        )
    }
}