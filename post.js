'use strict';
{
	let postComponent = {
		bindings: {
			entry: '<',
			del: '&',
			counter: '&'
		},
		template: `<div class="post">
						<div class="counter">
							<a ng-click="$ctrl.counter({entry:$ctrl.entry, change: 1})">^</a>
							<span>{{ $ctrl.entry.likes }}</span>
							<a ng-click="$ctrl.counter({entry:$ctrl.entry, change: -1})">v</a>
						</div>
						<h3>{{$ctrl.entry.title}}</h3>
						<p>{{$ctrl.entry.body}}</p>
						<button class="delete" ng-click="$ctrl.del({entry:$ctrl.entry})">x</button>
					</div>`,
		controller: function() {
			let vm = this;
		}
	};

	angular
	.module("social")
	.component("postComponent", postComponent);
}