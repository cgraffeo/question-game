<template>
  <div class="container">

    <div class="row center-content">
      <div class="col-xs-12">
          <h2 class="title">ICE BREAKER</h2>
      </div>
    </div>

    <div class="row">
      <div class="enter-user-name col-xs-4 col-xs-offset4">
        <mdl-text-field label-class="centered-label-input" label="Enter Email" v-model="credentials.email"></mdl-text-field>
        <mdl-text-field label-class="centered-label-input" label="Enter Username" v-model="credentials.displayName"></mdl-text-field>
        <mdl-text-field label-class="centered-label-input" label="Enter Password" v-model="credentials.password"></mdl-text-field>
        <mdl-text-field label-class="centered-label-input" label="Enter Password Confirmation" v-if="register" v-model="credentials.passwordConfirmation"></mdl-text-field>
        <mdl-button :msg="submitBtnMsg" primary @click="submit"></mdl-button>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-6 col-xs-offset2">
        <a v-if="register" href="#login" @click.prevent="activateLogin">Go back to Login</a>
        <a v-if="!register" href="#signup" @click.prevent="activateRegistration">Register for a new account</a>
      </div>
    </div>

  </div>
</template>

<script>
import MdlTextField from './mdl/TextField.vue'
import MdlButton from './mdl/Button.vue'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      register: false,
      credentials: {
        email: null,
        displayName: null,
        password: null,
        passwordConfirmation: null
      }
    }
  },
  computed: {
    submitBtnMsg () {
      return this.register ? 'Sign Up' : 'Login'
    }
  },
  components: {
    MdlTextField,
    MdlButton
  },
  methods: {
    ...mapActions({
      login: 'login',
      signup: 'signup'
    }),

    activateLogin () {
      this.register = false
    },
    activateRegistration () {
      this.register = true
    },
    submit () {
      let method = this.register ? 'signup' : 'login'
      this[method](this.credentials)
    }
  }
}
</script>

<style lang="sass">
  @import "../scss/enterUser";
</style>
