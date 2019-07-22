- cli
    git status  当前仓库状态
    git add README.md   拍照片 文件快照 暂存区
    git commit -m '提交的理由'  确认提交 本地仓库
    git push origin master  将本地代码推送到GitHub仓库 origin master 分支
- 第一次上传本地文件到github仓库
    1. 进入本地文件夹，git -> Git Bash Here -> git init,本地文件夹会多出.git文件夹
    2. git add 需要上传的文件   文件夹下多文件(文件名+tab键)
    3. git commit -m '提交的理由'
    4. GitHub上创建仓库
    5. git remote add origin 仓库SSH    将本地仓库与远程仓库连接
    6. git pull --rebase origin master  因为远程仓库有README.md而本地没有 rebase使提交历史在一条线 不进行这一步直接提交会提示failed to push some refs to......的错误
    7. git push -u origin master 第一次提交加-u