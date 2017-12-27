(function($, doc) {
	$.init();
	$.ready(function() {
		/**
		 * 获取对象属性的值
		 * 主要用于过滤三级联动中，可能出现的最低级的数据不存在的情况，实际开发中需要注意这一点；
		 * @param {Object} obj 对象
		 * @param {String} param 属性名
		 */

		var _getParam = function(obj, param) {
			return obj[param] || '';
		};
		var cityPicker3 = new $.PopPicker({
			layer: 3
		});
		cityPicker3.setData(cityData3);
		var showCityPickerButton = doc.getElementById('showCityPicker3');
		var cityResult3 = doc.getElementById('cityResult3');
		showCityPickerButton.addEventListener('tap', function(event) {
			cityPicker3.show(function(items) {
				cityResult3.innerText =  _getParam(items[0], 'text') + " " + _getParam(items[1], 'text') + " " + _getParam(items[2], 'text');
				cityResult3.style.color="black"
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
	});

})(mui, document);

//初始化单页view
var viewApi = mui('#app').view({
    defaultPage: '#setting'
});


mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

var view = viewApi.view;
(function($) {
    //处理view的后退与webview后退
    var oldBack = $.back;
    $.back = function() {
        if (viewApi.canBack()) { //如果view可以后退，则执行view的后退
            viewApi.back();
        } else { //执行webview后退
            oldBack();
        }
    };
    view.addEventListener('pageBeforeShow', function(e) {
        //                console.log(e.detail.page.id + ' beforeShow');
    });
    view.addEventListener('pageShow', function(e) {
                          console.log(e.detail.page.id + ' show');
    });
    view.addEventListener('pageBeforeBack', function(e) {
        //                console.log(e.detail.page.id + ' beforeBack');
    });
    view.addEventListener('pageBack', function(e) {
        //                console.log(e.detail.page.id + ' back');
    });
})(mui);
