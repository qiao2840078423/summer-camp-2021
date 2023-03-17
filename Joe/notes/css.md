# CSS

1. 当使用background简写属性时，属性值的顺序为：
   - `background-color`
   - `background-image`
   - `background-repeat`
   - `background-attachment`
   - `background-position`
2. 链接样式
   - `a:link` - 正常，未访问过的链接
   - `a:visited` - 用户已访问过的链接
   - `a:hover` - 当用户鼠标放在链接上时
   - `a:active` - 链接被点击的那一刻
3. 盒子模型
   - **Margin（外边距）** - 清除边框区域。Margin 没有背景颜色，它是完全透明
   - **Border（边框）** - 边框周围的填充和内容。边框是受到盒子的背景颜色影响
   - **Padding（内边距）** - 清除内容周围的区域。会受到框中填充的背景颜色影响
   - **Content（内容）** - 盒子的内容，显示文本和图像
4. display可以使块元素和内联元素相互转换