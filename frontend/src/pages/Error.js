import { Link } from 'react-router-dom'

const Error = () => {
  // const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <Link to='/dashboard'>Home</Link>
    </div>
  )
}

export default Error