<template>
  <main class="row ">
    <div class="col board-view">
    <KbnBoardNavigation @logout="handleLogout" />
    <p
      v-if="progress"
      class="progress"
    >
      {{ message }}
    </p>
    <KbnBoardTask :lists="lists" />
    <!-- タスク詳細モーダル表示用プレースホルダ -->
    <router-view />
    </div>
  </main>
</template>

<script>
// import api from "@/services/api"; //apiに統合する
import { mapState } from 'vuex'
import KbnBoardNavigation from '@/components/molecules/KbnBoardNavigation.vue'
import KbnBoardTask from '@/components/organisms/KbnBoardTask.vue'

export default {
  name: 'KbnBoardView',

  components: {
    KbnBoardNavigation,
    KbnBoardTask
  },

  data () {
    return {
      progress: false,
      message: ''

    }
  },

  computed: mapState({
    lists: state => state.board.lists
  }),

  created () {
    this.loadLists()
  },

  methods: {
    setProgress (message) {
      this.progress = true
      this.message = message
    },

    resetProgress () {
      this.progress = false
      this.message = ''
    },

    loadLists () {
      this.setProgress('読み込み中...')
      // api({
      //   method: "get",
      //   url: "/lists",
      // }).then(response => {
      //   console.log(response.data)
      //   this.$store.dispatch('fetchLists', response.data)
      //   .catch(err => Promise.reject(err))
      //   .then(() => {
      //     this.resetProgress()
      //   })
      // })
      // .catch(err => { throw err })
      this.$store.dispatch('fetchLists')
        .catch(err => Promise.reject(err))
        .then(() => {
          this.resetProgress()
        })
    },

    handleLogout () {
      this.setProgress('ログオフ中...')

      return this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({ path: '/taskmanagement/login' })
        })
        .catch(err => Promise.reject(err))
        .then(() => {
          this.resetProgress()
        })
    }
  }
}
</script>

<style scoped>

main{
  padding-top: 10vh;
}
.board-view {
  height:80vh;
  border: medium solid black;
}
.progress {
  margin: auto;
}
</style>
