import IInputType from "./types/inputType";

export default function UserInput ({content, inputType, inputValue, inputPlaceholder, setFunction} : IInputType) {
    return(
        <>
            <label className="label" htmlFor={inputType}>{content}</label>
            <input className="inputs" autoComplete='off' name={inputType} onChange={setFunction }
            placeholder={inputPlaceholder} type={inputType} value={inputValue} /><br /> 
        </>
    )
}