import Homepage from "../components/homepage/index";
import Calendar from "../components/calendar/index";
import Login from "../components/login/index";
import News from "../components/news/index"
import { createBrowserHistory } from "history";
import{
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import errorPage from "../components/error/index"

const routes=[
    {
        path: ['/',"/home"],
        component: Homepage
    },
    {
        path: ["/news"],
        component: News
    },
    {
        path: ['/',"/home"],
        component: Homepage
    }
]

const history = createBrowserHistory();

export default function Routes()
{
    return (
        <Router history={history}>
          <Switch>
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/login" component={Login} />
            {
                routes.map((route,id)=>{
                    return (<Route exact key={id} {...route}/>)
                })
            }
             {/* <Route component={errorPage} /> */}
          </Switch>
    </Router>
    )
}


