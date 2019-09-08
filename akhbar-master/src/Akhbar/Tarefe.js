import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Tarefe extends Component{
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
                        احتمال حذف تعرفه صادرات خرما از چند روز دیگر
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
                        مدیرکل دفتر توسعه صادرات وزارت جهاد کشاورزی از پیشنهاد حذف تعرفه صادرات خرما با نزدیک شدن به پایان ماه مبارک رمضان و کاهش تقاضای مصرف داخلی این محصول خبر داد.

                        به گزارش ایسنا به نقل از وزارت جهاد کشاورزی، شاهرخ شجری در نامه ای خطاب به مدیرکل دفتر مقررات صادرات و واردات سازمان توسعه تجارت ایران با اشاره به این که خرما با حدود نیم میلیارد دلار ارزآوری از محصولات استراتژیک صادراتی بخش کشاورزی است، اظهار کرد: در آستانه فصل برداشت این محصول، پیش بینی می شود امسال با انبوه تولید مواجه باشیم؛ لذا با نزدیک شدن به پایان ماه مبارک رمضان و کاهش تقاضای مصرف داخلی آن، این وزارت با وضع عوارض صادراتی برای این محصول مخالف بوده و پیشنهاد دارد در رویه صادرات آن تغییری ایجاد نشود.
                    </p>
                </div>
            </div>
        )
    }
}