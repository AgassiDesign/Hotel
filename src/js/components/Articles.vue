<template>
    <div class="result-articles">
        <article class="article-card" v-for="post in posts" :key="post.id">
            <div class="article-thumbnail-wrap" v-if="hasThumbnail(post)">
                <a :href="post.link">
                    <img
                        width="360"
                        height="230"
                        :src="getThumbnail(post)"
                        class="article-thumbnail"
                        :alt="getThumbnailAltText(post)"
                    />
                    <span class="article-price"
                        >${{ post.acf.price }} / Night</span
                    >
                </a>
            </div>
            <!-- .article-thumbnail-wrap -->
            <div class="article-content">
                <header class="article-meta">
                    <div class="article-geo">{{ post.acf.location }}</div>
                    <!-- .article-geo -->
                    <div class="article-tags">
                        <span class="article-tag" rel="tag"
                            ><i class="fas fa-bed"></i> 1</span
                        >
                        <span class="article-tag" rel="tag"
                            ><i class="fas fa-bath"></i> 1</span
                        >
                        <span class="article-tag" rel="tag"
                            ><i class="fas fa-tv"></i> 1</span
                        >
                        <span class="article-tag" rel="tag"
                            ><i class="far fa-clone"></i> 1,428 sqrt</span
                        >
                    </div>
                    <!-- .article-tags -->
                </header>
                <!-- .article-meta -->
                <div class="article-author-row">
                    <a :href="getAuthorLink(post)">
                        <img
                            v-if="hasAuthorAvatar(post)"
                            :alt="getAuthorName(post)"
                            class="avatar"
                            height="60"
                            :src="getAuthorAvatar(post)"
                            width="60"
                        />
                    </a>
                    <div>
                        <a
                            class="article-author-name"
                            :href="getAuthorLink(post)"
                        >
                            {{ getAuthorName(post) }}
                        </a>
                        <time class="article-listed-time" datetime="01.01.2020">
                            Listed on
                            {{ getPostDate(post.date) }}
                        </time>
                    </div>
                </div>
                <!-- .author-row -->
                <div class="article-excerpt" v-if="hasPostExcerpt(post)">
                    <p>{{ getPostExcerpt(post) }}</p>
                </div>
                <!-- .article-excerpt -->
                <div class="article-footer">
                    <favorite :post_id="post.id"></favorite>
                    <a
                        :href="post.link"
                        class="btn article-btn-details btn-primary-light"
                    >
                        Details
                    </a>
                </div><!-- .article-save -->
            </div>
            <!-- .article-content -->
        </article>
        <!-- .article-card -->
    </div>
    <!-- .result-articles -->
</template>

<script>
import Favorite from './Favorite.vue';
export default {
    name: 'SearchHeader',
    data() {
        return {
            title: '',
        };
    },
    components: {
        Favorite
    },
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
    computed: {},
    methods: {
        getPostDate(date) {
            return moment(date).format('ll');
        },
        hasThumbnail(post) {
            if (
                post._embedded &&
                post._embedded['wp:featuredmedia'] &&
                post._embedded['wp:featuredmedia'][0].media_details &&
                post._embedded['wp:featuredmedia'][0].media_details.sizes
            ) {
                return true;
            }
            return false;
        },
        getThumbnail: function (post) {
            if (
                post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
                    .source_url
            ) {
                return post._embedded['wp:featuredmedia'][0].media_details.sizes
                    .medium.source_url;
            }
        },
        hasAuthorAvatar: function (post) {
            if (post._embedded['author'][0].avatar_urls['96']) {
                return true;
            }
            return false;
        },
        getAuthorAvatar: function (post) {
            if (post._embedded['author'][0].avatar_urls['96']) {
                return post._embedded['author'][0].avatar_urls['96'];
            }
        },
        getAuthorLink: function (post) {
            return post._embedded['author'][0].link;
        },
        getAuthorName: function (post) {
            return post._embedded['author'][0].name;
        },
        getThumbnailAltText: function (post) {
            if (post._embedded['wp:featuredmedia'][0].alt_text) {
                return post._embedded['wp:featuredmedia'][0].alt_text;
            }
        },

        getPostContent: function (post) {
            return post.content.rendered;
        },
        hasPostExcerpt: function (post) {
            if (post.excerpt && post.excerpt.rendered) {
                return true;
            }
            return false;
        },
        getPostExcerpt: function (post) {
            return post.excerpt.rendered;
        },
        getAuthorName: function (post) {
            if (post._embedded.author[0].name) {
                return post._embedded.author[0].name;
            }
        },
    },
};
</script>
