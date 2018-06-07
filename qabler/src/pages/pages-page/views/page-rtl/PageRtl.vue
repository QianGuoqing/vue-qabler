<template>
  <div class="page-rtl">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <a-row>
          <a-col :span="11">
            <div class="price-card">
              <reverse-card percent="2%" content="27.3K" text="up 2%"></reverse-card>
              <reverse-card :flag="false" percent="3%" content="17" text="down 3%"></reverse-card>
              <reverse-card percent="6%" content="43" text="up 6%"></reverse-card>
            </div>
            <div class="profile-card">
              <reverse-profile :time="time" :name="name" :at="at" :content="content" :note-count="noteCount" :like-count="likeCount" :twitter-count="twitterCount">
                <q-avatars slot="avatar-section" size="avatar-xxl">
                  <img src="../../../../assets/images/faces/female/28.jpg" alt="" slot="avatar">
                </q-avatars>
              </reverse-profile>
            </div>
          </a-col>
          <a-col :span="1"></a-col>
          <a-col :span="12">
            <div class="rtl-card">
              <q-card>
                <div slot="card-title">Card title</div>
                <div slot="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla ! <br> Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla ! <br> Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla !
                </div>
                <div slot="card-footer">
                  This is standard card footer
                </div>
              </q-card>
            </div>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import QCard from '../../../../components/q-card/QCard.vue'
  import QAvatars from '../../../../components/q-avatars/QAvatars.vue'
  import ReverseCard from './components/ReverseCard.vue'
  import ReverseProfile from './components/ReverseProfile.vue'
  export default {
    name: 'PageRtl',
    components: {
      QCard,
      QAvatars,
      ReverseCard,
      ReverseProfile
    },
    data() {
      return {
        time: 'minutes ago 31',
        name: 'John Smith',
        at: '@johnsmith',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.',
        noteCount: 5,
        likeCount: 43,
        twitterCount: 24
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .page-rtl
    .price-card
      margin-top 2rem
      display flex
      flex-flow wrap
      justify-content space-between
    .rtl-card
      text-align right 
      margin 2rem 0
</style>