
/*
Descripción: Recoge el código Blockly y lo transforma a XML mostrándolo por pantalla
*/
function toXml() {
  var output = document.getElementById('XmlArea');
  var xml = Blockly.Xml.workspaceToDom(workspace);
  output.value = Blockly.Xml.domToPrettyText(xml);
  output.focus();
  output.select();
}

function saveXml(){
  var xml = Blockly.Xml.workspaceToDom(workspace);
  var oSerializer = new XMLSerializer();
  var sXML = oSerializer.serializeToString(xml);
  alert(sXML)
  var xml_text = Blockly.Xml.domToText(xml);
  newWindow = window.open("data:application/octet-stream," + encodeURIComponent(xml_text), 'webseite.blockly.xml');
}

function loadFileAsText()
{
	var fileToLoad = document.getElementById("loadFileButton").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("XmlArea").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}

function fromXml() {    
  var input = document.getElementById('XmlArea');// Trae el texto que se pone en la caja de texto
  var xml = Blockly.Xml.textToDom(input.value);//Transformación del texto a js
  //Blockly.Xml.domToWorkspace(xml, workspace);
  Blockly.Xml.appendDomToWorkspace(xml, workspace);//Se incorpora el js al espacio de trabajo para visualizar los bloques
  output.focus();
  output.select();
  taChange();
}
  
  
  // Disable the "Import from XML" button if the XML is invalid.
  // Preserve text between page reloads.
  function taChange() {
    var textarea = document.getElementById('transformButton');
    if (sessionStorage) {
      sessionStorage.setItem('XmlArea', textarea.value);
    }
    var valid = true;
    try {
      Blockly.Xml.textToDom(textarea.value);
    } catch (e) {
      valid = false;
    }
    document.getElementById('transformButton').disabled = !valid;
  }