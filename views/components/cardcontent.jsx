var React = require('react');

class CardContent extends React.Component {
  render() {
    console.log("<NavSide> Added")
    return (

            <div className="card border-success h-100 align-items-stretch overflow-auto">
                <div className="card-header">Tweed Feed</div>
                <div className="card-body">
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>

                </div>
            </div>

    );
  }
}

module.exports = CardContent;