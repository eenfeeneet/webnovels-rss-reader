var React = require("react");

class ModalDelete extends React.Component {
  render() {

    const name = this.props.user.name
    const id = this.props.user.id
    const formUrl = "/webnosser/"+id+"/novels/add"

    return (
    <div className="modal fade text-dark " id="modalConfirm" tabIndex="-1" role="dialog" aria-labelledby="modalConfirm" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content bg-secondary border-success">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div className="modal-body bg-secondary">
                    <div className="myform form bg-secondary">
                        <p>Are You Sure You want to unfollow feed</p>
                        <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    );
  }
}

module.exports = ModalDelete;