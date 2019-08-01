var React = require('react');

var Head = require('./components/head');
var HomeHeader = require('./components/homeheader');
var ModalL = require('./components/modallogin');
var ModalR = require('./components/modalregister');


class Home extends React.Component {
  render() {

    console.log("\nStarto")



    return (
        <html>
        <Head/>
        <body className="vertical-center">
            <div className="container-fluid ">

                <HomeHeader/>
                <ModalL/>
                <ModalR/>
            </div>
        <script src="/script.js"></script>
        </body>
        </html>
      );
  }
}



module.exports = Home;