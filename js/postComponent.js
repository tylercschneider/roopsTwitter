'use strict';
{
	let postComponent = {
		bindings: {
			entry: '<',
			del: '&',
			counter: '&'
		},
		template: `<div class="counter">
						<a ng-click="$ctrl.counter({entry:$ctrl.entry, change: 1});">^</a>
						<span>{{ $ctrl.entry.likes }}</span>
						<a ng-click="$ctrl.counter({entry:$ctrl.entry, change: -1});">v</a>
					</div>
					<div class='content'>
						<h3>{{$ctrl.entry.title}}</h3>
						<p>{{$ctrl.entry.body}}</p>
						</div>
					<button class="delete" ng-click="$ctrl.del({entry:$ctrl.entry.id});">x</button></div>`,
		controller: function() {
			const vm = this;
		}
	}

	angular
	.module("social")
	.component("postComponent", postComponent);
}