import  React,{Component} from 'react';
import Header from "./component/Header";
import {Link} from 'react-router-dom'
import DataThree from "./DataThree";
export default class Chaharom extends  Component{
    render(){
        return(
            <div>
                <Header/>
                {
                DataThree.map((item,index)=>(
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

                                     marginTop:  index == 0 ? 23 : '.20em',
                                     marginLeft: index==0?23:'60em'
                                 }}
                                 className='DATA'

                                 alt=""/>
                            <p
                                className='DATAONE'
                                style={{

                                    marginTop: index == 0 ?23 : '.2em',
                                    marginRight:  index == 0 ? 23 : '20em',
                                    fontSize: '1.3em',
                                    direction: "rtl",

                                }}
                            >
                                {item.title}
                            </p>
                            <p
                                className='DATATWO'
                                style={{

                                    marginTop: index == 0 ? 23: '.2em',
                                    width: "40%",
                                    marginLeft: index == 0 ? 23 : '19em',
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

                <div
                    style={{
                        position:"absolute",
                        top:6600,
                        right:700

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
                    className="DO"
                    style={{
                        position:"absolute",
                        top:6600,
                        right:650

                    }}
                >
                    <Link to='/next'
                          style={{
                              color:"black",
                              cursor:"pointer",
                              textDecoration:"none",


                          }}
                    >
                        <p

                            style={{
                                fontSize:40,
                                color:"black"
                            }}
                        >2</p>


                    </Link>
                </div>
                <div
                    style={{
                        position:"absolute",
                        top:6600,
                        right:600

                    }}
                    className='SEH'
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
            </div>
        )
    }
}
