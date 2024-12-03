import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom'
import './chatList.css'


const ChatList = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ['userChats'],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userChats`,
        { credentials: "include" }
      ).then((res) =>
        res.json(),
      ),
  })


//  /api/chats/
  return (
    <div className='chatList'>
      <span className='title'>DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Lama AI</Link>
      <Link to="/">Contact</Link>

      <hr />
      <span className='title'>Recent Chats</span>
      <div className="list">
        {isPending ? "Loading..." : error ? "Something is wrong" : data?.map(Chat => (
          <Link to={`/dashboard/chats/${Chat._id}`} key={Chat._id}>
            {Chat.title}
          </Link>
        ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt='' />
        <div className="texts">
          <span>Upgrade tp Lama AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  )
}

export default ChatList
