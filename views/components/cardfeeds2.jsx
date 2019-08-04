var React = require('react');

class CardFeeds extends React.Component {
  render() {
    console.log("<Profile Nav> Added")
    // console.log(this.props.user)
    const name = this.props.user.name;
    const id = this.props.user.id;
    const novels = this.props.novels;
    let novelsList;
    console.log(this.props.novels)

    if(novels === false){
        novelsList = (<a type="button" id="btn-add" className="list-group-item list-group-item-action"> Start adding to your list </a>)
    } else{
        novelsList = novels.map(novel=>{
            let btnid = "btn"+novel.novel_id
            return (<a type="button" id={btnid} className="list-group-item list-group-item-action foo" src={novel.url} > {novel.name} </a>)
        })
    }

    return (
            <div className="card border-success my-2">
                <div className="accordion" id="accordionExample">

                    <div className="card">
                        <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Followed Feeds
                            </button>
                          </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div className="card-body">
                          </div>
                        </div>


                    </div>
                </div>
            </div>

    );
  }
}

module.exports = CardFeeds;