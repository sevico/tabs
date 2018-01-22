// $('.tabs').each(function (index,element) {
//     $(element).children('.tabs-bar').children("li").eq(0).addClass('active')
//     $(element).children('.tabs-content').children("li").eq(0).addClass('active')
//
// })
// $('.tabs').on('click','.tabs-bar > li',function (event) {
//     var $li = $(event.currentTarget)
//     $li.addClass("active").siblings().removeClass("active")
//     var index = $li.index()
//     var $content=$li.closest(".tabs").find('.tabs-content>li').eq(index)
//     $content.addClass("active").siblings().removeClass("active")
//
// })


function Tabs(selector) {
    this.elements = $(selector)
    this.init();
    this.bindEvents();

}
Tabs.prototype.init=function () {
    this.elements.each(function (index,element) {
        $(element).children('.tabs-bar').children("li").eq(0).addClass('active')
        $(element).children('.tabs-content').children("li").eq(0).addClass('active')

    })
}
Tabs.prototype.bindEvents=function () {
    this.elements.on('click','.tabs-bar > li',function (event) {
        var $li = $(event.currentTarget)
        $li.addClass("active").siblings().removeClass("active")
        var index = $li.index()
        var $content=$li.closest(".tabs").find('.tabs-content>li').eq(index)
        $content.addClass("active").siblings().removeClass("active")

    })
}

var tabs = new Tabs(".tabs")