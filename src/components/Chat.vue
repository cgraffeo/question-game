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
      <div>
        <mdl-button v-if="toggle" @click="toggleMsg" primary msg="Message"></mdl-button>
        <mdl-button v-if="!toggle" @click="toggleMsg" primary msg="Answer"></mdl-button>
      </div>
    </div>
    <div class="answer-line">
      <mdl-text-field v-if="toggle" v-model="newMsg" label-class="chat-area" label="Click Here to Type"></mdl-text-field>
      <mdl-text-field v-if="!toggle" v-model="newAnswer" label-class="chat-area" label="Click Here to Type"></mdl-text-field>
      <div class="chat-btn">
        <mdl-button v-if="toggle" @click="sendMsg" primary icon="chat"></mdl-button>
        <mdl-button v-if="!toggle" @click="sendAnswer" primary icon="chat"></mdl-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import messages from '../data/dummyMsgs'
import MdlTextField from './mdl/TextField.vue'
import MdlButton from './mdl/Button.vue'
import firebase from 'firebase'

let db = firebase.database()

export default {
  components: {
    MdlTextField,
    MdlButton
  },
  data () {
    return {
      toggle: true,
      msg: null,
      answer: null
    }
  },
  firebase: {
    messages: db.ref('items')
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
    },
    toggleMsg () {
      this.toggle = !this.toggle
    },
    sendMsg () {
      this.$firebaseRefs.msg.push(this.msg)
    },
    sendAnswer () {
      this.$firebaseRefs.answer.push(this.answer)
    },
    skip () {},
    bothAnswer () {}
  }
}

</script>

<style lang="sass">
@import "../scss/chat";
</style>