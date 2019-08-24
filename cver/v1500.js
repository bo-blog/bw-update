$("#ins").html("有新版本可用：<b>1.6.0</b><br/>- 新增：为新评论、更改密码和失败的登陆添加了邮件通知功能。<br>- 改进：微调了默认主题。<br>- 修复：更换了陈旧的MySQL备份类，现可工作在PHP 7下。<br>- 改进：文章ID和分类ID都加了检测，不允许使用特殊字符。<br>- 修复：评论者填写的网址未带协议时自动补全http，该功能有时不工作的问题。<br>- 修复：优酷、网易云音乐链默认用https地址。由于虾米外链机制改变，已将其移除。<br/>");
addUpdateBtn ("https://bo-blog.github.io/bw-update/package/upkg1500.txt", 'd7be8c583313aa06e3cfe7d28ad64b5e');
