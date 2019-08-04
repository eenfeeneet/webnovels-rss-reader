var React = require('react');

class CardContent extends React.Component {
  render() {
    console.log("<CardContent> Added")


    return (

            <div className="card bg-light border-primary rounded min-vh-100 align-items-stretch ">
                <div className="card-header">Your Feed</div>
                <div className="card-body overflow-auto" id="content">


                </div>
            </div>

    );
  }
}

module.exports = CardContent;