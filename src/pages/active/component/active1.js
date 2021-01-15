
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

function active1(props){
    const routes = props.route.routes
    return (
        <div>
            <NavLink to="/active/active1/active11" activeClassName="selected1"><span > active11 </span></NavLink>
            <NavLink to="/active/active1/active12" activeClassName="selected"><span > active12 </span></NavLink>
            <NavLink to="/active/active1/active13" activeClassName="selected"><span > active13 </span></NavLink>
            <div>
                {
                    renderRoutes(routes)
                }
            </div>
        </div>
    )
}


export default active1