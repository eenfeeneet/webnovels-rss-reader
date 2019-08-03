var React = require('react');

class ProfileCard extends React.Component {
  render() {
    console.log("<Profile Card> Added")
    // console.log(this.props.user)
    const name = this.props.user.name
    const id = this.props.user.id
    const userId = "user"+id
    return (

            <div className="card border-success">
                <div className="card-body">
                <h4>Welcome</h4>
                <h5 id ={userId}>{name}</h5>
                    <div>
                        <h6>Some Data</h6>
                        <h6>Some More Data</h6>
                        <h6>Some Some More Data</h6>
                        <h6>Some Some More More Data</h6>
                        <button type="submit" className="btn btn-outline-success my-2">Submit</button>
                    </div>
                </div>
            </div>

    );
  }
}

module.exports = ProfileCard;