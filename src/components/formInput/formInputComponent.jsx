
import './formInputStyles.css'

const FormInput = ({name,type,label,...otherProps})=>{

    return <div className="form-input">
        <label >{label}</label>
        <input className='form-control' type={type} name={name} label={label} {...otherProps}/>
    </div>

}

export default FormInput