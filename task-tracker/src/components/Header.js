import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
       <header className='header'>
           <h1 >{title}</h1>
           <Button color='green' text='Add'/>
           <Button color='blue' text='Hello 1 '/>
           <Button color='red' text='Hello 2'/>
       </header>
    )
}

Header.defaultProps={
    title:'Task Tracker'
}

Header.propTypes={
    title:PropTypes.string.isRequired,
}

//CSS in Js
//const headingStyle={
   // color:'red',
   //backgroundColor:'black'
//}

export default Header
