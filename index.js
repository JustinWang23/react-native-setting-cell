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

    const { text, subText, icon } from this.props;
    const { onPress } from this.props;

    let iconView;
    if (icon) {
      iconView = (
        <Image
          style={styles.icon}
          source={icon}
        />
      )
    }

    let subTextView;
    if (subText) {
      subTextView = (
        <Text style={styles.sub-text}>
          {subText}
        </Text>
      )
    }

    let content;
    if (onPress) {
      content = (
        <TouchableHighlight
          onPress={onPress}
          style={styles.container}
        >

        </TouchableHighlight>
      )
    } else {
      content = {
        <View style={styles.container}>
          
        </View>
      }
    }

    return (
      <View />
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  icon: {

  },
})

/* Export Module */
module.exports = SettingCell;
