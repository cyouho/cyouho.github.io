// 全局header和footer导入用js
$(function () {
    $("#global_header").load("../global_header.html")
    $("#global_footer").load("../global_footer.html")
})


$(document).ready(function () {
    // 假登录按钮的弹框用js
    $("#login").click(function () {
        alert('都说没有登录功能了，干嘛还点【登录】呢ww')
    })
})
