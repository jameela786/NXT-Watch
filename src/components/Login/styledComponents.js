import styled from 'styled-components'

export const LabelLogin = styled.label`
  // color: ${props => (props.isDarkLightMode ? '#ffffff' : '#909090')};
  color: #909090;
  font-weight: bold;
  font-size: 0.8rem;
`
export const LoginFormContainer = styled.div`
  // background-color: ${props =>
    props.isDarkLightMode ? '#181818' : '#ffffff'};
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  // background-color: ${props =>
    props.isDarkLightMode ? '#000000' : '#ffffff'};
  background-color: #ffffff;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 4px 16px 4px #bfbfbf;
`
export const LogoImg = styled.img`
  width: 200px;
  height: auto;
  margin: 10px;
  align-self: center;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #6366f1;
  border-radius: 8px;
  border: 0px solid;
  cursor: pointer;
  outline: none;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  line-height: 16px;
  color: #ff0b37;
`
export const InputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #2c364c;
  background-color: transparent;
  // color: ${props => (props.isDarkLightMode ? '#cccccc' : '#64748b')};
  color: #64748b
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const CheckboxField = styled.input`
  width: 20px;
  height: 20px;
`
export const ShowPwdField = styled.label`
  font-size: 1rem;
  font-weight: 500;
  // color: ${props => (props.isDarkLightMode ? '#ffffff' : '#000000')};
  color: #000000;
`
export const ShowPwdContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-top: 5px;
`
