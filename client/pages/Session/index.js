import React from 'react';
import {connect} from 'react-redux';
import Button from '../../components/Button';
import Square from '../../components/Square';
import {requestSquares, setActiveSquares, checkSquare, resetSquares} from '../../core/modules/squares/squaresActions';

class Session extends React.Component {
  componentWillMount() {
    this.props.requestSquares();
  }

  render() {
    return (
      <div>
        <h4>Round { this.props.round }</h4>
        <div className="squares">
          {this.props.squares ?
            this.props.squares.map((square, i) => (
              <Square
                key={i}
                className={this.props.enabled === i ? "active" : null}
                click={() => this.props.checkSquare(i)}
              />
            ))
            : null
          }
        </div>

        <div className="row">
          <div className="col-xs-12 text-center">
            <h5>Your score: { this.props.score }</h5>
            <Button className="btn btn-success" title="Show" click={() => this.props.setActiveSquares()}/>
            <Button className="btn btn-primary" title="Try again" click={() => this.props.resetSquares()}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  round: state.settings.get('round'),
  squares: state.squares.get('squares'),
  enabled: state.squares.get('enabled'),
  score: state.score,
});

const mapDispatchToProps = dispatch => ({
  requestSquares: () => dispatch(requestSquares()),
  setActiveSquares: () => dispatch(setActiveSquares()),
  checkSquare: (squareKey) => dispatch(checkSquare(squareKey)),
  resetSquares: () => dispatch(resetSquares()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Session);
