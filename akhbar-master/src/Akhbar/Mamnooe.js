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
                        ممنوعیت صادرات چند قلم کالا و محصول
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