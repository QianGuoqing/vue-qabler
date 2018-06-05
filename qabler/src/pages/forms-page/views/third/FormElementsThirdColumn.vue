<template>
  <div class="third-column">
    <div class="form-item">
      <radio-group></radio-group>
    </div>
    <div class="form-item">
      <checkbox-group></checkbox-group>
    </div>
    <div class="form-item">
      <file-input></file-input>
    </div>
    <div class="form-item">
      <username-input></username-input>
    </div>
    <div class="form-item">
      <subdomain-input></subdomain-input>
    </div>
    <div class="form-item">
      <vanity-url></vanity-url>
    </div>
    <div class="form-item">
      <price-input></price-input>
    </div>
    <div class="form-item">
      <button-input></button-input>
    </div>
    <div class="form-item">
      <tag-input></tag-input>
    </div>
    <div class="form-item">
      <beast-select></beast-select>
    </div>
    <div class="form-item">
      <user-list></user-list>
    </div>
    <div class="form-item">
      <team-list></team-list>
    </div>
  </div>
</template>

<script>
  import RadioGroup from './components/RadioGroup.vue'
  import CheckboxGroup from './components/CheckboxGroup.vue'
  import FileInput from './components/FileInput.vue'
  import UsernameInput from './components/UsernameInput.vue'
  import SubdomainInput from './components/SubdomainInput.vue'
  import VanityUrl from './components/VanityUrl.vue'
  import PriceInput from './components/PriceInput.vue'
  import ButtonInput from './components/ButtonInput.vue'
  import TagInput from './components/TagInput.vue'
  import BeastSelect from './components/BeastSelect.vue'
  import UserList from './components/UserList.vue'
  import TeamList from './components/TeamList.vue'
  export default {
    name: 'FormElementsThirdColumn',
    components: {
      RadioGroup,
      CheckboxGroup,
      FileInput,
      UsernameInput,
      SubdomainInput,
      VanityUrl,
      PriceInput,
      ButtonInput,
      TagInput,
      BeastSelect,
      UserList,
      TeamList
    }
  }
</script>

<style scoped>
  .form-item {
    margin-bottom: 1.5rem;
  }
</style>