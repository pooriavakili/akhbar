import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Avazrez extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57809326.jpg')}
                         className='AVAREZZ'
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
                        دریافت عوارض بر صادرات در برخی گمرک‌های کشور!

                    </p>
                    <p
                        className=' BARABAR'
                        style={{
                            bottom:-150,
                            position:"absolute",
                            right:200,
                            fontSize:20,
                            width:"70%",
                            fontFamily:"b zar",
                            direction:"rtl"
                        }}
                    >
                        مدیرکل گمرک البرز گفت: تولیدات سال گذشته البرز ۴۵۰ هزار تن بوده که تنها ۱۰۰ هزار تن آن از گمرک استان صادر شده است.

                        به گزارش ایسنا، غلامحسین نوحی در نشست شورای هماهنگی مدیران دستگاه‌های تابع وزارت امور اقتصادی و دارایی که امروز شنبه ۲۱ اردیبهشت در منطقه ویژه اقتصادی پیام برگزار شد اظهار کرد: میزان صادرات البرز در سال قبل ۱۱۹ میلیون دلار بوده که نسبت به سال ۹۶ کاهش داشته است.

                        وی با اشاره به دلیل کاهش صادرات از درگاه گمرک استان افزود: از آنجایی‌که بسیاری از واحدهای تولیدی مستقر در استان البرز، کالاها و تولیدات خود را از گمرک سایر استان‌ها صادر می‌کنند، میزان صادرات استان پایین می‌آید.

                        وی بیان کرد: تولیدات سال گذشته البرز ۴۵۰ هزار تن بوده که تنها ۱۰۰ هزار تن آن از گمرک استان صادر شده است.

                        این مسئول خاطر نشان کرد: صادرات از گمرک سایر استان‌ها به ضرر تولیدکنندگان البرزی و در نهایت کل استان تمام می‌شود چون در برخی از گمرکات به ازای هر کامیون بار بین ۱۰۰ تا ۲۰۰ هزار تومان گرفته می‌شود این در حالی‌ست که برای صادرات هیچ عوارضی نباید دریافت شود.

                        نوحی خاطر نشان کرد: جالب اینجاست برای دریافت این وجوه هیچ فیش دریافتی به راننده داده نمی‌شود.

                        مدیرکل گمرک البرز با اشاره به میزان واردات سال گذشته گفت: سال قبل ۳۲۰ میلیون دلار واردات به استان داشتیم که بیشتر آنها کالاهای واسطه‌ای و مواد اولیه بوده است.

                        نوحی با اشاره به ظرفیت منطقه ویژه پیام توضیح داد: این منطقه پتانسیل زیادی برای دور زدن تحریم‌ها دارد که باید از آن به درستی استفاده کرد.
                    </p>
                </div>
            </div>
        )
    }
}