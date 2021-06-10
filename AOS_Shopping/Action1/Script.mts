Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebList("categoryListboxContactUs").Select DataTable("categoryListboxContactUs_Item", dtGlobalSheet)
'Browser("Advantage Shopping").Page("Advantage Shopping").WebList("productListboxContactUs").Select DataTable("productListboxContactUs_Item", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailContactUs").Set DataTable("emailContactUs_Text", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("subjectTextareaContactUs").Set DataTable("subjectTextareaContactUs_Text", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send_btnundefined").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement").Check CheckPoint("WebElement") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement")_;_script infofile_;_ZIP::ssf7.xml_;_
