var React = require('react');

class CardProfile extends React.Component {
  render() {
    console.log("<Profile Card> Added")
    // console.log(this.props.user)
    const name = this.props.user.name
    const id = this.props.user.id
    const userId = "user"+id
    const loginTime = this.props.user.lastLogin
    const refreshTime = new Date();
    console.log(loginTime)
    console.log(refreshTime)

    if (loginTime < refreshTime) {
        refreshTime.setDate(refreshTime.getDate() + 1);
    }
    var diff = refreshTime - loginTime;
    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    console.log(hh, mm, ss)

    return (

            <div className="card bg-light text-dark rounded mb-2">
                <div className="card-header">
                    <h4 className="mb-0" id ={userId}>Welcome {name}</h4>
                </div>
                <div className="card-body">

                    <div className="justify-contents-center">
                        <h6>Add your bio details to make your profile more legit.</h6>

                        <h6>Some Data: Some More Data:</h6>
                        <h6>Some Some More Data: </h6>
                        <h6>Some Some More More Data:</h6>
                        <a role="button" className="btn btn-s btn-success text-uppercase my-2 mx-2"data-toggle="modal" data-target="#modalProfile" href="">Details</a>
                    </div>
                    <p className="card-text m-0"><small className="text-muted">Last login 3 mins ago</small></p>
                    <p className="card-text m-0"><small className="text-muted">Last updated {mm} mins , {ss} secs ago</small></p>
                </div>
            </div>

    );
  }
}

module.exports = CardProfile;