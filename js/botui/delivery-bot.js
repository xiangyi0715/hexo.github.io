var botui = new BotUI("botui-app");
 
botui.message.bot({
    delay: 200,
    content: "Hi, 你好![开心](https://assets.ajjll.cn/usr/plugins/Mirages/biaoqing/paopao/E59388E59388.png)"
}).then(function() {
    return botui.message.bot({
        delay: 1000,
        content: "我是这个网站的博主,一个可爱的蓝孩子~😊"
    })
}).then(function() {
    return botui.message.bot({
        delay: 1500,
        content: "我是一名设计师,在业余时间玩一下网站！😎"
    })
}).then(function() {
    return botui.action.button({
        delay: 1500,
        action: [{
            text: "然后呢? 🤔",
            value: "and"
        },
        {
            text: "少废话! 😏",
            value: "gg"
        }]
    })
}).then(function(res) {
    if (res.value == "and") {
        other()
    }
    if (res.value == "gg") {
        return botui.message.bot({
            delay: 1500,
            content: "![告辞](https://ae01.alicdn.com/kf/Hd33fe77ff56f48e4b988d6c4f9091551S.jpg)"
        })
    }
});
 
var other = function() {
    botui.message.bot({
        delay: 1500,
        content: "我有一个可爱的女朋友!💖"
    }).then(function() {
        return botui.message.bot({
            delay: 1500,
            content: "在上大学的时候就想着拥有属于自己的网站,并且对电子产品格外感兴趣比如自己造遥控车,遥控船。"
        })
    }).then(function() {
        return botui.message.bot({
            delay: 2000,
            content: "略懂JAVA/HTML/CSS/JavaScript，偶尔也折腾PHP、Python"
        })
    }).then(function() {
        return botui.message.bot({
            delay: 2000,
            content: "不过还是比较熟悉手机刷机、主机DIY与系统安装(现在很少玩了)"
        })
    }).then(function() {
        return botui.message.bot({
            delay: 1800,
            content: "喜欢折腾，热爱折腾，目前正在计算机一道上探索中"
        })
    }).then(function() {
        return botui.action.button({
            delay: 1500,
            action: [{
                text: "为什么叫 AnJL 呢？ ",
                value: "next"
            }]
        })
    }).then(function(res) {
        return botui.message.bot({
            delay: 2000,
            content: "emmm..这应该是我在上大学期间给自己名字的一个简写吧！"
        })
    }).then(function() {
        return botui.action.button({
            delay: 1500,
            action: [{
                text: "域名有什么含意吗？(ง •_•)ง",
                value: "next"
            }]
        })
    }).then(function(res) {
        return botui.message.bot({
            delay: 1500,
            content: "emmmmm，看上一条你就知道了_(:з」∠)_"
        })
    }).then(function(res) {
        return botui.message.bot({
            delay: 1500,
            content: "那么，仔细看看我的博客吧？😇 "
        })
    });
};