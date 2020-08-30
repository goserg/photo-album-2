"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    current: 1,
    photos: [{
      id: 123,
      thumb: 'https://images.unsplash.com/photo-1506917847218-5725045a0731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
      big: 'https://images.unsplash.com/photo-1506917847218-5725045a0731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      comments: [{
        date: '21.03.2013',
        author: 'Иван',
        text: 'крутой поезд'
      }, {
        date: '23.03.2013',
        author: 'Мария',
        text: 'угу, неплохо'
      }]
    }, {
      id: 124,
      thumb: 'https://images.unsplash.com/photo-1542092444-5a371217797d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
      big: 'https://images.unsplash.com/photo-1542092444-5a371217797d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      comments: []
    }, {
      id: 125,
      thumb: 'https://images.unsplash.com/photo-1564319453909-c0ab34359309?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
      big: 'https://images.unsplash.com/photo-1564319453909-c0ab34359309?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      comments: [{
        date: '21.03.2013',
        author: 'Иван',
        text: 'крутой поезд'
      }]
    }, {
      id: 126,
      thumb: 'https://images.unsplash.com/photo-1484271201072-03bfd82a56f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
      big: 'https://images.unsplash.com/photo-1484271201072-03bfd82a56f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      comments: []
    }, {
      id: 127,
      thumb: 'https://images.unsplash.com/photo-1576745515893-3042060c8d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
      big: 'https://images.unsplash.com/photo-1576745515893-3042060c8d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      comments: []
    }, {
      id: 128,
      thumb: 'https://images.unsplash.com/photo-1545414687-4ab460a92371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
      big: 'https://images.unsplash.com/photo-1545414687-4ab460a92371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      comments: []
    }]
  },
  mutations: {
    setCurrent: function setCurrent(state, current) {
      state.current = current;
    },
    addNewComment: function addNewComment(state, newComment) {
      this.getters.getCurrentPhoto.comments.push({
        date: new Date(),
        author: newComment.author,
        text: newComment.comment
      });
    }
  },
  getters: {
    getCurrentPhoto: function getCurrentPhoto(state) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = state.photos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var photo = _step.value;

          if (photo.id === state.current) {
            return photo;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return state.photos[0];
    }
  },
  actions: {},
  modules: {}
});

exports["default"] = _default;