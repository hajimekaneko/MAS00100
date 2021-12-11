<template>
    <div id="app">
        <Header/>
        <div class="login-view">
            <h1>Kanban App kore</h1>
        </div>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "@/components/organisms/Header"
    // import TaskManagement from "@/components/organisms/TaskManagement"
    // import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue'
    import Footer from "@/components/organisms/Footer"

    export default {
        name: 'app',
        // components: {Header, TaskManagement, Footer}
        components: {Header, Footer},
        methods: {
            handleLogin (authInfo) {
                return this.$store.dispatch('login', authInfo)
                    .then(() => {
                    this.$router.push({ path: '/' })
                    })
                    .catch(err => this.throwReject(err))
            },
            throwReject (err) { return Promise.reject(err) }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: fot-tsukuardgothic-std, sans-serif;
        line-height: 1.5;
        font-size: 14px;
    }

    .container {
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }

    @media (min-width: 768px) {
        .container {
            width: 700px;
            padding: 0;
            margin: 0 auto;
        }
    }

    @media (min-width: 1024px) {
        .container {
            width: 980px;
        }
    }
</style>
<style scoped>
.login-view {
  width: 320px;
  margin: auto;
}
</style>