<template>
  <div class="second-column">
    <div class="form-item">
      <password-input></password-input>
    </div>
    <div class="form-item">
      <valid-state></valid-state>
    </div>
    <div class="form-item">
      <invalid-state></invalid-state>
    </div>
    <div class="form-item">
      <country-select></country-select>
    </div>
    <div class="form-item">
      <ratio-slider></ratio-slider>
    </div>
    <div class="form-item">
      <size-group></size-group>
    </div>
    <div class="form-item">
      <icon-inputs></icon-inputs>
    </div>
    <div class="form-item">
      <toggle-switch></toggle-switch>
    </div>
    <div class="form-item">
      <single-form></single-form>
    </div>
  </div>
</template>

<script>
  import PasswordInput from './components/PasswordInput.vue'
  import ValidState from './components/ValidState.vue'
  import InvalidState from './components/InvalidState.vue'
  import CountrySelect from './components/CountrySelect.vue'
  import RatioSlider from './components/RatioSlider.vue'
  import SizeGroup from './components/SizeGroup.vue'
  import IconInputs from './components/IconInputs.vue'
  import ToggleSwitch from './components/ToggleSwitch.vue'
  import SingleForm from './components/SingleForm.vue'
  export default {
    name: 'FormElementsSecondColumn',
    components: {
      PasswordInput,
      ValidState,
      InvalidState,
      CountrySelect,
      RatioSlider,
      SizeGroup,
      IconInputs,
      ToggleSwitch,
      SingleForm
    }
  }
</script>

<style lang="stylus" scoped>
  .form-item
    margin-bottom 1rem
</style>