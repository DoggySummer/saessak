import React from 'react';
import '../style/css/registerPage.css';

const RegisterPage = () => {
  return (
    <div className='register_background'>
      <div className='register_title'>
        <h1>🌱SaessakChat🌱</h1>
      </div>
      <div className='register_inputContainer'>
        <div className='register_IDBox'>
          <input className='register_inputID'></input>
          <button className='register_idChk'>중복확인</button>
        </div>
        <div className='register_warningMSG'>
          4~12자의 영문 대소문자와 숫자로만 입력해주세요.
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;