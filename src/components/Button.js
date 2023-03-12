import PropTypes from 'prop-types'
import { memo } from 'react'

function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className='w-full bg-primary text-white rounded p-3'>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default memo(Button)