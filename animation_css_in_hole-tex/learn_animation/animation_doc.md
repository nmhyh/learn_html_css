## CSS Transition
	- Tài liệu tham khảo: Animatable CSS properties
		+ https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
		+ cubic-bezier.com

	- Các thuộc tính của Transition:
		+ transition-property (Liệt kê những thuộc tính muốn áp dụng chuyển động animation)
		+ transition-duration (Khoảng thời gian chuyển động animation là bao nhiêu)
		+ transition-delay (Sau khoảng thời gian delay mới thực hiện duration)
		+ transition-timing-function (Hàm dùm để tính toán của 1 element nào đó -> quyết định biến đổi nhanh hay chậm cubic-bezier(0.42, 0, 0.58, 1.0) = ease-in-out)

	- Cách 1: Viết từng thuộc tính ra
		Ex: 
				transition-property: background-color, width;
				transition-duration: 2s, 3s, 10s;
				transition-delay: 2s;
				transition-timing-function: ease-in-out, ease-in;

	- Cách 2: Viết ngắn gọn
		Ex: 
				transition: background-color 2s ease-in-out, width 4s ease-in;
				transition: all 2s ease-in-out;

## CSS Animation
	- Các thuộc tính của Animation:
		+ animation-name (Tên của 1 keyframes, ex: loading) (Từng khung hình giống như video)
		+ animation-duration = transition-duration
		+ animation-iteration-count (Số lần animation thực hiện, Ex: 3, infinite)
		+ animation-direction (Thay đổi hướng chuyển đổi của animation)
		+ animation-delay = transition-delay

=> Cải tiến của Animation so với Transition
	+ Không cần tương tác UI, animation vẫn thực hiện được
	+ Set animation muốn lặp lại bao nhiêu lần, có thể lặp lại mãi mãi
	+ Thay đổi hướng chuyển động của animation bằng thuộc tính animation-iteration-count: infinite;
	+ Áp dụng nhiều keyframes khác nhau

