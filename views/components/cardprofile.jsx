var React = require('react');

class ProfileCard extends React.Component {
  render() {
    console.log("<Profile Card> Added")
    // console.log(this.props.user)
    const name = this.props.user.name
    const id = this.props.user.id
    const userId = "user"+id
    return (

            <div className="card bg-light text-dark rounded">
                <div class="card-header">
                    <h4 className="mb-0" id ={userId}>Welcome {name}</h4>
                </div>
                <div className="card-body">

                    <div>
                        <h6>Some Data</h6>
                        <h6>Some More Data</h6>
                        <h6>Some Some More Data</h6>
                        <h6>Some </h6>
                        <button type="submit" className="btn btn-outline-success my-2" id="settings">Submit</button>
                    </div>
                </div>
            </div>

    );
  }
}

module.exports = ProfileCard;