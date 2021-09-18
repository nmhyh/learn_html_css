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

# Pseudo classes (lớp giả)
    - :root
    - :hover (hover vào)
    - :active (bấm vào)
    - :first-child
    - :last-child

# Pseudo elements
    - ::before
    - ::after
    - ::first-letter (Chữ đầu tiên trong đoạn văn)
    - ::first-line (Dòng đầu tiên)
    - ::selection (Tô đen chữ)

# Postion
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

# CSS Flexbox
    - display: flex | inline-flex
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




