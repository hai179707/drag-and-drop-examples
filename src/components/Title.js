import PropTypes from 'prop-types'

function Title({ children }) {
    return (
        <h1 className='font-semibold underline text-xl'>
            {children}
        </h1>
    )
}

Title.propTypes = {
    children: PropTypes.string.isRequired
}

export default Title