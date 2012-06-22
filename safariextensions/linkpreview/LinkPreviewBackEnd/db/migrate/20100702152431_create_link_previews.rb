class CreateLinkPreviews < ActiveRecord::Migration
  def self.up
    create_table :link_previews do |t|
      t.string :url
      t.string :image_file

      t.timestamps
    end
  end

  def self.down
    drop_table :link_previews
  end
end
