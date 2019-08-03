var React = require('react');

var Head = require('./components/head');



class Root extends React.Component {
  render() {

    console.log("\Welcome Page Rendered now")

    return (
        <html>
        <Head/>
        <body className="vertical-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <div className="jumbotron">
                            <h3 className="display-4 text-center">Welcome to WebNoSSer</h3>
                            <hr className="my-3"/>
                            <h5 className="display-6 text-center">A dummy account username: jim, password: 0000 has been set</h5>
                            <p className="lead text-center">To add an rss feed, go to www.royalroad.com and get the rss of any novels you like</p>

                            <hr className="my-2"/>

                            <p className="lead text-center">
                                <a className="btn btn-outline-danger btn-lg" href="/webnosser" role="button">Proceed</a>


                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <script src="/script.js"></script>
        </body>
        </html>
      );
  }
}



module.exports = Root;