var React = require('react');

class CardFeeds extends React.Component {
  render() {
    console.log("<Feeds Card> Added")
    // console.log(this.props.user)
    const name = this.props.user.name;
    const id = this.props.user.id;
    const novels = this.props.novels;
    const settingSrc = "/icons/settings.svg"
    let novelsList;
    //console.log(this.props.novels)

    const url = "/webnosser/"+name+"/feeds"
    if(novels === false){
        novelsList = (<a type="button" id="btn-add" className="list-group-item list-group-item-action"> Start adding to your list </a>)
    } else{
        novelsList = novels.map(novel=>{
            let btnid = "btn"+novel.novel_id
            return (<a type="button" id={btnid} className="bg-light rounded feed p-1" src={novel.url} ><li className="list-group-item"> {novel.name} </li></a>)
        })
    }

    return (
    <div className="card bg-light text-dark my-2">
        <div className="panel-group">
            <div className="panel panel-default">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <a role="button" href="" className="btn" data-toggle="collapse" data-target="#collapse1"><h5 className="mb-0 text-dark"> Your Feeds </h5></a>
                    <a role="button" href={url} ><img src={settingSrc} alt="" height="22"/></a>
                </div>

                <div id="collapse1" className="panel-collapse collapse">
                    <ul className="list-group">
                        {novelsList}
                    </ul>
                </div>

            </div>
        </div>
    </div>
    );
  }
}

module.exports = CardFeeds;


// <div className="card bg-light text-dark my-2">
//                 <div className="list-group" id="feed-list">
//                     <div className="card-header d-flex justify-content-between">
//                         <h4 className="mb-0"><a data-toggle="collapse" href="#collapse1"> Your Feeds </a></h4>
//                         <a role="button" href={url}  data-toggle="tooltip" data-placement="top" title="" data-original-title="Manage Your Feeds"><i className="fas fa-cog fa-lg text-dark"></i></a>
//                     </div>
//                     {novelsList}
//                 </div>
//             </div>

//                 <div className="panel-heading">
//                     <h4 className="panel-title">
//                         <a data-toggle="collapse" href="#collapse1">Collapsible list group</a>
//                     </h4>
//                 </div>

// <a type="button" className="btn btn-link" href="" ><i class="fas fa-cog"></i></a>