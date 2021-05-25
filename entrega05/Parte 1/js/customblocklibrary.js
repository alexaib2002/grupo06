Blockly.Blocks['file'] = {
  init: function() {
    this.appendValueInput("version_file")
        .setCheck("version")
        .appendField("Name File")
        .appendField(new Blockly.FieldTextInput("Insert here file's name"), "name");
    this.appendStatementInput("elements_file")
        .setCheck(["import","contract","library","event","modifier"]);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['version'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("version")
        .appendField(new Blockly.FieldDropdown([[">","greater"], [">=","greater_equal"]]), "symbolversion")
        .appendField(new Blockly.FieldNumber(0, 0, 0), "value1version")
        .appendField(".")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "value2version")
        .appendField(".")
        .appendField(new Blockly.FieldNumber(0, 0, 25), "value3version")
        .appendField(new Blockly.FieldDropdown([["<=","less_equal"], ["<","less"], [">","greater"], [">=","greater_equal"]]), "symbolcomparation")
        .appendField(new Blockly.FieldNumber(0, 0, 0), "value1versionoptional")
        .appendField(".")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "value2versionoptional")
        .appendField(".")
        .appendField(new Blockly.FieldNumber(0, 0, 25), "value3versionoptional");
    this.setOutput(true, "version");//Returned type or list of returned types. Null or undefined if any type could be returned (e.g. variable get).
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['interface'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("interface")
        .appendField(new Blockly.FieldTextInput("Insert here interface's name"), "name");
    this.appendStatementInput("interface_functions")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['interface_clausedeclaration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("function")
        .appendField(new Blockly.FieldTextInput("Insert here function's name"), "name");
    this.appendValueInput("inputparams_function")
        .setCheck("inputparam")
        .appendField("Input params?");
    this.appendValueInput("modifiers")
        .setCheck(null)
        .appendField("visibility")
        .appendField(new Blockly.FieldDropdown([["public","public"], ["private","private"], ["internal","internal"]]), "values_visibility")
        .appendField("state")
        .appendField(new Blockly.FieldDropdown([["view","view"], ["pure","pure"], ["payable","payable"]]), "values_inputmodifier")
        .appendField("Modifiers?");
    this.appendValueInput("returns_values")
        .setCheck(null)
        .appendField("returns values?");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['import'] = {
  init: function() {
    this.appendValueInput("alias")
        .setCheck("aliasimport")
        .appendField("route")
        .appendField(new Blockly.FieldTextInput("Insert here the resource's route"), "resource_route");
    this.setInputsInline(false);
    this.setPreviousStatement(true, ["file","constructor","clause","var_expression","emit_event"]);
    this.setNextStatement(true,  ["constructor","clause","var_expression","emit_event"]);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['alias_import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import's alias")
        .appendField(new Blockly.FieldTextInput("default"), "alias");
    this.setOutput(true,"aliasimport");
    this.setColour(230);
 this.setTooltip("You must define an import element before to connect this alias");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['library'] = {
  init: function() {
    this.appendStatementInput("functions_library")
        .setCheck(null)
        .appendField("library")
        .appendField(new Blockly.FieldTextInput("Insert here library's name"), "name");
    this.setPreviousStatement(true, ["contract","constructor","modifier","enum","event","clause","restriction_clause","emit_event"]);
    this.setNextStatement(true, ["constructor","clause","restriction_clause","emit_event"]);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['event'] = {
  init: function() {
    this.appendValueInput("inputparams")
        .setCheck("inputparam")
        .appendField("event")
        .appendField(new Blockly.FieldTextInput("Insert here event's name"), "name");
    this.setInputsInline(false);
    this.setPreviousStatement(true,["contract","clause","constructor","emit_event"]);//Incapacita que se pueda meter dentro de contratos
    this.setNextStatement(true, ["library","clause","constructor","emit_event"]);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/CristianGM23/SM2/blob/master/GuideSmaC.pdf");
  }
};

Blockly.Blocks['emit_event'] = {
  init: function() {
    this.appendValueInput("inputparams")
        .setCheck("inputparam")
        .appendField("emit")
        .appendField(new Blockly.FieldTextInput("Insert here event's name to emit"), "name");
    this.setPreviousStatement(true, ["file","library","import","modifier","event","contract","constructor"]);
    this.setNextStatement(true, ["file","library","import","modifier","event","contract","constructor"]);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['inputparam'] = {
  init: function() {
    this.appendStatementInput("inputparams")
        .setCheck(["input_param","inputparamshortidentifier"])
        .appendField("input params");
    this.setOutput(true, "inputparam");
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['inputparamshortidentifier'] = {
  init: function() {
    this.appendValueInput("type")
        .setCheck(["type_byte","type_uint","type_int","type_address","type_bool","type_float","type_identifier","type_text","type_mapping"])
        .appendField("input param")
        .appendField("type");
    this.appendValueInput("array_dimension")
        .setCheck(["arraydimension","dynamic_array"])
        .appendField("array?");
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("Insert here the identifier's name"), "name");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['input_param'] = {
  init: function() {
    this.appendValueInput("type")
        .setCheck(["type_byte","type_uint","type_int","type_address","type_bool","type_float","type_identifier","type_text","type_mapping"])
        .appendField("type");
    this.appendValueInput("arraydimension")
        .setCheck(["arraydimension","dynamic_array"])
        .appendField("array dimension?");
    this.appendDummyInput()
        .appendField("indexed?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "indexed")
        .appendField("storagedata?")
        .appendField(new Blockly.FieldDropdown([["memory","memory"], ["storage","storage"]]), "storagedata_values")
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("Insert here param's name"), "name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


/*Blockly.Blocks['outputparam'] = {
  init: function() {
    this.appendValueInput("outputparam")
        .setCheck(["type_byte","type_uint","type_int","type_address","type_bool","type_float","type_identifier","type_text"])
        .appendField("output")
        .appendField("type");
    this.appendDummyInput()
      .appendField("name")
      .appendField(new Blockly.FieldTextInput("Indicate param's name"), "name");
    this.setOutput(true, "outputparam");
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};*/

Blockly.Blocks['outputparam'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Output param")
        .appendField(new Blockly.FieldTextInput("Insert type here"), "type")
        .appendField(new Blockly.FieldTextInput("Insert value here"), "value");
    this.setOutput(true, "outputparam");
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['modifier'] = {
  init: function() {
    this.appendValueInput("inputparams")
        .setCheck("inputparam")
        .appendField("modifier")
        .appendField(new Blockly.FieldTextInput("Insert here modifier's name"), "name");
    this.appendStatementInput("restrictions_modifier")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true,null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_inputmodifier'] = {
  init: function() {
    this.appendValueInput("modifier")
        .setCheck(null)
        .appendField("input modifier")
        .appendField(new Blockly.FieldTextInput(""), "value");
    this.setInputsInline(false);
    this.setOutput(true, ["block_inputmodifier"]);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['restriction_clause'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck(["comparation_logicalexpression","comparation_arithmeticalexpression","comparation_expression","parenthesis_expression","personalized_inputexpression"])
        .appendField("require");
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['restriction_clausecomment'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck(["comparation_logicalexpression","comparation_arithmeticalexpression","comparation_expression","parenthesis_expression","personalized_inputexpression"])
        .appendField("require");
    this.appendDummyInput()
        .appendField("comment")
        .appendField(new Blockly.FieldTextInput("Insert here your comment"), "comment");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['closemodifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_;");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['markmodifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_;");
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['contract'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("contract")
        .appendField(new Blockly.FieldTextInput("Insert here contract's name"), "name");
    this.appendValueInput("namecontractfather")
        .setCheck("contract_father")
        .appendField("Inheritance?");
    this.appendStatementInput("contract_elements")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true,["event","library"]);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['contract_father'] = {
  init: function() {
    this.appendValueInput("contractfather")
        .setCheck("contract_father")
        .appendField(new Blockly.FieldTextInput("Contract's name inherit"), "name");
    this.setOutput(true, "contract_father");
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['contract_constructor'] = {
  init: function() {
    this.appendValueInput("inputparams")
        .setCheck("inputparam")
        .appendField("constructor")
        .appendField("input params?");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["public","public"], ["internal","internal"]]), "visibility_values")
        .appendField("payable?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "payable");
    this.appendStatementInput("expressions_constructor")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["file","identifier_property","identifier_shortproperty","address_property","address_shortproperty","boolean_property","boolean_shortproperty","number_property","number_shortproperty","text_property","text_shortproperty","mapping_property","mapping_shortproperty","event","library","import","modifier"]);
    this.setNextStatement(true, ["file","mapping_property","mapping_shortproperty","event","library","import","modifier","clause"]);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


var arrayExpressions = ["shift_expression","assing_value_expression","bracket_expression","revert_expression",
"bitwise_expression","selfdestruct_function","personalized_casting_expression","abyencodepacked"];



Blockly.Blocks['clause'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("function")
        .appendField(new Blockly.FieldTextInput("Insert here function's name"), "name");
    this.appendValueInput("inputparams_function")
        .setCheck("inputparam")
        .appendField("Input params?");
    this.appendValueInput("modifiers")
        .setCheck(["block_inputmodifier"])
        .appendField("visibility")
        .appendField(new Blockly.FieldDropdown([["public","public"], ["private","private"], ["internal","internal"]]), "values_visibility")
        .appendField("state")
        .appendField(new Blockly.FieldDropdown([["view","view"], ["pure","pure"], ["payable","payable"]]), "values_inputmodifier")
        .appendField("Modifiers?");
    this.appendValueInput("returns_values")
        .setCheck(null)
        .appendField("returns values?");
    this.appendStatementInput("elements_function")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





Blockly.Blocks['return_clause'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return");
    this.appendValueInput("values")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['coin_expression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("coin")
        .appendField(new Blockly.FieldNumber(0), "amount_coin")
        .appendField(new Blockly.FieldDropdown([["ether","ether"], ["gwei","gwei "], ["pwei","pwei"], ["wei","wei"], ["szabo","szabo"], ["finney","finney"]]), "type_coin");
    this.setOutput(true, "coin_expression");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['visibility_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("visibility")
        .appendField(new Blockly.FieldDropdown([["view","view"], ["pure","pure"], ["payable","payable"]]), "visibility_values");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['var_expression'] = {
  init: function() {
    this.appendValueInput("expression_varexpression")
        .setCheck(["personalized_inputexpression","shift_expression","bitwise_expression","personalized_casting_expression","msgvariables","coin","txvariables","blockvariables","assing_value_expression1inputs","keccak_inputfunction","sha_inputfunction","abyencode_function","block_now"])
        .appendField("var")
        .appendField(new Blockly.FieldTextInput("Insert here variable's name"), "name");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["file","library","import","event"]);
    this.setNextStatement(true, ["file","library","import","event"]);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_usinglibrary'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("using")
        .appendField(new Blockly.FieldTextInput("Insert here library's name"), "name")
        .appendField("for")
        .appendField(new Blockly.FieldTextInput("alias"), "alias");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['range_version'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("range_version")
        .appendField(new Blockly.FieldDropdown([[">","greater"], [">=","greater_equal"]]), "symbolcomparation")
        .appendField(new Blockly.FieldNumber(0, 0, 0), "value1")
        .appendField(".")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "value2")
        .appendField(".")
        .appendField(new Blockly.FieldNumber(0, 0, 25), "value3")
        .appendField(new Blockly.FieldDropdown([["<=","less_equal"], ["<","less"], [">","greater"], [">=","greater_equal"]]), "symbolcomparation")
        .appendField(new Blockly.FieldNumber(0, 0, 0), "value1optional")
        .appendField(".")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "value2optional")
        .appendField(".")
        .appendField(new Blockly.FieldNumber(0, 0, 25), "value3optional");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assign_value_expression'] = {
  init: function() {
    this.appendValueInput("value1_assignexpression")
        .setCheck(["personalized_inputexpression","personalized_casting_expression","msgvariables","coin","txvariables","blockvariables"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["=","="], ["|=","|="], ["^=","^="], ["&=","&="], ["<<=","<<="], [">>=",">>="], ["+=","+="], ["-=","-="], ["*=","*="], ["/=","/="], ["%=","%="]]), "operators");
    this.appendValueInput("value2_assignexpression")
        .setCheck(["personalized_inputexpression","bitwise_expression","shift_expression","personalized_casting_expression","msgvariables","coin","txvariables","blockvariables","tuple","block_positivenumber","block_number","block_text","block_boolean","arithmetical_expression","parenthesis_expression","keccak_inputfunction","sha_inputfunction","abyencode_function","block_now","block_new"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['assing_value_expression1inputs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["=","="], ["|=","|="], ["^=","^="], ["<<=","<<="], [">>=",">>="], ["+=","+="], ["-=","-="], ["*=","*="], ["/=","/="], ["%=","%="]]), "operators");
    this.appendValueInput("value1_assingexpression")
        .setCheck(["personalized_inputexpression","personalized_casting_expression","bitwise_expression","block_text","block_boolean","block_number","block_positivenumber","block_positivenumber","msgvariables","coin","txvariables","blockvariables","tuple","arithmetical_expression","parenthesis_expression","keccak_inputfunction","sha_inputfunction","abyencode_function","block_now","block_new"]);
    this.setInputsInline(true);
    this.setOutput(true, "assing_value_expression1inputs");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['shift_expression'] = {
  init: function() {
    this.appendValueInput("value1_shiftexpression")
        .setCheck(["String","personalized_inputexpression"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["<<","<<"], [">>",">>"]]), "operators");
    this.appendValueInput("value2_shiftexpression")
        .setCheck(["String","personalized_inputexpression"]);
    this.setOutput(true, "shift_expression");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['shift_expression1inputs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["<<","<<"], [">>",">>"]]), "operators");
    this.appendValueInput("value2_shiftexpression")
        .setCheck(["String","personalized_inputexpression"]);
    this.setInputsInline(true);
    this.setOutput(true, "shift_expression1inputs");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['bracket_expression'] = {
  init: function() {
    this.appendValueInput("identifier_bracketexpression")
        .setCheck("String")
        .appendField("identifier");
    this.appendDummyInput()
        .appendField("[");
    this.appendValueInput("index_bracketexpression")
        .setCheck(["msgvariables","personalized_inputexpression"]);
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bitwise_expression'] = {
  init: function() {
    this.appendValueInput("value1_bitwiseexpression")
        .setCheck(["String", "personalized_inputexpression"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["|","|"], ["&","&"], ["^","^"], ["~","~"]]), "operators");
    this.appendValueInput("value2_bitwiseexpression")
        .setCheck(["String", "personalized_inputexpression"]);
    this.setOutput(true, "bitwise_expression");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bitwise_expression1inputs'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["|","|"], ["&","&"], ["^","^"], ["~","~"]]), "operators");
    this.appendValueInput("value2_bitwiseexpression")
        .setCheck(["String", "personalized_inputexpression"]);
    this.setInputsInline(true);
    this.setOutput(true, "bitwise_expression1inputs");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['selfdestruct_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("selfdestruct")
        .appendField(new Blockly.FieldTextInput("Insert here expression"), "value_parameter");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keccak_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("keccak256")
        .appendField(new Blockly.FieldTextInput("Insert here expression"), "value_parameter");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sha_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["sha3","sha3"], ["sha256","sha256"]]), "name")
        .appendField(new Blockly.FieldTextInput("Insert here expression"), "value_parameter");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['abyencode_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("abi.encodePacked")
        .appendField(new Blockly.FieldTextInput("Insert here expression"), "value_parameter");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['log_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("log")
        .appendField(new Blockly.FieldNumber(0, 0), "value_log")
        .appendField(new Blockly.FieldTextInput("value_parameter"), "Insert here the expression");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keccak_inputfunction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("keccak256")
        .appendField(new Blockly.FieldTextInput("Insert here expression"), "value_parameter");
    this.setOutput(true, "keccak_inputfunction");
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sha_inputfunction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["sha3","sha3"], ["sha256","sha256"]]), "identifier")
        .appendField(new Blockly.FieldTextInput("Insert here expression"), "value_parameter");
    this.setOutput(true, "sha_inputfunction");
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['abyencode_inputfunction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("abi.encodePacked")
        .appendField(new Blockly.FieldTextInput("Insert here expression"), "value_parameter");
    this.setOutput(true, "abyencode_inputfunction");
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['coin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("coin")
        .appendField(new Blockly.FieldNumber(0, 0), "amount_coin")
        .appendField(new Blockly.FieldDropdown([["ether","ether_coin"], ["gwei","gwei_coin "], ["pwei","pwei_coin"], ["wei","wei_coin"], ["szabo","szabo_coin"], ["finney","finney_coin"]]), "type_coin");
    this.setOutput(true, "coin");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['casting_expression'] = {
  init: function() {
    this.appendValueInput("type")
        .setCheck(["type_byte","type_uint","type_int","type_address","type_bool","type_float","type_identifier","type_text"])
        .appendField("type to cast");
    this.appendValueInput("expressioncast")
        .setCheck(["personalized_inputexpression"])
        .appendField("expression to cast");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['personalized_struct'] = {
  init: function() {
    this.appendStatementInput("properties_struct")
        .setCheck(["dynamic_array","array_property"])
        .appendField("Identifier")
        .appendField(new Blockly.FieldTextInput("Insert here struct's identifier"), "name")
        .appendField("Properties");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(329);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['number_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type")
        .appendField(new Blockly.FieldDropdown([["int","int"], ["uint","uint"], ["float","float"]]), "numbertype_property");
    this.appendValueInput("array_dimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("array dimension?");
    this.appendDummyInput()
        .appendField("constant?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "constant")
        .appendField("visibility")
        .appendField(new Blockly.FieldDropdown([["public","public"], ["private","private"], ["internal","internal"]]), "visibility_values")
        .appendField("storagedata")
        .appendField(new Blockly.FieldDropdown([["memory","memory"], ["storage","storage"]]), "storagedata_values");
    this.appendValueInput("valueproperty")
        .setCheck(["Number", "personalized_inputexpression","assing_value_expression1inputs"])
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here the name of the property"), "name")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['byte_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type")
        .appendField(new Blockly.FieldDropdown([["byte","byte"], ["bytes2","bytes2"], ["bytes3","bytes3"], ["bytes4","bytes4"], ["bytes5","bytes5"], ["bytes6","bytes6"], ["bytes7","bytes7"], ["bytes8","bytes8"], ["bytes9","bytes9"], ["bytes10","bytes10"], ["bytes12","bytes12"], ["bytes14","bytes14"], ["bytes16","bytes16"], ["bytes18","bytes18"], ["bytes20","bytes20"], ["bytes22","bytes22"], ["bytes24","bytes24"], ["bytes26","bytes26"], ["bytes28","bytes28"], ["bytes30","bytes30"], ["bytes32","bytes32"]]), "byte_type");
    this.appendValueInput("array_dimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("array dimension?");
    this.appendDummyInput()
        .appendField("constant?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "constant")
        .appendField("visibility")
        .appendField(new Blockly.FieldDropdown([["public","public"], ["private","private"], ["internal","internal"]]), "visibility_values")
        .appendField("storagedata?")
        .appendField(new Blockly.FieldDropdown([["memory","memory"], ["internal","internal"]]), "storagedata_values");
    this.appendValueInput("valueproperty")
        .setCheck(["personalized_inputexpression","assing_value_expression1inputs"])
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here byte property's identifier"), "name")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['identifier_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type")
        .appendField(new Blockly.FieldTextInput("default"), "type");
    this.appendValueInput("array_dimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("array dimension?");
    this.appendDummyInput()
        .appendField("constant?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "constant")
        .appendField("visibility")
        .appendField(new Blockly.FieldDropdown([["public","public"], ["private","private"], ["internal","internal"]]), "visibility_values")
        .appendField("storagedata?")
        .appendField(new Blockly.FieldDropdown([["memory","memory"], ["storage","storage"]]), "storagedata_values");
    this.appendValueInput("valueproperty")
        .setCheck(["personalized_inputexpression","assing_value_expression1inputs","block_new"])
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here property's identifier"), "name")
        .appendField("value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['address_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type")
        .appendField(new Blockly.FieldDropdown([["address","address"], ["address payable","addresspayable"]]), "addresstype_values");
    this.appendValueInput("arraydimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("array dimension?");
    this.appendDummyInput()
        .appendField("constant?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "constant")
        .appendField("visibility")
        .appendField(new Blockly.FieldDropdown([["public","public"], ["private","private"], ["internal","internal"]]), "visibility_values")
        .appendField("storagedata?")
        .appendField(new Blockly.FieldDropdown([["memory","memory"], ["storage","storage"]]), "storagedata_values")
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here the address property's identifier"), "name");
    this.appendValueInput("valueproperty")
        .setCheck(["personalized_inputexpression","assing_value_expression1inputs"])
        .appendField("value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mapping_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mapping");
    this.appendValueInput("key")
        .setCheck(["type_byte","type_uint","type_int","type_address","type_bool","type_float","type_identifier","type_text"]);
    this.appendDummyInput()
        .appendField("=>");
    this.appendValueInput("value")
        .setCheck(["type_byte","type_uint","type_int","type_address","type_bool","type_float","type_identifier","type_text"]);
    this.appendValueInput("array_dimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("array dimension?");
    this.appendDummyInput()
        .appendField("constant?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "constant")
        .appendField("visibility")
        .appendField(new Blockly.FieldDropdown([["public","public"], ["private","private"], ["internal","internal"]]), "visibility_values")
        .appendField("storagedata?")
        .appendField(new Blockly.FieldDropdown([["memory","memory"], ["storage","storage"]]), "storagedata_values");
    this.appendValueInput("valueproperty")
        .setCheck(["personalized_inputexpression","assing_value_expression1inputs"])
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here mapping property's identifier"), "name")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Key value can be almost any type except for a mapping, a dynamically sized array, a contract, an enum and a struct");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['boolean_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("boolean");
    this.appendValueInput("array_dimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("array dimesion?");
    this.appendDummyInput()
        .appendField("constant?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "constant")
        .appendField("visibility")
        .appendField(new Blockly.FieldDropdown([["public","public"], ["private","private"], ["internal","internal"]]), "values_visibility")
        .appendField("storagedata?")
        .appendField(new Blockly.FieldDropdown([["memory","memory"], ["storage","storage"]]), "storagedata_values");
    this.appendValueInput("valueproperty")
        .setCheck(["Boolean", "String","personalized_inputexpression","assing_value_expression1inputs"])
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here boolean property's identifier"), "name")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['text_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type")
        .appendField(new Blockly.FieldDropdown([["char","char_type"], ["string","string_type"]]), "type");
    this.appendValueInput("array_dimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("array dimesion?");
    this.appendDummyInput()
        .appendField("constant?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "constant")
        .appendField("storage data?")
        .appendField(new Blockly.FieldDropdown([["memory","memory"], ["storage","storage"]]), "storagedata_values")
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here Text property's identifier"), "name");
    this.appendValueInput("valueproperty")
        .setCheck(["String","personalized_inputexpression","assing_value_expression1inputs"])
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['enum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("enum")
        .appendField(new Blockly.FieldTextInput("Insert here enum's identifier"), "name");
    this.appendValueInput("values_enum")
        .setCheck(["enum_value"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['enum_value'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("enum value")
        .appendField(new Blockly.FieldTextInput("Insert here the value"), "value_enum");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['number_shortproperty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type")
        .appendField(new Blockly.FieldDropdown([["int","int"], ["uint","uint"], ["float","float"]]), "numbertype_property");
    this.appendValueInput("array_dimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("array dimension?");
    this.appendValueInput("valueproperty")
        .setCheck(["personalized_inputexpression","assing_value_expression1inputs"])
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here the name of the property"), "name")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['boolean_shortproperty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type boolean");
    this.appendValueInput("array_dimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("array dimension?");
    this.appendValueInput("valueproperty")
        .setCheck(["personalized_inputexpression","assing_value_expression1inputs"])
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here boolean property's identifier"), "name")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['text_shortproperty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type")
        .appendField(new Blockly.FieldDropdown([["char","char_type"], ["string","string_type"]]), "type");
    this.appendValueInput("array_dimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("array dimension?");
    this.appendValueInput("valueproperty")
        .setCheck(["String","personalized_inputexpression","assing_value_expression1inputs"])
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here Text property's identifier"), "name")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['address_shortproperty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type")
        .appendField(new Blockly.FieldDropdown([["address","address"], ["address payable","address payable"]]), "addresstype_values");
    this.appendValueInput("arraydimension")
        .setCheck("array_property")
        .appendField("array dimension?");
    this.appendValueInput("valueproperty")
        .setCheck(["msgvariables","personalized_inputexpression","assing_value_expression1inputs"])
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here the address property's identifier"), "name")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['identifier_shortproperty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type")
        .appendField(new Blockly.FieldTextInput("Insert here identifier type"), "type");
    this.appendValueInput("arraydimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("array dimension?");
    this.appendValueInput("valueproperty")
        .setCheck(null)
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here the property's identifier"), "name")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['byte_shortproperty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type")
        .appendField(new Blockly.FieldDropdown([["byte","byte"], ["bytes2","bytes2"], ["bytes3","bytes3"], ["bytes4","bytes4"], ["bytes5","bytes5"], ["bytes6","bytes6"], ["bytes7","bytes7"], ["bytes8","bytes8"], ["bytes9","bytes9"], ["bytes10","bytes10"], ["bytes12","bytes12"], ["bytes14","bytes14"], ["bytes16","bytes16"], ["bytes18","bytes18"], ["bytes20","bytes20"], ["bytes22","bytes22"], ["bytes24","bytes24"], ["bytes26","bytes26"], ["bytes28","bytes28"], ["bytes30","bytes30"], ["bytes32","bytes32"]]), "byte_type");
    this.appendValueInput("array_dimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("array dimension?");
    this.appendValueInput("valueproperty")
        .setCheck(["String","personalized_inputexpression","assing_value_expression1inputs"])
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here byte property's identifier"), "name")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mapping_shortproperty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mapping");
    this.appendValueInput("key")
        .setCheck(["type_address","type_bool","type_byte","type_float","type_identifier","type_int","type_uint","type_text"]);
    this.appendDummyInput()
        .appendField("=>");
    this.appendValueInput("value")
        .setCheck(null);
    this.appendValueInput("array_dimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("array dimension?");
    this.appendValueInput("valueproperty")
        .setCheck(["String","personalized_inputexpression","assing_value_expression1inputs"])
        .appendField("identifier")
        .appendField(new Blockly.FieldTextInput("Insert here mapping property's identifier"), "name")
        .appendField("value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['array_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dimension")
        .appendField(new Blockly.FieldNumber(0, 0), "cells");
    this.appendValueInput("plus_dimension")
        .setCheck(['array_property',"dynamic_array"]);
    this.setInputsInline(true);
    this.setOutput(true, 'array_property');
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dynamic_array'] = {
  init: function() {
    this.appendValueInput("dimension")
        .setCheck(["dynamic_array","array_property"])
        .appendField("dynamic dimension");
    this.setInputsInline(false);
    this.setOutput(true, "dynamic_array");
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['visibility'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["public","public"], ["private","private"], ["internal","internal"]]), "values_visibility");
    this.setOutput(true, 'visibility');
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['storagedata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["memory","memory"], ["storage","storage"]]), "values_storagedata");
    this.setOutput(true, 'storagedata');
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['inputmodifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["view","view"], ["pure","pure"], ["payable","payable"]]), "values_inputmodifier");
    this.setOutput(true, 'inputmodifier');
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assert_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("assert")
        .appendField(new Blockly.FieldTextInput("Insert here expression"), "value_parameter");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['type_byte'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["byte","byte"], ["bytes2","bytes2"], ["bytes3","bytes3"], ["bytes4","bytes4"], ["bytes5","bytes5"], ["bytes6","bytes6"], ["bytes7","bytes7"], ["bytes8","bytes8"], ["bytes9","bytes9"], ["bytes10","bytes10"], ["bytes11","bytes11"], ["bytes12","bytes12"], ["bytes13","bytes13"], ["bytes14","bytes14"], ["bytes15","bytes15"], ["bytes16","bytes16"], ["bytes17","bytes17"], ["bytes18","bytes18"], ["bytes20","bytes20"], ["bytes22","bytes22"], ["bytes24","bytes24"], ["bytes25","bytes25"], ["bytes25","bytes25"], ["bytes26","bytes26"], ["bytes28","bytes28"], ["bytes30","bytes30"], ["bytes32","bytes32"]]), "bytes_options");
    this.setOutput(true, "type_byte");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['type_uint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["uint","uint"], ["uint2","uint2"], ["uint4","uint4"], ["uint6","uint6"], ["uint8","uint8"], ["uint10","uint10"], ["uint12","uint12"], ["uint18","uint18"], ["uint20","uint20"], ["uint24","uint24"], ["uint28","uint28"], ["uint32","uint32"], ["uint40","uint40"], ["uint48","uint48"], ["uint56","uint56"], ["uint64","uint64"], ["uint72","uint72"], ["uint80","uint80"], ["uint88","uint88"], ["uint96","uint96"], ["uint100","uint100"], ["uint106","uint106"], ["uint112","uint112"], ["uint120","uint120"], ["uint132","uint132"], ["uint156","uint156"], ["uint164","uint164"], ["uint180","uint180"], ["uint200","uint200"], ["uint220","uint220"], ["uint232","uint232"], ["uint256","uint256"]]), "uint_options");
    this.setOutput(true, "type_uint");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['type_int'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["int","int"], ["int2","int2"], ["int4","int4"], ["int6","int6"], ["int8","int8"], ["int10","int10"], ["int12","int12"], ["int14","int14"], ["int20","int20"], ["int24","int24"], ["int28","int28"], ["int32","int32"], ["int40","int40"], ["int48","int48"], ["int56","int56"], ["int64","int64"], ["int72","int72"], ["int80","int80"], ["int88","int88"], ["int96","int96"], ["int100","int100"], ["int106","int106"], ["int112","int112"], ["int120","int120"], ["int124","int124"], ["int128","int128"], ["int132","int132"], ["int156","int156"], ["int164","int164"], ["int180","int180"], ["int186","int186"], ["int190","int190"], ["int200","int200"], ["int210","int210"], ["int214","int214"], ["int220","int220"], ["int224","int224"], ["int230","int230"], ["int232","int232"], ["int240","int240"], ["int246","int246"], ["int256","int256"]]), "int_options");
    this.setOutput(true, "type_int");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['type_address'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["address","address"], ["address payable","address_payable"]]), "address_options");
    this.setOutput(true, "type_address");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['type_bool'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("bool"), "bool_options");
    this.setOutput(true, "type_bool");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['type_float'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("float"), "float_options");
    this.setOutput(true, "type_float");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['type_identifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Insert here your defined type"), "identifier_options");
    this.setOutput(true, "type_identifier");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['type_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["char","char"], ["string","string"]]), "typetext_options");
    this.setInputsInline(true);
    this.setOutput(true, "type_text");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_user'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("user")
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("default"), "name_user")
        .appendField("surname")
        .appendField(new Blockly.FieldTextInput("default"), "surname_user")
        .appendField("address")
        .appendField(new Blockly.FieldTextInput("default"), "address_user")
        .appendField("email")
        .appendField(new Blockly.FieldTextInput("default"), "email_user");
    this.appendStatementInput("user_values")
        .setCheck(null)
        .appendField("Other user properties");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_company'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("company")
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("default"), "name_company")
        .appendField("city")
        .appendField(new Blockly.FieldTextInput("default"), "city_company")
        .appendField("address")
        .appendField(new Blockly.FieldTextInput("default"), "address_company")
        .appendField("email")
        .appendField(new Blockly.FieldTextInput("default"), "email_company");
    this.appendStatementInput("company_values")
        .setCheck(null)
        .appendField("Other company properties");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['type_mapping'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mapping");
    this.appendValueInput("key")
        .setCheck(["type_text","type_int","type_uint","type_float","type_bool","type_byte","type_identifier","type_address"]);
    this.appendDummyInput()
        .appendField("=>");
    this.appendValueInput("value")
        .setCheck(["type_text","type_int","type_uint","type_float","type_bool","type_byte","type_identifier"]);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['deleteexpression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("delete")
        .appendField(new Blockly.FieldTextInput("Insert here the expression"), "value_deleteexpression");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['revert_expression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("revert")
        .appendField(new Blockly.FieldTextInput("Insert here the expression"), "value_revertexpression");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");   
  }  
};


Blockly.Blocks['personalized_expression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Insert here your personalized expression"), "values_expression");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['personalized_inputexpression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Insert here your expression"), "values_expression");
    this.setOutput(true, "personalized_inputexpression");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['tuple'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tuple");
    this.appendValueInput("values")
        .setCheck(["block_text", "block_number","block_positivenumber","block_boolean","personalized_inputexpression"]);
    this.setInputsInline(true);
    this.setOutput(true, "tuple");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_ifcondition'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck(["parenthesis_expression","comparation_logicalexpression","comparation_arithmeticalexpression","comparation_expression","parenthesis_expression","block_negation","personalized_inputexpression","block_boolean"])
        .appendField("if");
    this.appendStatementInput("actionsif")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_elsecondition'] = {
  init: function() {
    this.appendStatementInput("actionselse")
        .setCheck(null)
        .appendField("else");
    this.setPreviousStatement(true, "block_ifcondition");
    this.setNextStatement(true, "");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_elseifcondition'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck(["parenthesis_expression","comparation_logicalexpression","comparation_arithmeticalexpression","parenthesis_expression","comparation_expression"])
        .appendField("else if");
    this.appendStatementInput("actionselseif")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_negation'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("!");
    this.setOutput(true, 'block_negation');
    this.setColour(0);
 this.setTooltip("Negation operator");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_new'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("personalized_inputexpression")
        .appendField("new");
    this.setOutput(true, "block_new");
    this.setColour(90);
 this.setTooltip("Negation operator");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("null");
    this.setOutput(true, "block_null");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['comparation_expression'] = {
  init: function() {
    this.appendValueInput("value1_expression")
        .setCheck(["block_boolean","block_text","block_number","block_null","msgvariables","blockvariables","tuple","time_expression","coin_expression","block_positivenumber","block_negation","parenthesis_expression","personalized_inputexpression","arithmetical_expression","keccak_inputfunction","sha_inputfunction","abyencode_function","block_now"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["==","=="], ["!=","!="]]), "operators");
    this.appendValueInput("value2_expression")
        .setCheck(["block_boolean","block_text","block_number","block_null","msgvariables","blockvariables","tuple","time_expression","coin_expression","block_positivenumber","block_negation","parenthesis_expression","personalized_inputexpression","arithmetical_expression","keccak_inputfunction","sha_inputfunction","abyencode_function","block_now"]);
    this.setInputsInline(true);
    this.setOutput(true, "comparation_expression");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['comparation_arithmeticalexpression'] = {
  init: function() {
    this.appendValueInput("value1_arithmeticalcomparationexpression","arithmetical_expression")
        .setCheck(["block_number","block_positivenumber","time_expression","coin_expression","parenthesis_expression","msgvariables","blockvariables","personalized_inputexpression","arithmetical_expression","keccak_inputfunction","sha_inputfunction","abyencode_function","block_now"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["<","<"], ["<=","<="], [">",">"], [">=",">="]]), "operators");
    this.appendValueInput("value2_arithmeticalcomparationexpression")
        .setCheck(["block_number","block_positivenumber","time_expression","coin_expression","parenthesis_expression","msgvariables","blockvariables","personalized_inputexpression","arithmetical_expression","keccak_inputfunction","sha_inputfunction","abyencode_function","block_now"]);
    this.setOutput(true, "comparation_arithmeticalexpression","arithmetical_expression");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['comparation_logicalexpression'] = {
  init: function() {
    this.appendValueInput("value1_logicalexpression")
        .setCheck(["comparation_expression","comparation_arithmeticalexpression"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["&&","&&"], ["||","||"]]), "operators");
    this.appendValueInput("value2_logicalexpression")
        .setCheck(["comparation_expression","comparation_arithmeticalexpression","arithmetical_expression"]);
    this.setInputsInline(true);
    this.setOutput(true, "comparation_logicalexpression");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blockvariables'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["block.difficulty","block.difficulty"], ["block.number","block.number"], ["block.timestamp","block.timestamp"], ["block.coinbase","block.coinbase"], ["block.gaslimit","block.gaslimit"], ["block.blockhash","block.blockhash"]]), "values_blockvariables");
    this.setOutput(true, "blockvariables");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['msgvariables'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["msg.sender","msg.sender"], ["msg.value","msg.value"], ["msg.balance","msg.balance"], ["msg.gas","msg.gas"], ["msg.data","msg.data"], ["msg.sig","msg.sig"]]), "msgvariables");
    this.setOutput(true, "msgvariables");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['txvariables'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["tx.origin","tx.origin"], ["tx.gasprice","tx.gasprice"]]), "values_txvariables");
    this.setOutput(true, "txvariables");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_this'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["this","this"], ["this.balance","this.balance"]]), "thisvalues");
    this.setOutput(true, "block_this");
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_thisexpression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("this.")
        .appendField(new Blockly.FieldTextInput("default"), "value");
    this.setOutput(true, "block_thisexpression");
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time_expression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, 0), "time_value")
        .appendField("time")
        .appendField(new Blockly.FieldDropdown([["years","years"], ["weeks","weeks"], ["days","days"], ["hours","hours"], ["minutes","minutes"], ["seconds","seconds"]]), "time_unity");
    this.setOutput(true, "time_expression");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"")
        .appendField(new Blockly.FieldTextInput("default"), "value")
        .appendField("\"");
    this.setOutput(true, "block_text");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "values");
    this.setOutput(true, "block_boolean");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "value");
    this.setOutput(true, "block_number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_now'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("now");
    this.setOutput(true, "block_now");
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_positivenumber'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("positive")
        .appendField(new Blockly.FieldNumber(0, 0), "value");
    this.setOutput(true, "block_positivenumber");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arithmetical_expression'] = {
  init: function() {
    this.appendValueInput("value1_arithmeticalexpression")
        .setCheck(["block_number","block_positivenumber","blockvariables","msgvariables","parenthesis_expression","personalized_inputexpression","block_now","time_expression","coin_expression"])
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["*","*"], ["/","/"], ["%","%"],["**","**"]]), "operators");
    this.appendValueInput("value2_arithmeticalexpression")
        .setCheck(["block_number","block_positivenumber","blockvariables","msgvariables","parenthesis_expression","personalized_inputexpression","block_now","time_expression","coin_expression"]);
    this.setOutput(true, "arithmetical_expression");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['parenthesis_expression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("value")
        .setCheck(["block_negation","comparation_expression","comparation_logicalexpression","arithmetical_expression","comparation_arithmeticalexpression"]);
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, "parenthesis_expression");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_for'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for")
        .appendField(new Blockly.FieldTextInput("Counter's name"), "namevariable")
        .appendField("=")
        .appendField(new Blockly.FieldNumber(0, 0), "value")
        .appendField(";")
        .appendField(new Blockly.FieldTextInput("counter"), "namevariable2")
        .appendField(new Blockly.FieldDropdown([["<","<"], ["<=","<="], [">",">"], [">=",">="]]), "operatorcomparation")
        .appendField(new Blockly.FieldTextInput("limit"), "limit")
        .appendField(";")
        .appendField(new Blockly.FieldTextInput("counter"), "namevariable3")
        .appendField(new Blockly.FieldDropdown([["++","++"], ["--","--"]]), "arithmeticaloperator");
    this.appendStatementInput("expressions_for")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_whileloop'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck(null)
        .appendField("while")
        .appendField("condition");
    this.appendStatementInput("elements_while")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_dowhile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("do");
    this.appendStatementInput("elements_dowhile")
        .setCheck(null);
    this.appendValueInput("condition")
        .setCheck(null)
        .appendField("while condition");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(335);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
