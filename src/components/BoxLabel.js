import PropTypes from 'prop-types'

function BoxLabel({ children }) {
    return (
        <p className='text-gray-400 py-3'>
            {children}
        </p>
    )
}

BoxLabel.propTypes = {
    children: PropTypes.string.isRequired
}

export default BoxLabel