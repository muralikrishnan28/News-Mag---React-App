export default function Navbar ({setCategory}) {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid py-1">
          <p className="my-auto badge bg-danger fs-5 ms-2 tag-color" onClick={() => setCategory("general")}>News Mag</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-white" id="navbarNav">
            <ul className="navbar-nav ms-4 pt-3">
              <li className="nav-item me-2">
                  <p className="d-inline-block " onClick={() => setCategory("technology")}>Technology</p>
              </li>
              <li className="nav-item me-2">
                  <p className="d-inline-block" onClick={() => setCategory("health")}>Health</p>
              </li>
              <li className="nav-item me-2">
                  <p className="d-inline-block" onClick={() => setCategory("business")}>Business</p>
              </li>
              <li className="nav-item me-2">
                  <p className="d-inline-block" onClick={() => setCategory("science")}>Science</p>
              </li>
              <li className="nav-item me-2">
                  <p className="d-inline-block" onClick={() => setCategory("sports")}>Sports</p>
              </li>
              <li className="nav-item me-2">
                  <p className="d-inline-block" onClick={() => setCategory("entertainment")}>Entertainment</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}