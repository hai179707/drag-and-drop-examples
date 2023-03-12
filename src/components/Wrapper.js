import PropTypes from 'prop-types'


function Wrapper({ children }) {
    return (
        <div className='py-10 min-h-[600px]'>
            {children}
        </div>
    )
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
}

export default Wrapper