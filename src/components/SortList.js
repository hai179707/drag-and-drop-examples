import { useCallback, useEffect, useState } from "react"
import { listExampleItems } from "../config"
import Body from "./Body"
import Box from "./Box"
import BoxBody from "./BoxBody"
import BoxFooter from "./BoxFooter"
import BoxHeader from "./BoxHeader"
import BoxLabel from "./BoxLabel"
import Button from "./Button"
import ListItem from "./ListItem"
import Title from "./Title"
import Wrapper from "./Wrapper"

function SortList() {
    const [unSelectedItems, setUnSelectedItems] = useState(listExampleItems)
    const [selectedItems, setSelectedItems] = useState([])
    const [draggedItem, setDraggedItem] = useState('')
    const [draggedOverItem, setDraggedOverItem] = useState('')
    const [draggedOverItemIndex, setDraggedOverItemIndex] = useState('')

    useEffect(() => {
        if (draggedItem !== draggedOverItem) {
            const items = selectedItems.filter(i => i !== draggedItem)
            items.splice(draggedOverItemIndex, 0, draggedItem)
            setSelectedItems(items)
        }
    }, [draggedOverItem])

    const handleApply = useCallback(() => {
        console.log(selectedItems)
    }, [])

    const handleSelectItem = useCallback(item => {
        setUnSelectedItems(prev => prev.filter(i => i !== item))
        setSelectedItems(prev => [...prev, item])
    }, [])

    const handleRemoveItem = useCallback(item => {
        setSelectedItems(prev => prev.filter(i => i !== item))
        setUnSelectedItems(prev => [...prev, item])
    }, [])

    const handleDragStart = useCallback((e, item) => {
        e.dataTransfer.effectAllowed = "move"
        e.target.classList.add('drag-start')
        setDraggedItem(item)
    }, [])

    const handleDragOver = useCallback((e, item, index) => {
        e.preventDefault()
        setDraggedOverItem(item)
        setDraggedOverItemIndex(index)
    }, [])

    const handleDragEnd = useCallback(e => {
        e.target.classList.remove('drag-start')
        setDraggedItem('')
    }, [])

    return (
        <Wrapper>
            <Title>Sort List</Title>
            <Body>
                <Box>
                    <BoxHeader>Customize Columns</BoxHeader>
                    <BoxBody>
                        {!!selectedItems.length
                            &&
                            <>
                                <BoxLabel>Drag to reorder</BoxLabel>
                                <ul>
                                    {selectedItems.map((item, index) => (
                                        <ListItem
                                            key={item}
                                            select
                                            onClick={() => handleRemoveItem(item)}
                                            onDragStart={e => handleDragStart(e, item)}
                                            onDragEnd={handleDragEnd}
                                            onDragOver={e => handleDragOver(e, item, index)}
                                        >
                                            {item}
                                        </ListItem>
                                    ))}
                                </ul>
                            </>
                        }
                        {!!unSelectedItems.length
                            &&
                            <>
                                <BoxLabel>Select to add</BoxLabel>
                                <ul>
                                    {unSelectedItems.map((item, index) => (
                                        <ListItem key={index} onClick={() => handleSelectItem(item, index)}>{item}</ListItem>
                                    ))}
                                </ul>
                            </>
                        }
                    </BoxBody>
                    <BoxFooter>
                        <Button onClick={handleApply}>Apply</Button>
                    </BoxFooter>
                </Box>
            </Body>
        </Wrapper>
    )
}

export default SortList