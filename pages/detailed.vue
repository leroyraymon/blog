<template>
  <a-layout>
    <a-layout-content>
      <div class="ley-well well-sm bg-light-peach text-white">
        <a-icon type="read" />
        <span class="ispan">博客文章内容</span>
      </div>
      <div class="ley-form-default margin-top margin-bottom">
        <a-skeleton :loading="blogLoading" style="width: 360px; float: right;" active avatar :paragraph="{rows: 1}">
          <a-list-item-meta>
            <template slot="description">
              <span>发布时间：{{blogData.created_at | formatDate('yyyy-MM-dd')}}</span><span class="margin-lfrg">评论：{{blogData.comments? `已有 ${blogData.comments} 条评论`: '还没有人评论'}}</span>
            </template>
            <a slot="title" :href="blogData.user.html_url" target="_blank">发布者：{{blogData.user.login}}</a>
            <a-avatar slot="avatar" :src="blogData.user.avatar_url" />
          </a-list-item-meta>
        </a-skeleton>
        <a-skeleton :loading="blogLoading" style="float: left;" active>
          <div class="markdown-body">
            <h3 class="title">{{blogData.title}}</h3>
            <div v-html="blogData.body_html">{{blogData.body_html}}</div>
          </div>
        </a-skeleton>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import HomeAside from "@/components/HomeAside/index";
import github from "@/assets/js/github.js";

export default {
  name: 'Detailed',
  layout: 'index',
  components: { HomeAside },
  data() {
    return {
      blogData: {
        created_at: null,
        user: {
          avatar_url: null
        }
      },
      blogLoading: true,
    };
  },
  mounted() {
    this.getBlog();
  },
  methods: {
    async getBlog() {
      let { data: post } = await github.issues.get({
        owner: process.env.owner,
        repo: process.env.repo,
        issue_number: this.$route.query.number,
        headers: {
          Accept: 'application/vnd.github.v4.html'
        }
      });
      this.blogData = post;
      this.blogLoading = false;
    }
  }
}
</script>

<style scoped>
.markdown-body {
  min-height: 90px;
  padding: 20px;
  width: 100%;
}
.markdown-body .title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
}
::v-deep .markdown-body pre {
  padding: 16px;
  overflow: auto;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
}
::v-deep .markdown-body code {
  border-radius: 3px;
  padding: 2px 5px;
  background-color: #f6f8fa;
}
::v-deep .markdown-body h3 {
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}
::v-deep .markdown-body ol,
::v-deep .markdown-body ul {
  padding-left: 2em;
  margin-top: 0;
  margin-bottom: 16px;
}
</style>
