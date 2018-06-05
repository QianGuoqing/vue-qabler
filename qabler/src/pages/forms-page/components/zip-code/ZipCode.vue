<template>
  <div class="zip-code">
    <form-wrapper title="Separated inputs">
      <div slot="content" class="content">
        <a-input placeholder="Search for..." style="width: 88%" />
        <a-popover>
          <template slot="content">
            <p>ZIP Code must be US or CDN format.</p>
            <p>You can use an extended ZIP+4 code to determine address more accurately.</p>
            <a href="">USP ZIP codes lookup tools</a>
          </template>
          <!-- <q-button social="btn-social" color="btn-black">
            <a-icon type="question" slot="icon" />
          </q-button> -->
          <a-button type="primary">zip</a-button>
        </a-popover>
      </div>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../FormWrapper.vue'
  import QButton from '../../../../components/q-button/QButton.vue'
  export default {
    name: 'ZipCode',
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