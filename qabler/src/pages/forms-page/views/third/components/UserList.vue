<template>
  <div>
    <form-wrapper title="User list">
      <a-select defaultValue="alice" style="width: 100%" slot="content">
        <a-select-option value="alice">
          <div class="select-item">
            <img class="avatar" src="../../../../../assets/images/faces/female/1.jpg" alt="">
            <span class="name">Alice Mason</span>
          </div>
        </a-select-option>
        <a-select-option value="rose">
          <div class="select-item">
            <img class="avatar" src="../../../../../assets/images/faces/female/10.jpg" alt="">
            <span class="name">Rose Bradley</span>
          </div>
        </a-select-option>
        <a-select-option value="ross">
          <div class="select-item">
            <img class="avatar" src="../../../../../assets/images/faces/female/11.jpg" alt="">
            <span class="name">Michelle Ross</span>
          </div>
        </a-select-option>
        <a-select-option value="beck">
          <div class="select-item">
            <img class="avatar" src="../../../../../assets/images/faces/female/12.jpg" alt="">
            <span class="name">Debra Beck</span>
          </div>
        </a-select-option>
      </a-select>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'UserList',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  .select-item {
    display: flex;
    align-items: center;
  }
  .avatar {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
</style>