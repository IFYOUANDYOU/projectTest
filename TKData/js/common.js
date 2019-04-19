//初始化fileinput控件（第一次初始化）
function initFileInput(ctrlName, uploadUrl) {
    var control = $('#' + ctrlName);
    control.fileinput({
        language: 'zh', //设置语言
        uploadUrl: uploadUrl, //上传的地址
        allowedFileExtensions: ['jpg', 'png', 'gif', 'jpeg'],//接收的文件后缀
        autoReplace: true,
        deleteUrl: "",
        allowedFileTypes: ['jpg', 'png', 'gif', , 'jpeg'],
        maxFileSize: 1000,
        maxFileCount: 1,
        dropZoneEnabled: false,
        showRemove: false,
        showUploadedThumbs: false,
        autoReplace: true,
        showUpload: false, //是否显示上传按钮
        showCaption: false,//是否显示标题
        fileActionSettings: {
            showRemove: false,
            showUpload: false,
            showZoom: false,
            showDrag: false,
            dragSettings: {}
        },
        slugCallback: function(filename) {
            return filename.replace('(', '_').replace(']', '_');
        }
    }).on("filebatchselected",function(event, files){
        console.log(event, files)
    }).on("fileuploaded", function(event, data, previewId, index) {
        
    }).on("filebatchselected", function(event, files) {
        console.log(event, files)
    });;
}