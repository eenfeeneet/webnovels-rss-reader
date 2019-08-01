var React = require("react");

class ModalLogout extends React.Component {
  render() {

    return (
    <div className="modal fade " id="modalLogOut" tabIndex="-1" role="dialog" aria-labelledby="modalLogIn" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content bg-secondary border-success">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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