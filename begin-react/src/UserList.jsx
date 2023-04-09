import React from 'react'

function User({user, onRemove}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}
const UserList = ({users, onRemove}) => {
    // const users = [
    //     {
    //         id: 1,
    //         username: 'velopert',
    //         email: 'public.velopert@gmail.com'
    //     },
    //     {
    //         id: 2,
    //         username: 'tester',
    //         email: 'tester@test.com'
    //     },
    //     {
    //         id: 3,
    //         username: 'sbj',
    //         email: 'sbj@sbj.com'
    //     },
    // ]
  return (
    <div>
    {/*     <div>
             <b>{users[0].username}</b> <span>({users[0].email})</span>
         </div>
         <div>
             <b>{users[1].username}</b> <span>({users[1].email})</span>
         </div>
         <div>
             <b>{users[2].username}</b> <span>({users[2].email})</span>
         </div> */}
        {/* {users.map(user => (
            <User user={user} key={user.id}/> // map을 사용할 때 key를 설정해주지 않으면, props 에러가 콘솔에 찍히게 된다.
        ))} */}
        {users.map(user => ( // 콜백함수를 사용해서 이와 같이도 사용 가능함. 또한 key를 사용함으로써 메모리를 효율적으로 사용할 수 있음.O(상수)
            <User user={user} key={user.id} onRemove={onRemove} />
        ))}
    </div>
  )
}


export default UserList