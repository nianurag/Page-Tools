@import 'utils.js'

var createPage = function(context) {
	var doc = context.document
	var current_page = [doc currentPage]
	var new_page = [MSPage new]
	var pages = [doc pages]
	var number_pages = [pages count]
	var default_name = "Page " + (number_pages + 1)

	var page_name = [doc askForUserInput: "Please enter the name of the page." initialValue: default_name]
	if (page_name) {
		new_page.setName(page_name)
		[[doc documentData] addPage: new_page]
		[doc setCurrentPage: new_page]
	}
}

var switchPages = function(context) {
	var doc = context.document
	var current_page = [doc currentPage]
	var pages = [doc pages]
	var number_pages = [pages count]

	var current_page_index = [pages indexOfObject:current_page]

	if (current_page_index > 0) {
		[doc setCurrentPage:pages[current_page_index-1]]
		sketchToast(doc, "Page chnaged to " + current_page)
		debug("Page chnaged to " + current_page)
	}
	else [doc setCurrentPage:pages[number_pages-1]]
}
