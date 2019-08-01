var React = require("react");

class ModalError extends React.Component {
  render() {
    const errorMsg = this.props.msg

    return (

        <div className="alert alert-dismissible alert-danger w-50">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
        </div>

    );
  }
}

module.exports = ModalError;