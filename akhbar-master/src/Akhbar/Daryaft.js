import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Daryaft extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57886304.jpg')}
                         style={{
                             marginTop:"5em",
                             display: 'block',
                             marginLeft: 'auto',
                             marginRight: 'auto',
                         }}
                    />
                    <p
                        style={{
                            textAlign:"center",
                            marginTop:'4em',
                            fontSize:'1.3em'
                        }}
                    >
                        وضع عوارض بر صادرات خرما

                    </p>
                    <p
                        style={{
                            marginTop:'4em',
                            marginLeft:'3em',
                            width:"80%",
                            fontSize:'1.3em',
                            fontFamily:"b zar",
                            direction:"rtl"
                        }}
                    >
                        کارگروه تنظیم بازار وزارت صنعت، معدن و تجارت طی نامه‌ای برای صادرات خرما عوارض تعیین کرد.

                        به گزارش ایسنا، مدیرکل دفتر مقررات صادرات و واردات وزارت صنعت، معدن و تجارت طی نامه‌ای به مدیرکل صادرات گمرک اعلام کرد که صادرات انواع خرما مشمول عوارض شده است.

                        طبق این تصمیم عوارض صادرات هر کیلوگرم خرمای مضافتی بم و کبکاب به ترتیب معادل ۸۰۰۰ و ۵,۰۰۰ تومان و عوارض سایر خرماها ۳۰ درصد ارزش ریالی صادرات بر مبنای نرخ دلار در سامانه سنا در روز اظهار، تعیین شده است.
                        نوحی با اشاره به ظرفیت منطقه ویژه پیام توضیح داد: این منطقه پتانسیل زیادی برای دور زدن تحریم‌ها دارد که باید از آن به درستی استفاده کرد.
                    </p>
                </div>
            </div>
        )
    }
}