import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Mahal extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57783054.jpg')}
                         className='MaHHal'
                         style={{
                             position:"absolute",
                             top:200,
                             right:500
                         }}
                    />
                    <p
                        className='BCDFD'
                        style={{
                            top:100,
                            position:"absolute",
                            right:500,
                            fontSize:20
                        }}
                    >
                        واردات از محل ارز صادراتی انجام شود
                    </p>
                    <p
                        className=' Mamnooee'
                        style={{
                            top:600,
                            position:"absolute",
                            right:200,
                            fontSize:22,
                            width:"70%",
                            fontFamily:"b zar",
                            direction:"rtl"

                        }}
                    >
                        اعضای شورای پول اعتبار ضمن خواستار شدن ادامه روند قیمت‌گذاری در سامانه نیما، بر تسهیل‌گری در ورود ارز حاصل از صادرات، با اعمال سیاست واردات از محل ارز صادراتی به عنوان یک راهکار موفق تاکید کردند.

                        به گزارش ایسنا، بانک مرکزی عصر دیروز در یک هزار و دویست و هفتاد و دومین جلسه شورای پول اعتبار، سیاست‌ها، برنامه‌ها و اقدامات خود را در حوزه ارزی تشریح کرد.

                        در این جلسه که به ریاست عبدالناصر همتی - رئیس کل بانک مرکزی - برگزار شد، گزارش عملکرد حوزه ارزی در دوره سال ۱۳۹۷ تا خرداد ماه ۱۳۹۸ مورد بحث و بررسی قرار گرفت.

                        همچنین عملکرد سامانه‌های نیما، رفع تعهدات ارزی و سنا، اقدامات مهم بانک مرکزی در کنترل ریال و اقدامات سفته‌بازانه و مدیریت کارآمد بازار ارز از جمله بخش‌های ارائه شده بود که مورد توجه قرار گرفت.

                        طبق اعلام بانک مرکزی، اعضای شورای پول و اعتبار ضمن تقدیر از سیاست‌ها و برنامه‌های اجرا شده طی این دوره، از روند قیمت‌گذاری در سامانه نیما و حاکم شدن سازوکار بازار بر تعیین قیمت در این سامانه ابراز رضایت کردند و تداوم این تدبیر را خواستار شدند.

                        در این جلسه، همچنین روند برگشت ارز حاصل از صادرات و سیاست‌های تشویقی و انضباطی اعمال شده بررسی شد و بر تسهیل‌گری در ورود ارز حاصل از صادرات، با اعمال سیاست واردات از محل ارز صادراتی به عنوان یک راهکار موفق نیز تاکید شد.
                    </p>
                </div>
            </div>
        )
    }
}