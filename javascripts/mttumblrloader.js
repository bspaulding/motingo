// MTTumblrLoader.js
// --------------------
// Author:	Bradley J. Spaulding
// 			Motingo Development
//
// Created On: 2010-05-13
//
// 

$(document).ready(function() {
	$.getScript('http://bradspaulding.tumblr.com/api/read/json', function() {
		for(var k in tumblr_api_read['posts']) {
			var post = tumblr_api_read['posts'][k];
			$('#tumblr').append(postHTML(post));
		}
    	//Cufon.replace('.tumblr_link_text');
	});
});

function postHTML(post) {
	var postHTML = '<div class="tumblr_post" id="' + post['id'] + '">';
	
	if(post['type'] == 'regular') {
        postHTML += '<div class="tumblr_link_text">'		+ post['regular-title']	    + '</div>';
		postHTML += '<div class="tumblr_link_description">'	+ post['regular-body']	    + '</div>';
	} else if(post['type'] == 'link') {
		postHTML += '<div class="tumblr_link_text">'		+ post['link-text']			+ '</div>';
		postHTML += '<div class="tumblr_link_description">'	+ post['link-description']	+ '</div>';
	} else if(post['type'] == 'video') {
		postHTML += '<div class="tumblr_video_player">'		+ post['video-player']		+ '</div>';
		postHTML += '<div class="tumblr_video_caption">'	+ post['video-caption']		+ '</div>';
	}

	postHTML += '</div>';
	return postHTML;
}