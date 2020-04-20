import Vue from 'vue'
import Router from 'vue-router'
import Article from "@/components/Article.vue";
import Book from "@/components/Book.vue";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Article',
            component: Article
        },
        {
            path: '/book/:id',
            name: 'Book',
            component: Book,
            props: true
        }
    ]
})