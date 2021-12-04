<template>
    <div class="container apps">
         MyAPPSITEのページ
        <div class="row">
            <div class="col">
                <a href="/stockchart">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">stockchart</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
                </a>
                 <!-- <router-link to="/stockchart">stockchart</router-link> -->
                 <!-- <router-view></router-view> -->
            </div>
            <div class="col">
                <a href="/taskmanagement">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">taskmanagement</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
                </a>
                 <!-- <router-link to="/stockchart">stockchart</router-link> -->
                 <!-- <router-view></router-view> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
         name: 'site-body'
    }
</script>

<style scoped>
    @media (min-width: 768px) {
        footer {
            padding: 0;
            height: 50px;
            display: grid;
            grid-template-columns: 1fr 700px 1fr;
            grid-template-rows: 1fr;
        }
        footer > * {
            grid-column: 2;
            grid-row: 1;
        }
        p {
            justify-self: start;
            align-self: center;
        }
        ul {
            justify-self: end;
            align-self: center;
        }
    }
    @media (min-width: 1024px) {
        footer {
            grid-template-columns: 1fr 980px 1fr;
        }
    }
</style>
