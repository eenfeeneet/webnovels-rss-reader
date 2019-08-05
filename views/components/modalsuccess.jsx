var React = require("react");

class ModalSuccess extends React.Component {
  render() {


    return (
<div className="modal fade text-dark" id="modalRegister" tabIndex="-1" role="dialog" aria-labelledby="modalRegister" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered " role="document">
        <div className="modal-content bg-secondary border-success">
            <div className="modal-header">
                <button type="button" className="close text-dark" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body bg-secondary">


            </div>
        </div>
    </div>
</div>

    );
  }
}

module.exports = ModalSuccess;