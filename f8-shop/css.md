## CSS units?
1. Absolute units?
    - px
    - pt
    - cm
    - mm
    - inch
    - pc

2. Relative units?
    - %
    - rem
    - em
    - vw
    - vh
    - vmin
    - vmax
    - ex
    - ch

## CSS functions
    - var()
    - linear-gradient()
    - rgba() // Sử dụng trong suốt từ 0 -> 1
    - rgb()
    - calc() // hàm tính toán
    - attr() // before or after
    ex attr()
        a::after {
            content: " (" attr(href) ")";
        }

## Pseudo classes (lớp giả)
    - :root
    - :hover (hover vào)
    - :active (bấm vào)
    - :first-child
    - :last-child

## Pseudo elements
    - ::before
    - ::after
    - ::first-letter (Chữ đầu tiên trong đoạn văn)
    - ::first-line (Dòng đầu tiên)
    - ::selection (Tô đen chữ)

## Postion
    - Relative
        + Vị trí tương đối
        + Không phụ thuộc vào đối tượng khác
        + Lấy vị trí của mình là gốc tọa độ
    - Absolute
        + Vị trí tuyệt đối
        + Phụ thuộc vào thẻ cha (phải có thẻ cha có postion)
    - Fixed
        + Dính vào trình duyệt (k thay đổi vị trí, vd menu dính vào mép trên)
    - Sticky
        + Bám dính (có trình duyệt k có hỗ trợ, đang thử nghiệm)

## CSS Flexbox
    - display: flex | inline-flex ( + margin: auto; => căn giữa)
        + Quyết định có sử dụng flexbox hay không
    - flex-direction: row | column
        + Thay đổi phương hướng (main axis) ngang hoặc dọc
    - flex-wrap: nowrap | wrap | wrap-reverse
        + Xuống dòng flexbox
    - flex-basis: <length>
        + Kích thước của main size
    - justify-content: flex-start | flex-end | center | space-between | space-around
        + Căn được flex item (set thuộc tính cho cha)
    - justify-self: flex-start | flex-end | center
        + Căn được flex item (set thuộc tính cho con)
    - align-content: flex-start | flex-end | center
        + Căn được flex item (set thuộc tính cho cha)
    - align-self: flex-start | flex-end | center
        + Căn được flex item (set thuộc tính cho con)
    - flex-grow: <number>
        + Tăng kích thước của ngang hoặc dọc
    - flex-shrink: <number>
        + Giảm kích thước của ngang hoặc dọc
    - flex: <number>
        + Sort hand của flex-basis, flex-grow, flex-shrink
    - order: <number>
        + Thứ tự của flex item (trước sau)
    - flex-flow: <flex-wrap> | <flex-direction>
        + Sort hand của flex-wrap, flex-direction

## BEM
    - Là tiêu chuẩn đặt tên class khi viết CSS

## Ý nghĩa
    - Viết tắt của BLOCK ELEMENT MODIFIER
    - Block: khối
    - Element: Thành phần trong khối
    - Modifier: Bổ sung ý nghĩa cho `Block` hoặc `Element`

## Tại sao sửa dụng BEM?
    - Mỗi người đặt 1 kiểu
    - Members đặt class trùng nhau, CSS đè lên nhau

## Cú pháp
    - .block
    - .block__element
    - .block--modifier
    - .block__element--modifier

## Tính ứng dụng
    - Xây dựng layout website
    - Xây dựng thành phần trên website
    - Giúp cả team làm việc với nhau dễ dàng
    - Tính module, không lo CSS của class này ảnh hưởng lên CSS của class khác

## Ưu điểm
    - Tính rõ ràng
    - Tái sử dụng dễ dàng
    - Giúp cả team làm việc với nhau dễ dàng
    - TÍnh module, không lo CSS của class này ảnh hưởng tới class khác

## Nhược điểm
    - Tên class dài
    - Một số người cho là xấu
    
## Khi nào sử dụng BEM là phù hợp?
    - Dự án nhiều members
    - Dự án lớn, số lượng pages nhiều hoặc số lượng các thành phần trên giao diện nhiều

## Thực hành
    - Làm button
    - Làm message
    - Làm 1 thành phần trên website

## Trường hợp Block lồng Block
    - Block con là thành phần dùng chung
    - Block con chứa nhiều element

## Media queries
    - Chuỗi truy vấn (phân vùng viết css)
    - Mỗi vùng có tác dụng trên mỗi kích thước màn hình khác nhau
    - PC - Tablet - Mobile
    - Syntax: 
        <!-- Độ rộng tối đa -->
        @media (max-width: ...px) {
            <!-- CSS -->
        }

        <!-- Độ rộng tối thiểu -->
        @media (min-width: ...px) {
            <!-- CSS -->
        }

    - Kích thước:
        PC: >= 1024px
        TABLET: >= 740px & < 1024px
        MOBILE: <= 740px

