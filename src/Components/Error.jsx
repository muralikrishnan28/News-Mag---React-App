export default function ({ ApiCall }) {
    return (
        <div className='Container-fluid d-flex align-items-center justify-content-center vh-80'>
            <div className="text-center ">
                <h1 className="text-danger display-1">Error !</h1>
                <p className='lead fs-5'>Please try again...</p>
                <button className="btn btn-primary text-center" onClick={ApiCall}> Retry </button>
            </div>
        </div>
    )
}