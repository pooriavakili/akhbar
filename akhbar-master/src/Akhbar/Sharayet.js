import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Sharayet extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57836424.jpg')}
                         className='Mojaj'
                         style={{
                             position:"absolute",
                             bottom:250,
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
                        شرایط صادرات محصولات فلزی + اسامی شرکت‌های مجاز

                    </p>
                    <p
                        className=' BARABAR'
                        style={{
                            bottom:-350,
                            position:"absolute",
                            right:200,
                            fontSize:20,
                            width:"70%",
                            fontFamily:"b zar",
                            direction:"rtl"
                        }}
                    >
                        طبق اعلام گمرک، تا پایان خرداد امسال برخی شرکت‌ها مجاز به صادرات محصولات فولادی هستند و تائید این وزارتخانه برای صادرات محصولات آنها الزامی نیست.

                        به گزارش ایسنا، براساس بخشنامه اخیر گمرک شرایط صادرات محصولات فلزی که از سوی وزارت صنعت، معدن و تجارت (صمت) اعلام شده ابلاغ و در دستور کار قرار گرفته است.

                        این در حالی است که طبق دستور رحمانی - وزیر صنعت، معدن و تجارت - در خصوص ساماندهی محصولات فولادی و به منظور تسهیل فرآیند صادرات واحدهای تولیدی از ۲۱ اردیبهشت‌ماه تا پایان خردادماه سال جاری حدود ۶۲ شرکت شرایط متفاوتی برای صادرات محصولات خود خواهند داشت که براساس اعلام انجام شده شرکت‌های مورد نظر برای صادرات محصولات فولادی نیازی به مجوز اداره ثبت نداشته و با اعلام آمادگی واحدهای دیگر تولیدکننده مقاطع طویل فولادی جهت عرضه در بورس کالا فهرست پیوست تکمیل و از سوی معاونت امور معادن و صنایع معدنی وزارتخانه‌ها به گمرک اعلام خواهد شد.

                        در نامه رحمانی به میراشرفی - رئیس گمرک - آمده است که به تمامی گمرکات ابلاغ شود که فهرست صادرکنندگان مقاطع تأمین فولادی را با مشخصات کامل به منظور پیگیری‌های بعدی به صورت ماهیانه اعلام کنند. ضمناً فهرست صادرکنندگان برای مقاطع زمانی بعد پس از بررسی نحوه رعایت عرضه مشخص شده در سه ماهه نخست و کنترل بازگشت ارز صادراتی به سامانه نیما متعاقباً توسط معاونت امور معادن و صنایع معدنی وزارت صنعت، معدن و تجارت اعلام می‌شود.

                        همچنین طبق دستور وزیر صمت شرایط برای گروه دیگری از تولیدکنندگان محصولات فولادی نیز تعریف شده است؛ به نحوی که طبق اعلام رحمانی با توجه به ضرورت نیازهای داخلی کشور و به منظور ساماندهی صادرات محصولات فولادی و پیگیری برگشت ارز حاصل از صادرات و جلوگیری از ارزان‌فروشی محصولات صادراتی و از سوی دیگر بنا به درخواست واحدهای بزرگ تولیدکننده مقاطع فولادی از این پس صادرات محصولات فولادی با چند کد محدود به شرایطی خواهد شد.

                        براین اساس، صادرات محصولات فولادی با کد ۷۲۱۳(HS)، ۷۲۱۴، ۷۲۱۵، ۷۲۱۶ و ۷۲۰۶ صرفاً از طریق واحدهای تولیدکننده آن محصول و یا نماینده رسمی آنها و مطابق با روال جاری برای سایر فرآورده‌های فولادی مانند شمس و آهن اسفنجی پس از تأیید وزارت صنعت، معدن و تجارت امکان‌پذیر است.
                    </p>
                </div>
            </div>
        )
    }
}