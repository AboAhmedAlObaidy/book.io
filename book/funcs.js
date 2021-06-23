function loadform(){
var ss = SpreadsheetApp.openByUrl(url);
var ws = ss.getSheetByName("options");
var list = ws.getRange(1,1,ws.getRange("A1").getDataRegion().getLastRow(),1).getValues();

var htmlListArray = list.map(function(r){return '<option>'+r[0]+ '</option>';}).join('');

if (goo=="Qanber"){
var tmp = HtmlService.createTemplateFromFile("page");}
else if (goo=="Qanberino"){
var tmp = HtmlService.createTemplateFromFile("page2");}
tmp.list = htmlListArray;
return tmp.evaluate();

}



function userClicked(Info){
    var goo=Info.case;
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Sheet"+Info.appindex);
   var rg = ws.getName() + "!" + ws.getDataRange().getA1Notation();
   var sq1 = '"Select B where B=\''+"@"+Info.codeschool+'\'"';
  
    var qry = '=IFERROR(UNIQUE(query('+ rg + ',' + sq1 + '),""))';
    var mm =ws.getName() + "!B:B";
   var count ='=CountA('+ mm + ')';
  
 
                                                              
  
  
  
  ts = ss.getSheetByName('Sheet'+'20');
    
  var setQuery = ts.getRange(1,1).setFormula(qry);
  if(goo=="create"){
        if (ts.getRange(1,1).getValues()!=("@"+Info.codeschool)){
          if (Info.check=="نعم"){ws.appendRow([Info.nameschool+"*","@"+Info.codeschool,Info.app,Info.linkschool,Info.emailschool,"@"+Info.password,new Date()])}
          else{   ws.appendRow([Info.nameschool,"@"+Info.codeschool,Info.app,Info.linkschool,Info.emailschool,"@"+Info.password,new Date()]);}
//شيت المدرسة
var Teacher = SpreadsheetApp.openByUrl(Info.linkschool);
          
var Tc1 = Teacher.getActiveSheet().setName("Main");
Tc1.setRightToLeft(true);
       
  Tc1 = Teacher.getSheetByName("Main");
                                                              Tc1.getRange(1, 1).setValue("تسلسل");
                                                              Tc1.getRange(1,2).setValue("اسم الطالب الرباعي");
                                                              Tc1.getRange(1,3).setValue("المرحلة");
                                                   
                                                                                                                           
                                                              Tc1.getRange(2,3).setValue("الصف الأول الابتدائي");
                                                              Tc1.getRange(3,3).setValue("الصف الأول المتوسط");
                                                              Tc1.getRange(4,3).setValue("الصف الرابع الادبي");
                                                              Tc1.getRange(5,3).setValue("الصف الخامس الاحيائي");
                                         	                  Tc1.getRange(6,3).setValue("الصف الخامس التطبيقي");



                                                              Tc1.getRange(1,4).setValue("البريد");
                                                              Tc1.getRange(1,5).setValue("اسم الام");
                                                              Tc1.getRange(1,6).setValue("الرمز السري");
                                                              Tc1.getRange(1,7).setValue("رقم الهاتف");
                                                              Tc1.getRange(1,8).setValue("هنا تكتب ملاحظة عامة لجميع الطلاب");
                                                              Tc1.getRange(2,8).setValue("ملاحظة فردية لكل طالب امام اسمه");
                                                             
                                                              Tc1.getRange(1,9).setValue("الاسلامية");
                                                              Tc1.getRange(1,10).setValue("العربي");
                                                              Tc1.getRange(1,11).setValue("الانكليزي");
                                                              Tc1.getRange(1,12).setValue("الرياضيات");
                                                              Tc1.getRange(1,13).setValue("العلوم");
                                                              Tc1.getRange(1,14).setValue("الاجتماعيات");
                                                              Tc1.getRange(1,15).setValue("الحاسوب");
                                                              Tc1.getRange(1,16).setValue("الكيمياء");
                                                              Tc1.getRange(1,17).setValue("الفيزياء");
                                                              Tc1.getRange(1,18).setValue("الاحياء");
                                                              Tc1.getRange(1,19).setValue("تاريخ");
                                                              Tc1.getRange(1,20).setValue("جغرافية");
                                                              Tc1.getRange(1,21).setValue("الوطنية");
                                                              Tc1.getRange(1,22).setValue("الكردية");
                                                              Tc1.getRange(1,23).setValue("علم الارض");
                                                              Tc1.getRange(1,24).setValue("علم الاجتماع");
                                                              Tc1.getRange(1,25).setValue("الفلسفة");

                                                              Tc1.getRange(1,26).setValue("الاقتصاد");
                                                              Tc1.getRange(1,27).setValue("الفرنسية");


          
 var Tc2 = Teacher.insertSheet("channals");         
var  Tc2 = Teacher.getSheetByName("channals");
          Tc2.setRightToLeft(true);
    
                                                              for (var i=2; i <= 18;i++){Tc2.getRange(i,1).setValue(i - 1);}
                                                              Tc2.getRange(1,2).setValue("المرحلة");
                                                              Tc2.getRange(2,2).setValue("الصف الاول الابتدائي");
                                                              Tc2.getRange(3,2).setValue("الصف الثاني الابتدائي");
                                                              Tc2.getRange(4,2).setValue("الصف الثالث الابتدائي");
                                                              Tc2.getRange(5,2).setValue("الصف الرابع الابتدائي");
                                                              Tc2.getRange(6,2).setValue("الصف الخامس الابتدائي");
                                                              Tc2.getRange(7,2).setValue("الصف السادس الابتدائي");
                                                              Tc2.getRange(8,2).setValue("الصف الاول المتوسط");
                                                              Tc2.getRange(9,2).setValue("الصف الثاني المتوسط");
                                                              Tc2.getRange(10,2).setValue("الصف الثالث المتوسط");
                                                              Tc2.getRange(11,2).setValue("الصف الرابع العلمي");
                                                              Tc2.getRange(12,2).setValue("الصف الرابع الادبي");
                                                              Tc2.getRange(13,2).setValue("الصف الخامس الاحيائي");
                                                              Tc2.getRange(14,2).setValue("الصف الخامس التطبيقي");
                                                              Tc2.getRange(15,2).setValue("الصف الخامس الادبي");
                                                              Tc2.getRange(16,2).setValue("الصف السادس الاحيائي");
                                                              Tc2.getRange(17,2).setValue("الصف السادس التطبيقي");
                                                              Tc2.getRange(18,2).setValue("الصف السادس الادبي");
                                                                
  
  
                                                              //عربي
                                                              Tc2.getRange(1,3).setValue("العربي");
                                                              Tc2.getRange(2,3).setValue("الصف الاول الابتدائي 3 2عربي");
                                                              Tc2.getRange(3,3).setValue("الصف الثاني الابتدائي3 3 عربي");
                                                              Tc2.getRange(4,3).setValue("الصف الثالث الابتدائي 3 4 عربي");
                                                              Tc2.getRange(5,3).setValue("الصف الرابع الابتدائي 3 5عربي");
                                                              Tc2.getRange(6,3).setValue("الصف الخامس الابتدائي 3 6 عربي");
                                                              Tc2.getRange(7,3).setValue("الصف السادس الابتدائي 3 7 عربي");
                                                              Tc2.getRange(8,3).setValue("الصف الاول المتوسط  3 8عربي");
                                                              Tc2.getRange(9,3).setValue("الصف الثاني المتوسط 3 9 عربي");
                                                              Tc2.getRange(10,3).setValue("الصف الثالث المتوسط  3 10 عربي");
                                                              Tc2.getRange(11,3).setValue("الصف الرابع العلمي 3 11 عربي");
                                                              Tc2.getRange(12,3).setValue("الصف الرابع الادبي  3 12 عربي");
                                                              Tc2.getRange(13,3).setValue("الصف الخامس الاحيائي 3 13عربي");
                                                              Tc2.getRange(14,3).setValue("الصف الخامس التطبيقي 3 14عربي");
                                                              Tc2.getRange(15,3).setValue("الصف الخامس الادبي 3 15 عربي");
                                                              Tc2.getRange(16,3).setValue("الصف السادس الاحيائي 3 16 عربي");
                                                              Tc2.getRange(17,3).setValue(" الصف السادس التطبيقي  3 17عربي");
                                                              Tc2.getRange(18,3).setValue("الصف السادس الادبي  3 18عربي");
                                                              
 
                                                             //اسلامية
                                                                       Tc2.getRange(1,4).setValue("الاسلامية");
                                                              Tc2.getRange(2,4).setValue("الصف الاول الابتدائي 4 2 اسلامية");
                                                              Tc2.getRange(3,4).setValue("الصف الثاني الابتدائي 4 3 اسلامية");
                                                              Tc2.getRange(4,4).setValue("الصف الثالث الابتدائي 4 4 اسلامية");
                                                              Tc2.getRange(5,4).setValue("الصف الرابع الابتدائي 4 5اسلامية");
                                                              Tc2.getRange(6,4).setValue("الصف الخامس الابتدائي 4 6 اسلامية");
                                                              Tc2.getRange(7,4).setValue("الصف السادس الابتدائي 4 7 اسلامية");
                                                              Tc2.getRange(8,4).setValue("الصف الاول المتوسط  4 8اسلامية");
                                                              Tc2.getRange(9,4).setValue("الصف الثاني المتوسط 4 9 اسلامية");
                                                              Tc2.getRange(10,4).setValue("الصف الثالث المتوسط  4 10 اسلامية");
                                                              Tc2.getRange(11,4).setValue("الصف الرابع العلمي 4 11 اسلامية");
                                                              Tc2.getRange(12,4).setValue("الصف الرابع الادبي  4 12 اسلامية");
                                                              Tc2.getRange(13,4).setValue("الصف الخامس الاحيائي 4 13اسلامية");
                                                              Tc2.getRange(14,4).setValue("الصف الخامس التطبيقي 4 14اسلامية");
                                                              Tc2.getRange(15,4).setValue("الصف الخامس الادبي 4 15 اسلامية");
                                                              Tc2.getRange(16,4).setValue("الصف السادس الاحيائي 4 16 اسلامية");
                                                              Tc2.getRange(17,4).setValue(" الصف السادس التطبيقي  4 17اسلامية");
                                                              Tc2.getRange(18,4).setValue("الصف السادس الادبي  4 18اسلامية");
  
  
                                                           Tc2.getRange(1,5).setValue("الانكليزي");
                                                              Tc2.getRange(2,5).setValue("الصف الاول الابتدائي 5 2 انكليزي");
                                                              Tc2.getRange(3,5).setValue("الصف الثاني الابتدائي 5 3 انكليزي");
                                                              Tc2.getRange(4,5).setValue("الصف الثالث الابتدائي 5 4 انكليزي");
                                                              Tc2.getRange(5,5).setValue("الصف الرابع الابتدائي 5 5 انكليزي");
                                                              Tc2.getRange(6,5).setValue("الصف الخامس الابتدائي 5 6 انكليزي");
                                                              Tc2.getRange(7,5).setValue("الصف السادس الابتدائي 5 7 انكليزي");
                                                              Tc2.getRange(8,5).setValue("الصف الاول المتوسط  5 8 انكليزي");
                                                              Tc2.getRange(9,5).setValue("الصف الثاني المتوسط 5 9 انكليزي");
                                                              Tc2.getRange(10,5).setValue("الصف الثالث المتوسط  5 10 انكليزي");
                                                              Tc2.getRange(11,5).setValue("الصف الرابع العلمي 5 11 انكليزي");
                                                              Tc2.getRange(12,5).setValue("الصف الرابع الادبي  5 12 انكليزي");
                                                              Tc2.getRange(13,5).setValue("الصف الخامس الاحيائي 5 13انكليزي");
                                                              Tc2.getRange(14,5).setValue("الصف الخامس التطبيقي 5 14 انكليزي");
                                                              Tc2.getRange(15,5).setValue("الصف الخامس الادبي 5 15 انكليزي");
                                                              Tc2.getRange(16,5).setValue("الصف السادس الاحيائي 5 16 انكليزي");
                                                              Tc2.getRange(17,5).setValue(" الصف السادس التطبيقي  5 17 انكليزي");
                                                              Tc2.getRange(18,5).setValue("الصف السادس الادبي  5 18 انكليزي");
                    

  
  
  
                                              
                                                              //رياضيات
                                                              Tc2.getRange(1,6).setValue("الرياضيات");
                                                              Tc2.getRange(2,6).setValue("الصف الاول الابتدائي 6 2 رياضيات");
                                                              Tc2.getRange(3,6).setValue("الصف الثاني الابتدائي 6 3 رياضيات");
                                                              Tc2.getRange(4,6).setValue("الصف الثالث الابتدائي 6 4 رياضيات");
                                                              Tc2.getRange(5,6).setValue("الصف الرابع الابتدائي 6 5 رياضيات");
                                                              Tc2.getRange(6,6).setValue("الصف الخامس الابتدائي 6 6 رياضيات");
                                                              Tc2.getRange(7,6).setValue("الصف السادس الابتدائي 6 7 رياضيات");
                                                              Tc2.getRange(8,6).setValue("الصف الاول المتوسط  6 8 رياضيات");
                                                              Tc2.getRange(9,6).setValue("الصف الثاني المتوسط 6 9 رياضيات");
                                                              Tc2.getRange(10,6).setValue("الصف الثالث المتوسط  6 10 رياضيات");
                                                              Tc2.getRange(11,6).setValue("الصف الرابع العلمي 6 11 رياضيات");
                                                              Tc2.getRange(12,6).setValue("الصف الرابع الادبي  6 12 رياضيات");
                                                              Tc2.getRange(13,6).setValue("الصف الخامس الاحيائي 6 13رياضيات");
                                                              Tc2.getRange(14,6).setValue("الصف الخامس التطبيقي 6 14 رياضيات");
                                                              Tc2.getRange(15,6).setValue("الصف الخامس الادبي 6 15 رياضيات");
                                                              Tc2.getRange(16,6).setValue("الصف السادس الاحيائي 6 16 رياضيات");
                                                              Tc2.getRange(17,6).setValue(" الصف السادس التطبيقي  6 17 رياضيات");
                                                              Tc2.getRange(18,6).setValue("الصف السادس الادبي  6 18 رياضيات");

                                                                //العلوم
                                                              Tc2.getRange(1,7).setValue("العلوم");
                                                              Tc2.getRange(2,7).setValue("الصف الاول الابتدائي 7 2 علوم");
                                                              Tc2.getRange(3,7).setValue("الصف الثاني الابتدائي 7 3 علوم");
                                                              Tc2.getRange(4,7).setValue("الصف الثالث الابتدائي 7 4 علوم");
                                                              Tc2.getRange(5,7).setValue("الصف الرابع الابتدائي 7 5 علوم");
                                                              Tc2.getRange(6,7).setValue("الصف الخامس الابتدائي 7 6 علوم");
                                                              Tc2.getRange(7,7).setValue("الصف السادس الابتدائي 7 7 علوم");
                                                             
                                                                //اجتماعيات
                                                              Tc2.getRange(1,8).setValue("الاجتماعيات");
                                                               Tc2.getRange(5,8).setValue("الصف الرابع الابتدائي 8 5 اجتماعيات");
                                                              Tc2.getRange(6,8).setValue("الصف الخامس الابتدائي 8 6 اجتماعيات");
                                                              Tc2.getRange(7,8).setValue("الصف السادس الابتدائي 8 7 اجتماعيات");
                                                              Tc2.getRange(8,8).setValue("الصف الاول المتوسط  8 8 اجتماعيات");
                                                              Tc2.getRange(9,8).setValue("الصف الثاني المتوسط 8 9 اجتماعيات");
                                                            
                                                                //كيمياء
                                                                       Tc2.getRange(1,9).setValue("الكيمياء");
                                                              Tc2.getRange(8,9).setValue("الصف الاول المتوسط  9 8 كيمياء");
                                                              Tc2.getRange(9,9).setValue("الصف الثاني المتوسط 9 9 كيمياء");
                                                              Tc2.getRange(10,9).setValue("الصف الثالث المتوسط  9 10 كيمياء");
                                                              Tc2.getRange(11,9).setValue("الصف الرابع العلمي 9 11 كيمياء");
                                                              Tc2.getRange(13,9).setValue("الصف الخامس الاحيائي 9 13كيمياء");
                                                              Tc2.getRange(14,9).setValue("الصف الخامس التطبيقي 9 14 كيمياء");
                                                              Tc2.getRange(16,9).setValue("الصف السادس الاحيائي 9 16 كيمياء");
                                                              Tc2.getRange(17,9).setValue(" الصف السادس التطبيقي  9 17 كيمياء");
                                                         //فيزياء
                                                                                Tc2.getRange(1,10).setValue("الفيزياء");
                                                              Tc2.getRange(8,10).setValue("الصف الاول المتوسط  10 8 فيزياء");
                                                              Tc2.getRange(9,10).setValue("الصف الثاني المتوسط 10 9 فيزياء");
                                                              Tc2.getRange(10,10).setValue("الصف الثالث المتوسط  10 10 فيزياء");
                                                              Tc2.getRange(11,10).setValue("الصف الرابع العلمي 10 11 فيزياء");
                                                              Tc2.getRange(13,10).setValue("الصف الخامس الاحيائي 10 13فيزياء");
                                                              Tc2.getRange(14,10).setValue("الصف الخامس التطبيقي 10 14 فيزياء");
                                                              Tc2.getRange(16,10).setValue("الصف السادس الاحيائي 10 16 فيزياء");
                                                              Tc2.getRange(17,10).setValue(" الصف السادس التطبيقي  10 17 فيزياء");
                                                           //احياء
                                                                          Tc2.getRange(1,11).setValue("الاحياء");
                                                              Tc2.getRange(8,11).setValue("الصف الاول المتوسط  11 8 احياء");
                                                              Tc2.getRange(9,11).setValue("الصف الثاني المتوسط 11 9 احياء");
                                                              Tc2.getRange(10,11).setValue("الصف الثالث المتوسط  11 10 احياء");
                                                              Tc2.getRange(11,11).setValue("الصف الرابع العلمي 11 11 احياء");
                                                              Tc2.getRange(13,11).setValue("الصف الخامس الاحيائي 11 13احياء");
                                                              Tc2.getRange(16,11).setValue("الصف السادس الاحيائي 11 16 احياء");
                                                  
                                                               //تاريخ
                                                                                     Tc2.getRange(1,12).setValue("التاريخ");
                                                              Tc2.getRange(10,12).setValue("الصف الثالث المتوسط  12 10 تاريخ");
                                                              Tc2.getRange(12,12).setValue("الصف الرابع الادبي  12 12 تاريخ");
                                                              Tc2.getRange(15,12).setValue("الصف الخامس الادبي 12 15 تاريخ");
                                                              Tc2.getRange(18,12).setValue("الصف السادس الادبي  12 18 تاريخ");
                                                                //جغرافية
                                                                                 Tc2.getRange(1,13).setValue("الجغرافية");
                                                              Tc2.getRange(10,13).setValue("الصف الثالث المتوسط  13 10 جغرافية");
                                                              Tc2.getRange(12,13).setValue("الصف الرابع الادبي  13 12 جغرافية");
                                                              Tc2.getRange(15,13).setValue("الصف الخامس الادبي 13 15 جغرافية");
                                                              Tc2.getRange(18,13).setValue("الصف السادس الادبي  13 18 جغرافية");
                                         
                                                             //وطنية   
                                                              Tc2.getRange(1,14).setValue("الوطنية");
                                                              Tc2.getRange(10,14).setValue("الصف الثالث المتوسط  14 10 وطنية");
                                                             //حاسوب
                                                              Tc2.getRange(1,15).setValue("الحاسوب");
                                                              Tc2.getRange(8,15).setValue("الصف الاول المتوسط  15 8 حاسوب");
                                                              Tc2.getRange(9,15).setValue("الصف الثاني المتوسط 15 9 حاسوب");
                                                              Tc2.getRange(11,15).setValue("الصف الرابع العلمي 15 11 حاسوب");
                                                              Tc2.getRange(12,15).setValue("الصف الرابع الادبي  15 12 حاسوب");
                                                              Tc2.getRange(13,15).setValue("الصف الخامس الاحيائي 15 13حاسوب");
                                                              Tc2.getRange(14,15).setValue("الصف الخامس التطبيقي 15 14 حاسوب");
                                                              Tc2.getRange(15,15).setValue("الصف الخامس الادبي 15 15 حاسوب");
                                                
                                                              //كردية
                                                              Tc2.getRange(1,16).setValue("الكرديه");
                                                              Tc2.getRange(11,16).setValue("الصف الرابع العلمي 16 11 كرديه");
                                                              Tc2.getRange(12,16).setValue("الصف الرابع الادبي  16 12 كرديه");
                                                              Tc2.getRange(13,16).setValue("الصف الخامس الاحيائي 16 13كرديه");
                                                              Tc2.getRange(14,16).setValue("الصف الخامس التطبيقي 16 14 كرديه");
                                                              Tc2.getRange(15,16).setValue("الصف الخامس الادبي 16 15 كرديه");
                                                                
                                                              //علم الاجتماع
                                                              Tc2.getRange(1,17).setValue("العلم الاجتماع");
                                                              Tc2.getRange(12,17).setValue("الصف الرابع الادبي  17 12 علم الاجتماع");

                                                                //علم الارض
                                                              Tc2.getRange(1,18).setValue("العلم الارض");
                                                              Tc2.getRange(14,18).setValue("الصف الخامس التطبيقي 18 14 علم الارض");
                                                             //فلسفة
                                                                  
                                                              Tc2.getRange(1,19).setValue("فلسفة");
                                                              Tc2.getRange(15,19).setValue("الصف الخامس الادبي 19 15 فلسفة ");
                                                                
                                                               //اقتصاد
                                                              Tc2.getRange(1,20).setValue("الاقتصاد");
                                                              Tc2.getRange(14,20).setValue("الصف الخامس التطبيقي 20 14 اقتصاد");
                                                              Tc2.getRange(17,20).setValue(" الصف السادس التطبيقي  20 17 اقتصاد");
                                                              Tc2.getRange(18,20).setValue("الصف السادس الادبي  20 18 اقتصاد");
                                                                //الفرنسية
                                                              Tc2.getRange(1,21).setValue("الفرنسية");
                                                              Tc2.getRange(8,21).setValue("الصف الاول المتوسط  21 8 فرنسية");
                                                              Tc2.getRange(9,21).setValue("الصف الثاني المتوسط 21 9 فرنسية");
                                                              Tc2.getRange(10,21).setValue("الصف الثالث المتوسط  21 10 فرنسية");
                                                              Tc2.getRange(11,21).setValue("الصف الرابع العلمي 21 11 فرنسية");
                                                              Tc2.getRange(12,21).setValue("الصف الرابع الادبي  21 12 فرنسية");
                                                              Tc2.getRange(13,21).setValue("الصف الخامس الاحيائي 21 13فرنسية");
                                                              Tc2.getRange(14,21).setValue("الصف الخامس التطبيقي 21 14 فرنسية");
                                                              Tc2.getRange(15,21).setValue("الصف الخامس الادبي 21 15 فرنسية");
                                                              Tc2.getRange(16,21).setValue("الصف السادس الاحيائي 21 16 فرنسية");
                                                              Tc2.getRange(17,21).setValue(" الصف السادس التطبيقي  21 17 فرنسية");
                                                              Tc2.getRange(18,21).setValue("الصف السادس الادبي  21 18 فرنسية");

                                                           
  
 var Tc3 = Teacher.insertSheet("HUDUR");         
Tc3.setRightToLeft(true);

var Tc4 = Teacher.insertSheet("TEST").hideSheet();  
  Tc4.setRightToLeft(true);        
var Tc5 = Teacher.insertSheet("TEACHERS");         
var  Tc5 = Teacher.getSheetByName("TEACHERS"); 
          Tc5.setRightToLeft(true);

                                                              Tc5.getRange(1,1).setValue("تسلسل");
                                                              Tc5.getRange(1,2).setValue("اسم المدرس الرباعي");
                                                              Tc5.getRange(1,3).setValue("التخصص");
                                                             
                                                              Tc5.getRange(1,4).setValue("البريد");
                                                              Tc5.getRange(1,5).setValue("رقم الهاتف");
                                                              Tc5.getRange(1,6).setValue("الرمز السري");
                                                              Tc5.getRange(1,7).setValue("المواد الذي يدرسها");

          
       var  Tc6 = Teacher.insertSheet("QUESTIONS").hideSheet();
          Tc6.setRightToLeft(true);
       var  Tc7 = Teacher.insertSheet("ANSWERS").hideSheet();
          Tc7.setRightToLeft(true);
 
          


          GmailApp.sendEmail(Info.emailschool, 'لقد تم ادراج بياناتك بنجاح شكرا لأنضمامك معنا ..رمزك السري هو   ' +Info.password, ''+ 'My School Application' +'');
 
        }}
        else  {
     if (ts.getRange(1,1).getValues()==("@"+Info.codeschool)){//ws.appendRow([,Info.nameschool,Info.codeschool,Info.app,Info.linkschool,Info.emailschool,new Date()]);
       var setQuery3 = ts.getRange(1,1).setFormula(count);
       for(var i=1;i <= setQuery3.getValue();i++)
      {
        if((ws.getRange(i,2).getValue()==("@"+Info.codeschool))&&(ws.getRange(i,6).getValue()=="@"+Info.password))
        {  
        
          if (Info.check=="نعم"){
              ws.getRange(i,1).setValue(Info.nameschool + "*");}
          else{ws.getRange(i,1).setValue(Info.nameschool);}
         // ws.getRange(i,2).setValue(Info.codeschool);
          ws.getRange(i,3).setValue(Info.app);
          ws.getRange(i,4).setValue(Info.linkschool);
          ws.getRange(i,5).setValue(Info.emailschool);
          ws.getRange(i,6).setValue("@"+Info.password);
          ws.getRange(i,8).setValue(new Date());
          if ("@"+Info.password2 !="@"){ws.getRange(i,6).setValue("@"+Info.password2);}
          GmailApp.sendEmail(Info.emailschool, 'لقد تم تحديث ياناتك بنجاح ..رمزك السري هو   ' +ws.getRange(i,6).getValue(), ''+ 'My School Application' +'');
         // return ContentService.createTextOutput("ok");
        }}
    
    
    
 } 

}
//   ws.appendRow([,Info.nameschool,Info.codeschool,Info.app,Info.linkschool,Info.emailschool,new Date()]);
}