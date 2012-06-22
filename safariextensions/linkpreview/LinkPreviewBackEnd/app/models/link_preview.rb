class LinkPreview < ActiveRecord::Base
    require 'digest/md5'
    
    validates_presence_of :url
    
    before_save :update_image
    
    def update_image
        logger.info "LinkPreview::update_image - about to build the digest."
        filename = Digest::MD5.hexdigest(self.url) + ".pdf"
        logger.info "#{RAILS_ROOT}/wkhtmltopdf #{self.url} #{RAILS_ROOT}/public/images/LinkPreview/#{filename}"
        `#{RAILS_ROOT}/wkhtmltopdf --margin-top 0 --margin-bottom 0 --margin-left 0 --margin-right 0 #{self.url} #{RAILS_ROOT}/public/images/LinkPreview/#{filename}`
        self.image_file = "/images/LinkPreview/#{filename}"
    end
end
