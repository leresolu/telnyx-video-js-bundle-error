<template>
  <div>
    <p>{{content}}</p>
    <button @click="loadBundle" v-show="!loaded">Load bundle</button>
    <section v-show="loaded">
      initialize is:
      <pre>{{JSON.stringify(initialize)}}</pre>
    </section>
    <section v-show="loaded">
      Room is:
      <pre>{{JSON.stringify(room)}}</pre>
    </section>
    <section v-show="loaded">
      State is:
      <pre>{{JSON.stringify(state)}}</pre>
    </section>
    <section v-show="loaded">
      Participant is:
      <pre>{{JSON.stringify(participant)}}</pre>
    </section>
    <section v-show="loaded">
      Stream is:
      <pre>{{JSON.stringify(stream)}}</pre>
    </section>
    <section v-show="loaded">
      Message is:
      <pre>{{JSON.stringify(message)}}</pre>
    </section>
  </div>
</template>

<script>
import {
  initialize,
  Room,
  State,
  Participant,
  Stream,
  Message,
} from '@telnyx/video';

export default {
  name: 'IndexPage',
  data () {
    return {
      loaded: false,
      initialize: null,
      room: null,
      state: null,
      participant: null,
      stream: null,
      message: null,
      content: 'Click the button to try and use the imported @telnyx/video objects'
    }
  },
  methods: {
    loadBundle () {
      this.loaded = true
      console.log(initialize)
      console.log(Room)
      console.log(State)
      console.log(Participant)
      console.log(Stream)
      console.log(Message)
      this.initialize = initialize
      this.room = Room
      this.state = State
      this.participant = Participant
      this.stream = Stream
      this.message = Message
      this.content = 'The following outputs are taken directly from the @telnyx/video import'
    }
  },
}
</script>
