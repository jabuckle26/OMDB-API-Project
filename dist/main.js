!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n="james",r=function(){var e=document.querySelectorAll(".film");Array.from(e).forEach((function(e){e.remove()}))},o=function(){var e=document.getElementById("searchBox"),t=e.value;e.value="",n=t,u()},u=function(){fetch("http://www.omdbapi.com/?s="+n+"&apikey=70b6f337").then((function(e){return e.json()})).then((function(e){return function(e){r();var t=document.getElementsByTagName("ul")[0];Array.from(e.Search).forEach((function(e){var n=document.createElement("li");n.classList.add("film");var r=document.createElement("img"),o=document.createElement("h4");o.innerHTML=e.Title,r.src=e.Poster,n.append(r),n.append(o),t.append(n)}))}(e)})).catch((function(e){throw new Error(e)}))};document.getElementById("searchButton").addEventListener("click",o),document.getElementById("searchBox").addEventListener("keyup",(function(e){"Enter"===e.code&&o()})),u()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4udHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJzZWFyY2giLCJjbGVhckhUTUxMSVNUIiwibGlzdEl0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImxpc3RJdGVtIiwicmVtb3ZlIiwic2VhcmNoRmlsbXMiLCJib3hWYWx1ZSIsImdldEVsZW1lbnRCeUlkIiwidXNlclNlYXJjaCIsImdldEFQSURhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIlNlYXJjaCIsImZpbG0iLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbWciLCJ0eHQiLCJpbm5lckhUTUwiLCJzcmMiLCJhcHBlbmQiLCJidWlsZExpc3QiLCJjYXRjaCIsImVycm9yIiwiRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJjb2RlIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9yQixFQUFvQlUsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnpCLEVBQW9CNkIsRUFBSSxTQUFTMUIsR0FDaEMsSUFBSVMsRUFBU1QsR0FBVUEsRUFBT3FCLFdBQzdCLFdBQXdCLE9BQU9yQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSCxFQUFvQlUsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlosRUFBb0JhLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHL0IsRUFBb0JrQyxFQUFJLEdBSWpCbEMsRUFBb0JBLEVBQW9CbUMsRUFBSSxHLGdCQ2hGckQsSUFBSUMsRUFBUyxRQW1CUEMsRUFBZ0IsV0FDbEIsSUFBTUMsRUFBc0JDLFNBQVNDLGlCQUFpQixTQUN0REMsTUFBTUMsS0FBS0osR0FBV0ssU0FBUSxTQUFDQyxHQUMzQkEsRUFBU0MsYUFJWEMsRUFBYyxXQUVoQixJQUFNQyxFQUFXUixTQUFTUyxlQUFlLGFBQ25DQyxFQUFhRixFQUFTMUIsTUFDNUIwQixFQUFTMUIsTUFBUyxHQUNsQmUsRUFBU2EsRUFDVEMsS0FJRUEsRUFBYSxXQUNuQkMsTUFBTSw2QkFBNkJmLEVBQU0sb0JBQ3hDZ0IsTUFBSyxTQUFDQyxHQUVILE9BRG9CQSxFQUFTQyxVQUdoQ0YsTUFBSyxTQUFDRyxHQUFVLE9BeENDLFNBQUNBLEdBQ2ZsQixJQUNBLElBQU1tQixFQUFLakIsU0FBU2tCLHFCQUFxQixNQUFNLEdBQy9DaEIsTUFBTUMsS0FBS2EsRUFBS0csUUFBUWYsU0FBUSxTQUFDZ0IsR0FDN0IsSUFBTUMsRUFBS3JCLFNBQVNzQixjQUFjLE1BQ2xDRCxFQUFHRSxVQUFVQyxJQUFJLFFBQ2pCLElBQU1DLEVBQU16QixTQUFTc0IsY0FBYyxPQUM3QkksRUFBTTFCLFNBQVNzQixjQUFjLE1BRW5DSSxFQUFJQyxVQUFZUCxFQUFZLE1BQzVCSyxFQUFJRyxJQUFNUixFQUFhLE9BQ3ZCQyxFQUFHUSxPQUFPSixHQUNWSixFQUFHUSxPQUFPSCxHQUNWVCxFQUFHWSxPQUFPUixNQTJCTVMsQ0FBVWQsTUFDakNlLE9BQU0sU0FBQ0MsR0FDSixNQUFNLElBQUlDLE1BQU1ELE9BUXBCaEMsU0FBU1MsZUFBZSxnQkFBZ0J5QixpQkFBaUIsUUFBUTNCLEdBQ2pFUCxTQUFTUyxlQUFlLGFBQWF5QixpQkFBaUIsU0FMaEMsU0FBQ0MsR0FDSCxVQUFaQSxFQUFHQyxNQUFtQjdCLE9BTTlCSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/aT10dDM4OTYxOTgmYXBpa2V5PTcwYjZmMzM3XHJcblxyXG5sZXQgc2VhcmNoID0gJ2phbWVzJ1xyXG5cclxuY29uc3QgYnVpbGRMaXN0ID0gKGRhdGEpID0+IHtcclxuICAgIGNsZWFySFRNTExJU1QoKTtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJylbMF07XHJcbiAgICBBcnJheS5mcm9tKGRhdGEuU2VhcmNoKS5mb3JFYWNoKChmaWxtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2ZpbG0nKTtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG5cclxuICAgICAgICB0eHQuaW5uZXJIVE1MID0gZmlsbVsnVGl0bGUnXTtcclxuICAgICAgICBpbWcuc3JjID0gZmlsbVsnUG9zdGVyJ107XHJcbiAgICAgICAgbGkuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgbGkuYXBwZW5kKHR4dCk7XHJcbiAgICAgICAgdWwuYXBwZW5kKGxpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBjbGVhckhUTUxMSVNUID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdEl0ZW1zOiBOb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWxtJyk7XHJcbiAgICBBcnJheS5mcm9tKGxpc3RJdGVtcykuZm9yRWFjaCgobGlzdEl0ZW06IEVsZW1lbnQpID0+IHtcclxuICAgICAgICBsaXN0SXRlbS5yZW1vdmUoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IHNlYXJjaEZpbG1zID0gKCkgPT4gIHtcclxuICAgIC8vY29uc3QgdXNlclNlYXJjaCA9ICQoXCIjc2VhcmNoQm94XCIpLnZhbCgpLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBib3hWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCb3gnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgdXNlclNlYXJjaCA9IGJveFZhbHVlLnZhbHVlO1xyXG4gICAgYm94VmFsdWUudmFsdWUgPSAgJyc7XHJcbiAgICBzZWFyY2ggPSB1c2VyU2VhcmNoO1xyXG4gICAgZ2V0QVBJRGF0YSgpO1xyXG5cclxufVxyXG5cclxuY29uc3QgZ2V0QVBJRGF0YSA9ICgpID0+IHtcclxuZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP3M9JHtzZWFyY2h9JmFwaWtleT03MGI2ZjMzN2ApXHJcbi50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3UmVzcG9uc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gbmV3UmVzcG9uc2U7XHJcbn0pXHJcbi50aGVuKChkYXRhKSA9PiB7cmV0dXJuIGJ1aWxkTGlzdChkYXRhKX0pXHJcbi5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcil9XHJcbik7XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrRW50ZXJLZXkgPSAoZXYpID0+IHtcclxuICAgIGlmIChldi5jb2RlID09PSAnRW50ZXInKSB7c2VhcmNoRmlsbXMoKX07XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixzZWFyY2hGaWxtcyk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCb3gnKS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIixjaGVja0VudGVyS2V5KTtcclxuXHJcbmdldEFQSURhdGEoKTsiXSwic291cmNlUm9vdCI6IiJ9