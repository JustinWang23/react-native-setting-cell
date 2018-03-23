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
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

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
    return (
      <View />
    );
  }
}

/* Export Module */
module.exports = SettingCell;
