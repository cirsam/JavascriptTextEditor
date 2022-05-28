window.addEventListener('load', function () {
    document.getElementById('isdeditor').setAttribute('contenteditable', 'true');
});

function format(command, value) {
    document.execCommand(command, false, value);
}

function checkIfTextSelected() {
    var selectedText = '';
    if (window.getSelection) {
        selectedText = window.getSelection();
    } else if (document.getSelection) {
        selectedText = document.getSelection();
    } else if (document.selection) {
        selectedText = document.selection.createRange().text;
    }

    return selectedText;
}

function showHideUrl() {
    document.getElementById("isdUrlContainer").classList.toggle("hideIsdItem");
}

function setUrl() {
    var url = document.getElementById('txtFormatUrl').value;
    var selectedText = checkIfTextSelected();
    if (selectedText == '') {
        alert("To make a hyperlink, select a text");
        return false;
    }
    document.execCommand('insertHTML', false, '<a href="' + encodeURI(url) + '" target="_blank">' + selectedText + '</a>');
    document.getElementById('txtFormatUrl').value = '';
}

function changeFontSize(size) {
    var selectedText = checkIfTextSelected();
    if (selectedText == '') {
        alert("To make a hyperlink, select a text");
        return false;
    }
    document.execCommand('fontsize', false, size);
}

function showImagePanel() {
    document.getElementById("isdImageContainer").classList.toggle("hideIsdItem");
}

function saveImageUrl() {
    var imageLink = document.getElementById("imageLink").value;
    var height = document.getElementById("imageHeight").value;
    var width = document.getElementById("imageWidth").value;

    document.execCommand('insertHTML', 0, '<img width="' + width + '" height="' + height + '" src="' + encodeURI(imageLink) + '"/>');
}
