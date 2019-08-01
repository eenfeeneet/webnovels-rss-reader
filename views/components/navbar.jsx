var React = require("react");

class NavBar extends React.Component {
  render() {


    return (

     <nav className="navbar navbar-expand-lg navbar-dark sticky-top mb-4 border-success rounded">
         <a className="navbar-brand" href="/webnosser">WebNoSSer</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">About</a>
            </li>
            </ul>


            <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#modalLogOut" href="">Log Out</button>

         </div>
     </nav>
    );
  }
}

module.exports = NavBar;