import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Ezafe extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57660777.jpg')}
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
                        واردات ۱۴۳ کالای دیگر ممنوع شد

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
                        طبق اعلام گمرک واردات ۱۴۳ قلم کالای غیر ضروری به لیست قبلی کالاهای ممنوعه اضافه شد.

                        به گزارش ایسنا، سال گذشته واردات ۱۳۳۹ قلم کالا ممنوع بود که امسال نیز واردات ۱۴۳ قلم کالای غیر ضروری دیگر ممنوع اعلام و به لیست قبلی اضافه شده است.

                        بر این اساس در سال جاری واردات ۱۴۸۲ قلم کالا به کشور ممنوع است که این اقدام به منظور مدیریت منابع ارزی صورت گرفته است.

                        همچنین در خبر دیگری که از سوی گمرک اعلام شده، صادرات کالا از مرز سومار در استان کرمانشاه مدتی ممنوع بود که از روز شنبه (۱۱ خرداد ماه) ارسال کالا به این مرز بلامانع اعلام شده است.

                        البته ارسال کالای صادراتی به این پایانه مرزی به غیر از محصولات لبنی شامل شیر، پنیر و ماست برای صادرات به عراق مجاز است.
                    </p>
                </div>
            </div>
        )
    }
}