import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const token = Cookie.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} render={props => <Component {...props} />} />
}
export default ProtectedRoute
