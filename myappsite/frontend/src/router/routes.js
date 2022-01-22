import KbnBoardView from '@/components/template/taskmanagement/KbnBoardView.vue'
import KbnTaskDetailModal from '@/components/template/taskmanagement/KbnTaskDetailModal.vue'
import KbnLoginView from '@/components/template/taskmanagement/KbnLoginView.vue'

export default [{
  path: '/taskmanagement',
  component: KbnBoardView,
  meta: { requiresAuth: true },
  children: [{
    path: 'tasks/:taskId',
    component: KbnTaskDetailModal,
    name: 'taskDetailModal',
    meta: { requiresAuth: true }
  }]
},{
  path: '/taskmanagement/login',
  component: KbnLoginView
}]
