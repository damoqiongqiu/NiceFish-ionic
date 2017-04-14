#NiceFish-ionic

NiceFish是一个系列项目，都是Angular这个技术栈。

- 【NiceFish（美人鱼）】：这是一个微型Blog系统，前端基于Angular 4.0.0 + ng-Bootstrap。http://git.oschina.net/mumu-osc/NiceFish/

- 【NiceFish-Admin是系统管理界面，基于Angular 4.0.0】：http://git.oschina.net/mumu-osc/NiceFish-Admin

- 【NiceFish-Admin-ng1是一个基于Angular 1.6.4（最新版）的管理后台模板，刚开始做】https://git.oschina.net/mumu-osc/NiceFish-Admin-ng1.git 。这个项目我需要特别说明一下，根据目前的统计数据，还有我在数十家企业实际看到的情况，国内还有大量的企业在使用Angular 1.x，而其中很多居然没有做任何AMD处理！我的天哪！前端开发发展到了今天这个状态，AMD是标配啊兄弟们。就算你还在用jQuery做项目，AMD也是必须的哦。把所有js全部压在一个大文件里面，然后在index里面一次性加载，不能再这样做了啊！所以我会很快做好这个项目，给你们一个示范，看看大型的业务项目应该如何切分目录、模块，如何做AMD加载。

- 【NiceFish-ionic】：这是一个移动端的demo，基于ionic。http://git.oschina.net/mumu-osc/nicefish-ionic

- 【NiceFish-SpringMybatis是Java版后台】：http://git.oschina.net/mumu-osc/NiceFish-SpringMybatis 

NiceFish可以用来搭建个人Blog、微型SNS站点，或者用于学习Angular（其实我并不在乎你用来干嘛，那关我什么事呢对吧？）。 

一起来玩儿吧！很好玩儿哦！

#运行效果

![视频教程截图](src/assets/imgs/1.png)

#用法

克隆本项目之后，命令行进入项目根目录。

- cnpm install
- ionic serve

打开你的浏览器访问http://localhost:8100/

关于ionic的更详细介绍请看这里http://ionicframework.com/getting-started/