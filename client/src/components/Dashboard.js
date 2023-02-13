import { useState } from "react"
import { useParams } from "react-router-dom"

const Dashboard = (user) => {
    const { name } = useParams()
    console.log(user)


    return (
        <>
            <div className="dashboard">
                <h1> {user.user.first_name}`s Wine Cellar</h1>
                <h1></h1>
            </div>

        </>
    )

}
export default Dashboard