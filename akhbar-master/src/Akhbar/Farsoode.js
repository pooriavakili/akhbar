import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Farsoode extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57820588.jpg')}
                         className='FFarsoode'
                         style={{
                             position:"absolute",
                             bottom:300,
                             right:450
                         }}
                    />
                    <p
                        className='Farsooode'
                        style={{
                           bottom:500,
                            position:"absolute",
                            right:400,
                            fontSize:20
                        }}
                    >
                        تجهیزات فرسوده؛ عامل کیفیت پایین برخی کالاها

                    </p>
                    <p
                        className=' RWEE'
                        style={{
                           bottom:-150,
                           width:"70%",
                            direction:"rtl",
                            position:"absolute",
                            right:200,
                            fontFamily:"b zar",
                            fontSize:20,

                        }}
                    >
                        عضو کنفدراسیون صنعت ایران گفت: برای توسعه صادرات باید صنایعی که مزیت رقابتی دارند شناسایی شوند.

                        حسین ساسانی در گفت‌وگو با ایسنا، با بیان اینکه برای گسترش صادرات باید محصولی تولید کنیم که نیاز و انتظارات مشتری‌های ما در کشورهای دیگر را تأمین کند، گفت: در شرایطی که امکان استفاده از تکنولوژی و تجهیزات روز دنیا فراهم نبوده، کیفیت محصولات پایین و قیمت تمام شده بالا باشد؛ نمی‌توان محصولات با کیفیت عالی تولید کرد و صادرات را افزایش داد.

                        وی اظهار کرد: توسعه صادرات تنها با حرف ممکن نیست و باید در عمل در صنایعی که مزیت رقابتی دارند، ساختارهای لازم ایجاد شود، اما ما هنوز نمی‌دانیم که کدام صنایع کشورمان مزیت رقابتی دارند.

                        عضو کنفدراسیون صنعت ایران با بیان اینکه برخی از مصرف‌کنندگان داخلی نیز در صورتی که توانایی مالی داشته باشند، ترجیح می‌دهند از محصولات خارجی استفاده کنند، تصریح کرد: در شرایطی که تجهیزات، ماشین‌آلات و فرایند تولید در کشور فرسوده است، نمی‌توان محصولات با کیفیت و قابل رقابت با سایر کشورها تولید کرد.

                        ساسانی در پایان اظهار کرد: در برخی صنایع به علت فرسوده بودن تجهیزات و تکنولوژی، محصولاتی تولید می‌شود که ضایعات زیاد و کیفیت پایین دارد اما قیمت تمام شده آن بالا است و در نتیجه شرایطی فراهم می‌شود که خریداران داخلی نیز ترجیح می‌دهند از برخی از محصولات داخلی استفاده نکنند.
                    </p>
                </div>
            </div>
        )
    }
}