var React = require('react');

class CardFeedSettings extends React.Component {
  render() {
    console.log("<Feed Settings Card> Added")
    // console.log(this.props.novels)
    // console.log(this.props.user)
    const userName = this.props.user.name
    console.log("\n ==[ User Name ]== \n")
    console.log(userName)
    const userData = this.props.user
    console.log("\n ==[ User Data ]== \n")
    console.log(userData)
    const userNovels = this.props.novels
    console.log("\n ==[ User Novels ]== \n")
    console.log(userNovels)

    const followfeedSrc = "/icons/followfeed.svg"
    const unfollowfeedSrc = "/icons/unfollowfeed.svg"
    const uploadSrc = "/icons/upload.svg"
    const editSrc = "/icons/edit.svg"
    const deleteSrc = "/icons/delete.svg"

    const data = {
        userId: this.props.user.id,
        uName: this.props.user.name,
        novels: this.props.novels
    }

    let uploadList;
    let followingList;
    let novelsList;
    if(data.novels === false){
        novelsList = (<a type="button" id="btn-add" className="list-group-item list-group-item-action"> Start adding to your list </a>)
    } else{
        uploadList = data.novels.map(novel=>{
            let btnid = "btn"+novel.novel_id
            let deleteUrl = "/webnosser/"+data.uName+"/feeds/"+novel.novel_id+"/delete/?_method=DELETE";
            let editBtn = "edit-"+btnid
            if(novel.uploader_id === data.userId){
                return (
                    <li className="list-group-item d-flex justify-content-between align-items-center p-2" id={btnid} src={novel.url}>
                        <a className="mr-auto">{novel.name}</a>
                        <form action={deleteUrl} method="POST">
                            <button className="btn btn-link ml-3" type="submit"><img src={deleteSrc} alt="" height="20"/></button>
                        </form>
                    </li>
                )
            }
        })
        followingList = data.novels.map(novel=>{
            let btnid = "btn"+novel.novel_id
            let unfollowUrl = "/webnosser/"+data.uName+"/feeds/"+novel.novel_id+"/unfollow/?_method=DELETE";

            if(novel.uploader_id !== data.userId){
                return (
                    <li className="list-group-item d-flex justify-content-between align-items-center p-2" id={btnid} src={novel.url}>
                        <a className="mr-auto">{novel.name}</a>
                        <form action={unfollowUrl} method="POST">
                            <button className="btn btn-link ml-2" type="submit"><img src={unfollowfeedSrc} alt="" height="20"/></button>
                        </form>
                    </li>
                )
            }
        })
    }


    return (

            <div className="card bg-light rounded min-vh-100 align-items-stretch text-dark">
                <div className="card-header d-flex justify-content-between align-items-center">
                    Manage Your Feeds


                </div>
                <div className="card-body overflow-auto" id="content">

                    <div className="card bg-light text-dark my-2">
                        <div className="panel-group">
                            <div className="panel panel-default">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <a role="button" href="" className="btn" data-toggle="collapse" data-target="#collapseUploads"><h5 className="mb-0 text-dark"> Your Uploads </h5></a>
                    <button type="button" className="btn btn-link" data-toggle="modal" data-target="#modalAdd" >
                        <img src={uploadSrc} alt="" height="20"/>
                    </button>
                                </div>

                                <div id="collapseUploads" className="panel-collapse collapse">
                                    <ul className="list-group">
                                        {uploadList}
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="card bg-light text-dark my-2">
                        <div className="panel-group">
                            <div className="panel panel-default">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <a role="button" href="" className="btn" data-toggle="collapse" data-target="#collapseFollowing"><h5 className="mb-0 text-dark"> Following Feeds </h5></a>
                                    <button type="button" className="btn btn-link" data-toggle="modal" data-target="#modalAdd" >
                                        <img src={followfeedSrc} alt="" height="20"/>
                                    </button>
                                </div>

                                <div id="collapseFollowing" className="panel-collapse collapse">
                                    <ul className="list-group">
                                        {followingList}
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
  }
}

module.exports = CardFeedSettings;



// <div className="card bg-light rounded min-vh-100 align-items-stretch text-dark">
//                         <div className="card-header d-flex justify-content-between align-items-center">
//                             Uploads
//                             <button type="button" className="btn btn-link" data-toggle="modal" data-target="#modalAdd" >
//                             <i className="fas fa-plus fa-lg text-dark" ></i>
//                             </button>
//                         </div>
//                         <div className="card-body overflow-auto" id="content">

//                             <ul class="list-group">

//                             {novelsList}
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="card bg-light rounded min-vh-100 align-items-stretch text-dark mt-2">
//                         <div className="card-header d-flex justify-content-between align-items-center">
//                             Following
//                             <button type="button" className="btn btn-link" data-toggle="modal" data-target="#modalAdd" >
//                             <i className="fas fa-plus fa-lg text-dark" ></i>
//                             </button>
//                         </div>
//                         <div className="card-body overflow-auto" id="content">

//                             <ul class="list-group">

//                             {novelsList}
//                             </ul>
//                         </div>
//                     </div>