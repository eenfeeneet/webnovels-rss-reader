var React = require('react');

class CardMain extends React.Component {
  render() {
    console.log("<CardContent> Added")


    return (

            <div className="card bg-light rounded min-vh-100 align-items-stretch text-dark">
                <div className="card-header"><h4 className="mb-0">Main</h4></div>
                <div className="card-body overflow-auto" id="content">
                    {this.props.children}

                </div>
            </div>

    );
  }
}

module.exports = CardMain;