import { useState, useEffect } from 'react'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState(null)

  useEffect(() => {

    async function fetchDashBoardData() {
      const response = await fetch('http://localhost:4000/dashboard');
      const data = await response.json();

      setIsLoading(false);
      setDashboardData(data);
    }

    fetchDashBoardData();
  }, [])

  if(isLoading){
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1>Dashboard Data</h1>
      <h2>Posts { dashboardData.posts }</h2>
      <h2>Likes { dashboardData.likes }</h2>
      <h2>Followers { dashboardData.followers }</h2>
    </div>
  )
}

export default Dashboard