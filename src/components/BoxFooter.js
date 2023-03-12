import PropTypes from 'prop-types'

function BoxFooter({ children }) {
    return (
        <div className='p-3 border-t border-gray-200'>
            {children}
        </div>
    )
}

BoxFooter.propTypes = {
    children: PropTypes.node.isRequired
}

export default BoxFooter