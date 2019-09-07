import React,{Component} from 'react'
import './Header.css'
import Header from "./Header";
export default class About extends Component{
    render(){
        return(
            <div>
          <Header/>
                <div style={{

                }}>
                    <div style={{
                        position:"relative",
                      bottom:-100,
                       right:-300
                    }}
                    className='ABOUTT'
                    >
                        <h1 style={{
                            fontSize:22,
                            fontFamily:"b zar"
                        }}

                        >
                            این سایت در سال 1398وماه اردیبهشت تاسیس شدو به نویسندگی اشکوروکیلی وایده دکتر رادمهر وهدفش اگاهی شما از به روزترین اخبار صادراتی می باشد
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}