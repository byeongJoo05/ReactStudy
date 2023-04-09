import React, {useRef, useState} from 'react';
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
  const onCreate = () => {
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
  };

  const onRemove = (id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  }

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
    <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
