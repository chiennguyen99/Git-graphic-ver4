var loaddatablogs = []; 
$(document).ready(function () {
    asyncCall(); 
});

function asyncCall() {
    var uselike = [{"postID":3,"employeeLikeID":"16020608","blogpost":null},
                {"postID":3,"employeeLikeID":"17020608","blogpost":null},
                {"postID":3,"employeeLikeID":"19020608","blogpost":null},
                {"postID":4,"employeeLikeID":"19020608","blogpost":null},
                {"postID":5,"employeeLikeID":"19020608","blogpost":null}]; 
  
    loaddatablogs = [
        {avtUrl: "../startbootstrap-sb-admin-2-gh-pages/css.dev/Image/myBirthday1.jpg",blogTitle: "Travel",contentPost: "beautiful day", id: 3, imgPost: "../startbootstrap-sb-admin-2-gh-pages/css.dev/Image/myBirthday1.jpg", name: "Nguyen Chien", postDate: "2019-03-21", infolike : []}, 
        {avtUrl: "../startbootstrap-sb-admin-2-gh-pages/css.dev/Image/iconfinder_like_1814076.jpg",blogTitle: "Travel",contentPost: "beautiful day", id: 4, imgPost: "../startbootstrap-sb-admin-2-gh-pages/css.dev/Image/iconfinder_like_1814076.jpg", name: "Nguyen Chien", postDate: "2019-03-21", infolike : []},
        {avtUrl: "../startbootstrap-sb-admin-2-gh-pages/css.dev/Image/me.jpg",blogTitle: "Code", contentPost: "beautiful day", id: 5, imgPost: "../startbootstrap-sb-admin-2-gh-pages/css.dev/Image/me.jpg",  name: "Nguyen Duyen", postDate: "2019-03-21", infolike : []},
        {avtUrl: "../startbootstrap-sb-admin-2-gh-pages/css.dev/Image/myBithday7.jpg", blogTitle: "Code", contentPost: "beautiful day", id: 6, imgPost: "../startbootstrap-sb-admin-2-gh-pages/css.dev/Image/myBithday7.jpg", name: "Nguyen Duyen", postDate: "2019-03-21", infolike : []},
        {avtUrl: "../startbootstrap-sb-admin-2-gh-pages/css.dev/Image/card.jpg", blogTitle: "Code", contentPost: "beautiful day", id: 7,  imgPost: "../startbootstrap-sb-admin-2-gh-pages/css.dev/Image/card.jpg", name: "Nguyen Duyen",postDate: "2019-03-21", infolike : []},
        {avtUrl: "../startbootstrap-sb-admin-2-gh-pages/css.dev/Image/moon.jpg", blogTitle: "Travel",contentPost: "beautiful day",id: 8, imgPost: "", name: "Nguyen Chien", postDate: "2019-03-21", infolike : []},
    ];
    
    loaddatablogs.forEach(element => {
        element.infolike = uselike.filter(uselike => uselike.postID == element.id);
    });
    console.log(loaddatablogs); 
}
  