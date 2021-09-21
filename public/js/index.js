// 全局header，全局footer，首页广告轮显 导入用js
$(function () {
    $("#global_header").load("../global_header.html")
    $("#global_footer").load("../global_footer.html")
    $("#index_slide").load("../index_slide.html")
    $("#index_my_sticker").load("../my_sticker/my_sticker.html")
})

// 回到顶部按钮
$(function () {
    $("#gotoTop").load("../goto_top.html")
})