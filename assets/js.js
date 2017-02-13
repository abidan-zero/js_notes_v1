var notesList = new Object();
// Pre-defined notes in list
notesList[1]={title:'1st note',content:'note 1 content info'}
notesList[2]={title:'2nd note',content:'note 2 content info'}
notesList[3]={title:'3rd note',content:'note 3 content info'}

$('#main_menu').click(function(){
  //alert('test');
  $('#sub_menu_a').toggle();
});