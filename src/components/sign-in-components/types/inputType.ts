export default interface IInputType {
    content : string,
    inputType : string,
    inputValue : string,
    inputPlaceholder : string,
    setFunction : React.ChangeEventHandler<HTMLInputElement>
}