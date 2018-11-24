<!--temp-->
<template>
  <div>
    <h2>Course</h2>
    <ul>
  <li v-for="( row ,index) in courseList">{{row.title}}</li>
    </ul>
  </div>
</template>
<!--JS-->
<script>
  export default {
    data() {
      return {
        courseList: [],
      }
    },

    mounted:
      function () {this.initCourseList()},

    methods: {
      // 写法一
      // initCourseList: function(){},

      // 写法二
      initCourseList() {
        // 在105 day （一）说明
                                                           //var that = this
        this.$axios.request({
          url: 'http://127.0.0.1:8000/v1/api/course/',
          method: 'GET',
          // 回调 , data: 成功之后返回的值
        })
                                                            /*
                                                              .then(function (ret) {
                                                              if (ret.data.code === 1000) {
                                                                // this.courseList = ret.data.code
                                                                // 上行的 this是 $axios 里的, 不是vm里的
                                                                that.courseList = ret.data.data
                                                             */
          .then( (ret) => {
          if (ret.data.code === 1000) {
            this.courseList = ret.data.data                                                             
            console.log(ret.data.data)
          }
          else {alter("异步请求失败")}
        })
          // 异常捕捉
          .catch(function (data) {

        })
      }
    },
  }
</script>
<!--CSS-->
<style>

</style>
