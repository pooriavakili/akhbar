import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Jadid extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57773049.jpg')}
                         className='america'
                         style={{
                             position:"absolute",
                             bottom:250,
                             right:450
                         }}
                    />
                    <p
                        className='kjsakd'
                        style={{
                            bottom:500,
                            position:"absolute",
                            right:450,
                            fontSize:20
                        }}
                    >
                        جدیدترین آمار تجارت ایران و آمریکا
                    </p>
                    <p
                        className=' bjj'
                        style={{
                            bottom:-250,
                            position:"absolute",
                            right:200,
                            width:"70%",
                            fontSize:22,
                            fontFamily:"b zar",
                            direction:"rtl"
                        }}
                    >
                        آمار گمرک ایران حاکی از کاهش ۳۸ درصدی ارزش تجارت ایران و آمریکا در سال گذشته نسبت به سال ۱۳۹۶ است.

                        به گزارش ایسنا، بر اساس آمار گمرک ایران از تجارت خارجی ۱۲ ماهه سال گذشته، در این مدت در مجموع مبادلات تجاری ایران و آمریکا به ۱۸۷ میلیون دلار رسیده که نسبت به سال پیش از آن ۳۸ درصد کاهش داشته است.

                        ایران در سال گذشته ۱۵۰۲ تن کالا به آمریکا صادر کرده که ارزش صادرات غیرنفتی ایران به این کشور در مجموع بیش از ۴۵ میلیون دلار بوده است. این در حالی است که صادرات ایران در سال ۱۳۹۶ به آمریکا ۳۵۵۰ تن به ارزش ۱۳۲ میلیون دلار بوده است که نشان از کاهش حدود ۹۰ میلیون دلار صادرات ایران به آمریکا داشته است.

                        از سوی دیگر در سال گذشته، ۶۹ هزار تن کالا از آمریکا وارد ایران شده که ارزش آن به بیش از ۱۴۲ میلیون دلار می‌رسد.

                        واردات ایران از آمریکا در سال گذشته نسبت به سال پیش از آن از لحاظ وزنی ۸۵ درصد افزایش داشته، اما ارزش واردات از آمریکا در سال گذشته ۱۶ درصد کاهش یافته است؛ به‌طوری‌که در سال ۱۳۹۶ حدود ۳۷ هزار تن کالا به ارزش حدود ۱۷۰ میلیون دلار از آمریکا وارد شده بود.

                        به این ترتیب مجموع تجارت ایران و آمریکا در سال گذشته حدود ۱۸۷ میلیون دلار بوده که نسبت به حجم ۳۰۱ میلیون دلاری تجارت این دو کشور در سال پیش از آن، ۳۸ درصد کاهش یافته است.

                        بر اساس آمار گمرک ایران، اقلام وارداتی ایران از آمریکا عمدتاً مربوط به مواد غذایی بوده که در این میان کنجاله سویا و ذرت دامی که به عنوان خوراک دام استفاده می‌شود، از مهم‌ترین کالاهای وارداتی ایران از آمریکا بوده است.

                        در مقابل، صادرات ایران به آمریکا نیز بیشتر مربوط به مواد غذایی است؛ به‌طوری‌که لبنیات، میوه خشک، شیرینی، زعفران و زرشک جزو کالاهای مهم صادراتی ایران به آمریکا در سال ۱۳۹۷ به شمار می‌روند.


                    </p>
                </div>
            </div>
        )
    }
}