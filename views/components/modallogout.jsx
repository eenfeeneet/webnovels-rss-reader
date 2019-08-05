var React = require("react");

class ModalLogout extends React.Component {
  render() {
    const closeSrc = "/icons/close.svg"
    return (
    <div className="modal fade " id="modalLogOut" tabIndex="-1" role="dialog" aria-labelledby="modalLogIn" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content bg-secondary border-success">
                <div className="modal-header align-items-center">
                    <h1 className="m-0">Log Out</h1>
                    <button type="button" className="close text-dark" data-dismiss="modal" aria-label="Close"><img src={closeSrc} alt="" height="25"/></button>
                </div>
                <div className="modal-body bg-secondary">
                    <h4>Are you sure you want to sign out?</h4>
                </div>
                <div className="modal-footer ">
                    <a type="button" className="btn btn-outline-success mx-auto" href="/webnosser/logout">Confirm</a>
                </div>
            </div>
        </div>
    </div>


    );
  }
}

module.exports = ModalLogout;