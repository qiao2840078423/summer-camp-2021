import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import SideMenu from '../../components/sandbox/SideMenu';
import TopHeader from '../../components/sandbox/TopHeader';

import { Layout } from 'antd';

export default function NewsSandBox() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout>
        <TopHeader></TopHeader>
        <Outlet />
      </Layout>
    </Layout>
  )
}
