import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import App from './App';
import News from './news'
import * as serviceWorker from './serviceWorker';
import About from "./component/About";
import Header from './component/Header'
import Next from './Next'
import Download from "./component/Download";
console.log(News)
const routing=(

    <Router>
        <Route exact path='/' render={(props)=><App {...props} app={props.App}/>}/>
        <Route exact={true} path='/app' render={(props)=><App {...props} app={props.App}/>}/>
        <Route exact={true} path='/about' render={(props)=><About {...props} about={props.About}/>}/>
        <Route exact={true} path='/download' render={(props)=><Download {...props} download={props.Download}/>}/>
        <Route exact={true} path='/header' render={(props)=><Header {...props} header={props.Header}/>}/>
        <Route exact={true} path='/next' render={(props)=><Next {...props} next={props.Next}/>} />
        <Route exact={true} path="/news/:id" component={Kam}/>
    </Router>
)
function Kam({match}){
        const { id } = match.params;
        const { url, aks } = Kam.find(newsItem => newsItem.id === Number(id));
        return(
            <div>
                    {
                          Kam.map((id,title,link)=>(
                               <Link key={id.id} to={`news/${id.id}`}>
                                       {id.link}
                               </Link>


                            ))
                    }
            </div>

        )
}

ReactDOM.render(
routing,
   document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import App from './App';
import News from './news'
import * as serviceWorker from './serviceWorker';
import About from "./component/About";
import Header from './component/Header'
import Next from './Next'
import Sevom from "./Sevom";
import Download from "./component/Download";
import SignIn from './Form/SignIn'
import Chaharom from "./Chaharom";
console.log(News)
const routing=(

    <Router>
            <Route exact={true} path='/sevom' render={(props)=><Sevom{...props} sevom={props.Sevom}/>}/>
            <Route exact={true} path='/chaharom' render={(props)=><Chaharom{...props} sevom={props.Chaharom}/>}/>
        <Route exact path='/' render={(props)=><App {...props} app={props.App}/>}/>
        <Route exact={true} path='/signin' render={(props)=><SignIn {...props} signin={props.SignIn}/>}/>
        <Route exact={true} path='/app' render={(props)=><App {...props} app={props.App}/>}/>
        <Route exact={true} path='/about' render={(props)=><About {...props} about={props.About}/>}/>
        <Route exact={true} path='/download' render={(props)=><Download {...props} download={props.Download}/>}/>
        <Route exact={true} path='/header' render={(props)=><Header {...props} header={props.Header}/>}/>
        <Route exact={true} path='/next' render={(props)=><Next {...props} next={props.Next}/>} />
        <Route exact={true} path="/news/:id" component={Kam}/>
    </Router>
)
function Kam({match}){
        const LINK=News;
        const { id } = match.params;
        const { url, aks } = Kam.find(newsItem => newsItem.id === Number(id));
        {
                LINK.map((id,title,link)=>(
                    <Link key={id.id} to={`news/${id.id}`}>
                            {id.link}
                    </Link>


                ))
        }
        return(

            <div>
                    {
                            id.id
                    }
                    {
                            id.aks
                    }
                    {
                            id.title
                    }
                    {
                            id.link
                    }
            </div>

        )
}

ReactDOM.render(
routing,
   document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
