var app = app || {};

app.levels = {
    "basicshapes": {}
};

app.levels["basicshapes"].title = "Basic Shapes";

app.levels["basicshapes"].level1 = {
    answers : [
        [
            { attr: "border-radius", val: "50%;" },
            { attr: "border-radius", val: "75px;" },
            { attr: "background-color", val: "rgb(255, 0, 0);" },
            { attr: "background", val: "rgb(255, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;" }
        ]
    ],
    question: "Make a red circle",
    user: '<div class="user-circle" id="user-circle"></div>',
    css: '<div class="circle"></div>',
    code: [
        {
            cssSelector: "#user-circle",
            before: "#circle {<br/>  height: 150px;<br/>  width: 150px;<br/>  border: 5px solid black;",
            after: "}",
            rows: 2
        }
    ]
};

app.levels["basicshapes"].level2 = {
    answers : [
        [
            { attr: "border-bottom", val: "75px solid rgb(255, 0, 0);" }
        ]
    ],
    question: "Make a red triangle",
    user: '<div class="user-triangle" id="user-triangle"></div>',
    css: '<div class="triangle"></div>',
    code: [
        {
            cssSelector: "#user-triangle",
            before: "#triangle {<br/>  height: 0px;<br/>  width: 0px;<br/>  border: 75px solid transparent;",
            after: "}",
            rows: 1
        }
    ]
};