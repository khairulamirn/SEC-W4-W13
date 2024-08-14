import { useNavigate, useParams } from "react-router-dom"

function ViewJob() {
    const navigate = useNavigate()
    function navigateToHome() {
        navigate('/')
    }

    const useParams = useParams()
    return (
        <div>
            <h1>View Job</h1>
            <button onClick={navigateToHome}>
                Back to Home
            </button>
        </div>
    )
}

export default ViewJob