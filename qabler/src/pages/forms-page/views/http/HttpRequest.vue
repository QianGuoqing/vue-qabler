<template>
  <div class="http-request">
    <q-card>
      <div slot="card-title">
        <div>Http request</div>
      </div>
      <div slot="card-body">
        <div class="method-url">
          <div class="form-item">
            <form-wrapper title="Method">
              <a-select slot="content" defaultValue="get">
                <a-select-option value="get">GET</a-select-option>
                <a-select-option value="post">POST</a-select-option>
                <a-select-option value="head">HEAD</a-select-option>
                <a-select-option value="delete">DEL</a-select-option>
                <a-select-option value="patch">PATCH</a-select-option>
              </a-select>
            </form-wrapper>
          </div>
          <div class="form-item url">
            <form-wrapper title="Url">
              <a-input slot="content" value="https://content.googleapis.com/discovery/v1/apis/surveys/v2/rest" />
            </form-wrapper>
          </div>
        </div>
        <div class="url-table">
          <form-wrapper title="Assertions">
            <table slot="content" class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">SOURCE</th>
                  <th scope="col">PROPERTY</th>
                  <th scope="col">COMPARISON</th>
                  <th scope="col">TARGET</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <a-select defaultValue="status">
                      <a-select-option value="status">Status code</a-select-option>
                      <a-select-option value="json">JSON body</a-select-option>
                      <a-select-option value="headers">Headers</a-select-option>
                      <a-select-option value="text">Text body</a-select-option>
                      <a-select-option value="response">Response Text</a-select-option>
                    </a-select>
                  </th>
                  <td>
                    <a-input />
                  </td>
                  <td>
                    <a-select defaultValue="equals">
                      <a-select-option value="equals">Equals</a-select-option>
                      <a-select-option value="not-equals">Not equals</a-select-option>
                    </a-select>
                  </td>
                  <td>
                    <a-input value="200" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <a-select defaultValue="status">
                      <a-select-option value="status">Status code</a-select-option>
                      <a-select-option value="json">JSON body</a-select-option>
                      <a-select-option value="headers">Headers</a-select-option>
                      <a-select-option value="text">Text body</a-select-option>
                      <a-select-option value="response">Response Text</a-select-option>
                    </a-select>
                  </th>
                  <td>
                    <a-input />
                  </td>
                  <td>
                    <a-select defaultValue="equals">
                      <a-select-option value="equals">Equals</a-select-option>
                      <a-select-option value="not-equals">Not equals</a-select-option>
                    </a-select>
                  </td>
                  <td>
                    <a-input value="200" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <a-select defaultValue="status">
                      <a-select-option value="status">Status code</a-select-option>
                      <a-select-option value="json">JSON body</a-select-option>
                      <a-select-option value="headers">Headers</a-select-option>
                      <a-select-option value="text">Text body</a-select-option>
                      <a-select-option value="response">Response Text</a-select-option>
                    </a-select>
                  </th>
                  <td>
                    <a-input />
                  </td>
                  <td>
                    <a-select defaultValue="equals">
                      <a-select-option value="equals">Equals</a-select-option>
                      <a-select-option value="not-equals">Not equals</a-select-option>
                    </a-select>
                  </td>
                  <td>
                    <a-input value="200" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <a-select defaultValue="status">
                      <a-select-option value="status">Status code</a-select-option>
                      <a-select-option value="json">JSON body</a-select-option>
                      <a-select-option value="headers">Headers</a-select-option>
                      <a-select-option value="text">Text body</a-select-option>
                      <a-select-option value="response">Response Text</a-select-option>
                    </a-select>
                  </th>
                  <td>
                    <a-input />
                  </td>
                  <td>
                    <a-select defaultValue="equals">
                      <a-select-option value="equals">Equals</a-select-option>
                      <a-select-option value="not-equals">Not equals</a-select-option>
                    </a-select>
                  </td>
                  <td>
                    <a-input value="200" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form-wrapper>
        </div>
      </div>
      <div slot="card-footer">
        <div class="button-wrapper">
          <q-button text="Make request"></q-button>
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
  .http-request
    margin-top 2rem
    .method-url
      display flex
      justify-content space-between
      margin-bottom 1rem
      .url
        width 80%
    .button-wrapper
      text-align right
</style>