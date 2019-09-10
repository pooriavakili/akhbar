import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import App from './App';
import News from './news'
import * as serviceWorker from './serviceWorker';
import About from "./component/About";
import Header from './component/Header'
import Next from './Next'
import Download from "./component/Download";
const routing=(
    <Router>
        <Route exact path='/' render={(props)=><App {...props} app={props.App}/>}/>
        <Route exact={true} path='/app' render={(props)=><App {...props} app={props.App}/>}/>
        <Route exact={true} path='/about' render={(props)=><About {...props} about={props.About}/>}/>
        <Route exact={true} path='/download' render={(props)=><Download {...props} download={props.Download}/>}/>
        <Route exact={true} path='/header' render={(props)=><Header {...props} header={props.Header}/>}/>
        <Route exact={true} path='/next' render={(props)=><Next {...props} next={props.Next}/>} />
        <Route exact={true} path="/news/:id" render={(props)=><News news={props.News}/>}/>
    </Router>
)

ReactDOM.render(
routing,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
