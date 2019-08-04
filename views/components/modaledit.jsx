var React = require("react");

class ModalEdit extends React.Component {
  render() {

    const name = this.props.user.name
    const id = this.props.user.id
    const formUrl = "/webnosser/"+id+"/novels/add"

    return (
    <div className="modal fade text-dark " id="modalAdd" tabIndex="-1" role="dialog" aria-labelledby="modalAdd" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content bg-secondary border-success">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div className="modal-body bg-secondary">
                    <div className="myform form bg-secondary">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h1>ADD NOVEL</h1>
                            </div>
                        </div>

                        <form action={formUrl} method="post">
                            <div className="form-group">
                                <label htmlFor="inputNovelTitle">Title</label>
                                <input type="text" name="name"  className="form-control" id="novel-title" placeholder="Enter Novel Title" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">RSS Code</label>
                                <input type="url" name="url" id="url-link" className="form-control" placeholder="Enter RSS" required/>
                            </div>

                            <div className="col-md-12 text-center ">
                                <button type="submit" id="btn-add" className=" btn btn-light mybtn tx-tfm">ADD</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>


    );
  }
}

module.exports = ModalEdit;