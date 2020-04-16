import React from "react"
import "./sign-up.styles.scss"
import FormInput from "../form-input/form-input.componrnt"
import CustomButton from "../custom-button/custom-button.component"
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"

class SignUp extends React.Component {
 constructor() {
  super()
  this.state = {
   displayName: "",
   email: "",
   password: "",
   confirmPassword: ""
  }
 }
 handleSubmit = async event => {
  event.preventDefault()
  const { displayName, email, password, confirmPassword } = this.state
  if (password !== confirmPassword) {
   alert("password don't match")
   return
  }
  try {
   const { user } = await auth.createUserWithEmailAndPassword(email, password)
   await createUserProfileDocument(user, { displayName })
   this.setState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""

   })

  } catch (error) {
   console.error(error)
  }
 }
 handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
 }
 render() {
  const { displayName, email, password, confirmPassword } = this.state
  return (
   <div className="sign-up">
    <h2 className="title">i do not have a account</h2>
    <span>Sign up with your email and password</span>
    <form className="sign-up-form" onSubmit={this.handleSubmit}>
     <FormInput
      type="displayName"
      name="displayName"
      value={displayName}
      onChange={this.handleChange}
      label="displayName"
      required
     />
     <FormInput
      type="email"
      name="email"
      value={email}
      onChange={this.handleChange}
      label="email"
      required
     />
     <FormInput
      type="password"
      name="password"
      value={password}
      onChange={this.handleChange}
      label="password"
      required
     />
     <FormInput
      type="password"
      name="confirmPassword"
      value={confirmPassword}
      onChange={this.handleChange}
      label="confirmPassword"
      required
     />

     <CustomButton type="submit">SIGN UP</CustomButton>

    </form>
   </div>
  )
 }
}

export default SignUp