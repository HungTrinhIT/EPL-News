import Homepage from "../components/homepage/"
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
    }
]

const history = createBrowserHistory();

export default function Routes()
{
    return (
        <Router history={history}>
          <Switch>
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


