import { useState } from "react"
import { useParams } from "react-router-dom"

const Dashboard = (user) => {
    const { name } = useParams()
    console.log(user.user.name)


    return (
        <>
            <div>
                <h1>Welcome</h1>
                <h1>{user.user.name}</h1>
            </div>

        </>
    )

}
export default Dashboard