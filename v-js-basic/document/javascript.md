1. Hàm built-in
    - alert
    - console
    - confirm
    - prompt
    - setTimeout
    - setInterval

2. Toán tử trong Javascript
    - Toán tử số học - Arithmetic
        Ex: var a = 1 + 2;
    - Toán tử gán - Assignment
        Ex: var fullName = 'Ngu My Huynh';
    - Toán tử so sánh - Comparison
        Ex: var a = 1;
            var b = 2;
            if (a > b) {
                alert('Error');
            }
    - Toán tử logic - Logical (&&, ||, !)
        Ex: var a = 1;
            var b = 2;
            if (a > 0 && b > 0) {
                alert('a & b lon hon 0');
            }

    2.1. Toán tử số học
        +     - Cộng
        -     - Trừ
        *     - Nhân
        /     - Chia
        **    - Lũy thừa
        %     - Chia lấy số dư
        ++    - Tăng 1 giá trị số
        --    - Giảm 1 giá trị số

    2.2. Toán tử gán
    Toán tử         Ví dụ               Tương đương
    =               x = y               x = y
    +=              x += y              x = x + y
    -=              x -= y              x = x - y
    *=              x *= y              x = x * y
    /=              x /= y              x = x / y
    **=             x **= y             x = x ** y

*** Các giá trị sai: 0, false, '', "", undefined, NaN, null ***

3. Kiểu dữ liệu trong javascript
    - Kiểu dữ liệu nguyên thủy - Primitive Data
        + Number
        + String
        + Boolean
        + Undefined
        + Null
        + Symbol
    - Dữ liệu phức tạp - Complex Data
        + Function
        + Object

4. Làm việc với chuỗi
    - Length
    - Find index
    - Cut string
    - Replace (thay đổi tất cả chữ js thành javascript -> myString.replace(/js/g, 'javascipt'))
    - Convert to upper case
    - Convert to lower case
    - Trim
    - Split
    - Get a character by index (.charAt(1))

5. Kiểu số (Number)
    - Làm việc với Number
        + To string
        + To Fixed (Làm tròn phần số thập phân)


6. Callback
    - Là hàm
    - Truyền qua đối số
    - Được gọi lại (trong hàm nhận đối số)


## DOM (Document Object Model)
    - Có 3 thành phần:
        + Element
        + Attribute
        + Text

1. Element: id, class, tag, css selector, HTML collection
    - id: id of tag             -> getElementById
    - class: class of tag       -> getElementsByClassName
    - tag: name of tag          -> getElementsByTagName
    - css selector              -> querySelector, querySelectorAll
    - HTML collection: forms, a, img,...      -> document.forms['form-1']
    - document.write

2. Attribute
    - setAttribute, getAttribute
3. Text
    - innerText, textContent
