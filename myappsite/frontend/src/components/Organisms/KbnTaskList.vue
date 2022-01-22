<template>
  <div class="task-list">
    <KbnTaskListHeader
      :name="name"
      @add="shown = true"
    />
    <ul class="task-list-items">
      <draggable
        v-model="draggableItems"
        :options="{ group: 'items' }"
        @change="handleChange"
        @end="handleEnd"
      >
        <li
          v-for="task in draggableItems"
          :key="task.taskId"
        >
        
          <KbnTaskCard
            v-bind="task"
            @remove="handleRemove"
          />
        </li>
      </draggable>
    </ul>
    <KbnTaskForm
      v-if="shown"
      :list="list"
      @close="shown = false"
    />
  </div>
</template>

<script>
import KbnTaskListHeader from '@/components/molecules/KbnTaskListHeader.vue'
import KbnTaskCard from '@/components/molecules/KbnTaskCard.vue'
import KbnTaskForm from '@/components/molecules/KbnTaskForm.vue'
import { mapState } from 'vuex'
import draggable from 'vuedraggable'

export default {
  name: 'KbnTaskList',

  components: {
    KbnTaskListHeader,
    KbnTaskCard,
    KbnTaskForm,
    draggable
  },

  props: {
    listId: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }, 
    tasks: {
      type: Array,
      default: () => []
    },
    list: {
      type: Object,
      default: () => []
    },
    tolist: {
      type: Array,
      default: () => []
    },
  },

  data () {
    return {
      shown: false,
    }
  },

  computed: {
    draggableItems: {
      get () { 
        return this.tasks 
        },
      set () {
        // console.log(value)
        // NOTE:
        //  本来なら、Vue.Draggrableから処理されたデータをitemsに反映すれば可能だが、
        //  フロントエンドとバックエンドの状態を整合とるために、ここでは何もしない。
      },
    },
    ...mapState({
      canMove: state => state.dragging.target !== null &&
        state.dragging.from !== null &&
        state.dragging.to !== null
    })
  },

  methods: {
    handleRemove ({ taskId, list }) {
      return this.$store.dispatch('removeTask', { taskId, list })
        .catch(err => Promise.reject(err))
    },

    handleChange ({ added, removed }) {
      if (added) {
        return this.$store.dispatch('moveToTask', {
          taskId: added.element.taskId,
          listId: this.listId,
          tolist: this.list
        }).catch(err => Promise.reject(err))
      } else if (removed) {
        return this.$store.dispatch('moveTaskFrom', {
          taskId: removed.element.taskId,
          listId: this.listId
        }).catch(err => Promise.reject(err))
      }
    },

    handleEnd () {
      if (this.canMove) {
        return this.$store.dispatch('performTaskMoving')
          .catch(err => Promise.reject(err))
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul li {
  margin: 8px;
  padding: 4px;
  border: thin solid black;
  border-radius: 0.5em;
}
</style>
