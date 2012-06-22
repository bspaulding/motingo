// Navigation Handler
// ---------------
// Author: Bradley Spaulding, USAi.net
// 
// Navigation Handler is built for the USAi.net Wireless Portal.
// This script handles DOM manipulation for page navigation.

// Updated 2009-08-20: Fixed IE Latency issue which caused frequent "No Navigation Item is Active" errors.

function NavigationHandler(set_nav_div, set_content_div) {
	// Set navigation and content div name defaults
	if(!set_nav_div) set_nav_div = 'navigation';
	if(!set_content_div) set_content_div = 'main';
	
	// Configuration
	this.navigation_div_id = set_nav_div;
	this.navigation_class_active = 'selected';
	this.navigation_class_inactive = 'unselected';
	this.content_div_id = set_content_div;
	this.content_class_active = this.content_div_id + '_item active';
	this.content_class_inactive = this.content_div_id + '_item inactive';
	
	// Internal Variables
	// WARNING: DO NOT ALTER THESE DIRECTLY!
	this._navigation_div;
	this._content_div;
	this._last_active_nav_element_id;
	this._last_active_content_element_id;
	
	// navigation_div()
	// Singleton accessor for _navigation_div
	this.navigation_div = function() {
		if(this._navigation_div == null)
			this._navigation_div = document.getElementById(this.navigation_div_id);
		return this._navigation_div;
	}
	
	// content_div()
	// Singleton accessor for _content_div
	this.content_div = function() {
		if(this._content_div == null)
			this._content_div = document.getElementById(this.content_div_id);
		return this._content_div;
	}
	
	// active_nav_element()
	// Returns: active navigation DOM element
	this.active_nav_element = function() {
		if(this._last_active_nav_element_id != null) {
			return document.getElementById(this._last_active_nav_element_id);
		} else {
			for(i = 0; i < this.navigation_div().childNodes.length; i++) {
				child = this.navigation_div().childNodes[i];
				if(child.className == this.navigation_class_active) {
					this._last_active_nav_element_id = child.id;
					return child;
				}
			}
		}
		alert("Error: No navigation item is active.");
		return null;
	}
	
	// active_content_element()
	// Returns: active content DOM element
	this.active_content_element = function() {
		if(this._last_active_content_element_id != null) {
			return document.getElementById(this._last_active_content_element_id);
		} else {
			for(i = 0; i < this.content_div().childNodes.length; i++) {
				child = this.content_div().childNodes[i];
				if(child.className == this.content_class_active) {
					this._last_active_content_element_id = child.id;
					return child;
				}
			}
		}
		alert("Error: No content item is active.");
		return null;
	}
	
	// activate()
	// Params:
	//   nav_element_id => string id of navigation element to be active
	//   content_element_id => string id of content element to be active
	this.activate = function(nav_element_id, content_element_id) {
		// Get old active child
		active_nav_div = this.active_nav_element();
		
		// Don't do anything if the old active IS the new active 
		// (i.e, the user clicked on the active item).
		if(!(active_nav_div.id == nav_element_id)) {
			// Set the new active to active
			document.getElementById(nav_element_id).className = this.navigation_class_active;
			this._last_active_nav_element_id = nav_element_id;
			
			// Set the old active to inactive
			active_nav_div.className = this.navigation_class_inactive;
			
			// Set the old active content to inactive
			this.active_content_element().className = this.content_class_inactive;
			
			// Activate the new content area
			document.getElementById(content_element_id).className = this.content_class_active;
			this._last_active_content_element_id = content_element_id;
		}
	}
}