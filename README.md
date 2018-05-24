## Qabler

参考[Tabler](https://tabler.github.io/tabler/index.html)的项目，使用Vue技术栈来实现。

#### 封装的组件 (点击组件类型跳转到组件详情) 

**[Alert](#alert)**

- `q-basic-alert`
- `q-icon-alert`
- `q-action-alert`

--

**[Avatar](#avatar)**

- `q-avatars`

---

#### 组件详细信息

**<span id="alert">Alert</span>**

**`q-basic-alert`**

基础的alert组件，API：

|  参数   |      说明      |  类型 | 默认值 |
|:----------|:-------------|:------:|:-----|
| text | alert框中的文本  | String| '' |
| type |   alert框类型: primary, secondary, success, info, warning, danger   |  String | primary |

使用：

```javascript
<q-basic-alert :text="danger" type="danger">
</q-basic-alert>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/q-basic-avatar.jpeg)

--

**`q-icon-alert`**

在`q-basic-alert`的基础上可以增加`icon`，`avatar`等图标类型，以slot的方式添加

使用：

```javascript
<q-icon-alert :text="iconDanger" type="danger">
  <a-icon type="warning" slot="icon"/>
</q-icon-alert>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/q-icon-avatar.jpeg)

--

`q-action-alert`

在`q-basic-alert`的基础上添加确认和取消按钮，按钮的文字可以自己设置，按钮的事件可以自定义，API：

|  参数   |      说明      |  类型 | 默认值 |
|:----------|:-------------|:------|:-----|
| text | alert框中的文本  | String| '' |
| type |   alert框类型: primary, secondary, success, info, warning, danger   |  String | primary |
| enter-text | 确认按钮的文本 | String | Enter |
| cancel-text | 取消按钮的文本 | String | Cancel |
| enter-handler | 确认按钮的事件 | Function | alert('Enter 确认') |
| cancel-handler | 取消按钮的事件 | Function | alert('Cancel 取消') |

使用：

```javascript
<q-action-alert 
	:text="actionText1" 
	type="primary" 
	enter-text="primary 确认" 
	cancel-text="primary 取消" 
	:enter-handler="enterPrimary" 
	:cancel-handler="cancelPrimary">
</q-action-alert>

methods: {
  enterPrimary() {
    alert('传递事件 -> primary enter click')
  },
  cancelPrimary() {
    alert('传递事件 -> primary cancel click')
  }
}
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/q-action-avatar.gif)

--

**<span id="avatar">Avatar</span>**

**`q-avatars`**

显示头像的组件：包括默认头像、不同大小的头像、如果没有图片则文字占位的头像、有状态的头像。

|  参数   |      说明      |  类型 | 默认值 |
|:----------|:-------------|:------|:-----|
| text | 占位文字  | String| '' |
| color |  占位文字的颜色, `avatar-`前缀：blue, azure, indigo, purple, pink, red, orange, yellow, lime, green, teal, cyan, gray, dark-gray  |  String | avatar-blue |
| size | avatar大小, `avatar-`前缀: sm, md, lg, xl, xxl | String | avatar |
| status | 是否有状态，状态颜色用上面的color | Boolean |false |

使用：

`simple-avatar`

```javascript
<q-avatars>
  <img src="1.jpg" alt="" slot="avatar">
</q-avatars>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/avatar-simple.png)

`size-avatar`

```javascript
<q-avatars size="avatar-sm">
  <img src="1.jpg" alt="" slot="avatar">
</q-avatars>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/avatar-size.png)

`status-avatar`

```javascript
<q-avatars :status="true" color="avatar-red">
  <img src="1.jpg" alt="" slot="avatar">
</q-avatars>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/avatar-status.png)

`placeholder-avatar`

```
<q-avatars text="PH" color="avatar-red" size="avatar-sm">
</q-avatars>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/avatar-placeholder.png)
