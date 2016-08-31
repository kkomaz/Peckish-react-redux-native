import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const {
  View,
  Text,
  TouchableHighlight,
} = ReactNative;

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.addRecipe = this.addRecipe.bind(this);
  }

  addRecipe() {
    this.props.addRecipe();
  }

  render() {
    return (
      <View>
        <Text style={{ marginTop: 20 }}>
          I am App Container!
        </Text>
        <TouchableHighlight onPress={this.addRecipe}>
          <Text>
            Add Recipe
          </Text>
        </TouchableHighlight>
        <Text>
          {this.props.recipeCount}
        </Text>
      </View>
    );
  }
}

const { func, number } = React.PropTypes;

AppContainer.propTypes = {
  addRecipe: func,
  recipeCount: number,
};

function mapStateToProps(state) {
  return {
    recipeCount: state.recipeCount,
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(AppContainer);
