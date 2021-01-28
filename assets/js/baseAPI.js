// 每次执行ajax之前都会先调用这个函数
$.ajaxPrefilter(function(options) {
    options.url = 'http://ajax.frontend.itheima.net' + options.url
  console.log(options.url);
})