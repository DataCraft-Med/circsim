/*globals CoreCircsim */

sc_require('models/answer_key');

CoreCircsim.AnswerKey.FIXTURES = [

{
    guid: 0, 
    procedure: './design/procedures/Decrease Ra', 
    column: 0, 
    isCorrect: YES, 
    highlights: [0,3], 
    cells: [0, 3], 
    cellValues: [0, 0], 
    category: "Neural variables", 
    comment: "Right!  IS and HR are both controlled by the nervous system (theyre neural variables).  By definition, the DR interval occurs BEFORE any changes in neural firing occurs.  So, there are no changes to these two variables."
  },{
    guid: 1, 
    procedure: './design/procedures/Decrease Ra', 
    column: 0, 
    isCorrect: NO, 
    highlights: [0,3], 
    cells: [0], 
    cellValues: [3], 
    category: "Neural variables", 
    comment: "No, IS and HR are physiologically determined by neural inputs.  Since DR is the interval before there are any changing in the neural signals, there can be no change in IS"
  },{
    guid: 2, 
    procedure: './design/procedures/Decrease Ra', 
    column: 0, 
    isCorrect: NO, 
    highlights: [0,3], 
    cells: [3], 
    cellValues: [3], 
    category: "Neural variables", 
    comment: "No, IS and HR are physiologically determined by neural inputs.  Since DR is the interval before there are any changing in the neural signals, there can be no change in HR."
  },{
    guid: 3, 
    procedure: './design/procedures/Decrease Ra', 
    column: 0, 
    isCorrect: YES, 
    highlights: [5,6], 
    cells: [5, 6], 
    cellValues: [1, 1], 
    category: "MAP=COxRa", 
    comment: "Correct.  With Ra reduced to 50% of its normal value MAP must also fall."
  },{
    guid: 4, 
    procedure: './design/procedures/Decrease Ra', 
    column: 0, 
    isCorrect: NO, 
    highlights: [5,6], 
    cells: [6], 
    cellValues: [4], 
    category: "MAP=COxRa", 
    comment: "No, with Ra reduced to 50% of its normal value MAP also fall.  The relationship involved here is MAP = CO x TPR. Ra is the largest component of TPR and thus with TPR down and CO unchanged MAP must fall."
  },{
    guid: 5, 
    procedure: './design/procedures/Decrease Ra', 
    column: 0, 
    isCorrect: YES, 
    highlights: [2,6], 
    cells: [2, 6], 
    cellValues: [2, 1], 
    category: "SV=1/MAP (inverse; afterload)", 
    comment: "Right.  MAP is the pressure against which the left ventricle must eject blood.  MAP is the afterload on the heart.  The fall in MAP that occurs reduces the afterload and results in an (admittedly small) increase in SV."
  },{
    guid: 6, 
    procedure: './design/procedures/Decrease Ra', 
    column: 0, 
    isCorrect: NO, 
    highlights: [2,6], 
    cells: [2], 
    cellValues: [5], 
    category: "SV=1/MAP (inverse; afterload)", 
    comment: "No, MAP is the pressure against which the left ventricle must eject blood.  MAP is the afterload on the heart.  The fall in MAP that occurs reduces the afterload and results in an (admittedly small) increase in SV."
  },{
    guid: 7, 
    procedure: './design/procedures/Decrease Ra', 
    column: 0, 
    isCorrect: YES, 
    highlights: [2,4], 
    cells: [2, 4], 
    cellValues: [2, 2], 
    category: "CO=SVxHR", 
    comment: "OK, with SV increased and HR unchanged CO must increase.  Remember, CO = SV x HR."
  },{
    guid: 8, 
    procedure: './design/procedures/Decrease Ra', 
    column: 0, 
    isCorrect: NO, 
    highlights: [2,4], 
    cells: [4], 
    cellValues: [5], 
    category: "CO=SVxHR", 
    comment: "No, with SV increased and HR unchanged CO must increase.  Remember, CO = SV x HR."
  },{
    guid: 9, 
    procedure: './design/procedures/Decrease Ra', 
    column: 0, 
    isCorrect: YES, 
    highlights: [1,4], 
    cells: [1, 4], 
    cellValues: [1, 2], 
    category: "CVP=1/CO (inverse)", 
    comment: "Good.  With CO increased CVP will decrease (when CO changes first, the change in CVP that results in inversely related to the change in CO)."
  },{
    guid: 10, 
    procedure: './design/procedures/Decrease Ra', 
    column: 0, 
    isCorrect: NO, 
    highlights: [1,4], 
    cells: [1], 
    cellValues: [0], 
    category: "CVP=1/CO (inverse)", 
    comment: "No.  When CO increases there is reduction in central blood volume as the flow from the venous compartment to the arterial compartment increases.  As a consequence, the increase in CO causes a decrease in CVP."
  },{
    guid: 11, 
    procedure: './design/procedures/Decrease Ra', 
    column: 0, 
    isCorrect: NO, 
    highlights: [1,4], 
    cells: [1], 
    cellValues: [2], 
    category: "CVP=1/CO (inverse)", 
    comment: "No.  When CO increases there is reduction in central blood volume as the flow from the venous compartment to the arterial compartment increases.  As a consequence, the increase in CO causes a decrease in CVP. The relationship between CO and CVP is a complicated one because everything depends on which variable changes first.  Changes in CVP (pre-load) result in corresponding changes in CO.  However, when CO changes first it causes an inverse changes in CO."
  },{
    guid: 12, 
    procedure: './design/procedures/Decrease Ra', 
    column: 1, 
    isCorrect: YES, 
    highlights: [0,3,5], 
    cells: [0, 3, 5], 
    cellValues: [2, 2, 2], 
    category: "Neural variables", 
    comment: "Right, the fall in MAP initiates a baroreceptor reflex which increases the neurally controlled variables, IS, HR, and Ra."
  },{
    guid: 13, 
    procedure: './design/procedures/Decrease Ra', 
    column: 1, 
    isCorrect: NO, 
    highlights: [0,3,5], 
    cells: [0, 3, 5], 
    cellValues: [5, 5, 5], 
    category: "Neural variables", 
    comment: "No, the fall in MAP initiates a baroreceptor reflex which increases ALL of the neurally controlled variables, IS, HR, and Ra."
  },{
    guid: 14, 
    procedure: './design/procedures/Decrease Ra', 
    column: 1, 
    isCorrect: YES, 
    highlights: [4,5], 
    cells: [3, 4], 
    cellValues: [2, 2], 
    category: "HR to CO", 
    comment: "Correct.  The reflex increase in HR results in an increase in CO."
  },{
    guid: 15, 
    procedure: './design/procedures/Decrease Ra', 
    column: 1, 
    isCorrect: NO, 
    highlights: [4,5], 
    cells: [4], 
    cellValues: [5], 
    category: "HR to CO", 
    comment: "No, the reflex increase in HR causes an increase in CO."
  },{
    guid: 16, 
    procedure: './design/procedures/Decrease Ra', 
    column: 1, 
    isCorrect: YES, 
    highlights: [1,5], 
    cells: [1, 4], 
    cellValues: [1, 2], 
    category: "CO to CVP", 
    comment: "OK, the increase in CO causes CVP to decrease as more blood is transferred from the venous compartment to the arterial compartment."
  },{
    guid: 17, 
    procedure: './design/procedures/Decrease Ra', 
    column: 1, 
    isCorrect: NO, 
    highlights: [1,5], 
    cells: [1], 
    cellValues: [2], 
    category: "CO to CVP", 
    comment: "No, the increase in CO causes a decrease in CVP.  When CO changes first it causes an opposite change in CVP.  (When CVP changes first, when preload changes, it causes the same change in CO.)"
  },{
    guid: 18, 
    procedure: './design/procedures/Decrease Ra', 
    column: 1, 
    isCorrect: NO, 
    highlights: [1,5], 
    cells: [1], 
    cellValues: [0], 
    category: "CO to CVP", 
    comment: "No, one of the determinants of CVP is CO (the rate at which blood is pumped out of the venous compartment).  So when CO increases there is a decrease in CVP."
  },{
    guid: 19, 
    procedure: './design/procedures/Decrease Ra', 
    column: 1, 
    isCorrect: YES, 
    highlights: [1,2], 
    cells: [1, 2], 
    cellValues: [1, 1], 
    category: "CVP to SV", 
    comment: "Yes, with CVP decreased (that is to say, with preload down) there will be a decrease in SV.  Note that the reflex increase in IS that occurred keeps SV from falling proportionately as much as CVP fell."
  },{
    guid: 20, 
    procedure: './design/procedures/Decrease Ra', 
    column: 1, 
    isCorrect: NO, 
    highlights: [1,2], 
    cells: [2], 
    cellValues: [2], 
    category: "CVP to SV", 
    comment: "No.  CVP is the preload for the ventricles.  With CVP down the filling of the ventricles will bedown and hene SV must decrease."
  },{
    guid: 21, 
    procedure: './design/procedures/Decrease Ra', 
    column: 1, 
    isCorrect: NO, 
    highlights: [1,2], 
    cells: [2], 
    cellValues: [0], 
    category: "CVP to SV", 
    comment: "No.  The most important determinant of SV is the preload (CVP) and with CVP decreased there must be a decrease in SV"
  },{
    guid: 22, 
    procedure: './design/procedures/Decrease Ra', 
    column: 1, 
    isCorrect: YES, 
    highlights: [4,5,6], 
    cells: [4, 5, 6], 
    cellValues: [2, 2, 2], 
    category: "Determinants of MAP", 
    comment: "Right, the direction of change in MAP produced by the baroreceptor will counter the initial (DR) change in MAP.  Thus, in RR, MAP is increased. One can also reason that with CO increased and Ra increased that MAP must increase."
  },{
    guid: 23, 
    procedure: './design/procedures/Decrease Ra', 
    column: 1, 
    isCorrect: NO, 
    highlights: [4,5,6], 
    cells: [6], 
    cellValues: [1], 
    category: "Determinants of MAP", 
    comment: "No, the direction of change in MAP produced by the baroreceptor will counter the initial (DR) change in MAP.  Thus, in RR, MAP is increased."
  },{
    guid: 24, 
    procedure: './design/procedures/Decrease Ra', 
    column: 1, 
    isCorrect: NO, 
    highlights: [4,5,6], 
    cells: [6], 
    cellValues: [0], 
    category: "Determinants of MAP", 
    comment: "No, the direction of change in MAP produced by the baroreceptor will counter the initial (DR) change in MAP.  Thus, in RR, MAP is increased."
  },{
    guid: 25, 
    procedure: './design/procedures/Decrease Ra', 
    column: 2, 
    isCorrect: YES, 
    highlights: [6], 
    cells: [6], 
    cellValues: [1], 
    category: "MAP", 
    comment: "Right, the baroreceptor reflex does not fully compensate for the disturbance that was present.  Thus MAP is still less (decreased) from the control value."
  },{
    guid: 26, 
    procedure: './design/procedures/Decrease Ra', 
    column: 2, 
    isCorrect: NO, 
    highlights: [6], 
    cells: [6], 
    cellValues: [2], 
    category: "", 
    comment: "No, your prediction that MAP is increased would mean that the value of MAP is now greater than it was before the disturbance."
  },{
    guid: 27, 
    procedure: './design/procedures/Decrease Ra', 
    column: 2, 
    isCorrect: NO, 
    highlights: [6], 
    cells: [6], 
    cellValues: [0], 
    category: "", 
    comment: "No, your prediction that MAP is unchanged would mean that the baroreceptor reflex fully compensated for the disturbance and that MAP is now the same as it was in the control state.  However, the baroreceptor reflex can only partially compensate for the disturbance and thus MAP in the new steady state is still decreased."
  },{
    guid: 28, 
    procedure: './design/procedures/Decrease Ra', 
    column: 2, 
    isCorrect: YES, 
    highlights: [0,3,5], 
    cells: [0, 3, 5], 
    cellValues: [2, 2, 1], 
    category: "Neural variables", 
    comment: "Correct, the neurally controlled variables, IS and HR, are increased by the baroreceptor reflex to help restore MAP.  Ra is still decreased from the controlled value since the reflex can not fully overcome the action of the drug that was administered."
  },{
    guid: 29, 
    procedure: './design/procedures/Decrease Ra', 
    column: 2, 
    isCorrect: NO, 
    highlights: [0,3,5], 
    cells: [5], 
    cellValues: [2], 
    category: "", 
    comment: "Not quite correct.  The neurally controlled variables, IS and HR, are increased by the baroreceptor reflex to help restore MAP.  However, Ra is still decreased from its controlled value since the reflex can not fully overcome the action of the drug that was administered."
  },{
    guid: 30, 
    procedure: './design/procedures/Decrease Ra', 
    column: 2, 
    isCorrect: NO, 
    highlights: [0,3,5], 
    cells: [0, 3, 5], 
    cellValues: [5, 5, 0], 
    category: "", 
    comment: "No.The neurally controlled variables, IS and HR, are increased by the baroreceptor reflex to help restore MAP.  However, Ra is still decreased from its controlled value since the reflex can not fully overcome the action of the drug that was administered."
  },{
    guid: 31, 
    procedure: './design/procedures/Decrease Ra', 
    column: 2, 
    isCorrect: YES, 
    highlights: [3,4], 
    cells: [3, 4], 
    cellValues: [2, 2], 
    category: "HR CO", 
    comment: "Correct, the increased HR (driven by the reflex) results in increased CO."
  },{
    guid: 32, 
    procedure: './design/procedures/Decrease Ra', 
    column: 2, 
    isCorrect: NO, 
    highlights: [3,4], 
    cells: [4], 
    cellValues: [5], 
    category: "", 
    comment: "No, the increased HR (driven by the reflex) results in increased CO."
  },{
    guid: 33, 
    procedure: './design/procedures/Decrease Ra', 
    column: 2, 
    isCorrect: YES, 
    highlights: [1,4], 
    cells: [1, 4], 
    cellValues: [1, 2], 
    category: "CO CVP", 
    comment: "Right, with CO increased there is a corresponding decrease in CVP."
  },{
    guid: 34, 
    procedure: './design/procedures/Decrease Ra', 
    column: 2, 
    isCorrect: NO, 
    highlights: [1,4], 
    cells: [1], 
    cellValues: [4], 
    category: "", 
    comment: "No, with CO increased there is a corresponding decrease in CVP."
  },{
    guid: 35, 
    procedure: './design/procedures/Decrease Ra', 
    column: 2, 
    isCorrect: YES, 
    highlights: [2], 
    cells: [2], 
    cellValues: [1], 
    category: "SV", 
    comment: "Right, SV is down because the effect of the decrease in CVP is greater than the effect of the increase in IS. Alternatively, we can argue that SV is down because the increase in DR due to the decrease in afterload is quantitatively very small while the decrease in SV in RR due to the decrease in CSP is much larger.  Thus, in this instance the SS response follows (is in the same direction) as the RR response."
  },{
    guid: 36, 
    procedure: './design/procedures/Decrease Ra', 
    column: 2, 
    isCorrect: NO, 
    highlights: [2], 
    cells: [2], 
    cellValues: [4], 
    category: "", 
    comment: "No, SV is down because the effect of the decrease in CVP is greater than the effect of the increase in IS. Alternatively, we can argue that SV is down because the increase in DR due to the decrease in afterload is quantitatively very small while the decrease in SV in RR due to the decrease in CSP is much larger.  Thus, in this instance the SS response follows (is in the same direction) as the RR response."
  },{
    guid: 37, 
    procedure: './design/procedures/Increase Rv', 
    column: 0, 
    isCorrect: YES, 
    highlights: [1,2], 
    cells: [1, 2], 
    cellValues: [1, 1], 
    category: "CVP to SV", 
    comment: "Right, with CVP decreased, SV will be decreased (preload is down)."
  },{
    guid: 38, 
    procedure: './design/procedures/Increase Rv', 
    column: 0, 
    isCorrect: NO, 
    highlights: [1,2], 
    cells: [2], 
    cellValues: [2], 
    category: "CVP to SV", 
    comment: "No, when CVP is decreased (preload is decreased) then SV must decrease."
  },{
    guid: 39, 
    procedure: './design/procedures/Increase Rv', 
    column: 0, 
    isCorrect: NO, 
    highlights: [1,2], 
    cells: [2], 
    cellValues: [0], 
    category: "CVP to SV", 
    comment: "No, when CVP is decreased (preload is decreased) then SV must decrease.  Preload is the most potent determinant of SV."
  },{
    guid: 40, 
    procedure: './design/procedures/Increase Rv', 
    column: 0, 
    isCorrect: YES, 
    highlights: [2,4], 
    cells: [2, 4], 
    cellValues: [1, 1], 
    category: "SV to CO", 
    comment: "Good, with SV down (and HR unchanged) CO must be decreased since we know that:                                         CO =SV x HR."
  },{
    guid: 41, 
    procedure: './design/procedures/Increase Rv', 
    column: 0, 
    isCorrect: NO, 
    highlights: [2,4], 
    cells: [4], 
    cellValues: [4], 
    category: "SV to CO", 
    comment: "No, with SV down (and HR unchanged) CO must be decreased since we know that:                                         CO =SV x HR."
  },{
    guid: 42, 
    procedure: './design/procedures/Increase Rv', 
    column: 0, 
    isCorrect: YES, 
    highlights: [4,6], 
    cells: [4, 6], 
    cellValues: [1, 1], 
    category: "CO to MAP", 
    comment: "Right, with CO decreased and Ra unchanged there must be a decrease in MAP since we know that                                        MAP = CO x TPR."
  },{
    guid: 43, 
    procedure: './design/procedures/Increase Rv', 
    column: 0, 
    isCorrect: NO, 
    highlights: [4,6], 
    cells: [6], 
    cellValues: [4], 
    category: "CO to MAP", 
    comment: "No, with CO decreased and Ra unchanged there must be a decrease in MAP since we know that                                        MAP = CO x TPR."
  },{
    guid: 44, 
    procedure: './design/procedures/Increase Rv', 
    column: 0, 
    isCorrect: YES, 
    highlights: [0,3,5], 
    cells: [0, 3, 5], 
    cellValues: [0, 0, 0], 
    category: "Neural variables", 
    comment: "Good.  IS, HR, and Ra are all determined by their neural inputs.  In the DR phase these inputs are unchanged."
  },{
    guid: 45, 
    procedure: './design/procedures/Increase Rv', 
    column: 0, 
    isCorrect: NO, 
    highlights: [0,3,5], 
    cells: [0, 3, 5], 
    cellValues: [3, 3, 3], 
    category: "Neural variables", 
    comment: "No, IS, HR, and Ra are ALL variables that are determined by their neural inputs.  Since in the DR phase these inputs are unchanged all three must be 0."
  },{
    guid: 46, 
    procedure: './design/procedures/Increase Rv', 
    column: 1, 
    isCorrect: YES, 
    highlights: [0,3,5], 
    cells: [0, 3, 5], 
    cellValues: [2, 2, 2], 
    category: "Neural variables", 
    comment: "Correct.  Since the response of the system to the disturbance (the increase in Rv) was a fall in MAP, the response of the baroreceptor reflex will be to increase all the neural variables to restore MAP."
  },{
    guid: 47, 
    procedure: './design/procedures/Increase Rv', 
    column: 1, 
    isCorrect: NO, 
    highlights: [0,3,5], 
    cells: [0, 3, 5], 
    cellValues: [5, 5, 5], 
    category: "Neural variables", 
    comment: "No Comment."
  },{
    guid: 48, 
    procedure: './design/procedures/Increase Rv', 
    column: 1, 
    isCorrect: YES, 
    highlights: [3,4], 
    cells: [3, 4], 
    cellValues: [2, 2], 
    category: "HR to CO", 
    comment: "Right, the reflex increase in HR results in an increase in CO."
  },{
    guid: 49, 
    procedure: './design/procedures/Increase Rv', 
    column: 1, 
    isCorrect: NO, 
    highlights: [3,4], 
    cells: [4], 
    cellValues: [5], 
    category: "HR to CO", 
    comment: "No,  the reflex increase in HR results in an increase in CO."
  },{
    guid: 50, 
    procedure: './design/procedures/Increase Rv', 
    column: 1, 
    isCorrect: YES, 
    highlights: [1,4], 
    cells: [1, 4], 
    cellValues: [1, 2], 
    category: "CO to CVP", 
    comment: "Right, with CO reflexly increased there will be a decrease oin CVP as there will be a translocation of blood from the central venous compartment to the arterial compartment."
  },{
    guid: 51, 
    procedure: './design/procedures/Increase Rv', 
    column: 1, 
    isCorrect: NO, 
    highlights: [1,4], 
    cells: [1], 
    cellValues: [2], 
    category: "CO to CVP", 
    comment: "No, when CO increases it causes CVP to decrease.  (Keep in mind that when CVP increases first, it causes CO to increase.)"
  },{
    guid: 52, 
    procedure: './design/procedures/Increase Rv', 
    column: 1, 
    isCorrect: NO, 
    highlights: [1,4], 
    cells: [1], 
    cellValues: [0], 
    category: "CO to CVP", 
    comment: "No.  CO and CVP are related to one another.  When CO increases, as is the case here, it causes CVP to decrease.  When CVP increases first, this change causes CO to increase."
  },{
    guid: 53, 
    procedure: './design/procedures/Increase Rv', 
    column: 1, 
    isCorrect: YES, 
    highlights: [1,2], 
    cells: [1, 2], 
    cellValues: [1, 1], 
    category: "CVP to SV", 
    comment: "Right, with CVP decreased SV will decrease.  CVP, the afterload for the ventricles, is the most potent determinant of SV."
  },{
    guid: 54, 
    procedure: './design/procedures/Increase Rv', 
    column: 1, 
    isCorrect: NO, 
    highlights: [1,2], 
    cells: [2], 
    cellValues: [2], 
    category: "CVP to SV", 
    comment: "No, CVP is the most potent determinant of SV.  With CVP decreased there must be a decrease in SV."
  },{
    guid: 55, 
    procedure: './design/procedures/Increase Rv', 
    column: 1, 
    isCorrect: NO, 
    highlights: [1,2], 
    cells: [2], 
    cellValues: [0], 
    category: "CVP to SV", 
    comment: "No, changes in CVP must be reflected by changes in SV.  With CVP decreased there must be a decrease in SV."
  },{
    guid: 56, 
    procedure: './design/procedures/Increase Rv', 
    column: 1, 
    isCorrect: YES, 
    highlights: [4,5,6], 
    cells: [4, 5, 6], 
    cellValues: [2, 2, 2], 
    category: "MAP", 
    comment: "Right, with CO and Ra both increased there must be an increase in MAP since:                          MAP = CO x Ra.  In addition, we know that the fall in MAP as a consequence of the disturbance will trigger a baroreceptor reflex and that will reflexly raise MAP."
  },{
    guid: 57, 
    procedure: './design/procedures/Increase Rv', 
    column: 1, 
    isCorrect: NO, 
    highlights: [4,5,6], 
    cells: [6], 
    cellValues: [1], 
    category: "MAP", 
    comment: "No, both CO and Ra are up and this must cause an increase in MAP (relative to its value as a result of the DR response).  This is the goal of the baroreceptor reflex."
  },{
    guid: 58, 
    procedure: './design/procedures/Increase Rv', 
    column: 1, 
    isCorrect: NO, 
    highlights: [4,5,6], 
    cells: [6], 
    cellValues: [0], 
    category: "MAP", 
    comment: "No, MAP must increase because both CO and Ra increased.  Furthermore, you know that the response to a fall in MAP (as occurred in DR) will stimulated a baroreceptor reflex to increase MAP."
  },{
    guid: 59, 
    procedure: './design/procedures/Increase Rv', 
    column: 2, 
    isCorrect: YES, 
    highlights: [6], 
    cells: [6], 
    cellValues: [1], 
    category: "MAP", 
    comment: "Right, the baroreceptor reflex has partially compensated for the fall in MAP that occurred.  But, MAP has gone back to its pre-disturbance valye."
  },{
    guid: 60, 
    procedure: './design/procedures/Increase Rv', 
    column: 2, 
    isCorrect: NO, 
    highlights: [6], 
    cells: [6], 
    cellValues: [2], 
    category: "MAP", 
    comment: "No!  Your prediction that MAP is increased would mean that its value is HIGHER than it was before the disturbance.  The baroreceptor reflex only partially conpensates for the disturbance and hence MAP is still decreased (although not as much)."
  },{
    guid: 61, 
    procedure: './design/procedures/Increase Rv', 
    column: 2, 
    isCorrect: NO, 
    highlights: [6], 
    cells: [6], 
    cellValues: [0], 
    category: "MAP", 
    comment: "No, your prediction that MAP is unchanged would mean that the baroreceptor reflex fully compensated for the disturbance and that MAP is now the same as it was in the control state.  However, the baroreceptor reflex can only partially compensate for the disturbance and thus MAP in the new steady state is still decreased."
  },{
    guid: 62, 
    procedure: './design/procedures/Increase Rv', 
    column: 2, 
    isCorrect: YES, 
    highlights: [0,3,5], 
    cells: [0, 3, 5], 
    cellValues: [2, 2, 2], 
    category: "Neural variables", 
    comment: "Correct, the neurally controlled variables, IS, HR, and Ra are increased by the baroreceptor reflex to help restore MAP.  "
  },{
    guid: 63, 
    procedure: './design/procedures/Increase Rv', 
    column: 2, 
    isCorrect: NO, 
    highlights: [0,3,5], 
    cells: [0, 3, 5], 
    cellValues: [5, 5, 5], 
    category: "Neural variables", 
    comment: "No, all three of the neurally controlled variables, IS, HR, and Ra are increased by the baroreceptor reflex to help restore MAP towards its pre-disturbance value."
  },{
    guid: 64, 
    procedure: './design/procedures/Increase Rv', 
    column: 2, 
    isCorrect: YES, 
    highlights: [3,4], 
    cells: [3, 4], 
    cellValues: [2, 2], 
    category: "HR CO", 
    comment: "Right, the increased HR (driven by the baroreceptor reflex) results in an increase in CO."
  },{
    guid: 65, 
    procedure: './design/procedures/Increase Rv', 
    column: 2, 
    isCorrect: NO, 
    highlights: [3,4], 
    cells: [4], 
    cellValues: [5], 
    category: "HR CO", 
    comment: "No, the increase in HR produced by the baroreceptor reflex causes an increase in CO."
  },{
    guid: 66, 
    procedure: './design/procedures/Increase Rv', 
    column: 2, 
    isCorrect: YES, 
    highlights: [1,4], 
    cells: [1, 4], 
    cellValues: [1, 2], 
    category: "CO CVP", 
    comment: "Right, with CO increased there is a corresponding decrease in CVP."
  },{
    guid: 67, 
    procedure: './design/procedures/Increase Rv', 
    column: 2, 
    isCorrect: NO, 
    highlights: [1,4], 
    cells: [1], 
    cellValues: [4], 
    category: "CO CVP", 
    comment: "No, with CO increased there is a corresponding decrease in CVP."
  },{
    guid: 68, 
    procedure: './design/procedures/Increase Rv', 
    column: 2, 
    isCorrect: YES, 
    highlights: [1,2], 
    cells: [1, 2], 
    cellValues: [1, 1], 
    category: "CVP SV", 
    comment: "Correct.  With CVP down (ie, pre-load is reduced) SV will decrease.  Note, however, that the reflex increase in IS buffers the fall in SV, keeping it from getting so large that CO cannot increase."
  },{
    guid: 69, 
    procedure: './design/procedures/Increase Rv', 
    column: 2, 
    isCorrect: NO, 
    highlights: [1,2], 
    cells: [2], 
    cellValues: [4], 
    category: "CVP SV", 
    comment: "No.  With CVP down (ie, pre-load is reduced) SV will decrease.  Note, however, that the reflex increase in IS buffers the fall in SV, keeping it from getting so large that CO cannot increase."
  }];