var React = require('react');

class CardShelf extends React.Component {
  render() {
    console.log("<Profile Nav> Added")
    // console.log(this.props.user)

    return (
            <div className="card border-success my-2">
                <div className="card-header d-flex justify-content-between">
                    <h5>Your Feeds</h5>
                    <button type="button" className="close" data-toggle="modal" data-target="#modalAdd" href="" ><span aria-hidden="true">&#43;</span></button>
                </div>
                <div className="card-body">

                </div>
            </div>


    );
  }
}

module.exports = CardShelf;