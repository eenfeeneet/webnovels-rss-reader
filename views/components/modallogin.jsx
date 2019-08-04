var React = require("react");

class ModalLogin extends React.Component {
  render() {

    return (
    <div className="modal fade text-dark " id="modalLogIn" tabIndex="-1" role="dialog" aria-labelledby="modalLogIn" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content bg-secondary border-success">
                <div className="modal-header">
                    <button type="button" className="close text-dark" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div className="modal-body bg-secondary">
                    <div id="first">
                        <div className="myform form bg-secondary">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Login</h1>
                                </div>
                            </div>

                            <form action="/webnosser/login" method="post" name="login">
                                <div className="form-group">
                                    <label htmlFor="inputUsername">User Name</label>
                                    <input type="text" name="name"  className="form-control" id="username-log" placeholder="Enter User Name" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" name="password" id="password-log"  className="form-control" placeholder="Enter Password" required/>
                                </div>

                                <div className="col-md-12 text-center ">
                                    <button type="submit" className=" btn btn-light mybtn tx-tfm">Login</button>
                                </div>
                                <div className="form-group">
                                    <p className="text-center">Don't have account? <a className="text-danger" data-toggle="modal" data-target="#modalRegister" href="" aria-hidden="true">Sign up here</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    );
  }
}

module.exports = ModalLogin;