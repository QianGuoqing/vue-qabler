<template>
  <div class="doc-avatars">
    <h1 class="title">Avatars</h1>
    <h1 class="title">Simple Avatars</h1>
    <div class="avatar-panel">
      <ul class="avatar-list">
        <li class="avatar-item">
          <q-avatars>
            <img src="../../../../assets/images/faces/female/1.jpg" alt="" slot="avatar">
          </q-avatars>
        </li>
        <li class="avatar-item">
          <q-avatars>
            <img src="../../../../assets/images/faces/female/2.jpg" alt="" slot="avatar">
          </q-avatars>
        </li>
        <li class="avatar-item">
          <q-avatars>
            <img src="../../../../assets/images/faces/female/3.jpg" alt="" slot="avatar">
          </q-avatars>
        </li>
        <li class="avatar-item">
          <q-avatars>
            <img src="../../../../assets/images/faces/female/4.jpg" alt="" slot="avatar">
          </q-avatars>
        </li>
        <li class="avatar-item">
          <q-avatars>
            <img src="../../../../assets/images/faces/female/5.jpg" alt="" slot="avatar">
          </q-avatars>
        </li>
      </ul>
    </div>

    <h1 class="title">Avatar size</h1>
    <div class="avatar-panel">
      <ul class="avatar-list avatar-size-list">
        <li class="avatar-item">
          <q-avatars size="avatar-sm">
            <img src="../../../../assets/images/faces/female/1.jpg" alt="" slot="avatar">
          </q-avatars>
        </li>
        <li class="avatar-item">
          <q-avatars size="avatar">
            <img src="../../../../assets/images/faces/female/2.jpg" alt="" slot="avatar">
          </q-avatars>
        </li>
        <li class="avatar-item">
          <q-avatars size="avatar-md">
            <img src="../../../../assets/images/faces/female/3.jpg" alt="" slot="avatar">
          </q-avatars>
        </li>
        <li class="avatar-item">
          <q-avatars size="avatar-lg">
            <img src="../../../../assets/images/faces/female/4.jpg" alt="" slot="avatar">
          </q-avatars>
        </li>
        <li class="avatar-item">
          <q-avatars size="avatar-xl">
            <img src="../../../../assets/images/faces/female/5.jpg" alt="" slot="avatar">
          </q-avatars>
        </li>
        <li class="avatar-item">
          <q-avatars size="avatar-xxl">
            <img src="../../../../assets/images/faces/female/6.jpg" alt="" slot="avatar">
          </q-avatars>
        </li>
      </ul>
    </div>

    <h1 class="title">Avatars status</h1>
    <div class="avatar-panel">
      <ul class="avatar-list">
        <li class="avatar-item">
          <q-avatars>
            <img src="../../../../assets/images/faces/female/1.jpg" alt="" slot="avatar">
          </q-avatars>
        </li>
        <li class="avatar-item" v-for="(color, index) in colors" :key="index">
          <q-avatars :status="true" :color="color">
            <img src="../../../../assets/images/faces/female/1.jpg" alt="" slot="avatar">
          </q-avatars>
        </li>
      </ul>
    </div>

    <h1 class="title">Avatar placeholder</h1>
    <div class="avatar-panel">
      <div class="desc">small size: </div>
      <ul class="avatar-list">
        <li class="avatar-item" v-for="(text, index) in texts" :key="index">
          <q-avatars :text="text" :color="colors[index]" size="avatar-sm"></q-avatars>
        </li>
      </ul>
      <div class="desc">default size: </div>
      <ul class="avatar-list">
        <li class="avatar-item" v-for="(text, index) in texts" :key="index">
          <q-avatars :text="text" :color="colors[index]"></q-avatars>
        </li>
      </ul>
      <div class="desc">medium size: </div>
      <ul class="avatar-list">
        <li class="avatar-item" v-for="(text, index) in texts" :key="index">
          <q-avatars :text="text" :color="colors[index]" size="avatar-md"></q-avatars>
        </li>
      </ul>
      <div class="desc">large size: </div>
      <ul class="avatar-list">
        <li class="avatar-item" v-for="(text, index) in texts" :key="index">
          <q-avatars :text="text" :color="colors[index]" size="avatar-lg"></q-avatars>
        </li>
      </ul>
      <div class="desc">xl size: </div>
      <ul class="avatar-list">
        <li class="avatar-item" v-for="(text, index) in texts" :key="index">
          <q-avatars :text="text" :color="colors[index]" size="avatar-xl"></q-avatars>
        </li>
      </ul>
      <div class="desc">xxl size: </div>
      <ul class="avatar-list">
        <li class="avatar-item" v-for="(text, index) in texts" :key="index">
          <q-avatars :text="text" :color="colors[index]" size="avatar-xxl"></q-avatars>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import QAvatars from '../../../../components/q-avatars/QAvatars.vue'
  export default {
    name: 'DocAvatars',
    components: {
      QAvatars
    },
    data() {
      return {
        texts: ['NG', 'AM', 'RB', 'PR', 'WH', 'MR', 'DB', 'PP', 'JR', 'RB', 'KH', 'BK', 'CA', 'CW'],
        colors: ['avatar-blue', 'avatar-azure', 'avatar-indigo', 'avatar-purple', 'avatar-pink', 'avatar-red', 'avatar-orange', 'avatar-yellow', 'avatar-lime', 'avatar-green', 'avatar-teal', 'avatar-cyan', 'avatar-gray', 'avatar-dark-gray']
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../../../common/stylus/variables.styl';

  .avatar-size-list
    align-items flex-end

  .doc-avatars
    padding 1.5rem
    background-color #fff
    border 1px solid $color-border
    border-radius 4px
    .title
      color $color-text
      font-size 1.75rem
      font-weight 700
      margin-bottom 1rem
    .desc
      color $color-text
      font-size 1rem
      margin-bottom .75rem
    .avatar-panel
      padding 1rem
      background-color #fff
      border 1px solid $color-border
      border-radius 4px
      margin-bottom 2rem
      .avatar-list
        display flex
        flex-flow wrap
        margin-bottom 10px
        border 1px solid $color-border
        padding .5rem
        .avatar-item
          margin-right .5rem
</style>