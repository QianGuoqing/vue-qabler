<template>
  <div class="user-table">
    <table class="ui selectable table">
      <thead>
        <tr>
          <th>USER</th>
          <th>USAGE</th>
          <th>PAYMENT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="avatar-name">
              <q-avatars :status="true" color="avatar-green">
                <img src="../../../../static/female/1.jpg" alt="" slot="avatar">
              </q-avatars>
              <div class="name-date">
                <div class="name">Elizabeth Martin</div>
                <div class="date">Registered: Mar 19, 2018</div>
              </div>
            </div>
          </td>
          <td>
            <a-progress :percent="42" status="active" />
          </td>
          <td>
            <img class="payment" src="../../../../static/payments/visa.svg" alt="">
          </td>
        </tr>
        <tr>
          <td>
            <div class="avatar-name">
              <q-avatars :status="true" color="avatar-green">
                <img src="../../../../static/female/2.jpg" alt="" slot="avatar">
              </q-avatars>
              <div class="name-date">
                <div class="name">Michelle Schultz</div>
                <div class="date">Registered: Mar 2, 2018</div>
              </div>
            </div>
          </td>
          <td>
            <a-progress :percent="0" status="active" />
          </td>
          <td>
            <img class="payment" src="../../../../static/payments/verisign.svg" alt="">
          </td>
        </tr>
        <tr>
          <td>
            <div class="avatar-name">
              <q-avatars :status="true" color="avatar-red">
                <img src="../../../../static/female/3.jpg" alt="" slot="avatar">
              </q-avatars>
              <div class="name-date">
                <div class="name">Crystal Austin</div>
                <div class="date">Registered: Apr 7, 2018</div>
              </div>
            </div>
          </td>
          <td>
            <a-progress :percent="96" status="active" />
          </td>
          <td>
            <img class="payment" src="../../../../static/payments/webmoney.svg" alt="">
          </td>
        </tr>
        <tr>
          <td>
            <div class="avatar-name">
              <q-avatars :status="true" color="avatar-green">
                <img src="../../../../static/female/7.jpg" alt="" slot="avatar">
              </q-avatars>
              <div class="name-date">
                <div class="name">Douglas Ray</div>
                <div class="date">Registered: Jan 15, 2018</div>
              </div>
            </div>
          </td>
          <td>
            <a-progress :percent="6" status="exception" />
          </td>
          <td>
            <img class="payment" src="../../../../static/payments/visa.svg" alt="">
          </td>
        </tr>
        <tr>
          <td>
            <div class="avatar-name">
              <q-avatars :status="true" color="avatar-green">
                <img src="../../../../static/female/8.jpg" alt="" slot="avatar">
              </q-avatars>
              <div class="name-date">
                <div class="name">Teresa Reyes</div>
                <div class="date">Registered: Mar 4, 2018</div>
              </div>
            </div>
          </td>
          <td>
            <a-progress :percent="36" status="exception" />
          </td>
          <td>
            <img class="payment" src="../../../../static/payments/westernunion.svg" alt="">
          </td>
        </tr>
        <tr>
          <td>
            <div class="avatar-name">
              <q-avatars :status="true" color="avatar-green">
                <img src="../../../../static/female/9.jpg" alt="" slot="avatar">
              </q-avatars>
              <div class="name-date">
                <div class="name">Emma Wade</div>
                <div class="date">Registered: Mar 19, 2018</div>
              </div>
            </div>
          </td>
          <td>
            <a-progress :percent="9" status="exception" />
          </td>
          <td>
            <img class="payment" src="../../../../static/payments/visa.svg" alt="">
          </td>
        </tr>
        <tr>
          <td>
            <div class="avatar-name">
              <q-avatars :status="true" color="avatar-green">
                <img src="../../../../static/female/11.jpg" alt="" slot="avatar">
              </q-avatars>
              <div class="name-date">
                <div class="name">Carol Henderson</div>
                <div class="date">Registered: Mar 19, 2018</div>
              </div>
            </div>
          </td>
          <td>
            <a-progress :percent="100" />
          </td>
          <td>
            <img class="payment" src="../../../../static/payments/worldpay.svg" alt="">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import QAvatars from '../../../components/q-avatars/QAvatars.vue'
  export default {
    name: 'UserTable',
    components: {
      QAvatars
    }
  }
</script>

<style lang="stylus" scoped>


  .payment
    width 2.5rem
    height 1.5rem
    box-shadow 0 0 1px 1px rgba(0, 0, 0, 0.1)
    border-radius 2px

  .last-login
    font-size 13px
    color #9aa0ac

  .circle
    font-size 15px
    width 3rem
    height 3rem

  .avatar-name
    display flex
    align-items center
    .name-date
      margin-left 1rem
      .name
        font-size 15px
      .date
        font-size 13px
        color #9aa0ac
</style>