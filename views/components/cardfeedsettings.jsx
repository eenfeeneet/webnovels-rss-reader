var React = require('react');

class CardContent extends React.Component {
  render() {
    console.log("<Feed Settings> Added")
    console.log(this.props.novels)
    console.log(this.props.user)

    const data = {
        uId: this.props.user.id,
        uName: this.props.user.name,
        novels: this.props.novels
    }
    console.log(data)

    let novelsList;

    if(data.novels === false){
        novelsList = (<a type="button" id="btn-add" className="list-group-item list-group-item-action"> Start adding to your list </a>)
    } else{
        novelsList = data.novels.map(novel=>{
            let btnid = "btn"+novel.novel_id

            let deleteUrl = "/webnosser/"+data.uName+"/feeds/"+novel.novel_id+"?_method=DELETE";
            return (
                <form action={deleteUrl} method="POST">
                    <li class="list-group-item d-flex justify-content-between align-items-center" id={btnid} src={novel.url}>
                        <a className="mr-auto">{novel.name}</a>
                        <a role="button" id="check" className="mx-2" href="" ><i className="far fa-edit fa-lg text-dark"></i></a>
                        <button className="btn btn-link mx-2 delfeed" type="submit"><i className="far fa-trash-alt fa-lg text-dark"></i></button>
                    </li>
                </form>



                )
        })
    }


    return (

            <div className="card bg-light rounded min-vh-100 align-items-stretch text-dark">
                <div className="card-header d-flex justify-content-between align-items-center">
                    Your Feed
                    <button type="button" className="btn btn-link" data-toggle="modal" data-target="#modalAdd" >
                        <i className="fas fa-plus fa-lg text-dark" ></i>
                    </button>

                </div>
                <div className="card-body overflow-auto" id="content">
                    <ul class="list-group">

                    {novelsList}
                    </ul>
                </div>
            </div>

    );
  }
}

module.exports = CardContent;