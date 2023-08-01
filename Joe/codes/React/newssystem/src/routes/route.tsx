import { Navigate } from 'react-router-dom'
import Login from '../pages/login/Login'
import NewsSandBox from '../pages/sandBox/NewsSandBox'
import Home from '../pages/sandBox/home/Home'
import RoleList from '../pages/sandBox/rightManage/RoleList'
import RightList from '../pages/sandBox/rightManage/RightList'
import UserList from '../pages/sandBox/userManage/UserList'
import NoPermission from '../pages/sandBox/nopermission/NoPermission'

const routes = [
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/sandbox',
        element: <NewsSandBox></NewsSandBox>,
        children: [
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'user-manage/list',
                element: <UserList />
            },
            {
                path: 'right-manage/role/list',
                element: <RoleList></RoleList>
            },
            {
                path: 'right-manage/right/list',
                element: <RightList></RightList>
            },
            {
                path: '',
                element: <Navigate to='home'></Navigate>
            },
            {
                path: '*',
                element: <NoPermission></NoPermission>
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/sandbox'></Navigate>
    },
    {
        path: '*',
        element: <NoPermission></NoPermission>
    }
]

export default routes