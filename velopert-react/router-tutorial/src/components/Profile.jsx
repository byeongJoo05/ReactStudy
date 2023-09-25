import React from 'react'
import { useParams } from 'react-router-dom'

const data = {
    adam: {
        name: '군계',
        description: '가장 두려운 것은 가난한 자들이 게으르기까지 한 것이다.'
    },
    jessica: {
        name: '제시카',
        description: '내가 싫은 것은 남에게도 싫은 것이다.'
    }
}

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

    return (
    <div>
        <h1>사용자 프로필</h1>
        {profile? (
            <div>
                <h2>{profile.name}</h2>
                <p>{profile.description}</p>
            </div>
        ): (
            <p>존재하지 않는 프로필입니다.</p>
        )}
    </div>
  )
}

export default Profile