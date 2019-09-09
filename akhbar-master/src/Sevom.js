import React from 'react';
import './Logo.css';
import {Link} from 'react-router-dom'
import DataTwo from './DataTwo'
import Header from "./component/Header";
export default function Sevom () {
    return (
        <div>
            <Header/>

            {
                DataTwo.map((item, index)=> (
                        <div
                            key={item.id}

                        >
                            <Link to={item.url}
                                  style={{
                                      color: "black",
                                      cursor: "pointer",
                                      textDecoration:"none"
                                  }}
                            >
                                <div
                                    style={{
                                        float:'right',
                                        marginLeft:"40em",
                                        marginTop:index==0?29:"3em"
                                    }}
                                >
                                    <img src={item.aks}

                                         style={{



                                         }}


                                         alt=""/>
                                </div>
                                <p

                                    style={{
                                        marginTop:"-9em",
                                        marginRight:"15em",
                                        float:"right",
                                        fontSize: '1.3em',
                                        direction: "rtl",
                                    }}
                                >
                                    {item.title}
                                </p>
                                <p
                                    className='DATATwo'
                                    style={{

                                        float:"right",
                                        width: "40%",
                                        marginRight:"14em",
                                        marginTop:"-5em",
                                        fontSize: '1.3em',
                                        direction: "rtl",

                                    }}
                                >
                                    {item.maten}
                                </p>

                            </Link>
                        </div>
                    )
                )}

            <Link to='/app'
                  style={{
                      position:"absolute",
                      color:"black",
                      marginTop:'310em',
                      marginLeft:"30em",
                      fontSize:"1.5em",
                      textDecoration:"none"
                  }}
            >1</Link>
            <Link to='/next'
                  style={{
                      position:"absolute",
                      color:"black",
                      marginTop:'310em',
                      marginLeft:"31.5em",
                      fontSize:"1.5em",
                      textDecoration:"none"
                  }}
            >2</Link>
            <Link to='/chaharom'
                  style={{
                      position:"absolute",
                      color:"black",
                      marginTop:'310em',
                      marginLeft:"33em",
                      fontSize:"1.5em",
                      textDecoration:"none"
                  }}
            >4</Link>
        </div>
    )}











