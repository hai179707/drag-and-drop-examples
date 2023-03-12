import { useState } from "react"
import { answers } from "../config"
import Body from "./Body"
import Box from "./Box"
import BoxBody from "./BoxBody"
import BoxFooter from "./BoxFooter"
import BoxHeader from "./BoxHeader"
import Button from "./Button"
import Title from "./Title"
import Wrapper from "./Wrapper"

function DropAnswer() {
    const [answerList, setAnswerList] = useState(answers)
    const [answerSeleted, setAnswerSelected] = useState('')

    const handleSubmit = () => {
        console.log('Submit!')
    }

    const handleDragOver = e => {
        e.preventDefault()
        e.target.classList.add('drag-over')
    }

    const handleDragLeave = e => {
        e.target.classList.remove('drag-over')
    }

    const handleDragStart = ans => {
        setAnswerSelected(ans)
    }

    const handleDrop = e => {
        if(answers.some(ans => ans === e.target.innerText)) {
            setAnswerList([...answerList.filter(item => item !== answerSeleted), e.target.innerText])
        } 
        else {
            setAnswerList(prev => prev.filter(item => item !== answerSeleted))
        }
        e.target.innerText = answerSeleted
        e.target.classList.remove('drag-over')
        e.target.classList.add('cursor-pointer', 'hover:text-red-500', 'dropped')
        e.target.addEventListener('click', () => {
            e.target.innerHTML = '&ensp;'.repeat(answerSeleted.length)
            handleRemove(answerSeleted)
        })
    }

    const handleRemove = ans => {
        setAnswerList(prev => [...prev, ans])
    }

    return (
        <Wrapper>
            <Title>Drop Answer</Title>
            <Body>
                <Box full>
                    <BoxHeader>Complete the sentences below</BoxHeader>
                    <BoxBody>
                        <ul className="py-5 border-b border-gray-300 border-dashed">
                            <li className="py-2">1. React is a <span onDrop={handleDrop} onDragLeave={handleDragLeave} onDragOver={handleDragOver} className="border-b border-black select-none text-blue-500">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span> library for building user interfaces.</li>
                            <li className="py-2">2. React is used to build <span onDrop={handleDrop} onDragLeave={handleDragLeave} onDragOver={handleDragOver} className="border-b border-black select-none text-blue-500">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span> applications.</li>
                            <li className="py-2">3. React allows us to create reusable <span onDrop={handleDrop} onDragLeave={handleDragLeave} onDragOver={handleDragOver} className="border-b border-black select-none text-blue-500">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span>.</li>
                            <li className="py-2">4. The <span onDrop={handleDrop} onDragLeave={handleDragLeave} onDragOver={handleDragOver} className="border-b border-black select-none text-blue-500">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span> tool is an officially supported way to create React applications</li>
                            <li className="py-2">5. <span onDrop={handleDrop} onDragLeave={handleDragLeave} onDragOver={handleDragOver} className="border-b border-black select-none text-blue-500">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span> is required to use create-react-app.</li>
                        </ul>
                        <div className="py-5 flex flex-wrap gap-4">
                            {answerList.map(answer => (
                                <div
                                    key={answer}
                                    className='border border-dashed border-gray-300 px-3 py-1 rounded cursor-pointer'
                                    draggable
                                    onDragStart={() => handleDragStart(answer)}
                                >
                                    {answer}
                                </div>
                            ))}
                        </div>
                    </BoxBody>
                    <BoxFooter>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </BoxFooter>
                </Box>
            </Body>
        </Wrapper>
    )
}

export default DropAnswer