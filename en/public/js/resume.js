$(function () {
    $("#career").load("../en/my_resume/my_career.html")
    $("#skill").load("../en/my_resume/my_skill.html")
    $("#school").load("../en/my_resume/my_school.html")
    $("#careerDetails").load("../en/my_resume/my_career_details.html")
})

$(function () {
    $('#myTab a').click(function () {
        $(this).tab('show')
    })
})