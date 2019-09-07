import  React,{Component} from 'react';
import Header from "./component/Header";
import {Link} from 'react-router-dom'
export default class Chaharom extends  Component{
    render(){
        return(
            <div>
                <Header/>

                <div>
                    <Link to='/pache'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}
                    >
                        <img src={require('./img/57301322.jpg')}
                             className='Kale'
                             style={{
                                 position:"absolute",
                                 top:100,
                                 right:10
                             }}
                        />
                        <p
                            className='Dam'
                            style={{
                                position:"absolute",
                                top:100,
                                right:310,
                                fontSize:20,

                            }}
                        >
                            کاهش قیمت کله پاچه به دنبال واردات دام زنده
                        </p>
                        <p
                            className='Dash'
                            style={{
                                position:"absolute",
                                top:150,
                                right:310,
                                width:"53%",
                                fontSize:20,

                            }}
                        >
                            اسفندماه سال گذشته دام زنده برای کنترل و کاهش قیمت در بازار گوشت به کشور وارد شد که به گفته رئیس اتحادیه طباخان، کشتار دام زنده در کشور و عرضه آلایش آن همچون کله و پاچه، کاهش قیمت این محصول را به همراه داشته است
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='/khorasan'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}
                    >
                        <img src={require('./img/57794094.jpg')}
                             className='Kar'
                             style={{
                                 position:"absolute",
                                 top:400,
                                 right:10
                             }}

