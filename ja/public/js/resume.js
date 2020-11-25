$(function () {
    $("#career").load("../ja/my_career.html")
    $("#skill").load("../ja/my_skill.html")
    $("#school").load("../ja/my_school.html")
    $("#careerDetails").load("../ja/my_career_details.html")
})

$(function () {
    $('#myTab a').click(function () {
        $(this).tab('show')
    })
})