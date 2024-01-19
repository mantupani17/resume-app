import React from 'react'
// import { UserContext } from '../../context'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

export function LeftMenu(props) {
    // const { items } = props
    return (
            <Menu mode="horizontal">
                {/* <Menu.Item key="mail">
                    <Link to="/">Home</Link>
                </Menu.Item> */}
           </Menu>
        )
}

export function RightMenu(props) {
    const { items } = props
    const logout = () => {
      window.localStorage.removeItem('isAuthenticated')
      window.localStorage.removeItem('token')
      window.location.href = '/'
    }
    return (
        <Menu mode="horizontal">
          {
            items.map((i)=> {
              if (i.url == '#') return (
                <Menu.Item key={i.module}>
                  <Link to={i.url} onClick={logout}>{i.name}</Link>
                </Menu.Item>
              )
              return (
                <Menu.Item key={i.module}>
                  <Link to={i.url}>{i.name}</Link>
                </Menu.Item>
              )
            })
          }
        </Menu>
      );
}


// export function Menu() {
//     const { user } = useContext(UserContext)
//     console.log(user)
//     const menus = jsonData.defaultMenus.map((i)=> <MenuItem title={i.title} link={i.link}/>)
//     menus.push(<MenuItem title={user.displayName ? user.displayName : user.fname +" "+ user.lname } link={""}/>)
//     return (<>{
//         menus
//     }</>)
// }

// export function MenuItem({...props}) {
//     return (<div className="menu-items"><a href={props.link}>{props.title}</a></div>)
// }