var React = require('react');

class CardSearch extends React.Component {
  render() {
    console.log("<Feeds List> Added")
    // console.log(this.props.user)
    // const name = this.props.user.name;
    // const id = this.props.user.id;
    // const novels = this.props.novels;
    // let novelsList;
    // console.log(this.props.novels)



    return (
            <div className="card bg-light text-dark my-2">
                <div className="list-group" id="feed-list">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="mb-0">Search</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <fieldset>
                                <div className="form-group text-center mb-0">

                                        <input type="text" className="form-control" id="search" value="" placeholder="Search"/>

                                        <button type="submit" className="btn btn-primary mt-2">Submit</button>

                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>


    );
  }
}

module.exports = CardSearch;


<form>
  <fieldset>

    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>

  </fieldset>
</form>