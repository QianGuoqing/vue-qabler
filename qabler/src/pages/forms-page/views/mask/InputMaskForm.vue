<template>
  <div class="input-mask-form">
    <q-card>
      <div slot="card-title">
        <div>Input mask</div>
      </div>
      <div slot="card-body">
        <div class="form-item">
          <form-wrapper title="Date">
            <a-date-picker slot="content"/>
          </form-wrapper>
        </div>
        <div class="form-item">
          <form-wrapper title="Month">
            <a-month-picker placeholder="Select month..." slot="content"/>
          </form-wrapper>
        </div>
        <div class="form-item">
          <form-wrapper title="Week">
            <a-week-picker placeholder="Select week..." slot="content"/>
          </form-wrapper>
        </div>
        <div class="form-item">
          <form-wrapper title="Date range">
            <a-range-picker slot="content"/>
          </form-wrapper>
        </div>
        <div class="form-item">
          <form-wrapper title="Zip code">
            <a-input placeholder="00000-000" slot="content"/>
          </form-wrapper>
        </div>
        <div class="form-item">
          <form-wrapper title="Money">
            <a-input slot="content"/>
          </form-wrapper>
        </div>
        <div class="form-item">
          <form-wrapper title="Telephone">
            <a-input placeholder="0000-0000" slot="content"/>
          </form-wrapper>
        </div>
        <div class="form-item">
          <form-wrapper title="Telephone with Code Area">
            <a-input slot="content"/>
          </form-wrapper>
        </div>
        <div class="form-item">
          <form-wrapper title="Telephone with Code Area">
            <a-input placeholder="000.000.000.000" slot="content"/>
          </form-wrapper>
        </div>
      </div>
      <div slot="card-footer">
        Input Mask
      </div>
    </q-card>
  </div>
</template>

<script>
  import QCard from '../../../../components/q-card/QCard.vue'
  import FormWrapper from '../../components/FormWrapper.vue'
  export default {
    name: 'InputMaskForm',
    components: {
      QCard,
      FormWrapper
    }
  }
</script>

<style lang="stylus" scoped>
  .input-mask-form >>> .card-title
    margin-bottom 0
  .input-mask-form >>> .ant-calendar-picker
    width 100%

  .input-mask-form
    margin-top 2rem
    .form-item
      margin-bottom 1rem
</style>