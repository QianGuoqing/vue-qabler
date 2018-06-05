<template>
  <div>
    <form-wrapper title="Country list">
      <a-select defaultValue="barcelona" style="width: 100%" slot="content">
        <a-select-option value="barcelona">
          <div class="select-item">
            <img class="avatar" src="../../../../../assets/images/teams/fc-barcelona.png" alt="">
            <span class="name">Fc Barcelona</span>
          </div>
        </a-select-option>
        <a-select-option value="madrid">
          <div class="select-item">
            <img class="avatar" src="../../../../../assets/images/teams/real-madrid.png" alt="">
            <span class="name">Real Mardid</span>
          </div>
        </a-select-option>
      </a-select>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'TeamList',
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