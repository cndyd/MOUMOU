
#联系我们表
CREATE TABLE jd_lxwm(
jdid INT PRIMARY KEY AUTO_INCREMENT,
jdname VARCHAR(16),#联系我们名字
jdphone VARCHAR(11),#联系我们手机
jdemail VARCHAR(32),#联系我们邮箱
jdcomment VARCHAR(120)#联系我们留言评论
);
#联系我们表插入
INSERT INTO jd_lxwm VALUES
(NULL,"aaa","13511111111","aaa@qq.com","你家真的大啊"),
(NULL,"bbb","13522222222","bbb@qq.com","服务真的很好啊"),
(NULL,"ccc","13533333333","ccc@qq.com","入住真的很舒服啊?");


#酒店预订表
CREATE TABLE jd_jdyd(
ydid INT PRIMARY KEY AUTO_INCREMENT,
rztime VARCHAR(12),#入住时间
lktime VARCHAR(12),#离开时间
ydname VARCHAR(16),#预订名字
ydphone VARCHAR(11),#预订手机号
ydroom VARCHAR(8)#预订房间内容
);
#酒店预订表插入
INSERT INTO jd_jdyd VALUES
(NULL,"2019年3月30日","2019年3月31日","大脑斧","13512345678","海底世界"),
(NULL,"2019年3月30日","2019年4月2日","小西几","13511223344","沙滩风情"),
(NULL,"2019年4月1日","2019年4月2日","发福蝶","13513512345","热带雨林");


#轮播图片表
CREATE TABLE zy_lunbo(
  lbid INT PRIMARY KEY AUTO_INCREMENT,
  lbimg VARCHAR(128) #轮播图片
);
#轮播图片表插入
INSERT INTO zy_lunbo VALUES
(NULL,"img/lunbo1.jpg"),
(NULL,"img/lunbo2.jpg"),
(NULL,"img/lunbo3.jpg"),
(NULL,"img/lunbo4.jpg");


#主页特价房间表
CREATE TABLE zy_tjfj(
  tjfjid INT PRIMARY KEY AUTO_INCREMENT,
  tjfjimg VARCHAR(128), #特价房间图片
  tjfjtitle VARCHAR(12), #特价房间标题
  tjfjprice DECIMAL(7,2) NOT NULL #特价房间价格
);
#主页特价房间表插入
INSERT INTO zy_tjfj VALUES
("NULL","img/room1.jpg","热带雨林","299.0"),
("NULL","img/room2.jpg","海底世界","299.0"),
("NULL","img/room3.jpg","沙滩风情","299.0"),
("NULL","img/room4.jpg","激情岁月","299.0");

#主页酒店服务表
CREATE TABLE zy_jdfw(
  jdfwid INT PRIMARY KEY AUTO_INCREMENT,
  jdfwimg VARCHAR(128), #酒店服务图片
  jdfwtitle VARCHAR(12), #酒店服务标题
  jdfwtext VARCHAR(200) #酒店服务内容
);
#主页酒店服务表插入
INSERT INTO zy_jdfw VALUES
(NULL,"img/jdfw_daocha.png","Rent a Car","Usage of the Internet is becoming more common due to rapid advancement of technology and power."),
(NULL,"img/jdfw_zixingche.png","Rent a Car","Usage of the Internet is becoming more common due to rapid advancement of technology and power."),
(NULL,"img/jdfw_yifu.png","Rent a Car","Usage of the Internet is becoming more common due to rapid advancement of technology and power."),
(NULL,"img/jdfw_qiche.png","Rent a Car","Usage of the Internet is becoming more common due to rapid advancement of technology and power."),
(NULL,"img/jdfw_tingche.png","Rent a Car","Usage of the Internet is becoming more common due to rapid advancement of technology and power."),
(NULL,"img/jdfw_jiuba.png","Rent a Car","Usage of the Internet is becoming more common due to rapid advancement of technology and power.");

#主页酒店环境表
CREATE TABLE zy_jdhj(
  jdhjid INT PRIMARY KEY AUTO_INCREMENT,
  jdhjimg VARCHAR(128), #酒店环境图片
  jdhjtext VARCHAR(20) #酒店环境文字
);
#主页酒店环境表插入
INSERT INTO zy_jdhj VALUES
(NULL,"img/g1.jpg","酒店文字"),
(NULL,"img/g2.jpg","酒店文字"),
(NULL,"img/g3.jpg","酒店文字"),
(NULL,"img/g4.jpg","酒店文字"),
(NULL,"img/g5.jpg","酒店文字"),
(NULL,"img/g6.jpg","酒店文字");


