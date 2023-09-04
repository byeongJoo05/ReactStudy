import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ListProp from '../components/ListProp';

const List = () => {
    const [status, setStatus] = useState('');
    const [datas, setDatas] = useState(null);
    const [sign, setSign] = useState(false);

    const host = process.env.REACT_APP_HOST_NAME
    useEffect (() => {
        const getResponse = async () => {
            try{
            await axios.get(
                `${host}/listall`
            ).then(response => {
                const data = response.data
                console.log(data)
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
        {datas && datas.map( (data, key) => (
            <ul>
                <ListProp title={data.title} description={data.description} key={key}/>
            </ul>
        ))}
        <li>성공인가요 실패인가요~? : {sign ? <div>성공</div> : <div>실패</div> }</li>
    </div>
  )
}

export default List