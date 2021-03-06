var React = require('react');

var Head = require('./components/head');
var NavBar = require('./components/navbar');
var Footer = require('./components/footer');


var ModalLogout = require('./components/modallogout');
var ModalProfile = require('./components/modalprofile');

var CardProfile = require('./components/cardprofile');
var CardSearch = require('./components/cardsearch');
var CardFeeds = require('./components/cardfeeds');

var CardPublic = require('./components/cardmain');




class Home extends React.Component {
  render() {

    console.log("\nProfile Page Rendered\n")
    // console.log(this.props.user)

    const userName = this.props.user.name
    console.log("\n ==[ User Name ]== \n")
    console.log(userName)
    const userData = this.props.user
    console.log("\n ==[ User Data ]== \n")
    console.log(userData)
    const userNovels = this.props.novels
    console.log("\n ==[ User Novels ]== \n")
    console.log(userNovels)


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
                        <CardPublic>
                        <CardFeeds user = {userData} novels = {userNovels}/>
                        </CardPublic>

                    </div>
                </div>
            </div>


            <ModalProfile/>
            <ModalLogout/>
            <Footer/>
            <script src="/profile.js"></script>
        </body>
        </html>
      );
  }
}



module.exports = Home;