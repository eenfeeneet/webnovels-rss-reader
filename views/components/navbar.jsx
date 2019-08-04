var React = require("react");

class NavBar extends React.Component {
  render() {


    return (
     <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top mb-4 border-success rounded">
         <a className="navbar-brand" href="/webnosser"><i className="fas fa-journal-whills fa-lg"></i> WebNoSSer</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Sources</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Royal Road</a>
                        <a className="dropdown-item" href="#">Asianovel</a>
                    </div>
                </li>


            </ul>


            <a role="button" className="btn btn-outline-success" href="/webnosser/logout">Log Out</a>

         </div>
     </nav>
    );
  }
}

module.exports = NavBar;