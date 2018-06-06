<template>
  <div class="edit-profile">
    <q-card>
      <div slot="card-title">
        <div>Edit profile</div>
      </div>
      <div slot="card-body">
        <div class="company-name-email">
          <div class="form-item">
            <form-wrapper title="Company">
              <a-input slot="content" value="Creative Code Inc." disabled/>
            </form-wrapper>
          </div>
          <div class="form-item">
            <form-wrapper title="Username">
              <a-input value="michael23" slot="content" />
            </form-wrapper>
          </div>
          <div class="form-item">
            <form-wrapper title="Email address">
              <a-input placeholder="Email" slot="content" />
            </form-wrapper>
          </div>
        </div>
        <div class="first-last-name">
          <div class="form-item first-name">
            <form-wrapper title="First">
              <a-input slot="content" value="Derrick" />
            </form-wrapper>
          </div>
          <div class="form-item last-name">
            <form-wrapper title="Last">
              <a-input value="Rose" slot="content" />
            </form-wrapper>
          </div>
        </div>
        <div class="address-wrapper">
          <form-wrapper title="Address">
            <a-input slot="content" value="Melbourne, Australia" />
          </form-wrapper>
        </div>
        <div class="city-code-country">
          <div class="form-item city">
            <form-wrapper title="City">
              <a-input value="Melbourne" slot="content" />
            </form-wrapper>
          </div>
          <div class="form-item code">
            <form-wrapper title="Postal code">
              <a-input placeholder="ZIP Code" slot="content" />
            </form-wrapper>
          </div>
          <div class="form-item country">
            <form-wrapper title="Country">
              <a-select slot="content" defaultValue="china">
                <a-select-option value="china">China</a-select-option>
                <a-select-option value="usa">USA</a-select-option>
              </a-select>
            </form-wrapper>
          </div>
        </div>
        <div class="about-me">
          <div class="form-item">
            <form-wrapper title="About me">
              <a-textarea slot="content" :rows="6"></a-textarea>
            </form-wrapper>
          </div>
        </div>
      </div>
      <div slot="card-footer">
        <div class="button-wrapper">
          <q-button text="Update profile"></q-button>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
  import QCard from '../../../../components/q-card/QCard.vue'
  import QButton from '../../../../components/q-button/QButton.vue'
  import FormWrapper from '../../components/FormWrapper.vue'
  export default {
    name: 'EditProfile',
    components: {
      FormWrapper,
      QCard,
      QButton
    }
  }
</script>

<style lang="stylus" scoped>
  .edit-profile
    margin-top 2rem
    .company-name-email
      display flex
      justify-content space-between
      margin-bottom 1rem
    .first-last-name
      display flex
      margin-bottom 1rem
      justify-content space-between
      .first-name, .last-name
        width 48%
    .address-wrapper
      margin-bottom 1rem
    .city-code-country
      display flex
      margin-bottom 1rem
      justify-content space-between
      .city, .code
        width 28%
      .country
        width 38%
    .button-wrapper
      text-align right 
</style>