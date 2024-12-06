import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LabelLogin,
  LoginFormContainer,
  FormContainer,
  LogoImg,
  InputContainer,
  LoginButton,
  ErrorMessage,
  InputField,
  CheckboxField,
  ShowPwdField,
  ShowPwdContainer,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPwd: false,
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  // onChangeUsername = event => {
  //   this.setState({username: event.target.value})
  // }

  // onChangePassword = event => {
  //   this.setState({password: event.target.value})
  // }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })

    // console.log(
    //   'History before replace:',
    //   history.action,
    //   history.location.pathname,
    // )
    history.replace('/')
    // console.log(
    //   'History after replace:',
    //   history.action,
    //   history.location.pathname,
    // )
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      console.log('response,objet', response, options)
      const data = await response.json()
      if (response.ok === true) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.onSubmitFailure(data.error_msg)
      }
    } catch (error) {
      console.error('Error:', error)
      this.onSubmitFailure('Something went wrong. Please try again.')
    }
  }

  renderPasswordField = () => {
    const {password, showPwd} = this.state
    const inputType = showPwd ? 'text' : 'password'
    return (
      <>
        <LabelLogin htmlFor="password">PASSWORD</LabelLogin>
        <InputField
          type={inputType}
          id="password"
          value={password}
          name="password"
          onChange={this.onChangeHandler}
          placeholder="Password"
        />
        <ShowPwdContainer>
          <CheckboxField
            id="checkbox"
            type="checkbox"
            onClick={this.ShowPwdEnabled}
          />
          <ShowPwdField htmlFor="checkbox">Show Password</ShowPwdField>
        </ShowPwdContainer>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <>
          <LabelLogin htmlFor="username">USERNAME</LabelLogin>
          <InputField
            type="text"
            id="username"
            value={username}
            name="username"
            onChange={this.onChangeHandler}
            placeholder="Username"
          />
        </>
      </>
    )
  }

  ShowPwdEnabled = event => {
    if (event.target.checked) {
      this.setState({showPwd: true})
    } else {
      this.setState({showPwd: false})
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginFormContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LogoImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />

          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>

          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </FormContainer>
      </LoginFormContainer>
    )
  }
}

export default LoginForm
