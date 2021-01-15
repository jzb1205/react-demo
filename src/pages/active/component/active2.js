
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

function active2(props){
    const routes = props.route.routes
    return (
        <div>
            <NavLink to="/active/active2/active21" activeClassName="selected"><span > active21 </span></NavLink>
            <NavLink to="/active/active2/active22" activeClassName="selected"><span > active22 </span></NavLink>
            <NavLink to="/active/active2/active23" activeClassName="selected"><span > active23 </span></NavLink>
            <div>
                {
                    renderRoutes(routes)
                }
            </div>
        </div>
    )
}


export default active2