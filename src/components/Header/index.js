import React, { useState } from 'react'
import './index.scss'
import './img/fe-house-qrcode.jpg'
function Header() {
    const [inputtext, setTnputtext] = useState('')
    const [list, setList] = useState([1, 2, 3, 4])
    const deletea = (index) => {
        const list1 = list
        list1.splice(index, 1)
        setList([...list1])
    }
    return (
        <div>
            <input value={inputtext} onChange={(e) => setTnputtext(e.target.value)} />
            <button onClick={() => {
                console.log(inputtext)
                setList([...list, inputtext])
                setTnputtext('')
            }}>提交</button>
            {list.map((val, index) => <li key={index}>{val}<button onClick={() => deletea(index)}>删除</button></li>)}
        </div>
    )
}

export default Header
