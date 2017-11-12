var graphPost = function (name, link, userpost,date) {
    this.name = name;
    this.link = link;
    this.userpost = userpost;
    this.date = date;
};

var listGraphPost = [];
listGraphPost.push(new graphPost("Duyệt đồ thị theo chiều rộng (DFS)", "post/Graph/DFS.html", "Admin","13-11-2017"));