import KbnBoardView from '@/pages/taskmanagement/KbnBoardView.vue'
import KbnLoginView from '@/pages/taskmanagement/KbnLoginView.vue'
import KbnTaskDetailModal from '@/pages/taskmanagement/KbnTaskDetailModal.vue'

export default [{
  path: '/',
  component: KbnBoardView,
  meta: { requiresAuth: true }
}, {
  path: '/login',
  component: KbnLoginView
}, {
  path: '/tasks/:id',
  component: KbnTaskDetailModal,
  meta: { requiresAuth: true }
}, {
  path: '*',
  redirect: '/'
}]
