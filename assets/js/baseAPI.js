// 每次执行ajax之前都会先调用这个函数
$.ajaxPrefilter(function(options) {
    options.url = 'http://ajax.frontend.itheima.net' + options.url
  console.log(options.url);

  // 统一为有权限接口，设置headers请求头
  if (options.url.indexOf('/my/') !== -1) {
    options.headers = {
      Authorization:localStorage.getItem('token') || '',

    }
  }

  // 全局统一挂载complete函数
  // options.complete = function(res) {
  //   // console.log(res);
  //   if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
  //     // 1.强制清空token
  //     localStorage.removeItem('token')
  //     // 2.强制跳转到登录页面
  //     location.href = '/login.html'
  //   }
  // }
})