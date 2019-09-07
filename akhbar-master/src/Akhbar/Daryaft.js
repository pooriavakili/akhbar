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
                         className='AVAREZZ'
                         style={{
                             position:"absolute",
                             bottom:200,
                             right:480
                         }}
                    />
                    <p
                        className='jkjk'
                        style={{
                            bottom:500,
                            position:"absolute",
                            right:450,
                            fontSize:20,
                            direction:"rtl"
                        }}
                    >
                        وضع عوارض بر صادرات خرما

                    </p>
                    <p
                        className=' BARABAR'
                        style={{
                            bottom:-150,
                            position:"absolute",
                            right:200,
                            fontSize:20,
                            width:"70%",
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