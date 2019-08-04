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
            return (<a type="button" id={btnid} className="list-group-item list-group-item-action bg-light foo" src={novel.url} > {novel.name} </a>)
        })
    }

    return (
            <div className="card bg-light border-primary text-dark my-2">
                <div className="list-group" id="feed-list">
                    <div className="card-header d-flex justify-content-between">
                        <p>Your Feeds</p>
                        <button type="button" className="close" data-toggle="modal" data-target="#modalAdd" href="" ><i className="fas fa-cog text-danger"></i></button>
                    </div>
                    {novelsList}
                </div>
            </div>


    );
  }
}

module.exports = CardFeeds;


//<a type="button" className="btn btn-link" href="" ><i class="fas fa-cog"></i></a>
//