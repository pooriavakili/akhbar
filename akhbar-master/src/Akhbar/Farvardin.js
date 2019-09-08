import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Farvardin extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57820588.jpg')}
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
                        تراز تجاری فروردین مثبت ماند

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
                        جدیدترین آمارها از وضعیت تجارت ایران در نخستین ماه از سال ۱۳۹۸ نشان می‌دهد که تراز تجاری کشور در این ماه مثبت بوده است.

                        به گزارش ایسنا، براساس جدیدترین آمارهایی که از سوی اتاق بازرگانی تهران منتشر شده، صادرکنندگان ایرانی در ماه نخست سال جاری بدون احتساب نفت خام حدوداً ۲.۵ میلیارد دلار صادرات داشته‌اند.

                        وزن کل کالاهای صادر شده از کشور نیز ۸.۵ میلیون تن بوده است.

                        بر این اساس ارزش صادرات ایران در فروردین سال جاری در قیاس با ماه مشابه سال قبل حدوداً ۱۸ درصد کاهش یافته است. هرچند میزان صادرات ایران از نظر وزنی افزایشی حدوداً هشت درصدی را پشت سر گذاشته است.

                        در حوزه واردات، ایرانی‌ها حدوداً ۲.۱ میلیون تن کالا به ارزش ۲.۳ میلیارد دلار به کشور وارد کرده‌اند که این عدد نیز در قیاس با مدت مشابه سال قبل از نظر ارزش وارداتی، کاهش ۷.۶ درصدی را نشان می‌دهد.

                        به این ترتیب با وجود کاهش حدوداً ۳۷۰ میلیون دلاری در قیاس با سال قبل، تراز تجاری ایران در نخستین ماه از سال جاری مثبت ۲۱۳ میلیون دلار بوده است.

                        در این مدت میانگین قیمت کالاهای صادراتی ایران ۲۹۹ دلار در هر تن و کالاهای وارداتی ۱۱۲۰ دلار بوده است و از این رو ارزش کالاهای وارداتی به ایران چهار برابر کالاهای صادراتی بوده است.

                        در این مدت میعانات گازی، روغن‌های سبک، پروپان، متانول، قیر نفت و سایر محصولات تولیدی پتروشیمی اصلی‌ترین کالاهای صادراتی ایران به شمار می‌روند.

                        از سوی دیگر برنج، ذرت دامی، کنجاله، کره بسته‌بندی شده و دانه سویا اصلی‌ترین کالاهایی بوده که به ایران وارد شده است.

                        چین، عراق، جمهوری کره، امارات متحده عربی و هند اصلی‌ترین مقصد برای صادرات کالاهای ایرانی به شمار می‌روند و چین، ترکیه، امارات متحده عربی و هند اصلی‌ترین مبادی صادرات کالا به ایران بوده‌اند.



                    </p>
                </div>
            </div>
        )
    }
}