<template>
  <div class="separated-inputs">
    <form-wrapper title="Separated inputs">
      <div slot="content" class="content">
        <a-input placeholder="Search for..." style="width: 88%" />
        <q-button social="btn-social">
          <a-icon type="search" slot="icon" />
        </q-button>
      </div>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../FormWrapper.vue'
  import QButton from '../../../../components/q-button/QButton.vue'
  export default {
    name: 'SeparatedInputs',
    components: {
      FormWrapper,
      QButton
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
    justify-content: space-between;
  }
</style>