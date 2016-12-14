<template>
<div class="container">
  <div class="row">
    <div class="options col-xs-6 col-md-6">
      <!-- <p class="options-text">Skip</p> -->
      <mdl-button primary msg="Skip"></mdl-button>
    </div>
    <div class="options col-xs-6 col-md-6">
      <mdl-button primary msg="Both Answer"></mdl-button>
    </div>
  </div>
  <div class="row text-area">
    <div class="chat-text" v-for="msg in messages" :class="isOutgoingMsg(msg)">
      <h3 class="prev-quest" v-if="msg.questionId" v-text="msg.question"></h3>
      <p class="prev-resp" v-text="msg.text"></p>
    </div>
  </div>
  <div class="answer-area row">
    <div class="choose-category col-xs-1 col-xs-offset-1">
      <mdl-button primary icon="comment-plus-outline"></mdl-button>
    </div>
    <div class="answer-line col-xs-5 col-xs-offset-2">
      <mdl-text-field label="Click Here to Type"></mdl-text-field>
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
  }
}
</script>

<style lang="sass">
.container {
  background: #212121;
  width: 100vw;
  height: 100vh;
}
.options {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  color: rgba(255, 255, 255, 0.5);
}
.mdl-button{
  font-size: 30px;
}
.text-area{
  width: 100%;
  height: 85%;
  overflow-y: auto;
  bottom: 200px;
}

.chat-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  width: 100%;
}

.chat-text--outgoing {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
}

.prev-quest{
  color: rgba(255, 255, 255, 0.7);
  font-size: 40px;
  width: 70%;
  height: 100%;
  font-weight: bold;
}

.prev-resp{
  color: rgba(255, 255, 255, 0.7);
  font-size: 30px;
  width: 70%;
  height: 100%;
  line-height: 45px;
}

.answer-area{
  position: fixed;
  bottom: 10px;
  width: 100vw;
}
.mdl-textfield__label{
  color: rgb(233, 30, 99);
  font-size: 30px;
}
// .choose-category{
//   color: rgb(255, 63, 128);
//   font-size: 30px;
// }
// .answer-line{
//   display: flex;
//   justify-content: center;
//   color: rgba(255, 255, 255, 0.7);
//   font-size: 30px;
//   border-bottom: solid rgb(255, 63, 128) 2px;
// }
</style>