import React, {useRef, useState, useMemo, useCallback} from 'react';
import Hello from './Hello';
import HelloProps from './HelloProps';
import Wrapper from './Wrapper';
import Counter from './Counter';
import './App.css';
import InputSample from './InputSample';
import { ManyInputs } from './ManyInputs';
import InputSample_Ref from './InputSample_Ref';
import UserList from './UserList';
import CreateUser from './CreateUser';

// useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용함.

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const {username, email} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@test.com'
    },
    {
        id: 3,
        username: 'sbj',
        email: 'sbj@sbj.com'
    },
])

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username:'',
      email:''
    });

    nextId.current += 1;
  },[users, username, email]);

  const onRemove = useCallback((id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback((id) => {
    setUsers (
      users.map(user =>
        user.id === id ? {...user, active: !user.active} : user
        )
    )
  }, [users]);

  /*
  useMemo
  첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주면 됨
  두번째 파라미터에는 deps 배열을 넣어주면 됨
  배열 안에 넣은 내용이 바뀐다면, 우리가 등록한 함수를 호출해서 값을 연산해주고
  만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 됨
  */
  const count = useMemo(()=>countActiveUsers(users), [users]);

  return (
    // <Wrapper>
    // {/* 주석은 화면에 보이지 않는다. 중괄호가 없으면 화면에 보이므로 주의! */}
    //   <Hello/>
    //   {/* isSpecial 로 선언한다면 기본 값은 true} */}
    //   <HelloProps name="react" color="red" isSpecial={true}/>
    //   <HelloProps color="pink"/>
    //   <h3>ㅎ2용</h3>
    //   <div style={style}>{name}</div>
    //   <div className='gray-box'></div>
    // </Wrapper>
    // <Counter/>
    // <InputSample/>
    // <ManyInputs/>
    // <InputSample_Ref/>
    <>
    <CreateUser 
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
