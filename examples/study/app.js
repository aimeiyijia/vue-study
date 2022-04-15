/* global Vue */
const childComponent = Vue.component('child', {
  template: '<div><p @click="showMsgFromSon">{{msgFromFather}} and {{hitFromFather}}</p></div>',
  data: function () {
    return {
      childMsg: 'Hello, I am Child'
    }
  },
  props: ['msgFromFather', 'hitFromFather'],
  methods: {
    showMsgFromSon () {
      console.log('Hello Vue from son')
    }
  },
  mounted () {
    console.log('child mounted')
  }
})
new Vue({
  el: "#demo",

  data: function () {
    return {
      msg: 'Hello Chris, I am your father',
      hit: 'I will hit you if you do not study',
    }
  },
  components: {
    childComponent
  },
  methods: {
    hoverFromParent () {
      console.log('attch event')
    },
    hookFromParent () {
      console.log('attch hook')
    }
  }
});
