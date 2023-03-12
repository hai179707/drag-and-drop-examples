import PropTypes from 'prop-types'

function BoxHeader({ children }) {
    return (
        <h2 className='font-semibold border-b border-gray-200 p-3'>
            {children}
        </h2>
    )
}

BoxHeader.propTypes = {
    children: PropTypes.string.isRequired
}

export default BoxHeader