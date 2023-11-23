function doGet(request) {
  var params = request.parameter;
  var sheet = SpreadsheetApp.openById('TODO_SHEET_ID').getSheetByName('TODO_SHEET_PAGE_NAME');
  var columnToWrite = 1;  // Column A

  // Find the first empty cell in the specified column
  var range = sheet.getRange(sheet.getLastRow() + 1, columnToWrite);
  while (range.getValue() !== "" && range.getValue() !== null) {
    range = sheet.getRange(range.getRow() + 1, columnToWrite);
  }

  // Write the data to the found cell
  range.setValue(params.data);
  return HtmlService.createHtmlOutput('The outcome has been recorded, if you wish to try again click here: <a href=http://91.203.212.130/AniNAL/demo.html target="_top">AniNAL demo</a>');
}
