function listFilesInFolder(folderName) {

   var sheet = SpreadsheetApp.getActiveSheet();
   sheet.appendRow(["Name", "File-Id"]);


//change the folder ID below to reflect your folder's ID (look in the URL when you're in your folder)
  //Copiar la URL del folder; e.g. https://drive.google.com/drive/u/1/folders/1puahCP0T7UzcxqRvt7eA-NgS5QP2N9Qs?ogsrc=32
  //Tomar la cadena entre el último '/' y '?ogsrc=32'
  
    var folder = DriveApp.getFolderById("1IJtNYZ4SHvz8_T4DoCVfcNFgBFfzzbvW");
    var contents = folder.getFiles();

    var cnt = 0;
    var file;

    while (contents.hasNext()) {
        var file = contents.next();
        cnt++;

           data = [
                file.getName(),
                file.getId(),
            ];

            sheet.appendRow(data);
    };
};