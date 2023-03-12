import PropTypes from 'prop-types'

function Title({ children }) {
    return (
        <h1 className='font-semibold underline text-xl text-center sm:text-left'>
            {children}
        </h1>
    )
}

Title.propTypes = {
    children: PropTypes.string.isRequired
}

export default Title