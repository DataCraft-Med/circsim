/*globals Circsim*/

sc_require("views/procedure_messages");
sc_require("views/pv");
sc_require("views/row_view");
sc_require("views/select_view");
sc_require("lib/grid_patch");

Circsim.contentViews.procedureView = SC.View.design({
  layerId: 'procedure',
  layout: { left: 0, top: 0, right: 0, bottom: 0, minWidth: 800},
  childViews: "procedureTitle procedureToolbar procedureContent".w(),
  procedureTitle: SC.LabelView.design({
    layout: {top: 0, right: 10, left: 10, height: 20, centerY: 0},
    tagName: "h1",
    layerId: "procedure-title",
    valueBinding: "Circsim.procedureController.title"
  }),
  
  procedureToolbar: SC.View.design({
    layout: {top: 40, right: 10, left: 10, height: 40},
    tagName: "div",
    layerId: "procedure-toolbar",
    backgroundColor: "#777",
    childViews: "nextButton".w(),
    nextButton: SC.ButtonView.design({
      layout: {centerY: -5, right: 10, width: 100, height: 20},
      tagName: "div",
      layerId: "next-button",
      backgroundColor: "#EBEBEB",
      title: "Next",
      target: "Circsim.statechart",
      action: "next"      
    })
  }),
  
  procedureContent: SC.View.design({
    layout: {top: 80, right: 10, left: 10, bottom: 0},
    tagName: "div",
    layerId: "procedure-content",
    childViews: "pvView predictionTableView messagesView".w(),
    pvView: SC.View.design({
      layout: {top: 0, left: 0, height: 50, width: 480},
      tagName: "div",
      layerId: "pv-view",
      backgroundColor: "#999",
      childViews: "pvLabel pvSelection".w(),
        
        pvLabel: SC.LabelView.design({
          layout: {top: 15, width: 150, height: 20, left: 20},
          value: "Select the primary variable:"
        }),
        
        pvSelection: SC.SelectFieldView.design({          
          layout: {top: 15, width: 250, height: 20, right: 50},
          valueBinding: "Circsim.pvSelectionController.content",
          objectsBinding: "Circsim.procedureController.rows",
          disableSort: true,
          emptyName: "Primary Variable"
        })
    }),
    
    predictionTableView: SC.View.design({
      layout: {top: 50, left: 0, bottom: 0, width: 470},
      tagName: "div",
      layerId: "prediction-table-view",
      backgroundColor: "white",
      childViews: "gridView headerView rowTitleView".w(),
      
      headerView: Circsim.GridHeaderView.design({
        layout: {right: 0, left: 90, top: 0, height: 50 }
      }),
      
      rowTitleView: Circsim.RowView.design({
        layout: {left: 0, width: 90, top: 50, bottom: 0}
      }),
      
      gridView: SC.GridView.design({
        layout: {right: 0, top: 50, left: 90},
        insertionOrientation: SC.VERTICAL_ORIENTATION,
        columnWidth:120,
        rowHeight: 50,
        contentBinding: "Circsim.cellsController.allCells",           
        target: "Circsim.statechart",
        action: "clickedOnCell",
        actOnSelect: YES,
        exampleView: Circsim.CellView.design({          
          classNames: "cell"
        })
      })
    }),
    
    messagesView: SC.View.design({
      layout: {top: 0, left: 480, bottom: 0, right: 0},
      childViews: "messageTitle messageBody".w(),
      tagName: "div",
      layerId: "messages-view",
      backgroundColor: "#FBFBFB",
    
      messageTitle: SC.LabelView.design({        
        layout: {top: 10, left: 20, height: 20, right: 20},
        valueBinding: "Circsim.messageController.title",
        layerId: 'messages-title',
        backgroundColorBinding: 'Circsim.messageController.titleColor'
      }),
      
      messageBody: SC.LabelView.design({
        layout: {top: 40, left: 20, bottom: 0, right: 20},
        valueBinding: "Circsim.messageController.content",
        layerId: 'messages-body',
        backgroundColorBinding: 'Circsim.messageController.color'
        
      })
    })
  })
  
    
});
