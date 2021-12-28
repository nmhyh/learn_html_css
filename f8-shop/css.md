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

## Responsive là gì?
    - Responsive là kỹ thuật giúp website hiển thị tương thích với nhiều kích thước màn hình khác nhau (Mobile, Tablet, PC,...)
    - Tối ưu trải nghiệm người dùng:
        1. Hiển thị rõ ràng các thành phần (hình ảnh, cỡ chữ, nút bấm,...)
        2. Ẩn/hiện các thành phần phù hợp theo kích thước màn hình

## Chúng ta sẽ làm gì?
    1. Dùng CSS thay đổi kích thước phù hợp cho các thành phần hiển thị trên website (hình ảnh, âm thanh, nút bấm,...)
    2. Dùng CSS để ẩn/hiện các thành phần phù hợp theo kích thước màn hình

## Media query?
    @media not|only mediatype and (mediafeature and|or|not mediafeature) {
        CSS-Code;
    }

    1. Keywords:
        - not
        - only
        - and
        - or

    2. Mediatypes:
        - print
        - screen
        - speen
        - all - default

    3. Media Feature:
        - min-width
        - max-width
        - ...

    4. Polyfill? (respond.js polyfill cdn)
        - Sử dụng responsive cho trình duyệt cũ

## Breakpoints?
    - Breakpoints là những điểm/vị trí mà bố cục website sẽ thay đổi - thích ứng để tạo nên giao diện responsive

## Media query: px, rem or em? (search google)

## Grid system?
    1. Xuất hiện từ đầu thế kỷ XX trong phong trào (Constructivism) nghệ thuật / kiến trúc
    2. Tạo nên các khung nền, hỗ trợ việc sắp xếp bố cục theo trật tự / thống nhất / cân bằng
    3. Hệ thống lưới thường gặp:
        - Lưới nhiều cột (Muitilcolumn grid)
        - Lưới 1 cột (Single column gird)
        - Lưới module (Modular grid)
        - Lưới đường cơ sở (Baseline grid)
    4. Vai trò
        - Tổ chức: Có các đường căn giống tiện lợi, dễ dàng sắp xếp các thành phần được ngăn nắp
        - Cân bằng: Dù là đối xứng / bất đối xứng, mang lại cái nhìn trực quan, đảm bảo sự cân bằng
        - Tách biệt thành phần: Phân chia nội dung, tạo khoảng cách các thành phần hiệu quả
    5. Ứng dụng
        - Lưới trong thiết kế UI/UX: Vai trò đặc biệt quan trọng trong Responsive web design
        - Lưới trong in ấn: Google "Grid system"
    6. Responsive web design
        - Grid (<> CSS Grid): Thành phần cha
        - Row: Dòng
        - Column: Cột
        - Getter: Khoảng cách 2 phía của Column



