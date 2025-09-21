# git 

代码版本管理工具, 对某个文件夹中的所有文件进行管理, 每个文件的修改, 删除, 新增等操作, git 都能追踪, 并可以追溯历史

# git branch

    1. git branch 查看所有分支
    2. git branch -r 查看所有远程分支
    3. git branch -a 查看所有分支, 包括远程分支
    4. git checkout -b xxx  切换到xxx分支(没有则创建)
    5. git branch -d xxx 删除xxx分支
    6. git branch -D xxx 强制删除xxx分支
    7. git branch -M xxx 重命名当前分支为xxx

  - 本地分支名需要和远程分支名一致才能推送成功

#  git log 查看提交历史

# git reset

    1. git reset --hard HEAD^ 回退到上一个版本
    2. git reset --hard 版本号 回退到指定版本
    3. git reset --hard HEAD~n 回退到前n个版本
    4. git reset HEAD xxx  将文件从暂存区撤回到工作区
    5. git reset --soft HEAD^ 回退到上一个版本, 并将暂存区的文件保留下来

# git reflog  查看所有曾经执行过的 git 操作