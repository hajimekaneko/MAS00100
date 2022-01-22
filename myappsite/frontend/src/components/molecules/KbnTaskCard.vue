<template>
  <div class="task-card">
    <div class="name">
      <router-link :to="{ name: 'taskDetailModal', params: { taskId } }">
        <h3>{{ name }}</h3>
      </router-link>
    </div>
    <div class="actions">
      <KbnButton
        type="text"
        @click="$emit('remove', { taskId, list })"
      >
        <KbnIcon name="remove" />
      </KbnButton>
    </div>
  </div>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton.vue'
import KbnIcon from '@/components/atoms/KbnIcon.vue'

export default {
  name: 'KbnTaskCard',

  components: {
    KbnButton,
    KbnIcon
  },

  props: {
    taskId: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    list: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.task-card {
  display: flex;
}
.name {
  flex: 1;
}
h3 {
  margin: 0px;
  font-size: 0.75em;
  text-align: left;
  padding-left: 8px;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
.actions {
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  cursor: pointer;
}
</style>
