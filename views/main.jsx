var React = require('react');

var Head = require('./components/head');
var HomeHeader = require('./components/homeheader');
var ModalL = require('./components/modallogin');
var ModalR = require('./components/modalregister');


class Main extends React.Component {
  render() {

    console.log("\nIndex Page Rendered")



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



module.exports = Main;