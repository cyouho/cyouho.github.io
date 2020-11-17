$(function () {
    $("#career").load("../my_resume/my_career.html")
    $("#skill").load("../my_resume/my_skill.html")
    $("#school").load("../my_resume/my_school.html")
})

$(function () {
    $('#myTab a').click(function () {
        $(this).tab('show')
    })
})