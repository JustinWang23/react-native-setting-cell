# react-native-setting-cell

封装了一个react-native的组件，类似设置页面的设置项或者个人信息里的信息项，通过传参的变化，灵活生成对应的样式，方便开发。

![介绍GIF](./intro.gif)

## 使用

### 1.纯文本

```
<SettingCell text='标题' subText='文本'/>
```

### 2.带图标的文本

```
<SettingCell text='标题' icon={require('./icon/home.png')}/>
```

### 3.带跳转的文本

```
<SettingCell text='标题' onPress={()=>{alert(1)}}/>
```

### 4.带开关的文本

```
<SettingCell text='标题' mode='Switch' onChange={(val) => {alert(val)}}/>
```

## Todo

* 增加各个组件的样式修改
