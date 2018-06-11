<template>
  <div class="development card">
    <div class="card-body">
      <h5 class="card-title">Development Activity</h5>
      <table class="table text-center table-hover table-item">
        <thead>
          <tr>
            <th scope="col">USER</th>
            <th scope="col">COMMIT</th>
            <th scope="col">DATE</th>
            <th scope="col">REMOVE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <div class="user-th">
                <q-avatars>
                  <img src="../../../../static/female/2.jpg" alt="" slot="avatar">
                </q-avatars>
                <div class="name">
                  <div>Ronald</div>
                  <div>Bradley</div>
                </div>
              </div>
            </th>
            <td>Initial commit</td>
            <td>May 6, 2018</td>
            <td>
              <a-icon type="close" /></td>
          </tr>
          <tr>
            <th scope="row">
              <div class="user-th">
                <q-avatars>
                  <img src="../../../../static/female/3.jpg" alt="" slot="avatar">
                </q-avatars>
                <div class="name">
                  <div>Russell</div>
                  <div>Gibson</div>
                </div>
              </div>
            </th>
            <td>Main structure</td>
            <td>April 22, 2018</td>
            <td>
              <a-icon type="close" /></td>
          </tr>
          <tr>
            <th scope="row">
              <div class="user-th">
                <q-avatars>
                  <img src="../../../../static/female/1.jpg" alt="" slot="avatar">
                </q-avatars>
                <div class="name">
                  <div>Beverly</div>
                  <div>Armstrong</div>
                </div>
              </div>
            </th>
            <td>Left sidebar</td>
            <td>	April 15, 2018</td>
            <td>
              <a-icon type="close" /></td>
          </tr>
          <tr>
            <th scope="row">
              <div class="user-th">
                <q-avatars>
                  <img src="../../../../static/female/6.jpg" alt="" slot="avatar">
                </q-avatars>
                <div class="name">
                  <div>Bobby</div>
                  <div>Knight</div>
                </div>
              </div>
            </th>
            <td>dropdown style</td>
            <td>April 8, 2018</td>
            <td>
              <a-icon type="close" /></td>
          </tr>
          <tr>
            <th scope="row">
              <div class="user-th">
                <q-avatars>
                  <img src="../../../../static/female/10.jpg" alt="" slot="avatar">
                </q-avatars>
                <div class="name">
                  <div>Sharon</div>
                  <div>Wells</div>
                </div>
              </div>
            </th>
            <td>Fixes #625</td>
            <td>April 9, 2018</td>
            <td>
              <a-icon type="close" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import QAvatars from '../../../components/q-avatars/QAvatars.vue'
  export default {
    name: 'DevelopmentActivity',
    components: {
      QAvatars
    }
  }
</script>

<style lang="stylus" scoped>
  .table-item
    margin-top 1rem

  .user-th
    display flex
    align-items center
    .name
      margin-left 1rem
</style>