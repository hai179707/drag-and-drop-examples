import PropTypes from 'prop-types'
import { memo } from 'react'
import { TbSquareCheckFilled, TbSquareCheck } from 'react-icons/tb'
import { MdOutlineDragIndicator } from 'react-icons/md'

function ListItem({ select = false, onClick, onDragStart, onDragEnd, onDragOver, children }) {
    return (
        <li
            onClick={onClick}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            draggable={select}
            className='flex p-3 gap-3 items-center border border-gray-300 rounded my-1 cursor-pointer bg-white select-none transition-all duration-400'
        >
            {select ? <TbSquareCheckFilled className='text-xl' /> : <TbSquareCheck className='text-xl opacity-50' />}
            <p className='flex-1'>{children}</p>
            {select ? <MdOutlineDragIndicator /> : <MdOutlineDragIndicator className='opacity-30' />}
        </li>
    )
}

ListItem.propTypes = {
    select: PropTypes.bool,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onDragStart: PropTypes.func,
    onDragEnd: PropTypes.func,
    onDragOver: PropTypes.func,
}

export default memo(ListItem)