                        />
                        <p
                            className='Pay'
                            style={{

                                position:"absolute",
                                top:400,
                                right:300,
                                fontSize:20,



                            }}
                        >
                            پای صادرات خراسان جنوبی از تعطیلی بازارها می لنگد
                        </p>
                        <p
                            className='PPay'
                            style={{

                                position:"absolute",
                                top:450,
                                width:"45%",
                                right:310,
                                fontSize:20,



                            }}
                        >
                            رئیس سازمان صنعت، معدن و تجارت خراسان جنوبی از دلایل عمده کاهش صادرات را ممنوعیت به وجود آمده در صادرات، مشکلات ناشی از برگشت ارز و تعطیلی سایر بازارچه‌های مرزی استان دانست


                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='/harf'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}
                    >
                        <img src={require('./img/57759642.jpg')}
                             className='Arz'
                             style={{
                                 position:"absolute",
                                 top:700,
                                 right:10
                             }}
                        />
                        <p
                            className='HAr'
                            style={{
                                position:"absolute",
                                top:700,
                                right:310,
                                fontSize:20,

                            }}
                        >
                            حرف های ارزی پس گرفته شد
                        </p>
                        <p
                            className='An'
                            style={{
                                position:"absolute",
                                width:"50%",
                                top:750,
                                right:310,
                                fontSize:20,

                            }}
                        >
                            به دلیل حساسیت بازار پولی و مالی در کشورهای مختلف سعی می‌شود که از سوی مسوولان بازار پولی و مالی اظهارات شتاب‌زده و احساسی مطرح نشود تا در زمان نیاز بتوان با صحبت‌های لازم بازار را کنترل کرد؛ موضوعی که به نظر می‌رسد آنچنان در ایران رعایت نمی‌شود
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='/barabar'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}
                    >
                        <img src={require('./img/57779724.jpg')}
                             className='Farangy'
                             style={{
                                 position:"absolute",
                                 top:1000,
                                 right:10
                             }}
                        />
                        <p
                            className='Dal'
                            style={{
                                position:"absolute",
                                top:1000,
                                right:320,
                                fontSize:20,

                            }}
                        >
                            دلیل افزایش دوبرابری قیمت گوجه فرنگی
                        </p>
                        <p
                            className='Do'
                            style={{
                                position:"absolute",
                                top:1050,
                                width:"20%",
                                right:320,
                                fontSize:20,

                            }}
                        >
                            گوجه فرنگی از حدود دو روز پیش رشد قیمت دو برابری را تجربه کرده است
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='/gerany'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}
                    >
                        <img src={require('./img/57472668.jpg')}
                             className='goje'
                             style={{
                                 position:"absolute",
                                 top:1300,
                                 right:10
                             }}

                        />
                        <p
                            className='In'
                            style={{
                                position:"absolute",
                                top:1300,
                                right:310,
                                fontSize:20,

                            }}
                        >
                            این بار نوبت گوجه فرنگی است
                        </p>
                        <p
                            className='Hash'
                            style={{
                                position:"absolute",
                                top:1350,
                                width:"45%",
                                right:310,
                                fontSize:20,

                            }}
                        >
                            با توجه به کاهش عرضه و افزایش قیمت گوجه‌فرنگی در میادین میوه و تره‌بار، بررسی‌ها از سطح شهر نشان می‌دهد که قیمت گوجه‌فرنگی درجه یک و دستچین به محدوده ۸ تا ۱۰ هزار تومان رسیده است
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='/bazar'
                          style={{
                              color:"black",
                              cursor:"ponter"
                          }}
                    >
                        <img src={require('./img/57835024.jpg')}
                             className='Charkh'
                             style={{
                                 position:"absolute",
                                 top:1600,
                                 right:10
                             }}

                        />
                        <p
                            className='Sooriye'
                            style={{

                                position:"absolute",
                                top:1600,
                                right:310,
                                fontSize:20,



                            }}
                        >
                            دسترسی به بازار سوریه از اولویت های صادرات کرمانشاه است
                        </p>
                        <p
                            className='BB'
                            style={{

                                position:"absolute",
                                top:1650,
                                width:"30%",
                                right:310,
                                fontSize:20,



                            }}
                        >
                            معاون هماهنگی امور اقتصادی و توسعه منابع استانداری کرمانشاه گفت: دستیابی به بازار سوریه یکی از اولویت‌های صادرات استان است
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='/tosee'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}
                    >
                        <img src={require('./img/57820588.jpg')}
                             className='Ghomrok'
                             style={{
                                 position:"absolute",
                                 top:1900,
                                 right:10
                             }}
                        />
                        <p
                            className='Tolid'
                            style={{
                                position: "absolute",
                                top: 1900,
                                right:310,
                                fontSize: 20,

                            }}
                        >
                            برنامه ۱۵۰واحد تولید ایرانی برای توسعه مشارکت اقتصادی در عراق
                        </p>
                        <p
                            className='Sal'
                            style={{

                                position:"absolute",
                                width:"26%",
                                top:1950,
                                right:300,
                                fontSize:20,
                                direction:"rtl"


                            }}
                        >
                            رایزن بازرگانی ایران در عراق از برگزاری ۵ رویداد ترویجی برای توسعه ظرفیت‌های مزیت‌دار تولیدی ایران در عراق طی ۳ ماه اول سال جاری خبر داد
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='/sanaye'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}
                    >
                        <img src={require('./img/57783267.jpg')}
                             className='KKKK'
                             style={{
                                 position: "absolute",
                                 top: 2200,

                                 right:10
                             }}

                        />
                        <p
                            className='AFZA'
                            style={{
                                position: "absolute",
                                top:2200,
                                right:310,
                                fontSize: 20,

                            }}
                        >

                            افزایش 2 برابری صادرات صنایع دستی کرمانشاه
                        </p>
                        <p
                            className='MAA'
                            style={{
                                position: "absolute",
                                top:2250,
                                right:300,
                                fontSize: 20,
                                width:"40%",

                            }}
                        >
                            معاون صنایع دستی اداره کل میراث فرهنگی، صنایع دستی و گردشگری استان از افزایش دو برابری صادرات سال گذشته صنایع دستی کرمانشاه به نسبت سال ماقبل آن خبر داد
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='/mohlat'

                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}
                    >
                        <img src={require('./img/57764395.jpg')}
                             className='Dolar'
                             style={{
                                 position:"absolute",
                                 top:2500,
                                 right:10
                             }}
                        />
                        <p
                            className='Moh'
                            style={{

                                position:"absolute",
                                top:2500,
                                right:310,
                                fontSize:20,



                            }}
                        >
                            مهلت استفاده از بسته ارزی برای تجار تمدید شد
                        </p>
                        <p
                            className='MO'
                            style={{

                                position:"absolute",
                                top:2550,
                                right:310,
                                width:"25%",
                                fontSize:20,



                            }}
                        >
                            مهلت استفاده از بسته ارزی تشویقی تجار تا پایان شهریور امسال تمدید شد
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='/nerkh'
                          style={{
                              cursor:"pointer",
                              color:"black"
                          }}
                    >
                        <img src={require('./img/57331418.jpg')}
                             className='krovat'

                             style={{
                                 position:"absolute",
                                 top:2800,
                                 right:10
                             }}

                        />
                        <p
                            className='javab'
                            style={{
                                position:"absolute",
                                top:2800,
                                right:320,
                                fontSize:20,


                            }}
                        >بازار ارز با نرخ ارز بهبود می یابد/سامانه ها جواب گو نیستند</p>
                        <p className='J'
                           style={{
                               width:"40%",
                               position:"absolute",
                               top:2850,
                               right:300,
                               fontSize:20,



                           }}>
                            یک عضو اتاق بازرگانی تهران معتقد است همان‌طور که در ماه‌های گذشته فعال کردن سامانه‌های ارزی نتوانستند برای بازار ایران راه‌حل قابل قبولی ارائه کنند، تداوم استفاده از آنها یا طراحی شیوه‌های جدید براین اساس نیز جوابگو نخواهد بود
                        </p>
                    </Link>
                    <div>
                        <Link to='/azad'
                              style={{
                                  color:"black",
                                  cursor:"pointer"
                              }}
                        >
                            <img src={require('./img/57756045.jpg')}
                                 className='Anbar'
                                 style={{
                                     position:"absolute",
                                     top:3100,
                                     right:10
                                 }}
                            />
                            <p
                                className='dakel'
                                style={{
                                    position:"absolute",

                                    top:3100,
                                    right:310,
                                    fontSize:18,


                                }}
                            >
                                موافقت بانک مرکزی با واردات کالا توسط صنعتگران به جای انتقال ارز از داخل
                            </p>
                            <p className='Ta'
                               style={{
                                   position:"absolute",
                                   top:3150,
                                   width:"36%",
                                   right:300,
                                   fontSize:20,
                                   direction:"rtl"
                               }}
                            >
                                با تعامل صورت گرفته با بانک مرکزی و گمرک، رویه واردات در مقابل صادرات برای مواد اولیه و واسطه‌ای بخش تولید به جای انتقال ارز به داخل کشور عملیاتی شد
                            </p>
                        </Link>
                    </div>
                </div>
                <div>
                    <Link to='/gomrok'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}
                    >
                        <img src={require('./img/57591446.jpg')}
                             className='Khorma'
                             style={{
                                 position:"absolute",
                                 top:3400,
                                 right:10
                             }}
                        />
                        <p
                            className='Gozashte'
                            style={{

                                position:"absolute",
                                top:3400,
                                right:310,
                                fontSize:20,
                                width:"25%",
                                direction:"rtl",



                            }}
                        >
                            صادرات ۳۰۰میلیون دلاری خرما در سال گذشته
                        </p>
                        <p
                            className='KH'
                            style={{

                                position:"absolute",
                                width:"25%",
                                top:3450,
                                right:320,
                                fontSize:20,



                            }}
                        >
                            آمار گمرک نشان می‌دهد که در ۱۱ ماهه سال گذشته ۳۰۷ میلیون دلار خرما از ایران صادر شده است
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='/mast'
                          style={{
                              cursor:"pointer",
                              color:"black"
                          }}
                    >
                        <img src={require('./img/57371879.jpg')}
                             className='America'
                             style={{
                                 position:"absolute",
                                 top:3700,
                                 right:10
                             }}
                        />
                        <p className='Mastt'
                           style={{
                               position:"absolute",
                               top:3700,
                               right:300,
                               fontSize:25
                           }}

                        >ماست ایران در آمریکا</p>
                        <p className='Niz'
                           style={{
                               width:"28%",
                               position:"absolute",
                               top:3750,
                               right:310,
                               fontSize:20,
                               direction:"rtl"

                           }}
                        >
                            ایران در سال گذشته بیش از ۹۵ هزار تن ماست صادر کرده است که در میان کشورهای مقصد نام آمریکا نیز به چشم می‌خورد
                        </p>
                    </Link>
                </div>
                <div


                >
                    <Link to='/gosayesh'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }
                          }
                    >
                        <img src={require('./img/57847159.jpg')} className='kashty'
                             style={{
                                 position: 'absolute',
                                 right:10,
                                 top:4000
                             }}
                        />

                        <p className='Go ' style={{
                            position:"absolute",
                            top:4000,
                            right:310,

                            fontSize:25
                        }}>گشایش ارزی در راه است؟</p>
                        <p className='Arze'

                           style={{
                               width:"30%",
                               position:"absolute",
                               top:4050,
                               right:310,


                           }}
                        >در حالی که سامانه نیما سه روز دیگر باید شمع یک سالگی خود را فوت کند هنوز اختلافات بخش خصوصی و بانک مرکزی بر سر شیوه عملکرد این سامانه حل نشده است</p>
                    </Link>
                </div>
                <div>
                    <Link to='/godrat'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}
                    >
                        <img src={require('./img/57644220.jpg')}
                             className='Ghodrat'

                             style={{
                                 position:"absolute",
                                 top:4300,
                                 right:10
                             }}
                        />

                        <p className='ASAR'


                           style={{
                               position:"absolute",

                               top:4300,
                               right:310,
                               fontSize:20,

                           }}
                        >آثار کاهش قدرت خرید در سال های بعد مشخص می شود</p>

                        <p
                            className='Baksh'
                            style={{
                                position:"absolute",
                                width:"25%",

                                top:4350,
                                right:310,
                                direction:"rtl"

                            }}
                        >
                            عضو هیئت مدیره کنفدراسیون صنعت ایران کمبود نقدینگی واحدهای تولیدی، افزایش قیمت مواد اولیه و موانع صادرات را از جمله مهمترین دلایل رشد منفی ۷.۹ درصدی بخش صنعت عنوان کرد
                        </p>
                    </Link>

                </div>
                <div

                >
                    <Link to='/khorma'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}


                    >
                        <img src={require('./img/57302946.jpg')}
                             className='kor'
                             style={{
                                 position:"absolute",
                                 top:4600,
                                 right:10
                             }}
                        />
                        <p
                            className='Kamboud'
                            style={{
                                position:"absolute",
                                top:4600,
                                right:310,
                                fontSize:20,

                            }}
                        >
                            کمبودی در بازار خرما نیست/ دلایل گرانی چیست؟

                        </p>
                        <p
                            className='RTY'
                            style={{
                                position:"absolute",
                                width:"50%",
                                top:4650,
                                right:310,
                                fontSize:20,
                                direction:"rtl"

                            }}
                        >
                            قیمت خرما در برخی از انواع خود رشد قابل توجهی کرده که نایب رئیس انجمن خرمای ایران معتقد است این رشد قیمت به دلیل رشد هزینه خالص تولید خرما نیست و هزینه‌های جانبی تولید، توزیع، بسته‌بندی و گران‌فروشی برخی فروشگاه‌ها در این زمینه دخیل است
                        </p>
                    </Link>

                </div>
                <div

                >
                    <Link to='/negah'
                          style={{
                              color:"black",
                              cursor:"pointer"

                          }
                          }
                    >
                        <img
                            className='Khomar  '
                            src={require('./img/57464404.jpg')}
                            style={{
                                position: 'absolute',

                                right:10,
                                top:4900
                            }}



                        />
                        <p className='Gar'

                           style={{

                               top:4900,
                               position:"absolute",
                               right:300,
                               fontSize:25,

                               direction:"ltr"
                           }}
                        >گرمابی: نگاه به صادرات استراتژیک است</p>
                        <p className='Nama'

                           style={{
                               position:"absolute",
                               top:4950,
                               right:300,
                               direction:"rtl",
                               fontSize:17,
                               width:"40%",


                           }


                           }>
                            نماینده مردم نیشابور در مجلس گفت:نگاه به صادرات استراژیک است.
                            آمریکا می تواند فروش نفت را کاهش دهد اما محصولات کشاورزی و
                            صنایع کوچک و متوسط ماکمک کننده خواهد بود.اگر روی ۱۵ کشور همسایه
                            در این زمینه متمرکز شویم،به تولید کمک کرده و صادرات را محور اصلی قرار می دهیم،
                            البته باید در داخل نیازها براورده شودوبعد صادر شود
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='/uroupa'
                          style={{
                              cursor:'pointer',
                              color:'black'
                          }}


                    >
                        <img src={require('./img/57817789.jpg')}
                             className='cama'
                             style={{
                                 position:"absolute",
                                 top:5200,
                                 right:10
                             }}
                        />
                        <p
                            className='Hozoor'
                            style={{
                                position:"absolute",
                                top:5200,
                                right:310,
                                fontSize:20,

                            }}
                        >
                            نگاهی به جدیدترین وضعیت حضور صادراتی ایران در اروپا

                        </p>
                        <p
                            className='TY'
                            style={{
                                position:"absolute",
                                top:5250,
                                right:310,
                                fontSize:20,
                                width:"50%",
                                direction:"rtl"

                            }}
                        >
                            جدیدترین بررسی‌های صورت گرفته از وضعیت صادرات کالاهای ایرانی به کشورهای اروپایی نشان می‌دهد که در سال‌های گذشته برخی از رقبای منطقه‌ای توانسته‌اند جای ایران را در این اتحادیه پر کنند
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='/deh'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}


                    >
                        <img src={require('./img/57734108.jpg')}
                             className='deh'
                             style={{
                                 position:"absolute",
                                 top:5500,
                                 right:10
                             }}
                             height='190'
                             width='280'
                        />
                        <p
                            className='Marz'
                            style={{
                                position:"absolute",
                                top:5500,
                                right:320,
                                fontSize:20,

                            }}
                        >
                            نماینده دهلران: از مرز دهلران می‌توان بیش از چندین میلیارد دلار صادرات داشت

                        </p>
                        <p
                            className='HH'
                            style={{
                                position:"absolute",
                                width:"45%",
                                top:5550,
                                right:300,
                                fontSize:20,
                                direction:"rtl"

                            }}
                        >
                            نماینده مردم دهلران در مجلس گفت: از مرز دهلران می‌توان به اندازه تمام کشورهای اروپایی و بیش از چندین میلیارد دلار صادرات داشت
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='afzayesh'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}
                    >
                        <img src={require('./img/1408517374525_davoud ghahrdar-6-th2.jpg')}
                             className='zen'
                             style={{
                                 position:"absolute",
                                 top:5800,
                                 right:10
                             }}

                        />
                        <p
                            className='Hazine'
                            style={{
                                position:"absolute",
                                top:5800,
                                right:310,
                                fontSize:20,

                            }}
                        >
                            افزایش هزینه های زندگی
                        </p>
                        <p
                            className='ER'
                            style={{
                                position:"absolute",
                                top:5850,
                                right:300,
                                fontSize:20,
                                width:"30%",
                                direction:"rtl"

                            }}
                        >
                            نوسانات ارزی سال گذشته که همچنان آثار آن در سال جاری مشهود است هزینه خانوار که با کاهش قدرت خرید همراه بوده را بیش از گذشته افزایش داده است و به طور میانگین هزینه خانوار در فروردین ماه سال جاری نسبت به مدت مشابه سال گذشته با رشد ۵۰ درصدی روبرو شده است
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='./tashrih'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }
                          }
                    >
                        <img src={require('./img/1447835477245_81708650-70076559-th2.jpg')}
                             className='akas'
                             style={{
                                 position:"absolute",
                                 top:6100,
                                 right:10
                             }}
                        />
                        <p
                            className='fanBazar'
                            style={{
                                position:"absolute",
                                top:6100,
                                right:310,
                                fontSize:20,

                            }}
                        >
                            تشریح اولویت های فن بازارملی برای توسعه صادرات
                        </p>
                        <p
                            className='ERR'
                            style={{
                                position:"absolute",
                                top:6150,
                                width:"30%",
                                right:300,
                                fontSize:20,
                                direction:"rtl"

                            }}
                        >
                            رئیس فن بازار ملی ایران با بیان این‌که ضعف بازاریابی و فروش مشکل عمده شرکت‌های فناوری است، به تشریح اولویت‌های فن‌بازار ملی برای توسعه صادرات پرداخت
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to='pave'
                          style={{
                              color:"black",
                              cursor:"pointer"
                          }}
                    >
                        <img src={require('./img/57540698.jpg')}
                             className='pave'
                             style={{
                                 position:"absolute",
                                 top:6400,
                                 right:10
                             }}
                        />

                        <p
                            className='Kool'
                            style={{
                                position:"absolute",
                                top:6400,

                                right:310,
                                fontSize:19,

                            }}
                        >
                            نماینده پاوه:اجازه ندهیدکالای کشاورزی وصنعتی ایران به نام دیگر کشورها عرضه شود
                        </p>
                        <p
                            className='BBB'
                            style={{
                                position:"absolute",
                                top:6450,
                                width:"40%",
                                right:310,
                                fontSize:20,
                                direction:"rtl"

                            }}
                        >
                            نماینده مردم پاوه در مجلس خطاب به وزیر کشور خواستار بازگشایی تبادلات مرزی کولبران شد و افزود: چرا اجازه می‌دهید سایر کشورها جای ما را در مبادلات مرزی بگیرند و کالاهای کشاورزی و صنعتی ایرانی را به نام خودشان به بازارهای جهانی عرضه کنند؟
                        </p>
                    </Link>
                </div>

                <div
                    style={{
                        position:"absolute",
                        top:6600,
                        right:700

                    }}
                    className='YAK'
                >
                    <Link to='/app'
                          style={{
                              color:"black",
                              cursor:"pointer",
                              textDecoration:"none",
                          }}
                    >
                        <p
                            style={{
                                fontSize:40,
                                color:"black",



                            }}
                        >1</p>
                    </Link>
                </div>
                <div
                    className="DOVOMM"
                    style={{
                        position:"absolute",
                        top:6600,
                        right:650

                    }}
                >
                    <Link to='/next'
                          style={{
                              color:"black",
                              cursor:"pointer",
                              textDecoration:"none",


                          }}
                    >
                        <p

                            style={{
                                fontSize:40,
                                color:"black"
                            }}
                        >2</p>


                    </Link>
                </div>
                <div
                    style={{
                        position:"absolute",
                        top:6600,
                        right:600

                    }}
                    className='SEEE'
                >
                    <Link to='/sevom'
                          style={{
                              color:"black",
                              cursor:"pointer",
                              textDecoration:"none",

                          }}
                    >
                        <p
                            style={{
                                fontSize:40,
                                color:"black",

                                cursor:"pointer",

                            }}
                        >3</p>
                    </Link>
                </div>
            </div>
        )
    }
}
