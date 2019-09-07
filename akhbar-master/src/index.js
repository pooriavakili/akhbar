import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';

import About from "./component/About";

import Poreh from './Akhbar/Poreh'

import Header from './component/Header'
import Next from './Next'
import Arz from './Akhbar/Arz'
import Dollar from "./Akhbar/Dollar";
import Pave from "./Akhbar/Pave";
import Afzayesh from "./Akhbar/Afzayesh";
import Tashrih from './Akhbar/Tashrih'
import Deh from "./Akhbar/Deh";
import Uroupa from "./Akhbar/Uroupa";
import Khorma from "./Akhbar/Khorma";
import Negah from './Akhbar/Negah'
import Gosayesh from "./Akhbar/Gosayesh";
import Godrat from './Akhbar/Ghodrat'
import Solulez from "./Akhbar/Solulez";
import Mast from './Akhbar/Mast'
import Azad from "./Akhbar/Azad";
import Nerkh from "./Akhbar/Nerkh";
import Gheimat from "./Akhbar/Gheimat";
import Tosee from "./Akhbar/Tosee";
import Aragh from "./Akhbar/Aragh";
import Gomrok from './Akhbar/Gomrok'
import Bazar from "./Akhbar/Bazar";
import Khorasan from "./Akhbar/Khorasan";
import Mohlat from "./Akhbar/Mohlat";
import Kala from "./Akhbar/Kala";
import Pache from "./Akhbar/Pache";
import Gherany from "./Akhbar/Gherany";
import Harf from "./Akhbar/Harf";
import Barabar from "./Akhbar/Barabar";
import Chin from "./Akhbar/Chin";
import Naft from "./Akhbar/Naft";
import Goosht from "./Akhbar/Goosht";
import Vardat from "./Akhbar/Vardat";
import Sofreh from "./Akhbar/Sofreh";
import Ronagh from "./Akhbar/Ronagh";
import MOAEF from "./Akhbar/MOAEF";
import Sanaye from "./Akhbar/Sanaye";
import Anvae from "./Akhbar/Anvae";
import Siasat from "./Akhbar/Siasat";
import Zohoor from "./Akhbar/Zohoor";
import Sabegh from "./Akhbar/Sabegh";
import Farsoode from "./Akhbar/Farsoode";
import Variz from "./Akhbar/Variz";
import Saderat from "./Akhbar/Saderat";
import Olaviat from "./Akhbar/Olaviat";
import Moshkelat from "./Akhbar/Moshkelat";
import Nima from "./Akhbar/Nima";
import Mamnooe from "./Akhbar/Mamnooe";
import Taraz from "./Akhbar/Taraz";
import Maskan from "./Akhbar/Maskan";
import Rabete from "./Akhbar/Rabete";
import Jadid from "./Akhbar/Jadid";
import Bargarar from "./Akhbar/Bargarar";
import Ahan from "./Akhbar/Ahan";
import Masul from "./Akhbar/Masul";
import Jologiry from "./Akhbar/Jologiry";
import Download from "./component/Download";
import Farvardin from "./Akhbar/Farvardin";
import Eslah from "./Akhbar/Eslah";



