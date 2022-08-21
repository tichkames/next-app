import useSWR from 'swr'

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = await response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR('dashboard', fetcher);

  if(error) {
    return <div>An error occured</div>
  }

  if(!data){
    return <div>Loading</div>
  }

  return (
    <div>
    <h1>Dashboard Data</h1>
    <h2>Posts { data.posts }</h2>
    <h2>Likes { data.likes }</h2>
    <h2>Followers { data.followers }</h2>
  </div>
  )
}

export default DashboardSWR