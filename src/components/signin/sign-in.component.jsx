import React from "react"
import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.componrnt"
import CustomButton from "../custom-button/custom-button.component"
import { signInWithGoogle, auth } from "../../firebase/firebase.utils"

class SignIn extends React.Component {
 constructor() {
  super()
  this.state = {
   email: "",
   password: ""
  }
 }
 handleSubmit = async event => {
  event.preventDefault()
  const { email, password } = this.state

  try {
   await auth.signInWithEmailAndPassword(email, password)
   this.setState({ email: "", password: "" })

  } catch (error) {
   console.error(error)
  }
 }

 handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
 }
 render() {
  return (
   <div className="sign-in">
    <h2>I have already have an account</h2>
    <span>sign in with your email and password</span>
    <form onSubmit={this.handleSubmit}>
     <FormInput
      type="email"
      name="email"
      handleChange={this.handleChange}
      value={this.state.email}
      label="email"
      required />
     <FormInput
      type="password"
      name="password"
      handleChange={this.handleChange}
      label="password"
      value={this.state.password}
      required />

     <div className="buttons">
      <CustomButton type="submit">Sign In</CustomButton>
      <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
     </div>





    </form>
   </div>
  )
 }
}

export default SignIn