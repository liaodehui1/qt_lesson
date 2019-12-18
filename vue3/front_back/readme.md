# 初始化
  sequelize init (./node_modules/.bin/sequelize init)

  初始化完成之后生成的目录
  config：配置目录
  migrations： 迁移文件（数据库表结构）
  seeders：种子文件（生成测试数据）
  models：模型文件

# 创建数据库
- ./node_modules/.bin/sequelize db:create

# 构建数据库迁移结构
- ./node_modules/.bin/sequelize migration:create --name user

# 数据库结构
- user: 用户表  
用来存放用户的基本信息，密码等
- user-profile: 用户的扩展表  
用来存放用户的扩展信息（性别，生日，个人简介等不常用数据）
- login-log: 用户的登录日志  
存放用户的登录日志（用户每次登录时间，IP信息都存放在这）
- category: 美食分类表  
用来存放美食分类信息（热菜，凉菜）
- cookbook: 美食信息  
用来存放美食信息（标题，图片等）
- step: 美食烹饪步骤  
用来存放美食烹饪步骤，在每一个步骤中有一个cookbook表的id进行关联
- comment: 评论表  
用来存放用户对某个具体的cookbook的评论
- favorite: 收藏表  

# 生成表
- ./node_modules/.bin/sequelize db:migrate 生成表
- ./node_modules/.bin/sequelize db:migrate:undo:all 删除所有

# 创建种子文件
- seeders 文件夹下创建假数据
- ./node_modules/.bin/sequelize seed:generate --name user 创建种子
- ./node_modules/.bin/sequelize db:seed:all 运行种子，插入数据