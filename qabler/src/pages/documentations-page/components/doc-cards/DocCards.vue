<template>
  <div class="doc-cards">
    <div class="title">Cards</div>
    <div class="desc">A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.</div>
  
    <div class="title">Default card</div>
    <div class="card-panel">
      <div class="card-item">
        <q-card style="width: 50%">
          <div slot="card-title">Card title</div>
          <div slot="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
          </div>
        </q-card>
      </div>
    </div>

    <div class="title">Advanced card</div>
    <div class="card-panel">
      <div class="card-item">
        <q-card style="width: 50%">
          <div slot="card-title">
            <div>Card title</div>
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
      </div>
    </div>

    <div class="title">Blog post card</div>
    <div class="desc">The best way to make your post eye-catching is adding an image to it. To do so, just add the image with the .card-img-top class. We’ve added the .d-flex .flex-column classes to the .card-body to have the author details be on the bottom of the card.</div>
    <div class="card-panel">
      <div class="card-item">
        <q-card style="width: 50%">
          <img src="../../../../assets/images/photos/david-klaasen-54203-500.jpg" alt="" slot="card-poster">
          <div slot="card-title">
            <a href="">And this isn't my nose. This is a false one.</a>
          </div>
          <div slot="card-body">
            Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...
          </div>
          <div slot="card-footer">
            <q-button color="btn-black" block="btn-block" text="send"></q-button>
          </div>
        </q-card>
      </div>
    </div>

    <div class="title">Row deck</div>
    <div class="desc">If you want to create a couple of posts next to each other, add th</div>
    <div class="card-panel">
      <div class="card-item">
        <q-raw-card style="width: 50%">
          <div slot="card-content">
            Extra long content of card. Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </div>
        </q-raw-card>
      </div>
    </div>

    <div class="title">Color variations</div>
    <div class="card-panel card-panel-1">
      <div class="card-item">
        <q-card style="width: 95%" color="card-red">
          <div slot="card-title">Card title</div>
          <div slot="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
          </div>
        </q-card>
      </div>
      <div class="card-item">
        <q-card style="width: 95%" color="card-azure">
          <div slot="card-title">Card title</div>
          <div slot="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
          </div>
        </q-card>
      </div>
    </div>

    <div class="title">Card with loading</div>
    <div class="card-panel">
      <div class="card-item">
        <q-card style="width: 50%" :loading="true">
          <div slot="card-title">Card with loading</div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
  import QCard from '../../../../components/q-card/QCard.vue'
  import QRawCard from '../../../../components/q-card/QRawCard.vue'
  import QButton from '../../../../components/q-button/QButton.vue'
  export default {
    name: 'DocCards',
    components: {
      QCard,
      QButton,
      QRawCard
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../../../common/stylus/variables.styl';

  .doc-cards
    padding 1.5rem
    background-color #fff
    border 1px solid $color-border
    border-radius 4px
    .title
      color $color-text
      font-size 1.75rem
      font-weight 700
      margin-bottom 1rem
      letter-spacing .02rem
    .desc
      color $color-text
      font-size 1rem
      margin-bottom 1.5rem
      letter-spacing .02rem
      line-height 1.5rem
    .card-panel
      padding 1rem
      background-color #f5f7fb
      border 1px solid $color-border
      border-radius 4px
      margin-bottom 2rem
      &.card-panel-1
        display flex
      .card-item
        margin-bottom 5px
        .q-card, .q-raw-card
          margin 0 auto
</style>