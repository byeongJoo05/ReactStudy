import axios from 'axios'
import React, { useEffect, useState } from 'react'

const List = () => {
    const [status, setStatus] = useState('');
    const [datas, setDatas] = useState(null);
    const [sign, setSign] = useState(false);

    const host = process.env.REACT_APP_HOST_NAME

    useEffect (() => {
        const getResponse = async () => {
            try{
            const response = await axios.get(
                `${host}/listall`
            ).then(response => {
                const data = response.data
                setStatus(data.status)
                setDatas(data.data)
                setSign(data.ok)
            })
            
        
            } catch(error) {
                console.log(error)
            }
        }

        getResponse()
    }, [])

  return (
    <div>
        <li>데이터의 상태는~? : {status}</li>
        {datas.map(data =>(
            <ul>
                <li>{data.title} {data.description}</li>
            </ul>
        ))}
        <li>성공인가요 실패인가요~? : {sign ? <div>성공</div> : <div>실패</div> }</li>
    </div>
  )
}

export default List