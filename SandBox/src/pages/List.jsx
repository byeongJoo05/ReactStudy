import React, { useEffect, useState } from 'react'
import ListProp from '../components/ListProp';
import { getList } from '../api/ListApi';


const List = () => {

    const [values, setValues] = useState({
        status: '',
        data: '',
        ok: ''
    })

    const {status,data,ok} = values

    useEffect (() => {
        const getResponse = getList("listall");
        getResponse.then(data => {
            setValues(data?.data)
        })
    }, [])

  return (
    <div>
        <li>데이터의 상태는~? : {status}</li>
        {data && data.map( (d, key) => (
            <ul key={key}>
                <ListProp title={d?.title} description={d?.description}/>
            </ul>
        ))}
        <li>성공인가요 실패인가요~? : {ok ? <div>성공</div> : <div>실패</div> }</li>
    </div>
  )
}

export default List