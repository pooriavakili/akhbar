import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Mamnooe extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57734417.jpg')}
                         className='Ghalam'
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
                            right:400,
                            fontSize:20
                        }}
                    >
                        ممنوعیت صادرات چند قلم کالا و محصول
                    </p>
                    <p
                        className=' Mamnooee'
                        style={{
                            top:420,
                            position:"absolute",
                            right:200,
                            fontSize:22,
                            width:"70%",
                            fontFamily:"b zar",
                            direction:"rtl"

                        }}
                    >
                        طبق ابلاغ گمرک، از روز گذشته (دهم اردیبهشت) صادرات دام سبک (مولد)، شتر (مولد)، ضایعات، آخال و خرده‌ریز مواد پلاستیکی ممنوع شد و ممنوعیت صادرات تخم‌مرغ خوراکی و غیر خوراکی نیز لغو شده است.

                        به گزارش ایسنا، طبق درخواست وزیر جهاد کشاورزی از وزیر صنعت، معدن و تجارت، صادرات دام سبک (مولد)، شتر (مولد) به منظور برنامه‌ریزی برای مدیریت تولید و تنظیم بازار ممنوع شد که این ممنوعیت از سوی گمرک از روز گذشته (دهم اردیبهشت) به گمرکات مرزی ابلاغ شده است.

                        همچنین از این تاریخ ممنوعیت صادرات تخم‌مرغ خوراکی و غیر خوراکی نیز لغو شده است.

                        طبق اعلام گمرک، صادرات ضایعات، آخال و خرده‌ریز از مواد پلاستیکی نیز از دهم اردیبهشت امسال تا اطلاع ثانوی ممنوع اعلام شده است
                    </p>
                </div>
            </div>
        )
    }
}