var React = require('react');

class CardContent extends React.Component {
  render() {
    console.log("<CardContent> Added")

    if(novels === false){
        novelsList = (<a type="button" id="btn-add" className="list-group-item list-group-item-action"> Start adding to your list </a>)
    } else{
        novelsList = novels.map(novel=>{
            let btnid = "btn"+novel.novel_id
            return (<a type="button" id={btnid} className="list-group-item list-group-item-action bg-light foo" src={novel.url} > {novel.name} </a>)
        })
    }


    return (

            <div className="card border-success min-vh-100 align-items-stretch ">
                <div className="card-header">Your Feed</div>
                <div className="card-body overflow-auto" id="content">

                    {novelsList}
                </div>
            </div>

    );
  }
}

module.exports = CardContent;