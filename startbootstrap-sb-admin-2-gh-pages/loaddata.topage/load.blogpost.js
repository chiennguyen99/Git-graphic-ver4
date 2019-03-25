$(document).ready(function () {

    loaddatablogs.forEach(data => {
        var avt = data.avtUrl;
        var username = data.name;  
        var blogTitle = data.blogTitle; 
        var createtime = data.postDate;
        var contentblog = data.contentPost;  
        var imageblog = data.imgPost; 
        var numlike = 99; 
        var postID = data.id; 
        var entity1 = `<div id="new-info2">
            <div class="card mb-4">
                    <div class="card-header">
                        <div>
                            <img class="img-profile rounded-circle" src="` + avt + `" style="width: 28px; height: 28px">
                            <b>` + username + `</b>
                            <b class="album">album: ` + blogTitle + `</b>
                        </div>
                        <div>
                            post date: ` + createtime + `
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="text-content-blogpost">
                            <p>` + contentblog + `</p>
                        </div>   
                        <div>
                            <img class="img-profile" src="` + imageblog + `" style="max-width: 100%; max-height: 500px;">
                        </div>
                        <hr>
                        <div class="act-like-blogposts">
                            <button type="button" class="btnt-Like" >Like</button>
                            <i class="fas fa-thumbs-up">` + numlike +  `</i>
                        </div>
                    </div>
                    <div class="card-comment">
                        <a href="#collapseCardExample`+ postID +`" onclick="loadlistcomment(`+ postID +`)" class="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                            <h6 class="m-0 font-weight-bold text-primary">Comment</h6>
                        </a>
                        <div class="collapse show" id="collapseCardExample`+ postID +`">              
                        </div>
                    </div>
            </div>
        </div>`; 

        $("#data-news").append(entity1);
    });
});