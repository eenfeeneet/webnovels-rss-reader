var React = require("react");

class ModalAdd extends React.Component {
  render() {
    const closeSrc = "/icons/close.svg"
    const name = this.props.user.name
    const userId = this.props.user.id
    const formUrl = "/webnosser/"+name+"/feeds/add"

    return (
    <div className="modal fade text-dark " id="modalAdd" tabIndex="-1" role="dialog" aria-labelledby="modalAdd" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content bg-secondary border-success">
                <div className="modal-header align-items-center">
                    <h1 className="m-0">ADD FEED</h1>
                    <button type="button" className="close text-dark" data-dismiss="modal" aria-label="Close"><img src={closeSrc} alt="" height="25"/></button>
                </div>
                <div className="modal-body bg-secondary">
                    <div className="myform form bg-secondary">
                        <form action={formUrl} method="post">
                            <div className="form-group">
                                <label htmlFor="inputNovelTitle">Title</label>
                                <input type="text" name="name"  className="form-control" id="novel-title" placeholder="Enter Novel Title" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputRss">RSS Code</label>
                                <input type="url" name="url" id="url-link" className="form-control" placeholder="Enter RSS" required/>
                            </div>
                            <div className="form-group d-none">
                                <label htmlFor="inputUId">inputUId</label>
                                <input type="url" name="uId" id="userId" className="form-control" value={userId} readOnly required/>
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

module.exports = ModalAdd;