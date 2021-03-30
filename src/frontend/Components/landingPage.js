import { Switch } from 'react-router-dom';
import { Home } from './Home'
import { CreateTicket }  from './CreateTicket'
import { Route } from 'react-router-dom';
import GetTickets from './GetTickets'
import Posts from './Posts';

export const LandingPage = () => {
    return (
        <div className="container" style={{marginTop:'5rem'}} >
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/createTicket' component={CreateTicket} />
                <Route exact path='/getPosts' component={Posts} />
            </Switch >
        </div>

    )
}
