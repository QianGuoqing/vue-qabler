<template>
  <div class="card-design-page">
    <q-card style="width: 49%">
      <div slot="card-title">
        This is a standard card
      </div>
      <div slot="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
      </div>
      <div slot="card-footer">
        This is standard card footer
      </div>
    </q-card>
    <q-card style="width: 49%">
      <div slot="card-title">
        Built card
      </div>
      <div slot="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
      </div>
      <div slot="card-footer"></div>
    </q-card>
    <q-card style="width: 49%" color="card-blue">
      <div slot="card-title">Card blue</div>
      <div slot="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
      </div>
      <div slot="card-footer">
        card blue footer
      </div>
    </q-card>
    <q-card style="width: 49%" color="card-green">
      <div slot="card-title">Card green</div>
      <div slot="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
      </div>
      <div slot="card-footer">
        card green footer
      </div>
    </q-card>
    <q-card style="width: 49%" color="card-orange">
      <div slot="card-title">Card orange</div>
      <div slot="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
      </div>
      <div slot="card-footer">
        card orange footer
      </div>
    </q-card>
    <q-card style="width: 49%" color="card-red">
      <div slot="card-title">Card red</div>
      <div slot="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
      </div>
      <div slot="card-footer">
        card red footer
      </div>
    </q-card>
    <q-card style="width: 49%" color="card-yellow">
      <div slot="card-title">Card yellow</div>
      <div slot="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
      </div>
      <div slot="card-footer">
        card yellow footer
      </div>
    </q-card>
    <q-card style="width: 49%" color="card-teal">
      <div slot="card-title">Card teal</div>
      <div slot="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
      </div>
      <div slot="card-footer">
        card teal footer
      </div>
    </q-card>
    <q-card style="width: 49%" color="card-purple">
      <div slot="card-title">Card purple</div>
      <div slot="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
      </div>
      <div slot="card-footer">
        card purple footer
      </div>
    </q-card>
    <q-card style="width: 49%">
      <div slot="card-title">
        <div>Panel with custom buttons</div>
        <div>
          <q-button text="action 1" size="btn-sm"></q-button>
          <q-button text="action 2" size="btn-sm" color="btn-danger"></q-button>
        </div>
      </div>
      <div slot="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
      </div>
      <div slot="card-footer">
        This is standard card footer
      </div>
    </q-card>
    <q-card style="width: 49%">
      <div slot="card-title">
        <div>Panel with custom input</div>
        <div>
          <a-input placeholder="search..."/>
           <q-button color="btn-black" social="btn-social">
            <a-icon type="search" slot="icon"/>
          </q-button>
        </div>
      </div>
      <div slot="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
      </div>
      <div slot="card-footer">
        This is standard card footer
      </div>
    </q-card>
    <q-card style="width: 49%">
      <div slot="card-title">
        <div>Panel with toggle</div>
        <div>
          <q-toggle></q-toggle>
        </div>
      </div>
      <div slot="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
      </div>
      <div slot="card-footer">
        This is standard card footer
      </div>
    </q-card>
    <q-card style="width: 50%" :loading="true">
      <div slot="card-title">Card with loading</div>
    </q-card>
  </div>
</template>

<script>
  import QCard from '../../../../components/q-card/QCard.vue'
  import QButton from '../../../../components/q-button/QButton.vue'
  import QToggle from '../../../../components/q-input/QToggle.vue'
  export default {
    name: 'CardDesignPage',
    components: {
      QCard,
      QButton,
      QToggle
    }
  }
</script>

<style lang="stylus" scoped>
  .q-card
    margin-bottom 30px
  .card-design-page
    padding 30px 0
    display flex
    justify-content space-between
    flex-flow wrap
</style>