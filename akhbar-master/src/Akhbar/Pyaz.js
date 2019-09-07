import React,{Component} from 'react'

import Header from "./../component/Header";
import './Responsive.css'
export default class Pyaz extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/575881631.jpg')}
                         className='Sabegh'
                         style={{
                             position:"absolute",
                             bottom:200,
                             right:500
                         }}
                    />
                    <p
                        className='Dolat'
                        style={{
                            bottom:450,
                            position:"absolute",
                            right:500,
                            fontSize:20
                        }}
                    >

                        ممنوعیت صادرات پیاز و سیب‌زمینی لغو شد

                    </p>

                    <p
                        className=' REWWE'
                        style={{
                            bottom:-250,
                            width:"70%",
                            direction:"rtl",
                            position:"absolute",
                            right:200,
                            fontSize:22,
                            fontFamily:"b zar",

                        }}
                    >
                        وزیر صنعت معدن و تجارت اعلام کرد که ممنوعیت صادرات پیاز و سیب زمینی لغو شده است.

                        به گزارش ایسنا، در روزهای ابتدایی سال جاری و به دنبال افزایش قیمت دو محصول سیب زمینی و پیاز در بازارهای داخلی، دولت اعلام کرد صادرات این کالاها ممنوع شده است.

                        حال چند هفته پس از این تصمیم و به دنبال بازگشت ثبات نسبی به بازار این دو محصول، رضا رحمانی وزیر صنعت، معدن و تجارت (صمت) اعلام کرده که صادرات این دو کالا در حال حاضر آزاد است.

                        بر اساس نامه‌ای که وزیر صمت به رئیس کل گمرک ایران زده آمده است: " با توجه به استمرار تولید و تنظیم بازار کشور ممنوعیت صادرات پیاز و سیب زمینی رفع خواهد شد".

                        بر این اساس با انجام مقدمات لازم امکان صادرات این دو محصول از سوم خرداد ۱۳۹۸ فراهم شده است.

                        کشورهای همسایه، آسیای میانه و اروپای شرقی اصلی‌ترین مقصد کالاهای کشاورزی ایران به شمار می‌روند.


                    </p>
                </div>
            </div>
        )
    }
}