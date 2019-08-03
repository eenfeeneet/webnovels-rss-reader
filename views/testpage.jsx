var React = require('react');

var Head = require('./components/head');

var Modalsuccess = require('./components/modalsuccess');

class Test extends React.Component {
  render() {

    console.log("\nTest Page rendered")



    return (
        <html>
        <Head/>
        <body className="vertical-center">
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col-8 mx-auto">
                    test
                        <a className="btn btn-outline-danger btn-lg" href="/webnosser/error" role="button">Return to MAIN</a>

                        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false">
                        <div className="toast-header">
                        <img src="..." className="rounded mr-2" alt="..."/>
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="toast-body">
                        Hello, world! This is a toast message.
                        </div>
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



module.exports = Test;