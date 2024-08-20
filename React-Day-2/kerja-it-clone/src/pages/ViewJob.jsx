import { useNavigate, useParams } from "react-router-dom"

function ViewJob() {
    const navigate = useNavigate()
    function navigateToHome() {
        navigate('/')
    }

    const params = useParams();
    // console.log(params);
    const jobId = params.id;
    // console.log(jobId);
    return (
        <div>
            <h1>View Job {jobId}</h1>
            <button onClick={navigateToHome}>
                Back to Home
            </button>
        </div>
    )
}

export default ViewJob