import Kordestan from "./Akhbar/Kordestan";
import Kahesh from "./Akhbar/Kahesh";
import Daramad from "./Akhbar/Daramad";
import Pay from "./Akhbar/Pay";
import Bast from "./Akhbar/Bast";
import Avazrez from "./Akhbar/Daryaft";
import Azarbayejan from "./Akhbar/Azarbayejan";
import Moz from "./Akhbar/Moz";
import Sevom from "./Sevom";
import Zarfiat from "./Akhbar/Zarfiat";
import Elam from "./Akhbar/Elam";
import Angour from "./Akhbar/Angour";
import Ajib from "./Akhbar/Ajib";
import Kham from "./Akhbar/Kham";
import Barnagsht from "./Akhbar/Barnagsht";
import Lir from "./Akhbar/Lir";
import Sood from "./Akhbar/Sood";
import Vaghey from "./Akhbar/Vaghey";
import Zanan from "./Akhbar/Zanan";
import Rizesh from "./Akhbar/Rizesh";
import Sharayet from "./Akhbar/Sharayet";
import Khoshmaze from "./Akhbar/Khoshmaze";
import Bazarghany from "./Akhbar/Bazarghany";
import Tashil from "./Akhbar/Tashil";
import ArzSaderaty from "./Akhbar/ArzSaderaty";
import Sazeman from "./Akhbar/Sazeman";
import Govat from "./Akhbar/Govat";
import Markazy from "./Akhbar/Markazy";
import Pyaz from "./Akhbar/Pyaz";
import Roshed from "./Akhbar/Roshed";
import Farsh from "./Akhbar/Farsh";
import Morgh from "./Akhbar/Morgh";
import Sangin from "./Akhbar/Sangin";
import Moshkel from "./Akhbar/Moshkel";
import Chaharom from "./Chaharom";
import Rayane from "./Akhbar/Rayane";
import Daryaft from './Akhbar/Daryaft'
import Bohran from "./Akhbar/Bohran";
import Nano from "./Akhbar/Nano";
import Behdasht from "./Akhbar/Behdasht";
import Mashrut from "./Akhbar/Mashrut";
import Eco from "./Akhbar/Eco";
import Boodje from "./Akhbar/Boodje";
import Ezafe from "./Akhbar/Ezafe";
import Mansooz from "./Akhbar/Mansooz";
import KartBazargany from "./Akhbar/KartBazargany";
import Tarefe from "./Akhbar/Tarefe";
import Had from "./Akhbar/Had";
import Zanjan from "./Akhbar/Zanjan";
import Bastar from "./Akhbar/Bastar";
import Tojar from "./Akhbar/Tojar";
import Borouz from "./Akhbar/Borouz";
import Ebteda from "./Akhbar/Ebteda";
import Mozakere from "./Akhbar/Mozakere";
import Mahal from "./Akhbar/Mahal";
import Moarefy from "./Akhbar/Moarefy";
import Araby from "./Akhbar/Araby";
import Oman from "./Akhbar/Oman";

