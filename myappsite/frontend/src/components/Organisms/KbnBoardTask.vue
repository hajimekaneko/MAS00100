<template> 
  <div class="board-main ">
    <ul class="row board-tasks">
      <li class="col"
        v-for="list in lists"
        :key="list.listId"
      >
      <KbnTaskList v-bind="list" :list="list" />
      </li>
    </ul>
  </div>
</template>

<script>
import KbnTaskList from '@/components/organisms/KbnTaskList.vue'

export default {
  name: 'KbnBoardTask',

  components: {
    KbnTaskList
  },

  props: {
    lists: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.col{
  padding:0px
}
ul {
  display: flex;
  min-height: 65vh;
  list-style-type: none;
  margin: 16px;
  padding: 0;
}
ul li {
  width: 192px;
  margin-right: 8px;
  border: thin solid black;
  border-radius: 0.5em;
}
</style>
