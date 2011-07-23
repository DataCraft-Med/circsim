/*globals CoreCircsim */

sc_require('models/procedure');

CoreCircsim.Procedure.FIXTURES = [

{
  // GUID Must be a unique string for each procedure!
  guid: '1',
  title: "Decrease Ra",
  isComplete: false,
  cols: ["DR", "RR", "SS"],
  rows: ["IS", "CVP", "SV", "HR", "CO", "Ra", "MAP"],
  answerKey: [[0, 1, 2, 0, 2, 1, 1], [], []],
  initialVariable: 5,
  initialVariableDirection: 1,
  errorKeys: [{
    col: 0, // Do I need this?
    key: [],
    errorMessage: 0
  }],
  errorMessages: ["Error message 1", "Error message 2"],
  relationshipKeys: [{
    equation: [4, 2, 3],
    errors: [[2, 1, 1], [2, 1, 0], [2, 0, 0], [2, 0, 1], [1, 2, 2], [1, 2, 0], [1, 0, 0], [1, 0, 2], [0, 2, 2], [0, 2, 0], [0, 1, 1], [0, 1, 0], [0, 0, 2], [0, 0, 1]],
    errorMessage: "Err message 1"
  },
  {
    equation: [6, 4, 5],
    errors: [[2, 1, 1], [2, 1, 0], [2, 0, 0], [2, 0, 1], [1, 2, 2], [1, 2, 0], [1, 0, 0], [1, 0, 2], [0, 2, 2], [0, 2, 0], [0, 1, 1], [0, 1, 0], [0, 0, 2], [0, 0, 1]],
    errorMessage: "Err message 2"
  }]

}

];
