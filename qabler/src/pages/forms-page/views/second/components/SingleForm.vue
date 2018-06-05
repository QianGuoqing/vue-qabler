<template>
  <div>
    <form-wrapper title="Single Form">
      <form class="form" slot="content">
        <div class="form-group">
          <label>Full Name</label>
          <input type="email" class="form-control" placeholder="full name...">
        </div>
        <div class="form-group">
          <label>Company</label>
          <input type="text" class="form-control" placeholder="company...">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" placeholder="email...">
        </div>
        <div class="form-group">
          <label>Phone Number</label>
          <input type="text" class="form-control" placeholder="phone number...">
        </div>
      </form>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'SingleForm',
    components: {
      FormWrapper
    }
  }
</script>

<style lang="stylus" scoped>
  .form
    background-color #f8f9fa
    border 1px solid #e9ecef
    padding 10px
</style>