var React = require('react');

class CardFeeds extends React.Component {
  render() {
    console.log("<Feeds List> Added")
    // console.log(this.props.user)
    const name = this.props.user.name;
    const id = this.props.user.id;
    const novels = this.props.novels;
    let novelsList;
    console.log(this.props.novels)

    const url = "/webnosser/"+name+"/feeds"
    if(novels === false){
        novelsList = (<a type="button" id="btn-add" className="list-group-item list-group-item-action"> Start adding to your list </a>)
    } else{
        novelsList = novels.map(novel=>{
            let btnid = "btn"+novel.novel_id
            return (<a type="button" id={btnid} className="list-group-item list-group-item-action bg-light rounded feed" src={novel.url} > {novel.name} </a>)
        })
    }

    return (
            <div className="card bg-light text-dark my-2">
                <div className="list-group" id="feed-list">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="mb-0">Your Feeds</h4>
                        <a role="button" href={url}  data-toggle="tooltip" data-placement="top" title="" data-original-title="Manage Your Feeds"><i className="fas fa-cog fa-lg text-dark"></i></a>
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