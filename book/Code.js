var goo;
var url="https://docs.google.com/spreadsheets/d/1KEa4nbyjo3JhmTH903md_6PkB8LGeXQ7HcZm0sBD7oY/edit#gid=936662998";
function doGet(e) {
if ((e.parameter.go=="Qanber")||(e.parameter.go=="Qanberino")){ goo=e.parameter.go
return loadform();        }
else{return HtmlService.createTemplateFromFile("home").evaluate();  }
}
/*
function userClicked(Info){
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Sheet"+Info.appindex);
    var rg = ws.getName() + "!" + sh.getDataRange().getA1Notation();
    var sq1 = '"Select C where C=\''+"@"+Info.codeschool+'\'"';//
  
    //var qry = '=IFERROR(UNIQUE(query('+ rg + ',' + sq1 + '),""))';
    var mm =ws.getName() + "!C:C";
   var count ='=CountA('+ mm + ')';
   
    ts = ss.getSheetByName('Sheet'+'20');
    ws.appendRow([goo,"xxxx"]);
  var setQuery = ts.getRange(1,1).setFormula(qry);
          if (ts.getRange(1,1).getValues()!=("@"+Info.codeschool)){ws.appendRow([,Info.nameschool,"@"+Info.codeschool,Info.app,Info.linkschool,Info.emailschool,new Date()]);
        
        //return HtmlService.createHtmlOutput("<h1>تم ادراج مدرستكم بنجاح</h1>");
        }
        
            if (ts.getRange(1,1).getValues()=="@"+Info.codeschool){
       //ws.appendRow([,Info.nameschool,Info.codeschool,Info.app,Info.linkschool,Info.emailschool,new Date()]);
       var setQuery3 = ts.getRange(2,1).setFormula(count);
       for(var i=1;i <= setQuery3.getValue();i++)
      {
        if(ws.getRange(i,3).getValue()==("@"+Info.codeschool))
        {
           ws.getRange(i,2).setValue(Info.nameschool);
          //ws.getRange(i,3).setValue("@"+Info.codeschool);
          ws.getRange(i,4).setValue(Info.app);
          ws.getRange(i,5).setValue(Info.linkschool);
          ws.getRange(i,6).setValue(Info.emailschool);
          ws.getRange(i,7).setValue(new Date());
          
         // return ContentService.createTextOutput("ok");
        }
      }
    
    
    
      } 


//   ws.appendRow([,Info.nameschool,Info.codeschool,Info.app,Info.linkschool,Info.emailschool,new Date()]);
}
*/