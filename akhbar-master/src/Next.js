import React,{Component} from 'react'
import './Logo.css'
import Header from "./component/Header";
import {Link} from "react-router-dom";
import DataOne from "./DataOne";
export default function Next (){
        return(
            <div>
                <Header/>
                <div >
                    {
                        DataOne.map((item,index)=>(
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
                                <img src={item.aks}
                                     style={{

                                         marginTop:  index == 0 ? 30 : '.20em',
                                         marginLeft: index==0?30:'60em'
                                     }}
                                     className='DATA'

                                     alt=""/>
                                <p
                                    className='DATAONE'
                                    style={{

                                        marginTop: index == 0 ?30 : '.2em',
                                        marginRight:  index == 0 ? 29 : '20em',
                                        fontSize: '1.3em',
                                        direction: "rtl",

                                    }}
                                >
                                    {item.title}
                                </p>
                                <p
                                    className='DATATWO'
                                    style={{

                                        marginTop: index == 0 ? 30 : '.2em',
                                        width: "40%",
                                        marginLeft: index == 0 ? 30 : '19em',
                                        fontSize: '1.3em',
                                        direction: "rtl",

                                    }}
                                >
                                    {item.maten}
                                </p>
                            </Link>
                            </div>
                            ))

}
                </div>

                <div
                    style={{
                        position:"absolute",
                       top:10400,
                        right:650

                    }}
className='ONE'
                >
                    <Link to='/app'
                    style={{
                        color:"black",
                        cursor:"pointer",
                        textDecoration:"none",
                    }}
                    >
<p
    style={{
        fontSize:40,
        color:"black",



    }}
>1</p>
                    </Link>
                </div>
                <div
                style={{
                    position:"absolute",
                 top:10400,
                    right:600

                }}
                className='THREE'
            >
                <Link to='/sevom'
                      style={{
                          color:"black",
                          cursor:"pointer",
                          textDecoration:"none",

                      }}
                >
                    <p
                        style={{
                            fontSize:40,
                            color:"black",

                            cursor:"pointer",

                        }}
                    >3</p>
                </Link>
            </div>
                <div
                    style={{
                        position:"absolute",
                        top:10400,
                        right:550

                    }}
                    className='FOUR'
                >
                    <Link to='/chaharom'
                          style={{
                              color:"black",
                              cursor:"pointer",
                              textDecoration:"none",

                          }}
                    >
                        <p
                            style={{
                                fontSize:40,
                                color:"black",

                                cursor:"pointer",

                            }}
                        >4</p>
                    </Link>
                </div>
            </div>
        )}

