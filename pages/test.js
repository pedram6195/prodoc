import React from 'react'
import withAuth from '../HOC/withAuth'

const Test = () => {
	return <div >Hey There...</div>
}

export default withAuth(Test)