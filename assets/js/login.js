$(function() {
     // 点击注册账号链接
  $("#link_reg").on('click',function() {
    $(".login-box").hide()
    $(".reg-box").show()
})
   //点击去登陆链接
$("#link_login").on('click',function() {
  $(".login-box").show()
  $(".reg-box").hide()
})

var form = layui.form
var layer = layui.layer
form.verify({
    pwd: [
        /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
      ] ,
     repwd: function(value) {
       var pwd =  $('.reg-box [name=password]').val()
         if (pwd !== value) {
             return '两次密码不一致'
         }
     } 
})
//监听注册表单提交事件 
$("#form_reg").on('submit',function(e) {
    e.preventDefault()
    var data = {username: $('#form_reg [name=username]').val(), password: $('#form_reg [name=password]').val()}
    $.post('/api/reguser',data,function(res) {
    if (res.status !== 0) {
        return layer.msg(res.message);
    }
    layer.msg('注册成功');
    $("#link_login").click()
})

})
// 监听登录表单提交事件
$("#form_login").submit(function(e) {
    e.preventDefault()
    $.ajax({
        method: 'post',
        url: '/api/login',
        data: $(this).serialize(),
        success(res) {
           if (res.status !== 0) {
               return layer.msg(res.message)
           } 
           layer.msg(res.message)
           localStorage.setItem('token',res.token)
           location.href = '/index.html'
        }
    })
})
})