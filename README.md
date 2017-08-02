# espace-takeout

自动外卖决定系统

## Spec
* 多用户，多群组
* 每个用户属复数个群组，每单加入一个群组
* 餐馆数据定期脚本从饿了么Open API获取，以上开为中心固定半径
* 每名用户可以按喜好给所有餐馆打分
* 根据历史数据、当前群组中用户喜好和该单设定自动决定餐馆和下单人

## Milestone
* Stage 1
  * [x] 后台开发环境
  * [ ] Mongoose Schema
  * [ ] GraphQL Schema
  * [ ] GraphQL Resolver
  * [ ] 用户系统/安全
  * [ ] 基本决定算法
  * [ ] Fetch数据脚本
* Stage 2
  * [ ] Web端开发环境
  * [ ] GraphQL Client
  * [ ] React
  * [ ] Redux
* Stage 3
  * [ ] 根据每日折扣优化决定算法
  * [ ] APP ?
