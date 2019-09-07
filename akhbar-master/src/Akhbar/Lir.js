import React,{Component} from 'react'
import App from './../App'
import Header from "./../component/Header";
import {Typography} from "@material-ui/core";
export default class Lir extends Component{
    render(){
        const zindex = {
            mobileStepper: 1000,
            appBar: 1100,
            drawer: 1200,
            modal: 1300,
            snackbar: 1400,
            tooltip: 1500,
        };
        return(
            <div>
                <Header/>
                <div

                >
                    <img src={require('./../img/57877255.jpg')}
                         className='Rah'
                         style={{
                             position:"absolute",
                             bottom:250,
                             right:450
                         }}
                    />
                    <p
                        className='Rrahe'

                        style={{
                            bottom:470,
                            position:"absolute",
                            right:500,
                            fontSize:20,

                            direction:"rtl"
                        }}
                    >
                        لبخند«لیر» و چشمک استانبول به ایرانی‌ها

                    </p>
                    <Typography variant='h5' zindex={zindex}

                        style={{
                            bottom:-100,
                            position:"absolute",
                            right:200,
                            fontSize:20,
                            width:"70%",
                            fontFamily:"b zar",
                            direction:"rtl"
                        }}
                    >
                        با سقوط ارزش لیر ترکیه، پیش بینی می‌شود هزینه سفر ایرانی‌ها به این کشور کاهش یابد.

                        به گزارش ایسنا، روزنامه شهروند نوشت: سقوط ارزش لیر خبری است که این روزها در رسانه‌های جهان خبرسازی می‌کند. حالا نرخ برابری لیر به نسبت دلار به پایین‌ترین سطح در ٦ماه گذشته رسیده و از آن‌جا که ترکیه یکی از بزرگترین شرکای تجاری ایران است، پیش‌بینی می‌شود که نه‌تنها قیمت تورهای استانبول و آنتالیا برای ایرانی‌ها ارزان شود، بلکه رضا کامی، رئیس اتاق بازرگانی ایران و ترکیه به «شهروند» می‌گوید این موضوع می‌تواند به کاهش ١٠ تا ٢٠‌درصدی قیمت تمام شده کالاهای وارداتی ترکیه به ایران منجر شود.

                        در همین باره جالب است که بدانید گزارش اتاق بازرگانی نشان می‌دهد کالاهای چینی بازار ایران در حال جایگزینی با کالاهای ترکیه‌ای هستند. این در حالی است که حرمت الله رفیعی، رئیس انجمن دفاتر مسافرتی و گردشگری هم به «شهروند» می‌گوید پارسال حجم مسافران ایرانی ترکیه ریزش قابل توجهی داشته و همین مسأله هتلداران و مدیران صنعت گردشگری ترکیه را نگران کرده و احتمال این‌که آنها تخفیف‌هایی برای مسافران ایرانی قائل شوند، وجود دارد.

                    </Typography>
                    <Typography variant='h1' zindex={zindex}

                        style={{
                            bottom:-150,
                            position:"absolute",
                            right:500,
                            fontSize:20,

                            direction:"rtl"
                        }}
                    >
                        هزینه سفر به ترکیه کمتر می‌شود



                    </Typography>
                    <Typography variant='h6' zindex={zindex}

                        style={{
                            bottom:-500,
                            position:"absolute",
                            right:200,
                            width:"70%",
                            fontSize:20,
                            fontFamily:"b zar",
                            direction:"rtl"
                        }}
                    >
                        اما افت قیمت تنها به کالاهای ترک محدود نمی‌شود و رئیس انجمن دفاتر مسافرت‌های هوایی از احتمال کاهش قیمت هزینه تورهای ترکیه خبر می‌دهد. البته آن‌گونه که حرمت‌الله رفیعی توضیح می‌دهد: «این کاهش قیمت بیش از این‌که ناشی از کاهش ارزش لیر باشد به دلیل کاهش تعداد توریست‌های ایرانی است.»
                        به گفته او، تعداد توریست‌های ایرانی که پارسال به ترکیه سفر کردند نسبت به‌سال ٩٦ حدود ٧٠٠ هزار نفر کمتر شده و همین مسأله نگرانی شدیدی را در بین هتلداران و مسئولان دولتی این کشور ایجاد کرده است.

                        او با اشاره به این که در حال حاضر هزینه یک تور یک هفته‌ای به استانبول چیزی حدود ٨ میلیون تومان است، ادامه داد: «تعداد توریست‌های ایرانی در ترکیه طی‌سال ٩٦ چیزی حدود ۲.۵ میلیون نفر اعلام شده بود، در حالی که این رقم پارسال به حدود یک‌میلیون و ٨٠٠ هزار نفر کاهش پیدا کرده است. از آنجایی که بخش زیادی از درآمد این همسایه غربی ایران از محل گردشگری خارجی است نسبت به کاهش ورود ایرانی‌ها ابراز نگرانی کرده و خود به دنبال راهکاری برای کاهش هزینه‌های سفر به ترکیه و افزایش مسافرهای ایرانی هستند.»

                        رئیس انجمن دفاتر مسافرت‌های هوایی با بیان این‌که توریست‌های ایرانی معمولاً هزینه سفر به ترکیه را بر اساس دلار یا یورو پرداخت می‌کنند، ادامه داد: «کاهش ارزش لیر هنوز هیچ تغییری در قیمت هتل‌های ترکیه ایجاد نکرده و اگر هم کاهشی رخ دهد برای افزایش گردشگری این کشور است.»                    </Typography>
                    <Typography variant='h1' zindex={zindex}

                        style={{
                            bottom:-550,
                            position:"absolute",
                            right:500,
                            fontSize:20,

                            direction:"rtl"
                        }}
                    >
                        ایران از ترکیه چه کالاهایی می‌خرد؟



                    </Typography>
                    <Typography variant='h6' zindex={zindex}

                        style={{
                            bottom:-750,
                            position:"absolute",
                            right:200,
                            fontSize:20,
                            width:"70%",
                            fontFamily:"b zar",
                            direction:"rtl"
                        }}
                    >
                        ایران دهمین واردکننده بزرگ کالا از ترکیه است. نگاهی به فهرست گمرک نشان می‌دهد که پوشاک، طلا و جواهرات، محصولات چرمی، محصولات آشپزخانه و محصولات شیشه‌ای و سرامیکی جزو مهمترین کالاهایی هستند که ایرانی‌ها از ترکیه خریداری می‌کنند، اما بد نیست بدانید فهرست کالاهایی که ترکیه به ایران می‌فروشد بسیار عریض و طویل‌تر از این حرف‌هاست. ترکیه‌ای‌ها در حجم زیادی غذا از جمله حبوبات، کره، پنیر، قهوه و چای، زیتون، میوه، ادویه، بذر سبزیجات، نوشابه و آب میوه و حتی شکلات و آدامس به ایران می‌فروشند. به جز این محصولات آرایشی و بهداشتی، عطر، کفش، پتو، لوازم خواب و حتی زیپ لباس و سنجاق قفلی ازجمله محصولات دیگری هستند که از ترکیه به بازار ایران می‌آیند.                    </Typography>
                    <Typography variant='h1' zindex={zindex}

                        style={{
                            bottom:-850,
                            position:"absolute",
                            right:500,
                            fontSize:20,

                            direction:"rtl"
                        }}
                    >
                        کالاهای ترک جایگزین کالاهای چینی می‌شوند



                    </Typography>
                    <Typography variant='h6' zindex={zindex}

                        style={{
                            bottom:-1000,
                            position:"absolute",
                            right:200,
                            width:"70%",
                            fontSize:20,
                            fontFamily:"b zar",
                            direction:"rtl"
                        }}
                    >
                        گزارش‌های اتاق بازرگانی تهران نشان می‌دهد که ترکیه پس از چین و امارات متحده عربی با حجم صادراتی در حدود ٢میلیارد ٢٦١ میلیون دلار به ایران در سال گذشته هجری شمسی (١٣٩٧) در رتبه سوم بیشترین میزان واردات به این کشور قرار دارد. رئیس اتاق بازرگانی مشترک ایران و ترکیه می‌گوید که کاهش ارزش لیر می‌تواند واردات از ترکیه را در مقایسه با کشورهایی همچون چین به صرفه‌تر کند و حجم تجارت بین ایران و ترکیه نسبت به گذشته بیشتر شود.



                    </Typography>
                    <Typography variant='h1' zindex={zindex}

                        style={{
                            bottom:-1100,
                            position:"absolute",
                            right:500,
                            fontSize:20,

                            direction:"rtl"
                        }}
                    >
                        قیمت لباس‌های ترک در ایران کاهش می‌یابد؟




                    </Typography>
                    <Typography variant='h6' zindex={zindex}

                        style={{
                            bottom:-1500,
                            position:"absolute",
                            right:200,
                            fontSize:20,
                            width:"70%",
                            fontFamily:"b zar",
                            direction:"rtl"
                        }}
                    >
                        شاید یکی از کالاهای محبوب ترک در ایران را بتوان پوشاک تولیدی در این کشور دانست؛ اما نکته اینجاست که واردات رسمی پوشاک به ایران ممنوع بوده و تمامی لباس‌هایی که در بازار تحت عنوان ترک عرضه می‌شود، به صورت قاچاق وارد کشور می‌شود. رضا کامی، رئیس اتاق مشترک ایران و ترکیه معتقد است که قاچاقچیان لباس در ایران تمام تلاش خود را برای افزایش سود قاچاق می‌کنند و حتی اگر لیر ترکیه هم ٥٠ درصد کاهش پیدا کند، خبری از کاهش قیمت لباس‌هایی که به صورت غیر قانونی وارد کشور شده‌اند، نخواهد بود.

                        البته این روزها دیگر مثل گذشته لباس‌های خارجی پشت ویترین مغازه‌ها جای نمی‌گیرند و بسیاری ترجیح می‌دهند که به جای چرخیدن در خیابان‌های تهران پوشاک لاکچری خود را از مزون‌های پایتخت خریداری کنند. لباس‌هایی که بیشتر آنها از ترکیه وارد ایران می‌شود و اتفاقاً مشتریان زیادی هم دارد. حرمت‌الله رفیعی در این‌باره می‌گوید: «بیشتر مسافرهایی که به ترکیه سفر می‌کنند، عازم استانبول هستند. این در حالی است که این شهر نصف تهران هم جاذبه گردشگری نداشته و بیشتر ایرانی‌ها به قصد خرید به آنجا سفر می‌کنند. او معتقد است که کاهش ارزش لیر می‌تواند برای مزون‌دارهای پایتخت به صرفه باشد وحداقل مانع افزایش قیمت‌ها شود.
                    </Typography>
                    <Typography variant='h1' zindex={zindex}

                        style={{
                            bottom:-1600,
                            position:"absolute",
                            right:500,
                            fontSize:20,

                            direction:"rtl"
                        }}
                    >
                        تعرفه ترجیحی بازنگری می‌شود



                    </Typography>
                    <Typography variant='h6' zindex={zindex}

                        style={{
                            bottom:-2000,
                            position:"absolute",
                            right:200,
                            width:"70%",
                            fontSize:20,
                            fontFamily:"b zar",
                            direction:"rtl"
                        }}
                    >
                        تمایل تجار ایرانی نیز به ترکیه زیاد شده است. طبق آمار اتحادیه اتاق‌های بازرگانی ترکیه، سال گذشته ایرانیان ۱۰۱۹ شرکت در این کشور ثبت کردند که آنها را میان سه کشور نخست قرار می‌دهد. با وجود این فعالان اقتصادی ایران خواهان بازنگری لیست کالاهای مشمول تعرفه ترجیحی به این کشور هستند. رئیس اتاق بازرگانی مشترک ایران و ترکیه در این باره گفت: «بر اساس مذاکراتی که صورت گرفته قرار است که ٦٠ کالای دیگر به لیست کالاهای مشمول تعرفه ترجیحی اضافه شود.»

                        ترکیه در نیمه دوم سال گذشته میلادی، در دو دوره متوالی (سه ماهه) کاهش رشد اقتصادی را تجربه کرد و به طور رسمی وارد رکود اقتصادی شد. اقتصاد این کشور از سالی که گذشت رو به وخامت گذاشته؛ در سال ۲۰۱۸ لیر ترکیه حدود ۳۰ درصد از ارزش خود را از دست داد و اقتصاد این کشور در سه ماهه آخر سال پیش (۲۰۱۸) حدود ٣درصد کوچک‌تر شد. ترکیه در حوزه اقتصادی با چالش‌های متعددی روبه‌رو است؛ بنا بر اعلام منابع رسمی در ترکیه، در سه ماهه منتهی به فوریه امسال، بیکاری در این کشور به بالاترین نرخ در دهه گذشته رسیده است. بنابر گزارش مرکز آمار این کشور که کمتر از یک ماه پیش منتشر شد، در فاصله ماه‌های دسامبر ۲۰۱۸ تا فوریه ۲۰۱۹ نرخ بیکاری در ترکیه به ۱۴.۷ درصد رسید. تعداد بیکاران ثبت‌شده در ترکیه در این مدت حدود ۴‌میلیون و ۷۰۰ هزار نفر اعلام شده است.
                    </Typography>

                </div>
            </div>
        )
    }
}