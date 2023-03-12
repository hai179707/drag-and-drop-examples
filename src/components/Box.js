import PropTypes from 'prop-types'

function Box({ full = false, children }) {
    return (
        <div className={full ? 'bg-white rounded-lg shadow w-full': 'bg-white rounded-lg shadow w-[400px]'}>
            {children}
        </div>
    )
}

Box.propTypes = {
    children: PropTypes.node.isRequired,
    full: PropTypes.bool
}

export default Box