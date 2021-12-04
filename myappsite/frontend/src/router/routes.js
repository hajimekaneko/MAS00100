import KbnBoardView from '@/components/pages/taskmanagement/KbnBoardView.vue'
import TaskManagement from '@/components/pages/taskmanagement/TaskManagement.vue'
import KbnTaskDetailModal from '@/components/pages/taskmanagement//KbnTaskDetailModal.vue'

export default [{
  path: '/',
  component: KbnBoardView,
  meta: { requiresAuth: true },
  children: [{
    path: 'tasks/:id',
    component: KbnTaskDetailModal,
    name: 'taskDetailModal',
    meta: { requiresAuth: true }
  }]
}, {
  // path: '/login',
  path: '/',
  component: TaskManagement
}, {
  path: '*',
  redirect: '/'
}]
