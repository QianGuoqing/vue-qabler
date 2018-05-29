<template>
  <div class="doc-forms">
    <div class="title">Form components</div>
    <div class="title">Basic input</div>
    <div class="form-panel">
      <div class="form-item">
        <q-basic-input></q-basic-input>
      </div>
      <div class="form-item">
        <q-basic-input placeholder="something todo..."></q-basic-input>
      </div>
      <div class="form-item">
        <q-basic-input disabled="disabled"></q-basic-input>
      </div>
    </div>
  
    <div class="title">Icon input</div>
    <div class="form-panel">
      <div class="form-item">
        <q-icon-input placeholder="search" icon="search"></q-icon-input>
      </div>
      <div class="form-item">
        <q-icon-input placeholder="users" icon="users" direction="left"></q-icon-input>
      </div>
      <div class="form-item">
        <q-icon-input placeholder="disabled search" icon="circular search" disabled="disabled"></q-icon-input>
      </div>
    </div>
  
    <div class="title">Action input</div>
    <div class="form-panel">
      <div class="form-item">
        <q-action-input placeholder="输入域名">
          <div slot="action" class="ui dropdown label">
            <div class="text">.com</div>
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item">.com</div>
              <div class="item">.net</div>
              <div class="item">.org</div>
            </div>
          </div>
        </q-action-input>
      </div>
      <div class="form-item">
        <q-action-input placeholder="search...">
          <button slot="action" class="ui primary button">搜索</button>
        </q-action-input>
      </div>
      <div class="form-item">
        <q-action-input>
          <div slot="action">
            <select class="ui compact selection dropdown">
              <option value="all">All</option>
              <option selected="" value="articles">文章</option>
              <option value="products">Products</option>
            </select>
            <div class="ui primary button">搜索</div>
          </div>
        </q-action-input>
      </div>
      <div class="form-item">
        <q-action-input>
          <button slot="action" class="ui teal right labeled icon button"><i class="copy icon"></i> Copy </button>
        </q-action-input>
      </div>
    </div>

    <div class="title">Checkbox / Toggle</div>
    <div class="form-panel">
      <div class="form-item">
        <q-checkbox text="choose this"></q-checkbox>
      </div>
      <div class="form-item">
        <q-checkbox text="choose this" disabled="disabled"></q-checkbox>
      </div>
      <div class="form-item">
        <q-toggle text="toggle toggle"></q-toggle>
      </div>
    </div>

    <div class="title">Select</div>
    <div class="form-panel">
      <div class="form-item">
        <q-select default-text="Gender" :list-items="['Male', 'Female']"></q-select>
      </div>
      <div class="form-item">
        <q-select default-text="Gender" :list-items="['Male', 'Female']" color="btn-danger"></q-select>
      </div>
      <div class="form-item">
        <q-select default-text="Gender" :list-items="['Male', 'Female']" color="btn-info"></q-select>
      </div>
    </div>

    <div class="title">Form</div>
    <div class="form-panel">
      <form>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationDefault01">First name</label>
            <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationDefault02">Last name</label>
            <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationDefaultUsername">Username</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
              </div>
              <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationDefault03">City</label>
            <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationDefault04">State</label>
            <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationDefault05">Zip</label>
            <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <button class="btn btn-primary" type="submit">Submit form</button>
      </form>
    </div>

    <div class="title">Form validation</div>
    <div class="form-panel">
      <form>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationServer01">First name</label>
            <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationServer02">Last name</label>
            <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationServerUsername">Username</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend3">@</span>
              </div>
              <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationServer03">City</label>
            <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required>
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationServer04">State</label>
            <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationServer05">Zip</label>
            <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required>
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
            <label class="form-check-label" for="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <button class="btn btn-primary" type="submit">Submit form</button>
      </form>
    </div>
  </div>
</template>

<script>
  import QBasicInput from "../../../../components/q-input/QBasicInput.vue";
  import QIconInput from "../../../../components/q-input/QIconInput.vue";
  import QActionInput from "../../../../components/q-input/QActionInput.vue";
  import QCheckbox from '../../../../components/q-input/QCheckbox.vue'
  import QToggle from '../../../../components/q-input/QToggle.vue'
  import QSelect from '../../../../components/q-input/QSelect.vue'
  export default {
    name: "DocForms",
    components: {
      QBasicInput,
      QIconInput,
      QActionInput,
      QCheckbox,
      QToggle,
      QSelect
    }
  };
</script>

<style lang="stylus" scoped>
@import '../../../../common/stylus/variables.styl';

.doc-forms {
  padding: 1.5rem;
  background-color: #fff;
  border: 1px solid $color-border;
  border-radius: 4px;

  .title {
    color: $color-text;
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: 0.02rem;
  }

  .desc {
    color: $color-text;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    letter-spacing: 0.02rem;
    line-height: 1.5rem;
  }

  .form-panel {
    padding: 1rem;
    background-color: #f5f7fb;
    border: 1px solid $color-border;
    border-radius: 4px;
    margin-bottom: 2rem;

    .form-item {
      margin-bottom: 10px;
    }
  }
}
</style>