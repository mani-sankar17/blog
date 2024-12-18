import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return(
        <div className="error-bg">
            <div className="error-cart">
                <img src="https://wallpapers.com/images/high/cute-minion-dave-annoying-stuart-wzkzhq0mh22jv9d9.webp" alt="Error" />
                <div className="index">
                    <h1>404</h1>
                    <p>Looks like you're lost, let me help you find your way back!</p>
                    <button className="error-bot" onClick={() => navigate(-1)}>Go back</button>
                </div>
            </div>
        </div>
    )
}

export default Error;