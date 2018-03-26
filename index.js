/**
 * react-native-setting-cell
 *
 * 封装RN的Cell组件，用于设置页面的设置项及个人信息页的信息项。
 * a cell component for setting page or info page.
 *
 * @Author: JustinWang
 */
'use strict';

/* Import Module */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
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

/* Setting Cell */
class SettingCell extends Component {
  // Constructor Function
  constructor(props) {
    super(props);

    this.state = {};
  }

  // Prop Types
  static propTypes = {
    text: PropTypes.string.isRequired,
    subText: PropTypes.string,
    icon: PropTypes.string,
    onPress: PropTypes.func,
  }

  // Default Props
  static defaultProps = {
    text: 'SettingText',
  }

  render() {

    const { text, subText, icon } = this.props;
    const { onPress } = this.props;

    let iconView;
    if (icon) {
      iconView = (
        <Image
          style={styles.icon}
          source={icon}
        />
      );
    }

    let subTextView;
    if (subText) {
      subTextView = (
        <Text style={styles.sub_text}>
          {subText}
        </Text>
      );
    }

    let content;
    if (onPress) {
      content = (
        <TouchableHighlight
          onPress={onPress}
          style={[styles.container, styles.row]}
        >
          <View style={[styles.left_area, styles.row]}>
            {iconView}
            <Text style={styles.text}>
              {text}
            </Text>
          </View>
          <View style={[styles.right_area, styles.row]}>
            {subTextView}
            <Image
              style={styles.right_arrow}
              source={require('./imgs/right_arrow.png')}
            />
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
            <Image
              style={styles.right_arrow}
              source={require('../assets/right_arrow.png')}
            />
          </View>
        </View>
      );
    }

    return (
      {content}
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
    marginRight: 15,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
  sub_text: {
    color: '#b3b3b3',
  },
  right_arrow: {
    height: ARROW_HEIGHT,
    width: ARROW_WIDTH,
    marginLeft: 15,
    resizeMode: 'contain',
  },
});

/* Export Module */
module.exports = SettingCell;