const routing=(


    <Router>
        <Route exact path='/' render={(props)=><App {...props} app={props.App}/>}/>
        <Route exact={true} path='/app' render={(props)=><App {...props} app={props.App}/>}/>
        <Route exact={true} path='/about' render={(props)=><About {...props} about={props.About}/>}/>


        <Route exact={true} path='/header' render={(props)=><Header {...props} header={props.Header}/>}/>
        <Route exact={true} path='/next' render={(props)=><Next {...props} next={props.Next}/>} />
        <Route exact={true} path='/arz' render={(props)=><Arz {...props} arz={props.Arz}/>}/>
        <Route exact={true} path='/dolar' render={(props)=><Dollar {...props} dollar={props.Dollar}/>}/>
        <Route exact={true} path='/pave' render={(props)=><Pave {...props} pave={props.Pave}/>}/>
        <Route exact={true} path='/afzayesh' render={(props)=><Afzayesh {...props} afzayesh={props.Afzayesh}/>}/>
        <Route exact={true} path='/tashrih' render={(props)=><Tashrih {...props} tashrih={props.Tashrih}/>}/>
        <Route exact={true} path='/deh'  render={(props)=><Deh {...props} deh={props.Deh}/>}/>
        <Route exact={true} path='/uroupa' render={(props)=><Uroupa {...props} uroupa={props.Uroupa}/>}/>
        <Route exact={true} path='/khorma' render={(props)=><Khorma {...props} khorma={props.Khorma}/>}/>
        <Route exact={true} path='/negah'  render={(props)=><Negah {...props} negah={props.Negah}/>}/>
        <Route exact={true} path='/gosayesh' render={(props)=><Gosayesh {...props} gosayesh={props.Gosayesh}/>}/>
        <Route exact={true} path='/godrat' render={(props)=><Godrat {...props} ghodrat={props.Ghodrat}/>}/>
        <Route exact={true} path='/solules' render={(props)=><Solulez {...props} solules={props.Solulez}/>}/>
        <Route exact={true} path='/mast' render={(props)=><Mast {...props} mast={props.Mast}/>}/>
        <Route exact={true} path='/azad' render={(props)=><Azad {...props} azad={props.Azad}/>}/>
        <Route exact={true} path='/nerkh' render={(props)=><Nerkh {...props} nerkh={props.Nerkh}/>}/>
        <Route exact={true} path='/gheimat' render={(props)=><Gheimat {...props} gheimat={props.Gheimat}/>}/>
        <Route exact={true} path='/tosee'  render={(props)=><Tosee {...props} tosee={props.Tosee}/>}/>
        <Route exact={true} path='/aragh'  render={(props)=><Aragh {...props} aragh={props.Aragh}/>}/>
        <Route exact={true} path='/gomrok' render={(props)=><Gomrok {...props} gomrok={props.Gomrok}/>}/>
        <Route exact={true} path='/bazar' render={(props)=><Bazar {...props} bazar={props.Bazar}/>}/>
        <Route exact={true} path='/khorasan' render={(props)=><Khorasan {...props} khorasan={props.Khorasan}/>}/>
        <Route exact={true} path='/mohlat' render={(props)=><Mohlat {...props} mohlat={props.Mohlat}/>}/>
        <Route exact={true} path='/kala' render={(props)=><Kala {...props} kala={props.Kala}/>}/>
        <Route exact={true} path='/pache' render={(props)=><Pache {...props} pache={props.Pache}/>}/>
        <Route exact={true} path='/gerany' render={(props)=><Gherany {...props} gerany={props.Gherany}/>}/>
        <Route exact={true} path='/harf' render={(props)=><Harf {...props} harf={props.Harf}/>} />
        <Route exact={true} path='/barabar' render={(props)=><Barabar {...props} barabar={props.Barabar}/>}/>
        <Route exact={true} path='/chin'  render={(props)=><Chin {...props} chin={props.Chin}/>}/>
        <Route exact={true} path='/naft' render={(props)=><Naft {...props} naft={props.Naft}/>}/>
        <Route exact={true} path='/goosht' render={(props)=><Goosht {...props} goosht={props.Goosht}/>}/>
        <Route exact={true} path='/vardat' render={(props)=><Vardat {...props} vardat={props.Vardat}/>}/>
        <Route exact={true} path='/sofreh' render={(props)=><Sofreh {...props} sofreh={props.Sofreh}/>}/>
        <Route exact={true} path='/ronagh' render={(props)=><Ronagh {...props} ronagh={props.Ronagh}/>}/>
        <Route exact={true} path='/moaef' render={(props)=><MOAEF {...props} moaef={props.MOAEF}/>}/>
        <Route exact={true} path='/sanaye' render={(props)=><Sanaye {...props} sanaye={props.Sanaye}/>}/>
        <Route exact={true} path='/anvae' render={(props)=><Anvae {...props} anvae={props.Anvae}/>}/>
        <Route exact={true} path='/siasat' render={(props)=><Siasat {...props} siasat={props.Siasat}/>}/>
        <Route exact={true} path='/zohoor' render={(props)=><Zohoor {...props} zohoor={props.Zohoor}/>}/>
        <Route exact={true} path='/sabegh' render={(props)=><Sabegh {...props} sabegh={props.Farsoode}/>}/>
        <Route exact={true} path='/farsoode' render={(props)=><Farsoode{...props} farsoode={props.Farsoode}/>}/>
        <Route exact={true} path='/variz' render={(props)=><Variz {...props} variz={props.Variz}/>}/>
        <Route exact={true} path='/saderart' render={(props)=><Saderat{...props} saderat={props.Saderat}/>}/>
        <Route exact={true} path='/olaviat' render={(props)=><Olaviat {...props} olaviat={props.Olaviat}/>}/>
        <Route exact={true} path='/moshkelat' render={(props)=><Moshkelat {...props} moshkelat={props.Moshkelat}/>}/>
        <Route exact={true} path='/nima' render={(props)=><Nima {...props} nima={props.Nima}/>}/>
        <Route exact={true} path='/mamnooe' render={(props)=><Mamnooe {...props} mamnooe={props.Mamnooe}/>}/>
        <Route exact={true} path='/taraz' render={(props)=><Taraz {...props} taraz={props.Taraz}/>}/>
        <Route exact={true} path='/maskan' render={(props)=><Maskan {...props} maskan={props.Maskan}/>} />

        <Route exact={true} path='/rabete'  render={(props)=><Rabete {...props} rabrte={props.Rabete}/>} />
        <Route exact={true} path='/jadid' render={(props)=><Jadid {...props} jadid={props.Jadid}/>}/>
        <Route exact={true} path='/bargarar' render={(props)=><Bargarar {...props} bargarar={props.Bargarar}/>}/>
        <Route path='/ahan' exact={true} render={(props) => <Ahan {...props} ahan={props.Ahan} />} />
        <Route exact={true} path='/masul' render={(props)=><Masul {...props} masul={props.Masul}/>}/>
        <Route exact={true} path='/jologiry'      render={(props)=><Jologiry {...props} jologiry={props.Jologiry}/>}/>
        <Route exact={true} path='/download' render={(props)=><Download {...props} download={props.Download}/>}/>
        <Route exact={true} path='/farvardin'  render={(props)=><Farvardin {...props} farvardin={props.Farvardin}/>}/>
        <Route exact={true} path='/eslah' render={(props)=><Eslah {...props} eslah={props.Eslah}/>}/>
            <Route exact={true} path='/pore' render={props=><Poreh  {...props} news={props.Poreh}/>} />
            <Route exact={true} path='/koredestan' render={props=><Kordestan  {...props} kordestan={props.Kordestan}/>} />
            <Route exact={true} path='/kahesh' render={props=><Kahesh  {...props} kordestan={props.Kahesh}/>} />
            <Route exact={true} path='/daramad' render={props=><Daramad  {...props} daramad={props.Daramad}/>} />
            <Route exact={true} path='/pay' render={props=><Pay  {...props} pay={props.Pay}/>} />
            <Route exact={true} path='/bast' render={props=><Bast  {...props} pay={props.Bast}/>} />
            <Route exact={true} path='/avarez' render={props=><Avazrez  {...props} pay={props.Avazrez}/>} />
            <Route exact={true} path='/azarbayzan' render={props=><Azarbayejan  {...props} pay={props.Azarbayejan}/>} />

            <Route exact={true} path='/moz' render={props=><Moz  {...props} moz={props.Moz}/>} />

            <Route exact={true} path='/sevom' render={props=><Sevom  {...props} moz={props.Sevom}/>} />
            <Route exact={true} path='/zarfiat' render={props=><Zarfiat  {...props} moz={props.Zarfiat}/>} />
            <Route exact={true} path='/elam' render={props=><Elam  {...props} moz={props.Elam}/>} />

            <Route exact={true} path='/angour' render={props=><Angour {...props} moz={props.Angour}/>} />
        <Route exact={true} path='/ajib' render={props=><Ajib {...props} ajib={props.Ajib}/>} />
        <Route exact={true} path='/kham' render={props=><Kham {...props} kham={props.Kham}/>} />
        <Route exact={true} path='/barnaghashet' render={props=><Barnagsht {...props} barnaghashet={props.Barnagsht}/>} />
        <Route exact={true} path='/lir' render={props=><Lir {...props} lir={props.Lir}/>} />
        <Route exact={true} path='/sood' render={props=><Sood {...props} lir={props.Sood}/>} />
        <Route exact={true} path='/vaghey' render={props=><Vaghey {...props} vaghey={props.Vaghey}/>} />
        <Route exact={true} path='/zanan' render={props=><Zanan {...props} zanan={props.Zanan}/>} />
            <Route exact={true} path='/rizesh' render={props=><Rizesh {...props} rizesh={props.Rizesh}/>} />

            <Route exact={true} path='/sharayet' render={props=><Sharayet {...props} rizesh={props.Sharayet}/>} />
            <Route exact={true} path='/khoshmaze' render={props=><Khoshmaze {...props} rizesh={props.Khoshmaze}/>} />
            <Route exact={true} path='/bazarghany' render={props=><Bazarghany {...props} rizesh={props.Bazarghany}/>} />
        <Route exact={true} path='/tashil' render={props=><Tashil {...props} tashil={props.Tashil}/>} />
        <Route exact={true} path='/arzsaderaty' render={props=><ArzSaderaty {...props} arzsaderaty={props.ArzSaderaty}/>} />
        <Route exact={true} path='/sazman' render={props=><Sazeman {...props} sazman={props.Sazeman}/>} />
        <Route exact={true} path='/govat' render={props=><Govat {...props} govat={props.Govat}/>} />
        <Route exact={true} path='/markazy' render={props=><Markazy {...props} markazy={props.Markazy}/>} />
            <Route exact={true} path='/pyaz' render={props=><Pyaz {...props} pyaz={props.Pyaz}/>} />
        <Route exact={true} path='/roshed' render={props=><Roshed {...props} roshed={props.Roshed}/>} />
        <Route exact={true} path='/farsh' render={props=><Farsh {...props} farsh={props.Farsh}/>} />
        <Route exact={true} path='/morgh' render={props=><Morgh {...props} morgh={props.Morgh}/>} />
        <Route exact={true} path='/sangin' render={props=><Sangin {...props} sangin={props.Sangin}/>} />
            <Route exact={true} path='/moshkel' render={props=><Moshkel {...props} moshkel={props.Moshkel}/>} />
        <Route exact={true} path='/chaharom' render={props=><Chaharom {...props} chaharom={props.Chaharom}/>} />
        <Route exact={true} path='/rayane' render={props=><Rayane {...props} rayane={props.Rayane}/>} />
        <Route exact={true} path='/daryaft' render={props=><Daryaft {...props} avarez={props.Daryaft}/>} />
            <Route exact={true} path='/bohran' render={props=><Bohran {...props} bohran={props.Bohran}/>} />
            <Route exact={true} path='/nano' render={props=><Nano {...props} nano={props.Nano}/>} />
        <Route exact={true} path='/behdasht' render={props=><Behdasht {...props} behdasht={props.Behdasht}/>} />
        <Route exact={true} path='/mashroot' render={props=><Mashrut {...props} mashrut={props.Mashrut}/>} />
        <Route exact={true} path='/eco' render={props=><Eco {...props} eco={props.Eco}/>} />
        <Route exact={true} path='/boodje' render={props=><Boodje {...props} boodje={props.Boodje}/>} />
        <Route exact={true} path='/ezafe' render={props=><Ezafe {...props} ezafe={props.Ezafe}/>} />
        <Route exact={true} path='/mansooz' render={props=><Mansooz {...props} mansooz={props.Mansooz}/>} />
        <Route exact={true} path='/kartbazargany' render={props=><KartBazargany {...props} kartbazargany={props.KartBazargany}/>} />
        <Route exact={true} path='/tarefe' render={props=><Tarefe {...props} tarefe={props.Tarefe}/>} />
        <Route exact={true} path='/had' render={props=><Had {...props} had={props.Had}/>} />
        <Route exact={true} path='/zanjan' render={props=><Zanjan {...props} zanjan={props.Zanjan}/>} />
            <Route exact={true} path='/bastar' render={props=><Bastar {...props} zanjan={props.Zanjan}/>} />
            <Route exact={true} path='/tojar' render={props=><Tojar {...props} tojar={props.Tojar}/>} />
        <Route exact={true} path='/boruz' render={props=><Borouz {...props} boruz={props.Borouz}/>} />
        <Route exact={true} path='/ebteda' render={props=><Ebteda {...props} ebteda={props.Ebteda}/>} />
        <Route exact={true} path='/mozakere' render={props=><Mozakere {...props} mozakere={props.Mozakere}/>} />
        <Route exact={true} path='/mahal' render={props=><Mahal {...props} mahal={props.Mahal}/>} />
        <Route exact={true} path='/moarefy' render={props=><Moarefy {...props} moarefy={props.Moarefy}/>} />
        <Route exact={true} path='/araby' render={props=><Araby {...props} araby={props.Araby}/>} />
            <Route exact={true} path='/oman' render={props=><Oman {...props} oman={props.Oman}/>} />

    </Router>
)

ReactDOM.render(
routing,


   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
