var React = require('react');

var Head = require('./components/head');
var NavBar = require('./components/navbar');
var ModalLogout = require('./components/modallogout');
var Footer = require('./components/footer');

var Profile = require('./components/cardprofile');
var Feeds = require('./components/cardfeeds');
var Content = require('./components/cardcontent');

var ModalAdd = require('./components/modaladd');


class Home extends React.Component {
  render() {

    console.log("\nProfile Page Rendered")
    // console.log(this.props.user)
    const userData = this.props.user

    const userNovels = this.props.novels



    return (

        <html>
        <Head/>
        <body>
        <NavBar/>
        <ModalLogout/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">

                        <Profile user = {userData}/>
                        <Feeds user = {userData} novels = {userNovels}/>
                    </div>
                    <div className="col">
                        <Content/>
                        <ModalAdd user = {userData}/>
                    </div>
                </div>
            </div>


        <script src="https://kit.fontawesome.com/8a65d96d74.js"></script>
        <script src="/profile.js"></script>

        <Footer/>
        </body>
        </html>
      );
  }
}



module.exports = Home;