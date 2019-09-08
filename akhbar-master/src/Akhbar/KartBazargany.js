import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class KartBazargany extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57822821.jpg')}
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
                            fontSize:'1.3em',
                            direction:"rtl"
                        }}
                    >
                        صدور ۱۳۰۰ کارت‌ بازرگانی جدید در یک ماه!
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
                        سرپرست سازمان توسعه تجارت رقم صدور کارت‌های بازرگانی در فروردین امسال را ۱۳۰۰ مورد اعلام و تصریح کرد که بخش قابل توجهی از صادرات پارسال و امسال با کارت‌های بازرگانی جدید انجام شده که باید بررسی شود دلیل فعال شدن این تعداد کارت در یک مدت زمان کوتاه چه بوده و در صورتی که آنها به دنبال بازنگرداندن ارز به کشور باشند، باید تکلیف روشن شود.

                        به گزارش ایسنا، محمدرضا مودودی امروز (دوشنبه) در جلسه شورای راهبردی توسعه صادرات درباره آخرین وضعیت پیگیری عملکرد کارت‌های بازرگانی جدید تصریح کرد: طبق برآوردها چه در سال گذشته و چه در ماه ابتدایی امسال بخش قابل توجهی از صادرات کشور از طریق کارت‌های بازرگانی جدید انجام شده که تعداد آنها در فروردین امسال از ۱۳۰۰ مورد گذشته است.

                        وی تاکید کرد: قطعاً باید بررسی شود که دلیل فعال شدن این تعداد کارت در یک مدت زمان کوتاه چه بوده است و در صورتی که آنها به دنبال بازنگرداندن ارز به کشور باشند، باید تکلیف روشن شود.
                    </p>
                    <p
                        style={{
                            textAlign:"center",
                            marginTop:'4em',
                            fontSize:'1.3em',
                            direction:"rtl"
                        }}
                    >
                        فقط ۲۰ میلیارد تومان از مشوق‌های صادراتی وصول شد


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
                            سرپرست سازمان توسعه تجارت همچنین اعلام کرد: با وجود طراحی روش‌هایی در بودجه برای حمایت از صادرکنندگان، آنچه در عمل اتفاق افتاد دریافت تنها ۲۰ میلیارد تومان از مشوق‌های پیش‌بینی شده بود.

                            به گفته مودودی، سال قبل برنامه‌ریزی شده بود یک درصد از تعرفه کالاهای وارداتی جز اقلام دارویی و اساسی به حمایت از صادرکنندگان اختصاص یابد. برآوردهای ابتدای سال حاکی از آن بود که این رقم به حدود ۱,۳۰۰ میلیارد تومان می‌رسد که با توجه به افزایش نرخ ارز و ممنوع شدن واردات برخی کالاها این رقم تا پایان سال به مرز ۶۰۰ میلیارد تومان رسید. با این وجود آنچه تاکنون به سازمان توسعه تجارت از این محل رسیده حدود ۲۰ میلیارد تومان که رقمی کمتر از دو درصد کل اعتبارات است تعلق گرفته که محدودیت‌هایی برای حمایت از صادرکنندگان ایجاد کرده است.

                            سرپرست سازمان توسعه تجارت ادامه داد: در تلاش هستیم حداقل رقم محقق شده به سازمان توسعه تجارت برسد تا بتوانیم بخشی از مشوق‌های صادراتی مدنظر را فعال کنیم. متأسفانه در سال قبل با توجه به برخی تحولات در جایگاه‌های مدیریتی سازمان‌های ذیربط پیگیری‌های ما به نتیجه نرسید، اما همچنان در تلاشیم که این رقم در اختیار این سازمان قرار بگیرد.

                            مودودی با بیان این‌که منبع مشوق‌های مالی سال ۱۳۹۸ برای صادرکنندگان نامعلوم است، اظهار کرد: هرچند اعلام شده که برای حمایت از صادرکنندگان ۷۸۰ میلیارد تومان منابع در نظر گرفته شده، اما هنوز تکلیف ما درباره چگونگی وصول آنها مشخص نیست و تلاش می‌کنیم با پیگیری‌های لازم تکلیف این رقم مشخص شود
                        </p>
                </div>
            </div>
        )
    }
}