import store from '@/store'

export const authorizeToken = (to, from, next) => {
  console.log("login??")
  console.log(to.matched.some(record => record.meta.requiresAuth))
    // マッチしたルートにおいて、メタフィールドに`requiresAuth`が付与されている場合は
    // ログインした際に付与される認証トークンがあるかどうかチェックする
    // 注意:
    // このアプリケーションでは簡略化のため`auth.token`があるかどうかのみで
    // ログイン済みであるかどうかチェックしているが、
    // 本来ならば付与された認証トークンをバックエンドのAPI経由などで検証すべき
  if (to.matched.some(record => record.meta.requiresAuth)) { //メタフィールドに`requiresAuth`が付与されているか確認
    console.log(store.state.taskmanagement.auth)
    console.log(store.state.taskmanagement.auth.token)
    if (!store.state.taskmanagement.auth || !store.state.taskmanagement.auth.token) { //認証されていない
      next({ path: '/taskmanagement/login' })
      console.log("認証されていないのでloginに戻す")
    } else {//認証されている
      next()
      console.log("認証済みなのでそのまま")
      console.log(store.state.taskmanagement.auth.token)
    }
  } else if (to.path === '/taskmanagement/login' && store.state.taskmanagement.auth.token) { //認証済み
    next({ path: '/taskmanagement/' })
    console.log("C??")
  } else { //そのまま
    console.log("D??")
    console.log(store.state.taskmanagement.auth.token)
    next()
  }
}
