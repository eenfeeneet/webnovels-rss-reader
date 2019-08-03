var React = require("react");

class ModalAdd extends React.Component {
  render() {

    const name = this.props.user.name
    const id = this.props.user.id
    const formUrl = "/webnosser/"+id+"/novels/add"

    return (
    <div className="modal fade " id="modalAdd" tabIndex="-1" role="dialog" aria-labelledby="modalAdd" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content bg-secondary border-success">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div className="modal-body bg-secondary">


                </div>
            </div>
        </div>
    </div>


    );
  }
}

module.exports = ModalAdd;