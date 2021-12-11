import store from '../store'

export const authorizeToken = (to, from, next) => {
  console.log("login??")
  console.log(to.matched.some(record => record.meta.requiresAuth))
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(store.state.auth)
    console.log(store.state.auth.token)
    // マッチしたルートにおいて、メタフィールドに`requiresAuth`が付与されている場合は
    // ログインした際に付与される認証トークンがあるかどうかチェックする
    // 注意:
    // このアプリケーションでは簡略化のため`auth.token`があるかどうかのみで
    // ログイン済みであるかどうかチェックしているが、
    // 本来ならば付与された認証トークンをバックエンドのAPI経由などで検証すべき
    if (!store.state.auth || !store.state.auth.token) {
      next({ path: '/taskmanagement/login' })
      console.log("A??")
    } else {
      next()
      console.log("B??")
      console.log(store.state.auth.token)
    
    }
  } else if (to.path === '/login' && store.state.auth.token) {
    next({ path: '/taskmanagement/' })
    console.log("C??")
  } else {
    console.log("baru??")
    console.log(store.state.auth.token)
    
    next()
  }
}
