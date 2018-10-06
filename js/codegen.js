var tags = ["p", "h1", "h2", "h3", "img", "ol", "li"]; 

$(document).ready(function(){
	for(var i = 0; i<tags.length; i++)
	{
		var tagName = tags[i].toUpperCase();
		$("#tags-spinner").append('<option value="' + tags[i] + '">' + tagName + '</option>');	
	}
	$("#submit-btn").click(function(){
		$('#html-presence-label').remove();
		$('#html-code').remove();
    	generateHtml();
    });
    $('#html-code-area').on('click','p',function(event){
    	event.stopPropagation();
    	var nextText = $(this).children().text();
 		var className = $(this).attr('class');
		var selecterName = $(this).parent().attr('class');
		var tagText = $(this).text();
		var finalString = tagText.substring(0, tagText.length - nextText.length);
		var tagNme = 'p';
    	setValues(className, selecterName, finalString, tagNme);
    });
    $('#html-code-area').on('click','h1',function(event){
    	event.stopPropagation();
    	var nextText = $(this).children().text();
    	var className = $(this).attr('class');
		var selecterName = $(this).parent().attr('class');
		var tagText = $(this).text();
		var finalString = tagText.substring(0, tagText.length - nextText.length);
		var tagNme = 'h1';
    	setValues(className, selecterName, finalString, tagNme);
    });
    $('#html-code-area').on('click','h2',function(event){
    	event.stopPropagation();
    	var nextText = $(this).children().text();
    	var className = $(this).attr('class');
		var selecterName = $(this).parent().attr('class');
		var tagText = $(this).text();
		var finalString = tagText.substring(0, tagText.length - nextText.length);
		var tagNme = 'h2';
    	setValues(className, selecterName, finalString, tagNme);
    });
    $('#html-code-area').on('click','h3',function(event){
    	event.stopPropagation();
    	var nextText = $(this).children().text();
    	var className = $(this).attr('class');
		var selecterName = $(this).parent().attr('class');
		var tagText = $(this).text();
		var finalString = tagText.substring(0, tagText.length - nextText.length);
		var tagNme = 'h3';
    	setValues(className, selecterName, finalString, tagNme);
    });
    $('#html-code-area').on('click','ol',function(event){
    	event.stopPropagation();
    	var nextText = $(this).children().text();
    	var className = $(this).attr('class');
		var selecterName = $(this).parent().attr('class');
		var tagText = $(this).text();
		var finalString = tagText.substring(0, tagText.length - nextText.length);
		var tagNme = 'ol';
    	setValues(className, selecterName, finalString, tagNme);
    });
    $('#html-code-area').on('click','li',function(event){
    	event.stopPropagation();
    	var nextText = $(this).children().text();
    	var className = $(this).attr('class');
		var selecterName = $(this).parent().attr('class');
		var tagText = $(this).text();
		var finalString = tagText.substring(0, tagText.length - nextText.length);
		var tagNme = 'li';
    	setValues(className, selecterName, finalString, tagNme);
    });
});

function setValues(className, selecterName, tagText, tagNme)
{
	$('#tags-spinner').val(tagNme);
	$('#tag-text').val(tagText);
	$('#selecter-text').val(selecterName);
	$('#class-text').val(className);
}

function generateHtml()
{
	var tag = $('#tags-spinner').val();
	var tagText = $('#tag-text').val();
	var selecterText = $('#selecter-text').val();
	var classText = $('#class-text').val();

	var additionHTML = '<' + tag + ' class="' + classText + '">' + tagText + '</' + tag + '>';
	if(selecterText.length > 0)
	{
		$('.' + selecterText).append(additionHTML);
	}
	else
	{
		$("#html-code-area").append(additionHTML);
	}

	var htmlCodes = $("#html-code-area").html();


	$('#text-area').text(htmlCodes);
}