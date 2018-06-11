<template>
  <div class="invoice-table">
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">INVOICE SUBJECT</th>
          <th scope="col">CLIENT</th>
          <th scope="col">VAT NO.</th>
          <th scope="col">CREATED</th>
          <th scope="col">STATUS</th>
          <th scope="col">PRICE</th>
          <th scope="col">DO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">001401</th>
          <td>Design Works</td>
          <td>Carlson Limited</td>
          <td>@87956621</td>
          <td>15 Dec 2017</td>
          <td>Paid</td>
          <td>$887</td>
          <td>
            <q-button size="btn-sm" text="manage"></q-button>
            <q-button size="btn-sm" color="btn-danger" text="remove"></q-button>
          </td>
        </tr>
        <tr>
          <th scope="row">001402</th>
          <td>UX Wireframes</td>
          <td>Adobe</td>
          <td>@87956421</td>
          <td>12 Apr 2017</td>
          <td>Pending</td>
          <td>$1200</td>
          <td>
            <q-button size="btn-sm" text="manage"></q-button>
            <q-button size="btn-sm" color="btn-danger" text="remove"></q-button>
          </td>
        </tr>
        <tr>
          <th scope="row">001403</th>
          <td>New Dashboard</td>
          <td>Bluewolf</td>
          <td>@87956621</td>
          <td>23 Oct 2017</td>
          <td>Pending</td>
          <td>$534</td>
          <td>
            <q-button size="btn-sm" text="manage"></q-button>
            <q-button size="btn-sm" color="btn-danger" text="remove"></q-button>
          </td>
        </tr>
        <tr>
          <th scope="row">001404</th>
          <td>Design Works</td>
          <td>Carlson Limited</td>
          <td>@87956621</td>
          <td>15 Dec 2017</td>
          <td>Paid</td>
          <td>$887</td>
          <td>
            <q-button size="btn-sm" text="manage"></q-button>
            <q-button size="btn-sm" color="btn-danger" text="remove"></q-button>
          </td>
        </tr>
        <tr>
          <th scope="row">001405</th>
          <td>Design Works</td>
          <td>Carlson Limited</td>
          <td>@87956621</td>
          <td>15 Dec 2017</td>
          <td>Paid</td>
          <td>$887</td>
          <td>
            <q-button size="btn-sm" text="manage"></q-button>
            <q-button size="btn-sm" color="btn-danger" text="remove"></q-button>
          </td>
        </tr>
        <tr>
          <th scope="row">001406</th>
          <td>Design Works</td>
          <td>Carlson Limited</td>
          <td>@87956621</td>
          <td>15 Dec 2017</td>
          <td>Paid</td>
          <td>$887</td>
          <td>
            <q-button size="btn-sm" text="manage"></q-button>
            <q-button size="btn-sm" color="btn-danger" text="remove"></q-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import QButton from '../../../components/q-button/QButton.vue'
  export default {
    name: 'InvoiceTable',
    components: {
      QButton
    }
  }
</script>

<style lang="stylus" scoped>
  .invoice-table
    border 1px solid rgba(0, 40, 100, 0.12)
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
    background-color #fff
    padding 1rem 1rem 0.8rem 1rem
    text-align center
    color rgb(73, 80, 87)
</style>