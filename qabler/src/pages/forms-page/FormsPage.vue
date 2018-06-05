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
                <a-col :span="7">
                  <div class="form-item">
                    <static-form></static-form>
                  </div>
                  <div class="form-item">
                    <text-input></text-input>
                  </div>
                  <div class="form-item">
                    <disabled-input></disabled-input>
                  </div>
                  <div class="form-item">
                    <readonly-input></readonly-input>
                  </div>
                  <div class="form-item">
                    <textarea-form></textarea-form>
                  </div>
                  <div class="form-item">
                    <input-group></input-group>
                  </div>
                  <div class="form-item">
                    <group-buttons></group-buttons>
                  </div>
                  <div class="form-item">
                    <icon-input></icon-input>
                  </div>
                  <div class="form-item">
                    <separated-inputs></separated-inputs>
                  </div>
                  <div class="form-item">
                    <zip-code></zip-code>
                  </div>
                </a-col>
                <a-col :span="1"></a-col>
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
  import TextInput from './components/text-input/TextInput.vue'
  import DisabledInput from './components/disabled-input/DisabledInput.vue'
  import ReadonlyInput from './components/readonly-input/ReadOnlyInput.vue'
  import TextareaForm from './components/textarea-form/TextareaForm.vue'
  import InputGroup from './components/input-group/InputGroup.vue'
  import GroupButtons from './components/group-buttons/GroupButtons.vue'
  import IconInput from './components/icon-input/IconInput.vue'
  import SeparatedInputs from './components/separated-inputs/SeparatedInputs.vue'
  import ZipCode from './components/zip-code/ZipCode.vue'
  export default {
    name: 'FormsPage',
    components: {
      QCard,
      QButton,
      StaticForm,
      TextInput,
      DisabledInput,
      ReadonlyInput,
      TextareaForm,
      InputGroup,
      GroupButtons,
      IconInput,
      SeparatedInputs,
      ZipCode
    }
  }
</script>

<style lang="stylus" scoped>
  .forms-page
    .form-elements
      margin-top 2rem
    .form-item
      margin-bottom 16px
</style>