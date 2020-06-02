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
        content: "这个网站分为前院与后院,Warning...已闯入后院"
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
        content: "我在做嵌入式相关工作,主要系统是Linux！😎"
    }).then(function() {
        return botui.message.bot({
            delay: 1500,
            content: "在哪毕业?---PKU，专业是计算机科学与技术"
        })
    }).then(function() {
        return botui.message.bot({
            delay: 2000,
            content: "略晓得部分编程语言"
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
    }).then(function () {
		    return botui.message.bot({
		      delay: 1200,
		      content: '你叫什么名字？（填写后按回车键）'
		    });
		  }).then(function () {
		    return botui.action.text({
		      delay: 800,
		      action: {
		        value: 'John Doe',
		        placeholder: '填写你的名字'
		      }
		    });
		  }).then(function (res) {
		    return botui.message.bot({
		      delay: 500,
		      content: res.value + ' 是个好名字！'
		    });
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
    }).then(function (res) {
		    return botui.message.bot({
		      delay: 1200,
		      type: 'embed',
		      content: 'https://i.loli.net/2020/06/01/kK8fBRYduiV7zx9.png'
		    });
		  }).then(function(res) {
        return botui.message.bot({
            delay: 1500,
            content: "那么，仔细看看我的博客吧😇 "
        })
    });
};
