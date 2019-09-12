## cli
1. git status  当前仓库状态
2. git add README.md   拍照片 文件快照 暂存区
3. git commit -m '提交的理由'  确认提交 本地仓库
4. git push origin master  将本地代码推送到GitHub仓库 origin master 分支
5. git reset --hard HEAD^ 将上一次提交移出版本库,同时删除工作区的文件  
=>git reflog 查找提交的所有记录  
=>git reset --hard 版本号 找回文件
6. git ls-files 查看本地仓库文件
7. git reset HEAD^ 取消上次commit并且取消git add 同时不会删除工作区文件 相当于加上'--mixed'
8. git reset --soft HEAD^ 只是取消commit 同时不会删除工作区文件
## 第一次上传本地文件到github仓库
1. 进入本地文件夹，git -> Git Bash Here -> git init,本地文件夹会多出.git文件夹
2. git add 需要上传的文件   文件夹下多文件(文件名+tab键)
3. git commit -m '提交的理由'
4. GitHub上创建仓库
5. git remote add origin 仓库SSH    将本地仓库与远程仓库连接
6. git pull --rebase origin master  因为远程仓库有README.md而本地没有 rebase使提交历史在一条线 不进行这一步直接提交会提示failed to push some refs to......的错误
7. git push -u origin master 第一次提交加-u
## 删除文件
1. 删除工作区文件
2. git rm 文件 删除本地仓库文件
3. git commit -m 'delete' 提交删除
4. git push origin master 远程仓库删除 
## 创建新分支
1. git checkout -b 分支 本地创建新分支并switch
2. git push origin 分支 为远程仓库创建新分支
3. git branch -a 查看分支状况
## 合并分支
1. 在dev上提交
2. git checkout master 转换到master分支
3. git ls-files 查看不到本地仓库中dev分支提交的文件
4. git merge --no-ff -m '理由' dev 合并dev分支并在master分支上提交
5. git push origin master master分支提交