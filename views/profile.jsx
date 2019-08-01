var React = require('react');

var Head = require('./components/head');
var NavBar = require('./components/navbar');
var ModalLogout = require('./components/modallogout');
var Footer = require('./components/footer');

var Profile = require('./components/cardprofile');
var Navigation = require('./components/cardshelf');
var Content = require('./components/cardcontent');


class Home extends React.Component {
  render() {

    console.log("\nStarto")
    // console.log(this.props.user)



    return (

        <html>
        <Head/>
        <body>
        <NavBar/>
        <ModalLogout/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Profile user = {this.props.user}/>
                        <Navigation/>
                    </div>
                    <div className="col">
                        <Content/>
                    </div>
                </div>
            </div>
        <script src="/script.js"></script>
        <Footer/>
        </body>
        </html>
      );
  }
}



module.exports = Home;