import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Naft extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57360389.jpg')}
                         className='PALAYESH'
                         style={{
                             position:"absolute",
                            bottom:250,
                           right:450
                         }}
                    />
                    <p
                        className='PAALAYESH'
                        style={{
                            bottom:450,
                            position:"absolute",
                            right:350,
                            fontSize:22,

                            direction:"rtl"
                        }}
                    >
                        نگاهی به ظرفیت پالایش نفت و صادرات فرآورده‌ها در ایران

                    </p>
                    <p
                        className=' xxkz'
                        style={{
                            bottom:-100,
                            width:"70%",
                            position:"absolute",
                            right:200,
                            fontSize:22,
                            fontFamily:"b zar",
                            direction:"rtl"
                        }}
                    >
                        طبق آخرین آمار، میزان ظرفیت پالایش نفت ایران در ۹ ماه منتهی به پایان سال گذشته به یک میلیون و ۹۴۷ هزار بشکه در روز و صادرات فرآورده های اصلی به ۴۰ میلیون لیتر در روز رسیده است.

                        به گزارش ایسنا، ظرفیت پالایش نفت ایران در سال ۱۳۵۷، روزانه یک میلیون و ۱۷۵ هزار بشکه بوده که این رقم با افزایش ۱.۶ برابری در ۹ ماه منتهی به پایان سال ۱۳۹۷ به یک میلیون و ۹۴۷ هزار بشکه در روز رسیده است. در فاصله سال‌های ۱۳۵۷ تا ۱۳۵۹، روزانه ۸۵۵ هزار بشکه نفت خام در پالایشگاه‌های ایران پالایش می‌شد که این رقم با افزایش ۲.۲ برابری در فاصله سال‌های ۱۳۹۶ و ۱۳۹۷ (۹ ماه نخست سال گذشته) به یک میلیون و ۹۰۳ هزار بشکه در روز رسیده است. کمترین مقدار نفت خام پالایش شده در ایران نیز به سال‌های ۱۳۶۰ تا ۱۳۶۳ همزمان با اوج جنگ تحمیلی با ۶۰۴ هزار بشکه در روز باز می‌گردد.
                    </p>
                    <p
                        className='AAsly'
                        style={{
                            bottom:-200,
                            position:"absolute",
                            right:400,
                            fontSize:22,

                            direction:"rtl"
                        }}
                    >
                        رشد ۴۰ برابری صادرات فرآورده‌های اصلی در طول ۴۰ سال



                    </p>
                    <p
                        className=' Asly'
                        style={{
                            bottom:-400,
                            width:"70%",
                            position:"absolute",
                            right:200,
                            fontSize:22,
                            fontFamily:"b zar",
                            direction:"rtl"
                        }}
                    >
                        اما صادرات فرآورده‌های اصلی ایران در فاصله سال‌های ۱۳۵۷ تا ۱۳۶۸ صفر بوده است، اما این رقم با رشد صعودی با شیب بالا به روزانه ۴۶ میلیون لیتر در روز (در فاصله سال‌های ۱۳۷۶ تا ۱۳۷۹) افزایش یافته است. رقم صادرات فرآورده‌های اصلی در ایران در فاصله سال‌های ۱۳۹۶ تا ۱۳۹۷ (۹ ماهه سال) با رشد ۴۰ برابری به نسبت سال ۱۳۵۷ به روزانه ۴۰ میلیون لیتر رسیده است.
                    </p>
                    <p
                        className='Vardat'
                        style={{
                            bottom:-500,
                            position:"absolute",
                            right:500,
                            fontSize:22,

                            direction:"rtl"
                        }}
                    >
                        کاهش ۴.۶ برابری واردات فرآورده


                    </p>
                    <p
                        className=' VVardat'
                        style={{
                            bottom:-700,
                            width:"70%",
                            position:"absolute",
                            right:200,
                            fontFamily:"b zar",
                            direction:"rtl",
                            fontSize:22
                        }}
                    >
                        هم‌چنین در فاصله سال‌های ۱۳۶۴ تا ۱۳۶۷ به‌طور میانگین روزانه ۲۷.۲ میلیون لیتر فرآورده اصلی وارد ایران شده است که این مقدار با کاهش و افزایش‌های بعدی، سرانجام به روزانه ۵.۹ میلیون لیتر در فاصله سال‌های ۱۳۹۶ تا ۱۳۹۷ (۹ ماهه سال ۱۳۹۷) کاهش یافته است که کاهش ۴.۶ برابری را نشان می‌دهد.
                    </p>
                </div>
            </div>
        )
    }
}