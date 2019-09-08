import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Zanjan extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57882796.jpg')}
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
                        صادرات 203 میلیون دلاری از شهرک‌های صنعتی استان
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
                        مدیرعامل شرکت شهرک‌های صنعتی استان زنجان گفت: پارسال 203 میلیون دلار کالا از شهرک‌های صنعتی استان صادر شده است.

                        ایرج احمدی در گفت‌وگو با ایسنا، اظهار کرد: میزان صادرات واحدهای صنعتی مستقر در شهرک‌های صنعتی استان زنجان در سال گذشته افزون بر 203 میلیون دلار بوده است.

                        این مسئول ادامه داد: 44 واحد در شهرک‌های صنعتی استان زنجان در سال گذشته تولیدات خود را صادر کرده‌اند که بیشترین میزان صادرات متعلق به شمش روی از شهرک تخصصی روی با ارزش 103 میلیون دلار بوده و بیشترین صادرات انجام شده از استان زنجان به مقصد کشور ترکیه بوده است.

                        وی افزود: بعد از محصول شمش روی، کاغذ تولیدی توسط شرکت راشا کاسپین زنجان و محصولات بهداشتی شرکت پارس‌حیات رتبه‌های بعدی را در زمینه صادرات به خود اختصاص داده است.

                        احمدی با اشاره به اهمیت حمایت از واحدهای صادرات‌محور، تصریح کرد: بر اساس فرمایشات رهبر معظم انقلاب، باید تولید را به سمتی سوق داد که کشور شاهد جهش صادراتی باشد تا به دنبال آن ثروت و ارزش‌افزوده تولید شود. باید توجه داشت که صادرات محصول باعث ایجاد فضای رقابت نامحدود می‌شود، بر همین اساس اگر تولیدات صادرات محور شود، کیفیت آن‌ها افزایش یافته و در نتیجه در داخل کشور نیز با اقبال مواجه خواهد شد.

                        مدیرعامل شرکت شهرک‌های صنعتی استان زنجان، خاطرنشان کرد: توسعه صادرات یکی از الزامات و محوری‌ترین مولفه‌ها در رشد و شکوفایی اقتصادی به‌شمار می‌رود، بنابراین تولیدکنندگان باید این نگرش را به عنوان یکی از استراتژی‌های اصلی خویش، در حوزه تولید به کار گیرند.

                    </p>
                </div>
            </div>
        )
    }
}