var React = require('react');

var Head = require('./components/head');
var NavBar = require('./components/navbar');

var Footer = require('./components/footer');

var CardProfile = require('./components/cardprofile');
var CardSearch = require('./components/cardsearch');
var CardFeeds = require('./components/cardfeeds');
var CardFeedSettings = require('./components/cardfeedsettings');

var ModalLogout = require('./components/modallogout');
var ModalAdd = require('./components/modaladd');
var ModalEdit = require('./components/modaledit');
var ModalProfile = require('./components/modalprofile');

class FeedSettings extends React.Component {
  render() {

    console.log("\nFeed Settings Page Rendered\n")
    // console.log(this.props.user)
    const userData = this.props.user
    console.log(userData)
    const userName = this.props.user.name
    console.log(userName)
    const userNovels = this.props.novels

    return (

        <html>
        <Head/>
        <body>
            <NavBar name = {userName}/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <CardProfile user = {userData}/>

                    </div>
                    <div className="col">
                        <CardFeedSettings user = {userData} novels = {userNovels}/>
                    </div>
                </div>
            </div>




            <ModalAdd user = {userData} novels = {userNovels}/>
            <ModalEdit user = {userData}/>
            <ModalProfile/>
            <ModalLogout/>
            <Footer/>
            <script src="/feedsettings.js"></script>
        </body>
        </html>
      );
  }
}



module.exports = FeedSettings;