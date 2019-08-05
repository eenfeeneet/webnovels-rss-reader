var React = require("react");

class ModalEdit extends React.Component {
  render() {
    const closeSrc = "/icons/close.svg"
    const userName = this.props.user.name
    const userId = this.props.user.id
    const formUrl = "/webnosser/"+userName+"/feeds/"+userId+"?_method=PUT";

    return (
    <div className="modal fade text-dark " id="modalAdd" tabIndex="-1" role="dialog" aria-labelledby="modalAdd" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content bg-secondary border-success">
                <div className="modal-header align-items-center">
                    <h1 className="m-0">Edit</h1>
                    <button type="button" className="close text-dark" data-dismiss="modal" aria-label="Close"><img src={closeSrc} alt="" height="25"/></button>
                </div>
                <div className="modal-body bg-secondary">
                    <div className="myform form bg-secondary">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h1>EDIT NOVEL</h1>
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
                                <button type="submit" id="btn-add" className=" btn btn-light mybtn tx-tfm">EDIT</button>
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