"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Answer = _interopRequireDefault(require("./Answer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Question =
/*#__PURE__*/
function (_Component) {
  _inherits(Question, _Component);

  function Question(props) {
    var _this;

    _classCallCheck(this, Question);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Question).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkAnswer", function (index, correctAnswer) {
      var _this$state = _this.state,
          correct = _this$state.correct,
          incorrect = _this$state.incorrect,
          currentQuestionIndex = _this$state.currentQuestionIndex;

      if (index == correctAnswer) {
        if (incorrect.indexOf(currentQuestionIndex) < 0 && correct.indexOf(currentQuestionIndex) < 0) {
          correct.push(currentQuestionIndex);
        }

        _this.setState({
          correctAnswer: true,
          incorrectAnswer: false,
          showNextQuestionButton: true,
          correct: correct
        });

        var disabledAll = {
          0: {
            disabled: true
          },
          1: {
            disabled: true
          },
          2: {
            disabled: true
          },
          3: {
            disabled: true
          }
        };

        _this.setState(function (prevState) {
          var buttons = Object.assign({}, prevState.buttons, _objectSpread({}, disabledAll, _defineProperty({}, index - 1, {
            className: index == correctAnswer ? "correct" : ""
          })));
          return {
            buttons: buttons
          };
        });
      } else {
        if (correct.indexOf(currentQuestionIndex) < 0 && incorrect.indexOf(currentQuestionIndex) < 0) {
          incorrect.push(currentQuestionIndex);
        }

        _this.setState({
          incorrectAnswer: true,
          correctAnswer: false,
          incorrect: incorrect
        });

        _this.setState(function (prevState) {
          var buttons = Object.assign({}, prevState.buttons, _defineProperty({}, index - 1, {
            disabled: !prevState.buttons[index - 1]
          }));
          return {
            buttons: buttons
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextQuestion", function (currentQuestionIndex) {
      var questions = _this.props.questions;
      var initState = {
        incorrectAnswer: false,
        correctAnswer: false,
        showNextQuestionButton: false,
        buttons: {}
      };

      if (currentQuestionIndex + 1 == questions.length) {
        _this.setState(_objectSpread({}, initState, {
          endQuiz: true
        }));
      } else {
        _this.setState(_objectSpread({}, initState, {
          currentQuestionIndex: currentQuestionIndex + 1
        }));
      }
    });

    _this.state = {
      incorrectAnswer: false,
      correctAnswer: false,
      showNextQuestionButton: false,
      endQuiz: false,
      currentQuestionIndex: 0,
      buttons: {},
      buttonClasses: {},
      correct: [],
      incorrect: []
    };
    return _this;
  }

  _createClass(Question, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var questions = this.props.questions;
      var question = questions[this.state.currentQuestionIndex];
      return _react.default.createElement("div", {
        className: "questionWrapper"
      }, !this.state.endQuiz && _react.default.createElement("div", {
        className: "questionWrapperBody"
      }, _react.default.createElement("div", {
        className: "questionModal"
      }, this.state.incorrectAnswer && _react.default.createElement("div", {
        className: "alert incorrect"
      }, "Incorrect answer. Please try again."), this.state.correctAnswer && _react.default.createElement("div", {
        className: "alert correct"
      }, "You are correct. Please click Next to continue.")), _react.default.createElement("div", null, "Question ", this.state.currentQuestionIndex + 1, ":"), _react.default.createElement("h3", null, question.question), question.answers.map(function (answer, index) {
        if (_this2.state.buttons[index] != undefined) {
          return _react.default.createElement("button", {
            key: index,
            disabled: _this2.state.buttons[index].disabled || false,
            className: "".concat(_this2.state.buttons[index].className, " answerBtn btn"),
            onClick: function onClick() {
              return _this2.checkAnswer(index + 1, question.correctAnswer);
            }
          }, question.questionType == 'text' && _react.default.createElement("span", null, answer), question.questionType == 'photo' && _react.default.createElement("img", {
            src: answer
          }));
        } else {
          return _react.default.createElement("button", {
            key: index,
            onClick: function onClick() {
              return _this2.checkAnswer(index + 1, question.correctAnswer);
            },
            className: "answerBtn btn"
          }, question.questionType == 'text' && answer, question.questionType == 'photo' && _react.default.createElement("img", {
            src: answer
          }));
        }
      }), this.state.showNextQuestionButton && _react.default.createElement("div", null, _react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.nextQuestion(_this2.state.currentQuestionIndex);
        },
        className: "nextQuestionBtn btn"
      }, "Next"))), this.state.endQuiz && _react.default.createElement("div", {
        className: "card-body"
      }, _react.default.createElement("h2", null, "You have completed the quiz. You got ", this.state.correct.length, " out of ", questions.length, " questions. ", _react.default.createElement("br", null)), this.state.correct.length > 0 && _react.default.createElement("div", null, this.state.correct.map(function (questionIdx, index) {
        var question = questions[questionIdx];
        return _react.default.createElement("div", {
          key: index
        }, _react.default.createElement("h3", null, "Q", questionIdx + 1, ": ", questions[questionIdx].question), _react.default.createElement("button", {
          disabled: true,
          className: "answerBtn btn"
        }, question.questionType == 'text' && _react.default.createElement("span", null, question.answers[question.correctAnswer - 1]), question.questionType == 'photo' && _react.default.createElement("img", {
          src: question.answers[question.correctAnswer - 1]
        })));
      })), this.state.incorrect.length > 0 && _react.default.createElement("div", null, _react.default.createElement("h2", null, "You may need to revise on the following question(s):"), this.state.incorrect.map(function (questionIdx, index) {
        var question = questions[questionIdx];
        return _react.default.createElement("div", {
          key: index
        }, _react.default.createElement("h3", null, "Q", questionIdx + 1, ": ", questions[questionIdx].question), _react.default.createElement("button", {
          disabled: true,
          className: "answerBtn btn"
        }, question.questionType == 'text' && _react.default.createElement("span", null, question.answers[question.correctAnswer - 1]), question.questionType == 'photo' && _react.default.createElement("img", {
          src: question.answers[question.correctAnswer - 1]
        })));
      }))));
    }
  }]);

  return Question;
}(_react.Component);

Question.propTypes = {
  questions: _propTypes.default.array
};
var _default = Question;
exports.default = _default;