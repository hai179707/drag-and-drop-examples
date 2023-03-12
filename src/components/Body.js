import PropTypes from 'prop-types'

function Body({ children }) {
    return (
        <div className='flex items-center py-5 text-sm'>
            {children}
        </div>
    )
}

Body.propTypes = {
    children: PropTypes.node.isRequired
}

export default Body