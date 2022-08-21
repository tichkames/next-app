import { useState } from 'react';
import { useRouter } from 'next/router';

const Events = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const filterSportsEvents = async () => {
    const response = await fetch('http://localhost:4000/events?category=sports'); // your fetch function here
    const data = await response.json();
    setEvents(data)
    router.push('/events?category=sports', undefined, {shallow: true})
  }

  return (
    <>
      <button onClick={ filterSportsEvents }>Sports Events</button>
      <h1>Event List</h1>
      {
        events.map(e =>
          <div key={ e.id }>
            <p>{ e.id } { e.title } { e.date } | { e.category }</p>
          </div>
        )
      }
    </>
  )
}

export default Events

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const { query } = ctx;
  const { category } = query;

  const queryString = category ? 'category=sports' : ''

  const response = await fetch(`http://localhost:4000/events?${queryString}`) // your fetch function here
  const data = await response.json()

  return {
    props: {
      eventList: data
    }
  }
}