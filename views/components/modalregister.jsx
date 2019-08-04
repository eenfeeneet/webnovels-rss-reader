var React = require("react");

class ModalRegister extends React.Component {
  render() {

    return (
    <div className="modal fade text-dark" id="modalRegister" tabIndex="-1" role="dialog" aria-labelledby="modalRegister" aria-hidden="true">
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
                                    <h1 >Register</h1>
                                </div>
                            </div>

                            <form action="/webnosser/register" method="post" name="register">
                                <div className="form-group">
                                    <label htmlFor="inputUsername">First Name</label>
                                    <input type="text"  name="name" className="form-control" id="username-reg" placeholder="Enter User Name" minLength="3" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" name="password" id="password-reg" className="form-control" placeholder="Enter Password" minLength="4" required/>
                                </div>

                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-light mybtn tx-tfm">Register For Free</button>
                                </div>
                                <div className="form-group">
                                    <p className="text-center text-dark"><a className="text-danger" data-toggle="modal" data-target="#modalLogIn" href="" aria-hidden="true">Already have an account?</a></p>
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

module.exports = ModalRegister;