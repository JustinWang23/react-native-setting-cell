/**
 * react-native-setting-cell
 * 封装RN的Cell组件，用于设置页面的设置项及个人信息页的信息项。
 * a cell component for setting page or info page.
 *
 * Created by JustinWang.
 * Copyright 2018 JustinWang.
 */

/* Import Module */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

// Const
const CELL_HEIGHT = 50;
const ARROW_HEIGHT = 12;
const ARROW_WIDTH = 12;
const ICON_HEIGHT = 22;
const ICON_WIDTH = 22;
const ARROW_IMG = require('./imgs/right_arrow.png');

/* Setting Cell */
class SettingCell extends Component {
  // Prop Types
  static propTypes = {
    text: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['Text', 'Switch']),
    subText: PropTypes.string,
    switchValue: PropTypes.bool,
    icon: PropTypes.number,
    onPress: PropTypes.func,
    onChange: PropTypes.func,
  }

  // Default Props
  static defaultProps = {
    mode: 'Text',
    switchValue: false,
  }

  // Constructor Function
  constructor(props) {
    super(props);

    this.state = {
      switchValue : this.props.switchValue,
    };
  }

  render() {
    const {
      text,
      mode,
      subText,
      icon,
    } = this.props;
    const { onPress, onChange } = this.props;

    let iconView;
    if (icon) {
      iconView = (
        <Image
          style={[styles.icon, styles.image_contain]}
          source={icon}
        />
      );
    }

    let subTextView;
    if (mode === 'Switch') {
      subTextView = (
        <Switch
          value={this.state.switchValue}
          onValueChange={(value) => {
            this.setState({
              switchValue: value,
            });
            onChange(value);
          }}
        />
      );
    } else {
      if (subText) {
        subTextView = (
          <Text style={styles.sub_text}>
            {subText}
          </Text>
        );
      }
    }

    let content;
    if (onPress) {
      content = (
        <TouchableHighlight
          onPress={onPress}
        >
          <View style={[styles.container, styles.row]}>
            <View style={[styles.left_area, styles.row]}>
              {iconView}
              <Text style={styles.text}>
                {text}
              </Text>
            </View>
            <View style={[styles.right_area, styles.row]}>
              {subTextView}
              <Image
                style={[styles.right_arrow, styles.image_contain]}
                source={ARROW_IMG}
              />
            </View>
          </View>
        </TouchableHighlight>
      );
    } else {
      content = (
        <View style={[styles.container, styles.row]}>
          <View style={[styles.left_area, styles.row]}>
            {iconView}
            <Text style={styles.text}>
              {text}
            </Text>
          </View>
          <View style={[styles.right_area, styles.row]}>
            {subTextView}
            <View style={styles.right_arrow} />
          </View>
        </View>
      );
    }

    return (
      <View>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: CELL_HEIGHT,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  left_area: {
    marginLeft: 20,
    alignItems: 'center',
  },
  right_area: {
    marginRight: 10,
    alignItems: 'center',
  },
  icon: {
    height: ICON_HEIGHT,
    width: ICON_WIDTH,
    marginRight: 10,
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
  sub_text: {
    color: '#b3b3b3',
  },
  right_arrow: {
    height: ARROW_HEIGHT,
    width: ARROW_WIDTH,
    marginLeft: 10,
  },
  image_contain: {
    resizeMode: 'contain',
  },
});

/* Export Module */
module.exports = SettingCell;
