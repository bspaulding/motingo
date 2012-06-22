// MTSlideshow.js
// --------------------
// Author: Bradley J. Spaulding
// Created On: 2010-04-30
// 
// Requirements: 
//   - JQuery: http://www.jquery.com/

function MTSlideshow(div_id, image_urls, timer_ms) {
	var self = this;
	
	this.div_id = div_id;

	this.image_urls = image_urls;
	this.current_image_index = 0;

	this.timer_ms = timer_ms;
	this.interval;
	
	this.preload = function() {
		var show_div = document.getElementById(this.div_id);
		html = "";
		
		for(k = 0; k < this.image_urls.length; k++) {
			var image = new Image();
			image.src = this.image_urls[k];
			
			//console.log("Preloaded: " + image.src);
			
			if(k == 0)
				html += '<img id="' + this.div_id + '_photo_' + k + '" src="' + image_urls[k] + '" class="photo">';
			else
				html += '<img id="' + this.div_id + '_photo_' + k + '" src="' + image_urls[k] + '" class="photo" style="display: none;">';
		}
		show_div.innerHTML = html;
	}
	
	this.start = function() {
		this.preload();
		this.current_image_index = 0;
		this.interval = setInterval( function() { self.show_next_photo(); }, this.timer_ms );
	}
	
	this.stop = function() {
		clearInterval( this.interval );
	}
	
	this.show_photo = function(image_id) {		
		$('#' + self.div_id_for_photo_at_index(self.current_image_index)).fadeOut('slow');
		$('#' + self.div_id_for_photo_at_index(image_id)).fadeIn('slow');
		
		if(self.current_image_index >= self.image_urls.length - 1)
			self.current_image_index = 0;
		else
			self.current_image_index++;
	}
	
	this.show_next_photo = function() {
		var next_id = self.current_image_index + 1;
		if(next_id < 0 || next_id > self.image_urls.length - 1)
			next_id = 0;
		
		self.show_photo(next_id);
	}
	
	
	
	this.div_id_for_photo_at_index = function(k) {
		return self.div_id + "_photo_" + k;
	}
}