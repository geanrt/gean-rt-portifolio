/* eslint-disable react/prop-types */
import './Container.css'

const Container = ({children}) => {
  return (
    <div className='container'>
      <div className="content">{children}</div>
    </div>
  )
}
export default Container