<template>
  <div class="doc-buttons">
    <div class="title">Buttons</div>
    <div class="desc">Includes support for a handful of contextual variations, sizes, states, and more.</div>
    <div class="title">Button tag</div>
    <div class="desc">The classes are designed to be used with the element. However, you can also use these classes on or elements (though some browsers may apply a slightly different rendering).</div>
    <div class="button-panel">
      <ul class="button-list">
        <li class="button-item">
          <q-button text="Link"></q-button>
          <q-button text="Button"></q-button>
          <q-button text="Input"></q-button>
          <q-button text="Submit"></q-button>
          <q-button text="Reset"></q-button>
        </li>
      </ul>
    </div>

    <div class="title">Button variations</div>
    <div class="desc">Use any of the available button classes to quickly create a styled button . We provide a variety of colors for you to express different emotions.</div>
    <div class="button-panel">
      <ul class="button-list">
        <li class="button-item">
          <q-button text="primary" color="btn-primary"></q-button>
          <q-button text="secondary" color="btn-secondary"></q-button>
          <q-button text="success" color="btn-success"></q-button>
          <q-button text="info" color="btn-info"></q-button>
          <q-button text="warning" color="btn-warning"></q-button>
          <q-button text="danger" color="btn-danger"></q-button>
        </li>
      </ul>
    </div>

    <div class="title">Disabled buttons</div>
    <div class="desc">Make buttons look inactive by adding the disabled boolean attribute to any .btn element.s don’t support the disabled attribute, so you must add the .disabled class to make it visually appear disabled.</div>
    <div class="button-panel">
      <ul class="button-list">
        <li class="button-item">
          <q-button text="primary" color="btn-primary" disable="disable"></q-button>
          <q-button text="secondary" color="btn-secondary" disable="disable"></q-button>
          <q-button text="success" color="btn-success" disable="disable"></q-button>
          <q-button text="info" color="btn-info" disable="disable"></q-button>
          <q-button text="warning" color="btn-warning" disable="disable"></q-button>
          <q-button text="danger" color="btn-danger" disable="disable"></q-button>
        </li>
      </ul>
    </div>

    <div class="title">Color buttons</div>
    <div class="desc">The classic button, in different colors.</div>
    <div class="button-panel">
      <ul class="button-list">
        <li class="button-item" v-for="color in colors" :key="color">
          <q-button :text="color" :color="color"></q-button>
        </li>
      </ul>
    </div>

    <div class="title">Outline buttons</div>
    <div class="desc">Use any of the available button classes to quickly create a styled button . We provide a variety of colors for you to express different emotions.</div>
    <div class="button-panel">
      <ul class="button-list">
        <li class="button-item">
          <q-button text="primary" outline="btn-outline-primary"></q-button>
          <q-button text="primary" outline="btn-outline-secondary"></q-button>
          <q-button text="primary" outline="btn-outline-success"></q-button>
          <q-button text="primary" outline="btn-outline-info"></q-button>
          <q-button text="primary" outline="btn-outline-warning"></q-button>
          <q-button text="primary" outline="btn-outline-danger"></q-button>
        </li>
      </ul>
    </div>

    <div class="title">Button size</div>
    <div class="desc">Large button and small button</div>
    <div class="button-panel">
      <ul class="button-list">
        <li class="button-item">
          <q-button size="btn-sm" text="small button"></q-button>
          <q-button size="btn-lg" text="large button"></q-button>
        </li>
      </ul>
    </div>

    <div class="title">Button block</div>
    <div class="button-panel">
      <ul class="button-list">
        <li class="button-item button-block">
          <q-button block="btn-block" text="block button"></q-button>
        </li>
        <li class="button-item button-block">
          <q-button block="btn-block" text="block button" color="btn-danger"></q-button>
        </li>
        <li class="button-item button-block">
          <q-button block="btn-block" text="block button" color="btn-pink"></q-button>
        </li>
        <li class="button-item button-block">
          <q-button block="btn-block" text="block button" color="btn-green"></q-button>
        </li>
      </ul>
    </div>

    <div class="title">Button with icons</div>
    <div class="desc">Basic buttons are traditional buttons with borders and background with an extra commponent like an icon. You can place it either on the left or the right which ever you want with different color opitons.</div>
    <div class="button-panel">
      <ul class="button-list">
        <li class="button-item">
          <q-button text="Link" color="btn-danger">
            <a-icon type="link" slot="icon"/>
          </q-button>
          <q-button text="upload" color="btn-black">
            <a-icon type="upload" slot="icon"/>
          </q-button>
          <q-button text="Like" color="btn-yellow">
            <a-icon type="like" slot="icon"/>
          </q-button>
          <q-button text="Right" color="btn-green">
            <a-icon type="check" slot="icon"/>
          </q-button>
          <q-button text="More" color="btn-outline-primary">
            <a-icon type="plus" slot="icon"/>
          </q-button>
          <q-button text="Comment" color="btn-azure">
            <a-icon type="message" slot="icon"/>
          </q-button>
        </li>
      </ul>
    </div>

    <div class="title">Social buttons</div>
    <div class="button-panel">
      <ul class="button-list">
        <li class="button-item">
          <q-button social="btn-social">
            <a-icon type="facebook" slot="icon"/>
          </q-button>
          <q-button color="btn-secondary" social="btn-social">
            <a-icon type="apple" slot="icon"/>
          </q-button>
          <q-button color="btn-black" social="btn-social">
            <a-icon type="github" slot="icon"/>
          </q-button>
          <q-button color="btn-danger" social="btn-social">
            <a-icon type="google" slot="icon"/>
          </q-button>
          <q-button color="btn-green" social="btn-social">
            <a-icon type="wechat" slot="icon"/>
          </q-button>
          <q-button color="btn-azure" social="btn-social">
            <a-icon type="qq" slot="icon"/>
          </q-button>
          <q-button color="btn-blue" social="btn-social">
            <a-icon type="alipay" slot="icon"/>
          </q-button>
        </li>
      </ul>
    </div>

    <div class="title">Loading button</div>
    <div class="desc">Add .btn-loading to use a loading state on a button. The width of the button depends on the length of the text inside.</div>
    <div class="button-panel">
      <ul class="button-list">
        <li class="button-item">
          <q-button :loading="true"></q-button>
          <q-button :loading="true" social="btn-social" color="btn-green"></q-button>
          <q-button :loading="true" color="btn-yellow" size="btn-sm"></q-button>
          <q-button :loading="true" color="btn-danger" size="btn-lg"></q-button>
        </li>
        <li class="button-item button-block">
          <q-button :loading="true" color="btn-black" block="btn-block"></q-button>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import QButton from '../../../../components/q-button/QButton.vue'
  export default {
    name: 'DocButtons',
    components: {
      QButton
    },
    data() {
      return {
        colors: [
          'btn-blue',
          'btn-azure',
          'btn-indigo',
          'btn-purple',
          'btn-pink',
          'btn-red',
          'btn-orange',
          'btn-yellow',
          'btn-lime',
          'btn-green',
          'btn-teal',
          'btn-cyan',
          'btn-gray',
          'btn-dark-gray',
          'btn-black'
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../../../common/stylus/variables.styl';

  .button-block
    width 100%

  .doc-buttons
    padding 1.5rem
    background-color #fff
    border 1px solid $color-border
    border-radius 4px
    .title
      color $color-text
      font-size 1.75rem
      font-weight 700
      margin-bottom 1rem
      letter-spacing .02rem
    .desc
      color $color-text
      font-size 1rem
      margin-bottom 1.5rem
      letter-spacing .02rem
      line-height 1.5rem
    .button-panel
      padding 1rem
      background-color #fff
      border 1px solid $color-border
      border-radius 4px
      margin-bottom 2rem
      .button-list
        display flex
        flex-flow wrap
        width 100%
        .button-item
          margin 5px
</style>