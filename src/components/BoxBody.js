import PropTypes from 'prop-types'

function BoxBody({children}) {
    return (
        <div className='h-[400px] overflow-y-scroll small-scrollbar p-3'>
            {children}
        </div>
    )
}

BoxBody.propTypes = {
    children: PropTypes.node.isRequired
}

export default BoxBody