import './index.css';
function CustomButton(props) {
    return(
        <button className="custom-btn" onClick={() => props.changeScreen(props.title)}>
            {props.title}
        </button>
    )
}

export default CustomButton