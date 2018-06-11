<template>
  <div class="project-list-a">
    <div class="title">Projects</div>
    <ul class="list">
      <li class="item">
        <div class="name">Admin Template</div>
        <div class="item-tag">
          <q-tag text="65%"></q-tag>
        </div>
      </li>
      <li class="item">
        <div class="name">Landing Page</div>
        <div class="item-tag">
          <q-tag text="Finished" color="tag-green"></q-tag>
        </div>
      </li>
      <li class="item">
        <div class="name">Backend UI</div>
        <div class="item-tag">
          <q-tag text="Rejected" color="tag-red"></q-tag>
        </div>
      </li>
      <li class="item">
        <div class="name">Personal Blog</div>
        <div class="item-tag">
          <q-tag text="40%"></q-tag>
        </div>
      </li>
      <li class="item">
        <div class="name">Corporate Website</div>
        <div class="item-tag">
          <q-tag text="Pending" color="tag-yellow"></q-tag>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import QTag from '../../../components/q-tag/QTag.vue'
  export default {
    name: 'ProjectList',
    components: {
      QTag
    }
  }
</script>

<style lang="stylus" scoped>
  .project-list-a
    border 1px solid rgba(0, 40, 100, 0.12)
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
    background-color #fff
    padding 1rem
    width 100%
    .title
      font-size 1.125rem
      padding .5rem 0 1.5rem .5rem
    .list
      .item
        display flex
        justify-content space-between
        padding 1rem .5rem
        border-top 1px solid rgba(0, 40, 100, 0.12)
        color #868e96
      &:last-child  
        border-bottom 1px solid rgba(0, 40, 100, 0.12)
</style>