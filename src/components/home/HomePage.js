import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import { changeState } from '../../actions';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.changeState('homepage');
  }

  pushButton() {
    this.props.changeState('aboutpage');
  }

  render() {
    return (
      <div>
        <h1>React-Redux Boilerplate</h1>
        <Link to="about" className="btn btn-primary btn-lg" onClick={this.pushButton.bind(this)}>Test redux state change</Link>
      </div>
    );
  }
}

HomePage.propTypes = {
  status: React.PropTypes.string.isRequired,
  changeState: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return { status: state.appstate.page };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeState: (pagename) => {
       dispatch(changeState(pagename));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
