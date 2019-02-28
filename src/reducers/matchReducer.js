"use strict";
import { NEXT_SLIDE_CLICK, PREVIOUS_SLIDE_CLICK, Terms_Container_Click, Defs_Container_Click } from '../actions/matchActions';
const InitialState = {
    selectedTerm: null,
    selectedDef: null,
    currentslideindex: 0,
    usermatches: [],
    slides: [{
        terms: [{
            index: 0,
            text: "slide 1 SalesWay "
        }, {
            index: 1,
            text: "slide 1 Red Flags"
        }, {
            index: 2,
            text: "slide 1 Coach"
        }, {
            index: 3,
            text: "slide 1 Single Sales Objective"
        }, {
            index: 4,
            text: "slide 1 Opportunity Plan"
        }, {
            index: 5,
            text: "slide 1 Minimum Acceptable Action"
        },

        ],
        definitions: [{
            index: 0,
            text: "slide 1 SalesWay MSI Go-to-Customer Methodology"
        }, {
            index: 1,
            text: "slide 1 Indicate unknowns or uncertainties"
        }, {
            index: 2,
            text: "slide 1 Acts as a guide"
        }, {
            index: 3,
            text: "slide 1 Objective aligned to an opportunity"
        }, {
            index: 4,
            text: "slide 1 Strategic in nature"
        }, {
            index: 5,
            text: "slide 1 Your walk away point"
        },

        ],
        //this creates matches for indexes. This is a sort of an Answer Sheet
        pairs: {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
        }
    }, {
        terms: [{
            index: 0,
            text: "slide 2  SalesWay2"
        }, {
            index: 1,
            text: "slide 2  Red Flags"
        }, {
            index: 2,
            text: "slide 2  Coach"
        }, {
            index: 3,
            text: "slide 2  Single Sales Objective"
        }, {
            index: 4,
            text: "slide 2  Opportunity Plan"
        }, {
            index: 5,
            text: "slide 2  Minimum Acceptable Action"
        },

        ],
        definitions: [{
            index: 0,
            text: "slide 2  SalesWay MSI Go-to-Customer Methodology"
        }, {
            index: 1,
            text: "slide 2  Indicate unknowns or uncertainties"
        }, {
            index: 2,
            text: "slide 2  Acts as a guide"
        }, {
            index: 3,
            text: "slide 2  Objective aligned to an opportunity"
        }, {
            index: 4,
            text: "slide 2  Strategic in nature"
        }, {
            index: 5,
            text: "slide 2  Your walk away point"
        },

        ],
        //this creates matches for indexes. This is a sort of an Answer Sheet
        pairs: {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
        }
    }, {
        terms: [{
            index: 0,
            text: "slide 3   SalesWay3"
        }, {
            index: 1,
            text: "slide 3   Red Flags"
        }, {
            index: 2,
            text: "slide 3   Coach"
        }, {
            index: 3,
            text: "slide 3   Single Sales Objective"
        }, {
            index: 4,
            text: "slide 3   Opportunity Plan"
        }, {
            index: 5,
            text: "slide 3   Minimum Acceptable Action"
        },

        ],
        definitions: [{
            index: 0,
            text: "slide 3   SalesWay MSI Go-to-Customer Methodology"
        }, {
            index: 1,
            text: "slide 3   Indicate unknowns or uncertainties"
        }, {
            index: 2,
            text: "slide 3   Acts as a guide"
        }, {
            index: 3,
            text: "slide 3   Objective aligned to an opportunity"
        }, {
            index: 4,
            text: "slide 3   Strategic in nature"
        }, {
            index: 5,
            text: "slide 3   Your walk away point"
        },

        ],
        //this creates matches for indexes. This is a sort of an Answer Sheet
        pairs: {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
        }
    }]
};
export default function matchReducer(state = InitialState, action = {}) {
    switch (action.type) {
        case NEXT_SLIDE_CLICK:

            if (state.currentslideindex != (state.slides.length - 1)) {
                let newindex = state.currentslideindex + 1;
                nextorpreviousclick(state.slides[newindex], state);
                return { ...state, currentslideindex: newindex }
            }
            return state;
        case PREVIOUS_SLIDE_CLICK:
            if (state.currentslideindex != 0) {
                let newindex = state.currentslideindex - 1;
                nextorpreviousclick(state.slides[newindex], state);
                return { ...state, currentslideindex: newindex }
            }
            return state;
        case Terms_Container_Click:
            termscontainerclick(action.payload, state, state.slides[state.currentslideindex]);
            return state;
        case Defs_Container_Click:
            defsContainerclick(action.payload, state, state.slides[state.currentslideindex]);
            return state;
    }

    function defsContainerclick(e, state, data) {
        function isMatch(termIndex, defIndex) {
            return data.pairs[termIndex] === defIndex;
        }
        var termsContainer = document.querySelector("#terms"), //list of terms
            defsContainer = document.querySelector("#defs"); //list of definitions
        var target = e.target.parentNode;
        if (target.className === "score")
            return;
        var defIndex = Number(target.getAttribute("data-index"));

        if (state.selectedDef !== null && state.selectedDef !== defIndex) {
            defsContainer.querySelector("li[data-index='" + state.selectedDef + "']").removeAttribute("data-selected");
        }

        if (target.hasAttribute("data-selected"))
            target.removeAttribute("data-selected");
        else
            target.setAttribute("data-selected", true);
        state.selectedDef = Number(target.getAttribute("data-index"));
        if (state.selectedTerm !== null && state.selectedDef !== null) {
            //var term = document.querySelector("#terms [data-index='"+selectedTerm+"']");
            var term = termsContainer.querySelector("[data-index='" + state.selectedTerm + "']");
            //var def = document.querySelector("#defs [data-index='"+selectedDef+"']");
            var def = defsContainer.querySelector("[data-index='" + state.selectedTerm + "']");
            if (isMatch(state.selectedTerm, state.selectedDef)) {

                term.className = "score";
                def.className = "score";
            }
            state.selectedTerm = null; //odznacz kliknięcie
            state.selectedTerm = null; //odznacz kliknięcie  
            term.removeAttribute("data-selected");
            def.removeAttribute("data-selected");
        }
    }
    function termscontainerclick(e, state, data) {
        function isMatch(termIndex, defIndex) {
            return data.pairs[termIndex] === defIndex;
        }
        var termsContainer = document.querySelector("#terms"), //list of terms
            defsContainer = document.querySelector("#defs"); //list of definitions
        var target = e.target.parentNode;
        if (target.className === "score")
            return;
        var termIndex = Number(target.getAttribute("data-index"));
        //warunek na to, że tylko jedno LI może być zaznaczone  
        if (state.selectedTerm !== null && state.selectedTerm !== termIndex) {
            termsContainer.querySelector("li[data-index='" + state.selectedTerm + "']").removeAttribute("data-selected");
        }

        //kasowanie odznaczenia  
        if (target.hasAttribute("data-selected")) {
            target.removeAttribute("data-selected");
            state.selectedTerm = null;
        }
        //zaznaczanie na klikniecie    	
        else {
            target.setAttribute("data-selected", true);
            state.selectedTerm = termIndex;
        }

        if (state.selectedTerm !== null && state.selectedDef !== null) {
            var term = document.querySelector("#terms [data-index='" + state.selectedTerm + "']");
            var def = document.querySelector("#defs [data-index='" + state.selectedDef + "']");
            if (isMatch(state.selectedTerm, state.selectedDef)) {
                term.className = "score";
                def.className = "score";
            }

            state.selectedTerm = null;
            state.selectedDef = null;
            term.removeAttribute("data-selected");
            def.removeAttribute("data-selected");

        }
    }
    function nextorpreviousclick(data, state) {
        var
            termsContainer = document.querySelector("#terms"), //list of terms
            defsContainer = document.querySelector("#defs"); //list of definitions

        //This function takes two arguments, that is one term and one def to compare if they match. It returns True or False after compairing values of the "pairs" object property.     
        function isMatch(termIndex, defIndex) {
            return data.pairs[termIndex] === defIndex;
        }
        function reset(state) {
            var resetTerms = termsContainer.querySelectorAll("li");
            var resetDefs = defsContainer.querySelectorAll("li");
            for (var i = 0; i < resetTerms.length; i++) {
                resetTerms[i].removeAttribute("class", "score");
                resetTerms[i].removeAttribute("data-selected");
            }
            for (i = 0; i < resetDefs.length; i++) {
                resetDefs[i].removeAttribute("class", "score");
                resetDefs[i].removeAttribute("data-selected");
            }

            state.selectedTerm = null;
            state.selectedDef = null;
        }

        function shuffle() {
            randomSort(data.terms)
            randomSort(data.definitions)
            // createListHTML(data.terms, termsContainer)
            // createListHTML(data.definitions, defsContainer)
        }

        function randomSort(array) {
            var currentIndex = array.length,
                temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (currentIndex !== 0) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element. SWAP
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

        shuffle();

        reset(state);
        termsContainer.setAttribute("class", "fadeOut");
        defsContainer.setAttribute("class", "fadeOut");
        setTimeout(function () {
            shuffle();
            termsContainer.removeAttribute("class", "fadeOut");
            defsContainer.removeAttribute("class", "fadeOut");
        }, 450)
        //shuffle();



    }
    return state;
}