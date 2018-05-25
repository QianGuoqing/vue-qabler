<template>
  <div class="doc-tags">
    <div class="title">Tags</div>
    <div class="desc">Small tag labels to insert anywhere</div>
    <div class="title">
      Default tag
    </div>
    <div class="tag-panel">
      <ul class="tag-list">
        <li class="tag-item">
          <q-tag text="first tag"></q-tag>
        </li>
        <li class="tag-item">
          <q-tag text="second tag"></q-tag>
        </li>
        <li class="tag-item">
          <q-tag text="third tag"></q-tag>
        </li>
      </ul>
    </div>

    <div class="title">
      Link tag
    </div>
    <div class="tag-panel">
      <ul class="tag-list">
        <li class="tag-item">
          <q-tag text="first link tag" link="link"></q-tag>
        </li>
        <li class="tag-item">
          <q-tag text="second link tag" link="link"></q-tag>
        </li>
        <li class="tag-item">
          <q-tag text="third link tag" link="link"></q-tag>
        </li>
      </ul>
    </div>

    <div class="title">
      Color tag
    </div>
    <div class="tag-panel">
      <ul class="tag-list">
        <li class="tag-item" v-for="color in colors" :key="color">
          <q-tag :text="color" link="link" :color="color"></q-tag>
        </li>
      </ul>
    </div>

    <div class="title">
      Avatar tag
    </div>
    <div class="tag-panel">
      <ul class="tag-list">
        <li class="tag-item">
          <q-tag text="victoria">
            <img slot="avatar" src="../../../../assets/images/faces/female/1.jpg" alt="">
          </q-tag>
        </li>
        <li class="tag-item">
          <q-tag text="victoria">
            <img slot="avatar" src="../../../../assets/images/faces/female/1.jpg" alt="">
          </q-tag>
        </li>
        <li class="tag-item">
          <q-tag text="victoria">
            <img slot="avatar" src="../../../../assets/images/faces/female/1.jpg" alt="">
          </q-tag>
        </li>
        <li class="tag-item">
          <q-tag text="victoria">
            <img slot="avatar" src="../../../../assets/images/faces/female/1.jpg" alt="">
          </q-tag>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import QTag from '../../../../components/q-tag/QTag.vue'
  export default {
    name: 'DocTags',
    components: {
      QTag
    },
    data() {
      return {
        colors: [
          'tag-blue',
          'tag-azure',
          'tag-indigo',
          'tag-purple',
          'tag-pink',
          'tag-red',
          'tag-orange',
          'tag-yellow',
          'tag-lime',
          'tag-green',
          'tag-teal',
          'tag-cyan',
          'tag-gray',
          'tag-dark-gray'
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../../../common/stylus/variables.styl';

  .doc-tags
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
      margin-bottom 1.5rem
    .tag-panel
      padding 1rem
      background-color #fff
      border 1px solid $color-border
      border-radius 4px
      margin-bottom 2rem
      .tag-list
        display flex
        flex-flow wrap
        .tag-item
          margin-right 10px
          margin-bottom 5px
</style>