import KbnBoardView from '@/components/pages/taskmanagement/KbnBoardView.vue'
import KbnTaskDetailModal from '@/components/pages/taskmanagement/KbnTaskDetailModal.vue'
import KbnLoginView from '@/components/pages/taskmanagement/KbnLoginView.vue'

export default [{
  path: '/taskmanagement/',
  component: KbnBoardView,
  meta: { requiresAuth: true },
  children: [{
    path: 'tasks/:id',
    component: KbnTaskDetailModal,
    name: 'taskDetailModal',
    meta: { requiresAuth: true }
  }]
},{
  path: '/taskmanagement/login',
  component: KbnLoginView
}]
