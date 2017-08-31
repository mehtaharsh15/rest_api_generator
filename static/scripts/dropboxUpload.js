function uploadToDropbox(callback, fileInput, path ) {
      var ACCESS_TOKEN = "14JAArfY4_AAAAAAAAAKKxHdhIXkS9vDBHS-HJ0hmzo4jEqk1VqlSdxlb70dggjX"

      //var ACCESS_TOKEN = document.getElementById('access-token').value;
      var dbx = new Dropbox({ accessToken: ACCESS_TOKEN });
      //var fileInput = document.getElementById('file-upload');
      var file = fileInput.files[0];
      dbx.filesUpload({path: path + file.name, contents: file})
        .then(function(response) {
          // var results = document.getElementById('results');
          // results.appendChild(document.createTextNode('File uploaded!'));
          

          console.log(response);
          callback({"success":true, "msg":"File Upladed", "path":response.path_display})
        })
        .catch(function(error) {
          console.error(error);
          callback({"success":false});
        });
      callback({"success":false});
    }


function dropboxDownloadLink(callback, path){

console.log(path)
var data = '{"path": "'+path+'","short_url": false}'
$.ajax({
  url: 'https://api.dropboxapi.com/2/sharing/create_shared_link',
  type: 'POST',
  dataType : 'json',
  data: data,
  headers: {
    'Authorization':'Bearer 14JAArfY4_AAAAAAAAAKKxHdhIXkS9vDBHS-HJ0hmzo4jEqk1VqlSdxlb70dggjX',
     'Content-Type':'application/json'
  },
})
.done(function (data) {
  console.log("success", data);
  callback(data);
})
.fail(function (data) {
  console.log("error", data);
  callback(data);
})


}


