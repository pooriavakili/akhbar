import React,{Component} from 'react'
import './Responsive.css'
import Header from "./../component/Header";
export default class Mast extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57371879.jpg')}
                         className='MMast'
                         style={{
                             position:"absolute",
                             top:200,
                            right:450
                         }}
                    />
                    <p
                        className='MMASTt '
                        style={{
                            top:100,
                            position:"absolute",
                            right:500,
                            fontSize:20
                        }}
                    >
                        ماست ایران در آمریکا
                    </p>
                    <p
                        className=' EDSW'
                        style={{
                            top:500,
                            width:"70%",
                            position:"absolute",
                            right:200,
                            fontSize:22,
                            fontFamily:"b zar",
                            direction:'rtl'
                        }}
                    >
                        ایران در سال گذشته بیش از ۹۵ هزار تن ماست صادر کرده است که در میان کشورهای مقصد نام آمریکا نیز به چشم می‌خورد.

                        به گزارش ایسنا، بر اساس آمار گمرک ایران از تجارت خارجی سال گذشته، در سال ۱۳۹۷ در مجموع بیش از ۹۵ هزار تن ماست از ایران صادر شده که ارزش آن بیش از ۹۰ میلیون دلار است.

                        ماست صادراتی ایران در سال گذشته به ۱۲ کشور دنیا ارسال شده که در میان این کشورها نام ایالات متحده آمریکا نیز به چشم می‌خورد؛ به طوریکه در این سال ایران حدود سه تن ماست به ارزش حدود ۲۶۰۰ دلار به آمریکا صادر کرده است.

                        به این ترتیب می‌توان گفت که متوسط قیمت هر کیلو ماست صادراتی ایران در سال گذشته حدود یک دلار بوده است.

                        این آمار همچنین نشان می‌دهد که بخش عمده صادرات ماست ایران به کشور عراق بوده و در این مدت ایران حدود ۸۸ هزار تن ماست به ارزش ۸۵ میلیون دلار به عراق صادر کرده است
                    </p>
                </div>
            </div>
        )
    }
}