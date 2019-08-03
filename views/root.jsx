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
                    <div className="col-8 mx-auto">

                        <div className="jumbotron">
                            <h3 className="display-4">Welcome to WebNoSSer</h3>
                            <hr className="my-3"/>
                            <h5 className="display-6 text-center">blablablablabla</h5>
                            <p className="lead text-center">blablablablabla</p>

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