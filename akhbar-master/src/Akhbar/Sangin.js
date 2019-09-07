import React,{Component} from 'react'
import App from './../App'
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
                         className='SANNGIN'
                         style={{
                             position:"absolute",
                             top:270,
                             right:450
                         }}
                    />
                    <p
                        className='dasty'
                        style={{
                            top:100,
                            position:"absolute",
                            right:500,
                            fontSize:20
                        }}
                    >
                        عوارض سنگین برای صادرات خرما
                    </p>
                    <p
                        className=' BARAY '
                        style={{
                            width:"70%",
                            bottom:-300,
                            position:"absolute",
                            right:200,
                            fontSize:22,
                            direction:"rtl",
                            fontFamily:"b zar",
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