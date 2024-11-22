import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import SavedVideosContext from '../../context/SavedVideosContext'

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
} from './LoginStyledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPwd: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
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
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = isDarkLightMode => {
    const {password, showPwd} = this.state

    return (
      <>
        <LabelLogin
          className="input-label"
          htmlFor="password"
          isDarkLightMode={isDarkLightMode}
        >
          PASSWORD
        </LabelLogin>
        <InputField
          type={showPwd ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          isDarkLightMode={isDarkLightMode}
        />
      </>
    )
  }

  renderUsernameField = isDarkLightMode => {
    const {username} = this.state

    return (
      <>
        <LabelLogin
          className="input-label"
          htmlFor="username"
          isDarkLightMode={isDarkLightMode}
        >
          USERNAME
        </LabelLogin>
        <InputField
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
          isDarkLightMode={isDarkLightMode}
        />
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
    // if (jwtToken) {
    //   return null // No need for Redirect here, it's already handled by history.replace('/')
    // }

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkLightMode} = value
          return (
            <LoginFormContainer isDarkLightMode={isDarkLightMode}>
              <FormContainer
                onSubmit={this.submitForm}
                isDarkLightMode={isDarkLightMode}
              >
                <div>
                  <LogoImg
                    src={
                      isDarkLightMode
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </div>
                <InputContainer>
                  {this.renderUsernameField(isDarkLightMode)}
                </InputContainer>
                <InputContainer>
                  {this.renderPasswordField(isDarkLightMode)}
                </InputContainer>
                <ShowPwdContainer>
                  <CheckboxField
                    type="checkbox"
                    onClick={this.ShowPwdEnabled}
                  />
                  <ShowPwdField isDarkLightMode={isDarkLightMode}>
                    Show Password
                  </ShowPwdField>
                </ShowPwdContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </FormContainer>
            </LoginFormContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default LoginForm
