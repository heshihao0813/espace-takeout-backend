# espace-takeout

自动外卖决策系统

## Spec
* 用户从属复数个群组，每单加入一个群组
* 餐馆/菜式数据从饿了么API抓取
* 用户为餐馆配置百分制喜好度
* 根据当前群组用户历史数据、喜好度配置和该单设定自动决定餐馆和下单人
* 根据每位用户历史数据推荐菜单

## Milestone
* Stage 1
  * [x] 后台开发环境
  * [ ] Mongoose Schema
  * [ ] GraphQL Schema
  * [ ] GraphQL Query
  * [ ] GraphQL Mutation
  * [ ] 用户系统/安全
  * [ ] 基本决策算法
  * [ ] 饿了么API脚本
* Stage 2
  * [ ] Web端开发环境
  * [ ] Apollo
  * [ ] Redux
  * [ ] React
* Stage 3
  * [ ] 根据当日折扣优化决策算法
  * [ ] 通过饿了么API自动下单
  * [ ] APP ?
