<template>
  <div class="dropdown show">
    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :class="[color]">
      {{ defaultText }}
    </a>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <a class="dropdown-item" href="#" v-for="(item, index) in listItems" :key="index">{{ item }}</a>
    </div>
  </div> 
</template>

<script>
  export default {
    name: 'QSelect',
    props: {
      defaultText: {
        type: String,
        default: ''
      },
      listItems: {
        type: Array,
        default: []
      },
      color: {
        type: Array,
        default: 'btn-primary'
      }
    },
  }
</script>

<style scoped>

</style>