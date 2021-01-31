$(function() {
    // 获取用户信息
    getUserInfo()

    // 
    var layer = layui.layer
    $('#btnLogout').on('click',function() {
        layer.confirm('确认退出登录?', {icon: 3, title:'提示'}, function(index){
            //do something
            // 1.清空token值
            localStorage.removeItem('token')
            // 2.跳转到登录页面
            location.href= '/login.html'
            layer.close(index);
          });
                  
    })
})

function getUserInfo() {
    $.ajax({
        method:'get',
        url: '/my/userinfo',
        // headers:{
        //     Authorization:localStorage.getItem('token') || '',

        // },
        success(res) {
            console.log(res);
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败')
            }
            renderAvatar(res.data)
        }
    })
}
// 渲染用户头像
function renderAvatar(user) {
    var name = user.nickname || user.username
    $('#welcome').html('欢迎&nbsp;&nbsp' + name)
    // 渲染用户头像
    if (user.user_pic !== null) {
        $('.layui-nav-img').attr('src', user.user_pic).show()
        $('.text-avatar').hide()
    } else {
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}