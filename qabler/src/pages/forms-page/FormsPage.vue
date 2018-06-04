<template>
  <div class="forms-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <div class="form-elements">
          <q-card>
            <div slot="card-title">
              <div class="form-elements-title">Form elements</div>
            </div>
            <div slot="card-body">
              <a-row>
                <a-col :span="8">
                  <static-form></static-form>
                </a-col>
                <a-col :span="8">b</a-col>
                <a-col :span="8">c</a-col>
              </a-row>
            </div>
            <div slot="card-footer">
              <div class="form-elements-footer">
                <q-button text="Cancel" color="btn-danger"></q-button>
                <q-button text="Send data"></q-button>
              </div>
            </div>
          </q-card>
        </div>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import QCard from '../../components/q-card/QCard.vue'
  import QButton from '../../components/q-button/QButton.vue'
  import StaticForm from './components/static-form/StaticForm.vue'
  export default {
    name: 'FormsPage',
    components: {
      QCard,
      QButton,
      StaticForm
    }
  }
</script>

<style lang="stylus" scoped>
  .forms-page
    .form-elements
      margin-top 2rem
</style>