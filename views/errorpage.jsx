var React = require('react');

var Head = require('./components/head');
var ModalError = require('./components/errorprompt');


class Home extends React.Component {
  render() {

    console.log("\Error")
    const errorMsg = this.props.msg



    return (
        <html>
        <Head/>
        <body className="vertical-center">
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col-8 mx-auto">

                        <div className="jumbotron border-danger">
                            <h1 className="display-3">Oops, something went wrong!!</h1>
                            <p className="lead">error</p>
                            <hr className="my-4"/>

                            <p className="lead">
                                <a className="btn btn-outline-success btn-lg" href="/webnosser" role="button">Return to HOME</a>
                                <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="place some text here" data-original-title="Tooltip on top">Top</button>
                                <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>

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