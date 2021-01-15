import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

function dingyue(props){
    const routes = props.route.routes
    console.log('routes',props)
    return (
        <div>
            <NavLink to="/dingyue/dingyue1" activeClassName="selected"><span > dingyue1 </span></NavLink>
            <NavLink to="/dingyue/dingyue2" activeClassName="selected"><span > dingyue2 </span></NavLink>
            <NavLink to="/dingyue/dingyue3" activeClassName="selected"><span > dingyue3 </span></NavLink>
            <div>
                {
                    renderRoutes(routes)
                }
            </div>
        </div>
    )
}


export default dingyue