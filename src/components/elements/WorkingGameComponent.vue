<template lang="pug">
  div
    center
      #phaser-example
</template>

<script>


export default {
  name: 'gameComponent',
  props: [],
  data () {
    return {
      game: null,
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      this.loadGame('angularAttack/angularattack_demo.js')
    },
    loadGame(fileName){
      // remove old game first
      if(this.game !== null){
        this.game.destroy()
      }
      // load new one
      let js = document.createElement("script");
          js.type = "text/javascript";
          js.src = `src/phaser/${fileName}`;
          document.body.appendChild(js);
          js.onload = (() => {
            __phaser.init(this.$el, this, {width: 800, height: 640});
          })
    },
    loadFile(file, index){
      this.active = index;
      this.loadGame(file)
    }
  },
  destroyed() {
    this.game.destroy();
  }
}
</script>


<style lang="sass" scoped>
  .small
    font-size: 12px
  .button
    margin-right: 5px
</style>
