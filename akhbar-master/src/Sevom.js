import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Header from "./component/Header";
import DataTwo from './DataTwo'
export default function Sevom () {

        return(
<div>
    <Header/>
    <div>
        {
         DataTwo.map((item,index)=>(
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

                              marginTop:  index == 0 ? 29 : '.20em',
                              marginLeft: index==0?29:'60em'
                          }}
                          className='KHANE'

                          alt=""/>
                     <p
                         className='ZARFIATT'
                         style={{

                             marginTop: index == 0 ?29 : '.2em',
                             marginRight:  index == 0 ? 29 : '20em',
                             fontSize: '1.3em',
                             direction: "rtl",

                         }}
                     >
                         {item.title}
                     </p>
                     <p
                         className='ZARFIAT'
                         style={{

                             marginTop: index == 0 ? 29: '.2em',
                             width: "40%",
                             marginLeft: index == 0 ? 29 : '19em',
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
        className="DOVOMM"
        style={{
            position:"absolute",
            top:10000,
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
        top:10000,
        right:700

    }}
    className='YAK'
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
                cursor:"pointer",

            }}
        >1</p>
    </Link>
</div>
    <div
        style={{
            position:"absolute",
            top:10000,
            right:600
        }}
        className='CHAHAROMM'
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
        )
}