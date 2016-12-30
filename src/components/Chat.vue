<!-- let firebase = require('firebase');
let db = firebase.database(); -->
<!-- let msg = db.ref('msg'); -->
<!-- let answer = db.ref('answer'); -->

<template>
<div class="container">
  <div class="row option-row">
    <div class="options col-xs-6 col-md-6">
      <mdl-button @click.prevent="skip" primary msg="Skip"></mdl-button>
    </div>
    <div class="options col-xs-6 col-md-6">
      <mdl-button @click.prevent="bothAnswer" primary msg="Both Answer"></mdl-button>
    </div>
  </div>
  <div class="row text-area">
    <div class="chat-text" v-for="msg in messages" :class="isOutgoingMsg(msg)">
      <h3 class="prev-quest" v-if="msg.questionId" v-text="msg.question"></h3>
      <p class="prev-resp" v-text="msg.text"></p>
    </div>
  </div>
  <div class="answer-area row">
    <div class="choose-category">
      <mdl-button primary icon="playlist_add"></mdl-button>
      <div :class="{active: toggleable}">
        <mdl-button @click.prevent="toggleMsg" primary msg="Message"></mdl-button>
      </div>
      <div :class="{active: toggleable}">
        <mdl-button @click.prevent="toggleMsg" primary msg="Answer"></mdl-button>
      </div>
    </div>
    <div class="answer-line">
      <mdl-text-field label-class="chat-area" label="Click Here to Type"></mdl-text-field>
      <div class="chat-btn">
        <mdl-button primary icon="chat"></mdl-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import messages from '../data/dummyMsgs'
import MdlTextField from './mdl/TextField.vue'
import MdlButton from './mdl/Button.vue'

export default {
  components: {
    MdlTextField,
    MdlButton
  },
  data: {
    toggle: false
    // newMessage: null,
    // newAnswer: null
  },
  computed: {
    myUserName () {
      return 'chris'
    },
    messages () {
      return messages
    }
  },
  methods: {
    isOutgoingMsg (msg) {
      return [
        this.myUserName === msg.author ? 'chat-text--outgoing' : null
      ]
    }
  },
  toggleMsg () {
    this.toggle = !this.toggle
  }
  // sendMsg () {
  //   msg.push({
  //     message: this.newMessage
  //   })
  // },
  // sendAnswer () {
  //   answer.push({
  //     answer: this.newAnswer
  //   })
  // }
  // skip () {},
  // bothAnswer () {}
}

</script>

<style lang="sass">
@import "../scss/chat";
</style>