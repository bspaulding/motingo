class LinkPreviewsController < ApplicationController
    
  # GET /link_previews/image_for_url
  def image_for_url
    if(params[:url])
        @link_preview = LinkPreview.find_or_create_by_url(params[:url])
    else 
        @link_preview = LinkPreview.new
    end
    
    send_data(
        File.open("#{RAILS_ROOT}/public#{@link_preview.image_file}", 'r').read,
        :filename => "link_preview.pdf",
        :type => 'application/pdf'
      ) 
  end

  # GET /link_previews
  # GET /link_previews.xml
  def index
    @link_previews = LinkPreview.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @link_previews }
      format.json  { render :json => @link_previews }
    end
  end

  # GET /link_previews/1
  # GET /link_previews/1.xml
  def show
    @link_preview = LinkPreview.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @link_preview }
      format.json  { render :json => @link_preview }
    end
  end

  # GET /link_previews/new
  # GET /link_previews/new.xml
  def new
    @link_preview = LinkPreview.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @link_preview }
      format.json  { render :json => @link_preview }
    end
  end

  # GET /link_previews/1/edit
  def edit
    @link_preview = LinkPreview.find(params[:id])
  end

  # POST /link_previews
  # POST /link_previews.xml
  # POST /link_previews.json
  def create
    if(params[:url])
        @link_preview = LinkPreview.find_or_create_by_url(:first, :conditions => {:url => params[:url]})
    else
        @link_preview = LinkPreview.new(params[:link_preview])
    end

    respond_to do |format|
      if @link_preview.save
        format.html { redirect_to(@link_preview, :notice => 'LinkPreview was successfully created.') }
        format.xml  { render :xml => @link_preview, :status => :created, :location => @link_preview }
        format.json  { render :json => @link_preview }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @link_preview.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /link_previews/1
  # PUT /link_previews/1.xml
  def update
    @link_preview = LinkPreview.find(params[:id])

    respond_to do |format|
      if @link_preview.update_attributes(params[:link_preview])
        format.html { redirect_to(@link_preview, :notice => 'LinkPreview was successfully updated.') }
        format.xml  { head :ok }
        format.json  { render :json => @link_preview }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @link_preview.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /link_previews/1
  # DELETE /link_previews/1.xml
  def destroy
    @link_preview = LinkPreview.find(params[:id])
    @link_preview.destroy

    respond_to do |format|
      format.html { redirect_to(link_previews_url) }
      format.xml  { head :ok }
    end
  end
end
