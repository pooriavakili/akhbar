import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Sazeman extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57881243.jpg')}
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
                        رشد 52 درصدی صادرات کالاهای غیرنفتی از گمرکات آذربایجان شرقی
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
                        رئیس سازمان صنعت معدن و تجارت آذربایجان شرقی گفت: طی سال گذشته، دو میلیون و 100 هزارتن کالای غیر نفتی به ارزش 1.8 میلیارد دلار از گمرکات استان به خارج از کشور صادر شد .

                        ‌‌‌‌‌‌‌به گزارش ایسنا، حسین نجاتی با اعلام این خبر اظهار کرد: با تلاش بی وقفه مسئولین در بهبود خدمات امور گمرکی و همراهی بخش خصوصی، طبق آمار صادرات سال گذشته، شاهد رشد ۵۲ درصدی ارزش صادرات کالاهای غیرنفتی از گمرکات استان نسبت به سال ۹۶ هستیم.

                        وی با ارائه گزارشی از وضعیت صادرات اقلام غیر نفتی از گمرکات کشور، اظهار کرد: در سال ۱۳۹۷ میزان صادرات کالاهای غیرنفتی استان از کل گمرکات کشور بالغ بر ۲.۶ میلیون تن و به ارزش ۲.۲ میلیارد دلار بود که در مقایسه با مدت مشابه سال گذشته، افزایش ۹ درصدی در وزن و ۷.۸ درصدی در ارزش دارد.

                        وی همچنین تعداد کشورهای مقصد صادراتی کالاهای استان در سال ۱۳۹۷ را در حدود ۱۰۰ کشور اعلام کرد.

                        نجاتی با اشاره به آمار پنج کشور نخست دریافت کننده کالاهای صادراتی استان گفت: عمده بازارهای هدف صادراتی استان عبارتند از ترکیه با ۶۰۰ میلیون دلار، عراق ۵۸۰ میلیون دلار، ارمنستان ۱۲۵ میلیون دلار، آذربایجان ۱۲۰ میلیون دلار و گرجستان ۱۲۰ میلیون دلار است.

                        رئیس سازمان صنعت معدن و تجارت استان خاطر نشان کرد: طبق برآوردهای اولیه و اقدامات لازم، زمینه رشد ۱۰ درصدی میزان صادرات استان در سال ۹۸ دور از توان واحدهای صنعتی و تجاری استان نیست.


                    </p>
                </div>
            </div>
        )
    }
}