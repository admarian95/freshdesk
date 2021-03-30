import {getTickets} from '../actions';
import { useDispatch , connect } from 'react-redux';
import { useEffect , useState } from 'react'
import Ticket from './Ticket'


const GetTickets = ({tickets})=>{
    debugger;
    const [isLoaded,setLoad] = useState(false)
    let dispatch = useDispatch();

    useEffect(()=>
    {
        console.log(tickets)
        let baseURL = 'http://localhost:3001';
    fetch(baseURL + '/getTickets', {
        method: 'GET'
    }).then(res => res.json()).then((data) => dispatch(getTickets(data.data)))
    },[]);

    return (
        (tickets !== undefined && tickets.length!==0) ? tickets.map((el,idx)=> <Ticket key={idx} ticket={el}/> ) :  <h1>Loading...</h1>
    )
}

const mapStateToProps = (state)=>({
        tickets : state.getTickets.data,
})

export default connect(mapStateToProps)(GetTickets)