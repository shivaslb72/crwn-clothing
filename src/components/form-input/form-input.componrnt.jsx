import React from "react"
import "./form-input.styles.scss"

const FormInput = ({ handleChange, label, ...shiva }) => (
 <div className="group">
  <input className="form-input" onChange={handleChange} {...shiva} />
  {
   label ? (
    <label className={`${shiva.value.length ? "shrink" : ""}form-input-label`}>
     {label}
    </label>
   ) : null
  }
 </div>
)

export default FormInput