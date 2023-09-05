import React, {useState } from 'react'
import ReactModal from 'react-modal'

const Modal = ({childChange , childOpen}) => {

    let modalOpen = childOpen;

    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(modalOpen);

    const closeModal = (e) => {
        setIsOpen(false)
        childChange(false)
    }

    const onChange = (e) => {
        const {value} = e.target;
        setValue(value);
    }

    const postParent = (e) => {
        childChange(value, false);
        setIsOpen(false)
    }

  return (
    <ReactModal isOpen={isOpen}>
        <div>Modal</div>
        <div>부모 컴포넌트에게 보낼 데이터를 입력해주세요: 
            <input placeholder='데이터를 입력해주세요.' name='value' type='text' value={value} onChange={onChange}>
            </input>
        </div>
        <button onClick={postParent}>데이터 보내기</button>
        <button onClick={closeModal}>모달 창 닫기</button>
    </ReactModal>
  )
}

export default Modal