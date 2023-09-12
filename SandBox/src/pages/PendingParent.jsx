import React, { useState } from 'react'
import Pending from '../components/Pending';
import Modal from '../components/Modal';

const PendingParent = () => {
    const [open, setOpen] = useState(false);

    const [prop, setProp] = useState('아직 데이터가 안넘어왔어요');

    const childChange = (data, isOpen) => {
        setProp(data);
        setOpen(isOpen);
    }

    const openModal = async() => {
        setOpen(true);
    }

  return (
    <>
  {open ? (
    <>
        <Pending />
        <Modal childChange={childChange} childOpen={open} />
    </>
  ) : (
    <>
      <div>부모 컴포넌트입니다.</div>
      <div>
        child component인 Modal 창을 띄워주고, modal 창에서 데이터를 입력할 때까지 이 페이지는 pending 상태로 놔두고, modal 창의 데이터가 이 페이지의 값으로 돌아오게끔 작성할 것입니다.
      </div>
      <div>현재 데이터가 넘어왔나요? {prop}</div>
      <button onClick={openModal}>
        모달창 띄우기
      </button>
    </>
  )}
</>
  )
}

export default PendingParent