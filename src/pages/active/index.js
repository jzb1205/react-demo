
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { useEffect, useState } from 'react'
import axios from 'axios'
axios.defaults.baseURL = '/api';
const ulList = [
    {
        name:'active1',
        path:'/active/active1'
    },
    {
        name:'active2',
        path:'/active/active2'
    },
    {
        name:'active3',
        path:'/active/active3'
    }
]

function Active(props){
    const routes = props.route.routes
    let [countInit, setCountInit] = useState(0)
    const toPage = (it)=>{
        props.history.push(it.path)
        setCountInit(countInit+1)
    }
    useEffect(()=>{
        axios.get('/').then(res=>{
            console.log('res',res)
        })
    })
    return (
        <div>
            <ul>
                { 
                    ulList.map(it=>{
                       return  <li key={it.path} onClick={()=>toPage(it)}>{it.name}</li>
                    })
                }
            </ul>
            <p>{countInit}</p>
            {/* <NavLink to="/active/active1" activeClassName="selected"><span > active1 </span></NavLink>
            <NavLink to="/active/active2" activeClassName="selected"><span > active2 </span></NavLink>
            <NavLink to="/active/active3" activeClassName="selected"><span > active3 </span></NavLink> */}
            <div>
                {
                    renderRoutes(routes)
                }
            </div>
        </div>
    )
}


export default Active