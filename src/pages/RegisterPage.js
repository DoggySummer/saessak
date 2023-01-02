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
          <button className='register_idChk'>중복검사</button>
        </div>
        <div className='register_warningMSG'>
          4~12자의 영문 대소문자와 숫자로만 입력해주세요.
        </div>
        <div className='register_IDBox'>
          <input className='register_inputForm'></input>
        </div>
        <div className='register_warningMSG'>
          8~16자의 소문자,숫자,특수문자를 사용하세요.
        </div>
        <div className='register_IDBox'>
          <input className='register_inputForm'></input>
        </div>
        <div className='register_warningMSG'>
          비밀번호가 일치하지 않습니다.
        </div>
        <div className='register_IDBox'>
          <input className='register_inputForm'></input>
        </div>
        <div className='register_warningMSG'>
          올바른 정보를 입력해주세요
        </div>
        <div className='register_IDBox'>
          <input className='register_inputForm'></input>
        </div>
        <div className='register_warningMSG'>
          이메일 형식이 맞지 않습니다.
        </div>
        <div className='register_btn'>
          회원가입
        </div>
        <div className='login_routeBtn'>
          로그인 화면으로 돌아가기
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;