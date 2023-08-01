import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '../routes/route'

export default function IndexRouter() {
    const element = useRoutes(routes)
    return (
        <>
            {element}
        </>
    )
}
