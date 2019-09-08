import React,{Component} from 'react'

import './Responsive.css'
import Header from "./../component/Header";
export default class Sangin extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57876002.jpg')}
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
                        عوارض سنگین برای صادرات خرما
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
                        صادرات خرماهای مضافتی با عوارضی سنگین معادل ۸۰۰۰ تومان برای هر کیلوگرم خرمای مضافتی و ۵۰۰۰ تومان برای هر کیلوگرم خرمای کبکاب مواجه شد.

                        به گزارش ایسنا، بر اساس اعلام گمرک از عوارض جدید برای صادرات خرما، هر کیلوگرم خرمای مضافتی مشمول ۸,۰۰۰ تومان و هر کیلوگرم خرمای کبکاب مشمول ۵,۰۰۰ تومان عوارض خواهد شد.

                        همچنین سایر خرماها نیز مشمول عوارضی معادل ۳۰ درصد ارزش ریالی صادرات بر مبنای نرخ دلار در سامانه سنا خواهند شد.

                        به گزارش ایسنا، قیمت خرما در هفته‌های گذشته صادرات این محصول به خارج از کشور با محدودیتی مواجه نشد و به همین دلیل قیمت این محصول در ایام ماه مبارک رمضان جهشی قابل توجه داشت.
                    </p>
                </div>
            </div>
        )
    }
}