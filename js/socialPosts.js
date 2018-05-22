'use strict';
{
	let socialPosts = {
		template: `<button id="newPost" ng-click="$ctrl.formVisible=true" ng-hide="$ctrl.formVisible">New Thought</button>
					<div id="postContainer" ng-hide="$ctrl.formVisible">
						<post-component ng-repeat="entry in $ctrl.postData" entry="entry" del="$ctrl.del(entry);" 
						counter="$ctrl.counter(entry, change);" class="post">
						</post-component>
					</div>
					<post-form id="addForm" ng-show="$ctrl.formVisible" form-visible="$ctrl.formVisible" add="$ctrl.addPost(title, body);"></post-form>`,
		controller: function() {
			const vm = this;

			vm.formVisible = false;

			vm.postData = [
			{id: 0, title:"Elephants", body: "oieanrsoeitnaoestnoaeirsoikaoiekas", likes: 0},
			{id: 1, title:"miceses", body: "oieanrsoeitnaoestnoaeirsoikaoiekas", likes: 0}
			];

			vm.count = vm.postData.length;

			vm.del = function(entry) {
				vm.postData.splice(entry, 1);
				for(let i = 0; i<vm.postData.length; i++){
					vm.postData[i].id = i;
				}
			}
			vm.counter = function(entry, change) {
				entry.likes += change;
			}
			vm.addPost = function(title, body) {
				let newPost = {
					id: vm.count,
					title: title,
					body: body,
					likes: 0
				};
				let tForm = document.getElementById('titleData');
				tForm.value = '';
				let tForm2 = document.getElementById('thoughtData');
				tForm2.value = '';
				vm.formVisible = false;
				vm.postData.push(newPost);
			}
		}
	}

	angular
	.module("social")
	.component("socialPosts", socialPosts);
}