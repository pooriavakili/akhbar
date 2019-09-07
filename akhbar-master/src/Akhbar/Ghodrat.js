import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Ghodrat extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57644220.jpg')}
                         className='GHODRAT'
                         style={{
                             position:"absolute",
                             top:200,
                            right:450
                         }}
                    />
                    <p
                        className='RTEE'
                        style={{
                            top:100,
                            position:"absolute",
                            right:400,
                            fontSize:20
                        }}
                    >
                        آثار کاهش قدرت خرید در سال‌های بعد مشخص می‌شود
                    </p>
                    <p
                        className='EWSWQ'
                        style={{
                            top:500,
                            position:"absolute",
                            right:200,
                            fontSize:22,
                            fontFamily:"b zar",
                            direction:"rtl",
                            width:"70%"
                        }}
                    >
                        عضو هیئت مدیره کنفدراسیون صنعت ایران کمبود نقدینگی واحدهای تولیدی، افزایش قیمت مواد اولیه و موانع صادرات را از جمله مهمترین دلایل رشد منفی ۷.۹ درصدی بخش صنعت عنوان کرد.

                        نصراله محمدحسین فلاح در گفت‌وگو با ایسنا، با اشاره به اینکه رشد منفی ۷.۹ درصدی اقتصادی بخش صنعت علاوه بر ساخت و تولید، شامل نفت نیز می‌شود، اظهار کرد: ممنوعیت صادرات نفت ایران که در پی تحریم‌های آمریکا اعمال شده در این عدد تأثیر قابل توجهی دارد.

                        وی در ادامه دلایل رشد اقتصادی منفی در بخش ساخت و تولید را کمبود نقدینگی واحدهای تولیدی و افزایش قیمت مواد اولیه عنوان کرد و گفت: انباشت بدهی دولت به صنایع باعث کمبود نقدینگی در واحدهای تولیدی شده و از طرف دیگر قیمت مواد اولیه از جمله آهن، پتروشیمی و آلومینیوم افزایش چشمگیری داشته است.

                        فلاح ادامه داد: از طرف دیگر مشکلاتی که سال گذشته در نقل و انتقالات مالی ایجاد شد باعث شده که امکان فعالیت جدی در صادرات از بین برود.

                        عضو هیئت مدیره کنفدراسیون صنعت ایران با بیان اینکه مفهوم اصلی موارد ذکر شده کاهش تولید در سال گذشته است، تصریح کرد: این آمار مربوط به ۹ ماهه سال گذشته است، اما آثار اصلی کاهش قدرت خرید مردم در سال ۱۳۹۸ و ۱۳۹۹ آشکار خواهد شد.

                        وی در پایان درباره راهکارهایی که دولت باید برای جبران رشد منفی اقتصاد در نظر بگیرد، اظهار کرد: دولت نمی‌تواند بازوی بهبود صنعت باشد و بهتر است که مقررات و کنترل را کمتر کند.

                        به گزارش ایسنا، براساس جدیدترین آمارهای ارائه شده رشد اقتصادی کشور در ۹ ماه ابتدایی سال ۱۳۹۷ به منفی ۳.۸ درصد رسیده است. در این میان بخش صنعت به عنوان یکی از اصلی‌ترین عوامل تأثیرگذار در رشد اقتصادی کشور در ۹ ماه ابتدایی سال گذشته رشد منفی ۷.۹ درصدی را به ثبت رسانده است.
                    </p>
                </div>
            </div>
        )
    }
}