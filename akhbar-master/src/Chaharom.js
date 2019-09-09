import React from 'react';
import './Logo.css';
import {Link} from 'react-router-dom'
import Header from "./component/Header";
import DataThree from "./DataThree";
export default function Chaharom () {
    return (
        <div>
            <Header/>
            {
                DataThree.map((item, index)=> (
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

                                         marginBottom:  index == 0 ? 22 :-98,
                                         marginLeft: index==0?22:'60em'
                                     }}


                                     alt=""/>
                                <p

                                    style={{

                                        marginTop: index == 0 ?22: '.1em',
                                        marginRight:  index == 0 ? 22 : '20em',
                                        fontSize: '1.3em',
                                        direction: "rtl",
                                    }}
                                >
                                    {item.title}
                                </p>
                                <p
                                    className='DATATWO'
                                    style={{

                                        marginTop: index == 0 ? 22 : '.2em',
                                        width: "40%",
                                        marginLeft: index == 0 ? 22 : '19em',
                                        fontSize: '1.3em',
                                        direction: "rtl",

                                    }}
                                >
                                    {item.maten}
                                </p>
                                <div style={{

                                    marginTop:index==23?25:'1em',

                                }}>
                                </div>
                            </Link>
                        </div>
                    )
                )}
        </div>
    )}











