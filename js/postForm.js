'use strict';
{
	let postForm = {
		bindings: {
			formVisible: '<',
			add: '&'
		},
		template: `<h3>Title</h3>
					<input id="titleData" type="text" name="titleData" placeholder="Post title" ng-model="title">
					<h3>Thought</h3>
					<input id="thoughtData" type="text" name="thoughtData" ng-model="body">
					<button id="add" ng-click="$ctrl.add({title:title, body:body});">Add Post</button>`,
		controller: function() {
			let vm = this;
		}
	};

	angular
	.module("social")
	.component("postForm", postForm);
}