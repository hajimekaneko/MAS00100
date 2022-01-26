<template>
  <nav class="row board-navigation">
    <div class="col-10 title">
      <h1>TaskManagement </h1>
    </div>
    <div class="col-2 actions">
      <KbnButton
        type="text"
        @click="$emit('logout')"
      >
        ログオフ
      </KbnButton>
    </div>
  </nav>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton.vue'

export default {
  name: 'KbnBoardNavigation',

  components: {
    KbnButton
  }
}
</script>

<style scoped>
.board-navigation {
  display: flex;
  border-bottom: medium solid black;
}
.title {
  flex: 1;
}
h1 {
  margin: 0px;
}
.actions {
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  cursor: pointer;
}
</style>
