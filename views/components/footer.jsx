var React = require('react');


class Footer extends React.Component {
  render() {
    console.log("<Footer> Added")

    return (


        <nav className="navbar navbar-expand-lg navbar-dark border-success rounded mt-5">
            <div className="footer-copyright py -2">
                © 2019 Copyright
            </div>
        </nav>


      );
    }
}

module.exports = Footer;