var React = require("react");

class HomeHeaeder extends React.Component {
  render() {

    return (

            <div className="row justify-content-center text-light">
                <div className="col-md-3 text-center ">

                    <h1 className="font-weight-bolder">WebNoSSer</h1>

                    <a role="button" className="btn btn-lg btn-success text-uppercase my-2 mx-2"  data-toggle="modal" data-target="#modalLogIn" href="">Login</a>
                    <a role="button" className="btn btn-lg btn-success text-uppercase my-2 mx-2"data-toggle="modal" data-target="#modalRegister" href="">Register</a>

                </div>
            </div>
    );
  }
}

module.exports = HomeHeaeder;