#主页酒店新闻表
CREATE TABLE zy_jdxw(
  jdxwid INT PRIMARY KEY AUTO_INCREMENT,
  jdxwtitle VARCHAR(20), #酒店新闻标题
  jdxwtext VARCHAR(300), #酒店新闻内容
  jdxwimg VARCHAR(128) #酒店新闻图片
);
#主页酒店新闻表插入
INSERT INTO zy_jdxw VALUES
(NULL,"新闻联播","Usage of the Internet is becoming more common due to rapid advancement of technology and powerUsage of the Internet is becoming more common due to rapid advancement of technology and power","img/jdxw_1.jpg"),
(NULL,"新闻联播","Usage of the Internet is becoming more common due to rapid advancement of technology and powerUsage of the Internet is becoming more common due to rapid advancement of technology and power","img/jdxw_1.jpg"),
(NULL,"新闻联播","Usage of the Internet is becoming more common due to rapid advancement of technology and powerUsage of the Internet is becoming more common due to rapid advancement of technology and power","img/jdxw_1.jpg"),
(NULL,"新闻联播","Usage of the Internet is becoming more common due to rapid advancement of technology and powerUsage of the Internet is becoming more common due to rapid advancement of technology and power","img/jdxw_1.jpg");


#所有房间表
CREATE TABLE ztfj_syfj(
  syfjid INT PRIMARY KEY AUTO_INCREMENT,
  syfjimg VARCHAR(128), #特价房间图片
  syfjtitle VARCHAR(12), #特价房间标题
  syfjprice DECIMAL(7,2) NOT NULL #特价房间价格
);
#所有房间表插入
INSERT INTO ztfj_syfj VALUES
("NULL","img/room1.jpg","热带雨林","299.00"),
("NULL","img/room2.jpg","海底世界","299.00"),
("NULL","img/room3.jpg","沙滩风情","299.00"),
("NULL","img/room4.jpg","激情岁月","299.00"),
("NULL","img/room1.jpg","热带雨林","299.00"),
("NULL","img/room2.jpg","海底世界","299.00"),
("NULL","img/room3.jpg","沙滩风情","299.00"),
("NULL","img/room4.jpg","激情岁月","299.00");


#用户评论表
CREATE TABLE jdls_khpl(
  khplid INT PRIMARY KEY AUTO_INCREMENT,
  khpltext VARCHAR(500),#客户评论内容
  khplname VARCHAR(18) #客户评论名字
);
#用户评论表插入
INSERT INTO jdls_khpl VALUES
(NULL,"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain... If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. It uses a dictionary of over 200 Latin words, making this the first true generator on the Internet.","Xiao longren"),
(NULL,"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain... If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. It uses a dictionary of over 200 Latin words, making this the first true generator on the Internet.","Tao qigui"),
(NULL,"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain... If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. It uses a dictionary of over 200 Latin words, making this the first true generator on the Internet.","Xiao baitu"),
(NULL,"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain... If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. It uses a dictionary of over 200 Latin words, making this the first true generator on the Internet.","Da huilang");


#团队人员表
CREATE TABLE jdls_tdry(
  tdryid INT PRIMARY KEY AUTO_INCREMENT,
  tdryimg VARCHAR(128), #团队人员图片
  tdrytitle VARCHAR(20), #团队人员标题
  tdrytext VARCHAR(200), #团队人员内容
  tdryQQ VARCHAR(128), #团队人员QQ图标
  tdryWX VARCHAR(128), #团队人员QQ图标
  tdryWB VARCHAR(128), #团队人员QQ图标
  tdryname VARCHAR(18) #团队人员名字
);
#团队人员表插入
INSERT INTO jdls_tdry VALUES
(NULL,"img/jdls/ren1.jpg","Vivamus moles","A wonderful serenity has taken possession of my entire soul,  I enjoy with my whole heart.","img/jdls/qq.png","img/jdls/weixin-bg.png","img/jdls/weibo.png","钢 铁 侠"),
(NULL,"img/jdls/ren2.jpg","Vivamus moles","A wonderful serenity has taken possession of my entire soul,  I enjoy with my whole heart.","img/jdls/qq.png","img/jdls/weixin-bg.png","img/jdls/weibo.png","蜘 蛛 侠"),
(NULL,"img/jdls/ren3.jpg","Vivamus moles","A wonderful serenity has taken possession of my entire soul,  I enjoy with my whole heart.","img/jdls/qq.png","img/jdls/weixin-bg.png","img/jdls/weibo.png","雷神·托尔"),
(NULL,"img/jdls/ren4.jpg","Vivamus moles","A wonderful serenity has taken possession of my entire soul,  I enjoy with my whole heart.","img/jdls/qq.png","img/jdls/weixin-bg.png","img/jdls/weibo.png","美国队长");