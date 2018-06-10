<template>
  <div class="blog-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <blog-list width="half" :blogs="blogs1"></blog-list>
        <blog-list width="third" :blogs="blogs2"></blog-list>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import BlogList from '../components/BlogList.vue'
  export default {
    name: "BlogPage",
    components: {
      BlogList
    },
    data() {
      return {
        blogs1: [
          {
            posterUrl: '../../../../static/photos/clarisse-meyer-122804-500.jpg',
            title: `And this isn't my nose. This is a false one.`,
            content: 'Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...',
            avatarUrl: '../../../../static/female/23.jpg',
            name: 'Rose Bradley',
            date: '3 days ago'
          },
          {
            posterUrl: '../../../../static/photos/cristina-gottardi-259243-500.jpg',
            title: `Well, I didn't vote for you.`,
            content: `Well, we did do the nose. Why? Shut up! Will you shut up?! You don't frighten us, English pig-dog...`,
            avatarUrl: '../../../../static/female/20.jpg',
            name: 'Peter Richards',
            date: '3 days ago'
          },
          {
            posterUrl: '../../../../static/photos/david-klaasen-54203-500.jpg',
            title: `How do you know she is a witch?`,
            content: `Are you suggesting that coconuts migrate? No, no, no! Yes, yes. A bit. But she's got a wart. You ...`,
            avatarUrl: '../../../../static/female/22.jpg',
            name: 'Wayne Holland',
            date: '3 days ago'
          },
          {
            posterUrl: '../../../../static/photos/david-marcu-114194-500.jpg',
            title: `Shut up!`,
            content: `Burn her! How do you know she is a witch? You don't frighten us, English pig-dogs! Go and boil yo...`,
            avatarUrl: '../../../../static/female/21.jpg',
            name: 'Michelle Ross',
            date: '3 days ago'
          }
        ],
        blogs2: [
          {
            title: `Weaseling out of things is important to learn.`,
            content: `Please do not offer my god a peanut. That's why I love elementary...`,
            avatarUrl: '../../../../static/female/19.jpg',
            name: 'Bobby Knight',
            date: '3 days ago'
          },
          {
            title: `You don't like your job, you don't strike.`,
            content: `But, Aquaman, you cannot marry a woman without gills. You're from two different worlds… Oh, I've ...`,
            avatarUrl: '../../../../static/female/18.jpg',
            name: 'Craig Anderson',
            date: '3 days ago'
          },
          {
            title: `I hope I didn't brain my damage.`,
            content: `I don't like being outdoors, Smithers. For one thing, there's too many fat children. Oh, loneline...`,
            avatarUrl: '../../../../static/female/19.jpg',
            name: 'Crystal Wallace',
            date: '3 days ago'
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .blog-page  
    margin-top 2rem
</style>