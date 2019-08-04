var React = require('react');

var Head = require('./components/head');



class Home extends React.Component {
  render() {

    var errorMsg  = this.props.msg;
    var status  = this.props.status;
    console.log(errorMsg)

    console.log("\nError Page Rendered now")

    return (
        <html>
        <Head/>
        <body className="vertical-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mx-auto">

                        <div className="jumbotron shadow-lg">
                            <h4 className="display-4">Oops, something went wrong!!</h4>
                            <hr className="my-3"/>
                            <h5 className="display-6 text-center">{status}</h5>
                            <p className="lead text-center">{errorMsg}</p>

                            <hr className="my-2"/>

                            <p className="lead text-center">
                                <a className="btn btn-outline-danger btn-lg" href="/webnosser" role="button">Return to MAIN</a>


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



module.exports = Home;