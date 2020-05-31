var botui = new BotUI("botui-app");
 
botui.message.bot({
    delay: 200,
    content: "Hi, 你好![开心](https://assets.ajjll.cn/usr/plugins/Mirages/biaoqing/paopao/E59388E59388.png)"
}).then(function() {
    return botui.message.bot({
        delay: 1000,
        content: "我是这个网站的博主~😊"
    })
}).then(function() {
    return botui.message.bot({
        delay: 1500,
        content: "这个网站分为前院与后院,Warning...你已经闯入后院"
    })
}).then(function() {
    return botui.action.button({
        delay: 1500,
        action: [{
            text: "我来去自如 哈哈😝,做个自我介绍呗",
            value: "and"
        },
        {
            text: "灰溜溜走啦~",
            value: "skip"
        }]
    })
}).then(function(res) {
    if (res.value == "and") {
        other()
    }
    if (res.value == "skip") {
        return botui.message.bot({
            delay: 1500,
            content: "![告辞](https://ae01.alicdn.com/kf/Hd33fe77ff56f48e4b988d6c4f9091551S.jpg)"
        })
    }
});
 
var other = function() {
    botui.message.bot({
        delay: 1500,
        content: "我是一名嵌入式软件程序员,主要系统是Linux！😎"
    }).then(function() {
        return botui.message.bot({
            delay: 1500,
            content: "之前所在学校 北京大学，专业是计算机科学与技术"
        })
    }).then(function() {
        return botui.message.bot({
            delay: 2000,
            content: "略晓得一些程序语言皮毛"
        })
    }).then(function() {
        return botui.message.bot({
            delay: 2000,
            content: "关于博客建设 纯小白一枚，“前院儿”主题可以说是东拼西凑而来😂"
        })
    }).then(function() {
        return botui.message.bot({
            delay: 1800,
            content: "不过关于嵌入式、数据、信息、计算机等方面还是有一些想法的,欢迎来讨论😉"
        })
    }).then(function() {
        return botui.action.button({
            delay: 1500,
            action: [{
                text: "你的其它兴趣爱好是什么？ ",
                value: "next"
            }]
        })
    }).then(function(res) {
        return botui.message.bot({
            delay: 2000,
            content: "emmm..computer vision、羽毛球、还有部分动漫！"
        })
    }).then(function() {
        return botui.action.button({
            delay: 1500,
            action: [{
                text: "网名有什么含意吗？(ง •_•)ง",
                value: "next"
            }]
        })
    }).then(function(res) {
        return botui.message.bot({
            delay: 1500,
            content: "emmmmm，没有，只是自己名字全拼_(:з」∠)_"
        })
    }).then(function(res) {
        return botui.message.bot({
            delay: 1500,
            content: "那么，仔细看看我的博客吧😇 "
        })
    });
};
