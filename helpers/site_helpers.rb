module SiteHelpers

  def page_title
    title = "Payton Swick"
    if data.page.title
      title << " | " + data.page.title
    end
    title
  end
  
  def page_description
    if data.page.description
      description = data.page.description
    else
      description = "Personal home page for Payton."
    end
    description
  end

end
