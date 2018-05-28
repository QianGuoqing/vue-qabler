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

--

**[Tag](#tag)**

- `q-tag`

--

**[Button](#button)**

- `q-button`

---

**[Card](#card)**

- `q-card`
- `q-raw-card`

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

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/alert-basic.jpeg)

--

**`q-icon-alert`**

在`q-basic-alert`的基础上可以增加`icon`，`avatar`等图标类型，以slot的方式添加

使用：

```javascript
<q-icon-alert :text="iconDanger" type="danger">
  <a-icon type="warning" slot="icon"/>
</q-icon-alert>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/alert-icon.jpeg)

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

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/alert-action.gif)

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

--

**<span id="tag">Tag</span>**

**`q-tag`**

标签组件：包括基础的标签，link标签，color标签，avatar标签

|  参数   |      说明      |  类型 | 默认值 |
|:----------|:-------------|:------|:-----|
| text | 标签文字  | String| '' |
| color |  标签文字的颜色, `tag-`前缀：blue, azure, indigo, purple, pink, red, orange, yellow, lime, green, teal, cyan, gray, dark-gray  |  String | tag-default-color |
| link | 是否有链接效果，link | String |'' |

使用：

`simple-tag`

```javascript
<q-tag text="simple tag"></q-tag>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/tag-simple.jpeg)

`link-tag`

```javascript
<q-tag text="link tag" link="link"></q-tag>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/tag-link.gif)

`color-tag`

```javascript
<q-tag :text="color" link="link" :color="color"></q-tag>

color取值: tag-blue, tag-red ...
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/tag-color.gif)

`avatar-tag`

```javascript
<q-tag text="victoria">
  <img slot="avatar" src="1.jpg" alt="">
</q-tag>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/tag-avatar.jpeg)

--

**<span id="button">Button</span>**

**`q-button`**

按钮标签：包括基础button，不同颜色的button，outline button，不同大小的button，带icon的button，仅仅包含icon的button，以及带loading的button

|  参数   |      说明      |  类型 | 默认值 |
|:----------|:-------------|:------|:-----|
| text | 按钮文字  | String| '' |
| color |  按钮文字的颜色, `btn-`前缀：blue, azure, indigo, purple, pink, red, orange, yellow, lime, green, teal, cyan, gray, dark-gray, primary, secondary, info, success, warning, danger  |  String | btn-primary |
| size | 按钮大小, `btn-`前缀：sm, lg | String |'' |
| block | 按钮是否占满一行, `btn-`前缀：block | String |'' |
| disable | 按钮是否可点击, `btn-`前缀：disbale | String |'' |
| outline | 另一种按钮样式, `btn-outline-`前缀：加上color属性 | String |'btn-outline-primary' |
| social | icon的一种样式, `btn-`前缀：social | String |'' |
| loading | 是否带有loading效果 | Boolean |false |
| clickHandler | 按钮事件 | Function |function(){} |

使用：

`basic-button`

```javascript
<q-button text="Link"></q-button>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/button-basic.gif)

`color-buttons`

```javascript
<q-button text="primary" color="btn-primary"></q-button>

<q-button text="color" color="btn-color-red"></q-button>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/button-variations.gif)
[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/button-color.gif)

`disabled-buttons`

```javascript
<q-button text="primary" color="btn-primary" disable="disable"></q-button>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/button-disable.gif)

`outline-button`

```javascript
<q-button text="primary" outline="btn-outline-primary"></q-button>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/button-outline.gif)

`size-button`

```javascript
<q-button size="btn-sm" text="small button"></q-button>
<q-button size="btn-lg" text="large button"></q-button>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/button-size.gif)

`block-button`

```javascript
<q-button block="btn-block" text="block button" color="btn-danger"></q-button>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/button-block.gif)

`icon-botton`

```javascript
<q-button text="upload" color="btn-black">
  <a-icon type="upload" slot="icon"/>
</q-button>

<q-button social="btn-social">
  <a-icon type="facebook" slot="icon"/>
</q-button>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/button-icons.gif)
[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/button-social.gif)

`loading-button`

```javascript
<q-button :loading="true"></q-button>
<q-button :loading="true" social="btn-social" color="btn-green"></q-button>
<q-button :loading="true" color="btn-black" block="btn-block"></q-button>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/button-loading.gif)

`events-button`

```javascript
<q-button text="color" :click-handler="buttonClick"></q-button>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/button-events.gif)

--

**<span id="card">Card</span>**

- `q-card`
- `q-raw-card`

卡片效果，可以在里面填充东西

|  参数   |      说明      |  类型 | 默认值 |
|:----------|:-------------|:------|:-----|
| color |  按钮文字的颜色, `card-`前缀：blue, azure, indigo, purple, pink, red, orange, yellow, lime, green, teal, cyan, gray, dark-gray, primary, secondary, info, success, warning, danger  |  String | btn-primary |
| loading | 是否带有loading效果 | Boolean |false |


使用：

`card-default`

```javascript
<q-card style="width: 50%">
  <div slot="card-title">Card title</div>
  <div slot="card-body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aperiam deleniti fugit incidunt, iste, itaque minima 
    neque pariatur perferendis sed suscipit velit vitae 
    voluptatem. A consequuntur, deserunt eaque error nulla !
  </div>
</q-card>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/card-default.jpeg)

`card-advance`

```javascript
<q-card style="width: 50%">
  <div slot="card-title">
    <div>Card title</div>
    <div>
      <q-button text="action 1" size="btn-sm"></q-button>
      <q-button text="action 2" size="btn-sm" color="btn-danger"></q-button>
    </div>
  </div>
  <div slot="card-body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </div>
  <div slot="card-footer">
    This is standard card footer
  </div>
</q-card>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/card-advance.jpeg)

`card-post`

```javascript
<q-card style="width: 50%">
  <img src="david-klaasen-54203-500.jpg" alt="" slot="card-poster">
  <div slot="card-title">
    <a href="">And this isn't my nose. This is a false one.</a>
  </div>
  <div slot="card-body">
    Look, my liege! The Knights Who Say Ni demand a sacrifice!
     …Are you suggesting that coconuts migr...
  </div>
  <div slot="card-footer">
    <q-button color="btn-black" block="btn-block" text="send"></q-button>
  </div>
</q-card>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/card-poster.jpeg)

`card-color`

```javascript
<q-card style="width: 95%" color="card-red">
  <div slot="card-title">Card title</div>
  <div slot="card-body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </div>
</q-card>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/card-color.jpeg)

`card-loading`

```javascript
<q-card style="width: 50%" :loading="true">
  <div slot="card-title">Card with loading</div>
</q-card>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/card-loading.gif)

`card-raw`

```javascript
<q-raw-card style="width: 50%">
  <div slot="card-content">
    Extra long content of card. Lorem ipsum dolor sit amet, consetetur sadipscing elitr
  </div>
</q-raw-card>
```

[点击此处查看效果](http://47.98.159.8/picture-repo/vue-qabler/card-raw-deck.jpeg)