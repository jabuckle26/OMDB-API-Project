!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n="james",r="",o=function(e){c();var t=document.getElementsByTagName("ul")[0];Array.from(e.Search).forEach((function(e){var n=document.createElement("li");n.classList.add("film");var r=document.createElement("img"),o=document.createElement("h4");o.innerHTML=e.Title,r.src=e.Poster,n.append(r),n.append(o),t.append(n)}))},c=function(){var e=document.querySelectorAll(".film");Array.from(e).forEach((function(e){e.remove()}))},u=function(){var e=document.getElementById("searchBox"),t=e.value;e.value="",n=t,l(r)},l=function(e){""===e?fetch("http://www.omdbapi.com/?s="+n+"&apikey=70b6f337").then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){throw new Error(e)})):(console.log(e,"HERE"),fetch("http://www.omdbapi.com/?s="+n+"&y="+e+"&apikey=70b6f337").then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){throw new Error(e)})))};document.getElementById("searchButton").addEventListener("click",u),document.getElementById("searchBox").addEventListener("keyup",(function(e){"Enter"===e.code&&u()})),document.getElementById("filterButton").addEventListener("click",(function(){var e=document.getElementById("filterWindow");"flex"===e.style.display?(e.style.display="none",document.getElementById("filterButton").style.color="white"):(e.style.display="flex",document.getElementById("filterButton").style.color="$background-button1")})),document.getElementById("selectFilter").addEventListener("click",(function(){var e=document.getElementById("filterYear");r=e.value,console.log(r),l(r)})),l(r)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4udHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJzZWFyY2giLCJ5ZWFyRmlsdGVyIiwiYnVpbGRMaXN0IiwiZGF0YSIsImNsZWFySFRNTExJU1QiLCJ1bCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJBcnJheSIsImZyb20iLCJTZWFyY2giLCJmb3JFYWNoIiwiZmlsbSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImltZyIsInR4dCIsImlubmVySFRNTCIsInNyYyIsImFwcGVuZCIsImxpc3RJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaXN0SXRlbSIsInJlbW92ZSIsInNlYXJjaEZpbG1zIiwiYm94VmFsdWUiLCJnZXRFbGVtZW50QnlJZCIsInVzZXJTZWFyY2giLCJnZXRBUElEYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsIkVycm9yIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImNvZGUiLCJ0YXJnZXREaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJjb2xvciJdLCJtYXBwaW5n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b0JBQ3BDZ0MsTUFBSyxTQUFDQyxHQUVILE9BRG9CQSxFQUFTQyxVQUdoQ0YsTUFBSyxTQUFDN0IsR0FBVyxPQUFPRCxFQUFVQyxNQUNsQ2dDLE9BQU0sU0FBQ0MsR0FDSixNQUFNLElBQUlDLE1BQU1ELE9BSXhCRSxRQUFRQyxJQUFJdEMsRUFBWSxRQUN4QjhCLE1BQU0sNkJBQTZCL0IsRUFBTSxNQUFNQyxFQUFVLG9CQUN4RCtCLE1BQUssU0FBQ0MsR0FFSCxPQURvQkEsRUFBU0MsVUFHaENGLE1BQUssU0FBQzdCLEdBQVcsT0FBT0QsRUFBVUMsTUFDbENnQyxPQUFNLFNBQUNDLEdBQ0osTUFBTSxJQUFJQyxNQUFNRCxRQThCNUI5QixTQUFTc0IsZUFBZSxnQkFBZ0JZLGlCQUFpQixRQUFTZCxHQUNsRXBCLFNBQVNzQixlQUFlLGFBQWFZLGlCQUFpQixTQXpCaEMsU0FBQ0MsR0FDSCxVQUFaQSxFQUFHQyxNQUFvQmhCLE9BeUIvQnBCLFNBQVNzQixlQUFlLGdCQUFnQlksaUJBQWlCLFNBdEJuQyxXQUNsQixJQUFJRyxFQUFZckMsU0FBU3NCLGVBQWUsZ0JBQ1IsU0FBNUJlLEVBQVVDLE1BQU1DLFNBRWhCRixFQUFVQyxNQUFNQyxRQUFVLE9BQzFCdkMsU0FBU3NCLGVBQWUsZ0JBQWdCZ0IsTUFBTUUsTUFBUSxVQUd0REgsRUFBVUMsTUFBTUMsUUFBVSxPQUMxQnZDLFNBQVNzQixlQUFlLGdCQUFnQmdCLE1BQU1FLE1BQVEsMEJBYzlEeEMsU0FBU3NCLGVBQWUsZ0JBQWdCWSxpQkFBaUIsU0FWcEMsV0FDakIsSUFBTWIsRUFBV3JCLFNBQVNzQixlQUFlLGNBQ3pDM0IsRUFBYTBCLEVBQVMxQyxNQUN0QnFELFFBQVFDLElBQUl0QyxHQUNaNkIsRUFBVzdCLE1BUWY2QixFQUFXN0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2k9dHQzODk2MTk4JmFwaWtleT03MGI2ZjMzN1xyXG5cclxubGV0IHNlYXJjaCA9ICdqYW1lcyc7XHJcbmxldCB5ZWFyRmlsdGVyID0gJyc7XHJcblxyXG5jb25zdCBidWlsZExpc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgY2xlYXJIVE1MTElTVCgpO1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKVswXTtcclxuICAgIEFycmF5LmZyb20oZGF0YS5TZWFyY2gpLmZvckVhY2goKGZpbG0pID0+IHtcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnZmlsbScpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcblxyXG4gICAgICAgIHR4dC5pbm5lckhUTUwgPSBmaWxtWydUaXRsZSddO1xyXG4gICAgICAgIGltZy5zcmMgPSBmaWxtWydQb3N0ZXInXTtcclxuICAgICAgICBsaS5hcHBlbmQoaW1nKTtcclxuICAgICAgICBsaS5hcHBlbmQodHh0KTtcclxuICAgICAgICB1bC5hcHBlbmQobGkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGNsZWFySFRNTExJU1QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0SXRlbXM6IE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbG0nKTtcclxuICAgIEFycmF5LmZyb20obGlzdEl0ZW1zKS5mb3JFYWNoKChsaXN0SXRlbTogRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGxpc3RJdGVtLnJlbW92ZSgpO1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3Qgc2VhcmNoRmlsbXMgPSAoKSA9PiB7XHJcbiAgICAvL2NvbnN0IHVzZXJTZWFyY2ggPSAkKFwiI3NlYXJjaEJveFwiKS52YWwoKS50b1N0cmluZygpO1xyXG4gICAgY29uc3QgYm94VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQm94JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHVzZXJTZWFyY2ggPSBib3hWYWx1ZS52YWx1ZTtcclxuICAgIGJveFZhbHVlLnZhbHVlID0gJyc7XHJcbiAgICBzZWFyY2ggPSB1c2VyU2VhcmNoO1xyXG4gICAgZ2V0QVBJRGF0YSh5ZWFyRmlsdGVyKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGdldEFQSURhdGEgPSAoeWVhckZpbHRlcikgPT4ge1xyXG4gICAgaWYgKHllYXJGaWx0ZXIgPT09ICcnKSB7XHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP3M9JHtzZWFyY2h9JmFwaWtleT03MGI2ZjMzN2ApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UmVzcG9uc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3UmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7IHJldHVybiBidWlsZExpc3QoZGF0YSkgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHllYXJGaWx0ZXIsICdIRVJFJyk7XHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP3M9JHtzZWFyY2h9Jnk9JHt5ZWFyRmlsdGVyfSZhcGlrZXk9NzBiNmYzMzdgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZXNwb25zZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld1Jlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHsgcmV0dXJuIGJ1aWxkTGlzdChkYXRhKSB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjaGVja0VudGVyS2V5ID0gKGV2KSA9PiB7XHJcbiAgICBpZiAoZXYuY29kZSA9PT0gJ0VudGVyJykgeyBzZWFyY2hGaWxtcygpIH07XHJcbn1cclxuXHJcbmNvbnN0IHNob3dGaWx0ZXJCb3ggPSAoKSA9PiB7XHJcbiAgICBsZXQgdGFyZ2V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcldpbmRvdycpO1xyXG4gICAgaWYgKHRhcmdldERpdi5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcclxuICAgICAgICAvL1N3aXRjaCB0byBoaWRkZW5cclxuICAgICAgICB0YXJnZXREaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXJCdXR0b24nKS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9Td2l0Y2ggdG8gdmlzaWJsZVxyXG4gICAgICAgIHRhcmdldERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlckJ1dHRvbicpLnN0eWxlLmNvbG9yID0gXCIkYmFja2dyb3VuZC1idXR0b24xXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGZpbHRlclNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJveFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlclllYXInKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgeWVhckZpbHRlciA9IGJveFZhbHVlLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coeWVhckZpbHRlcik7XHJcbiAgICBnZXRBUElEYXRhKHllYXJGaWx0ZXIpO1xyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaEZpbG1zKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJveCcpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBjaGVja0VudGVyS2V5KTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlckJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0ZpbHRlckJveCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RGaWx0ZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbHRlclNlYXJjaCk7XHJcblxyXG5nZXRBUElEYXRhKHllYXJGaWx0ZXIpOyJdLCJzb3VyY2VSb290IjoiIn0=